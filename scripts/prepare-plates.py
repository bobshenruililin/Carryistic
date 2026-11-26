"""Build the online slide collection from archive/Image index.csv with Pillow and FFmpeg."""

import csv
import io
import json
import re
import shutil
import struct
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor
from fractions import Fraction
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / "archive"
OUTPUT = ROOT / "public" / "plates"
LIMIT = 960


def metadata(image):
    return {k: image.info[k] for k in ("icc_profile", "exif", "xmp") if image.info.get(k)}


def encode_jpeg(image, options):
    buffer = io.BytesIO()
    image.save(buffer, "JPEG", quality=90, optimize=True, **options)
    return buffer.getvalue()


def gainmap_jpeg(source, original, base):
    """Resize the SDR base and its HDR gain map, then update their embedded index."""
    options = metadata(base)
    xmp = options["xmp"]
    length_tag = re.search(rb'Item:Length="(\d+)"', xmp)
    if length_tag is None:
        raise ValueError(f"Missing JPEG gain-map length in {source}")
    with source.open("rb") as stream:
        stream.seek(-int(length_tag[1]), 2)
        with Image.open(io.BytesIO(stream.read())) as image:
            # The auxiliary image uses the primary image's orientation.
            if orientation := original.getexif().get(274):
                image.getexif()[274] = orientation
            gain = ImageOps.exif_transpose(image)
            upright_size = original.size
            if original.getexif().get(274) in (5, 6, 7, 8):
                upright_size = upright_size[::-1]
            size = tuple(max(1, round(g * b / a)) for g, b, a in zip(gain.size, base.size, upright_size))
            gain_bytes = encode_jpeg(gain.resize(size, Image.Resampling.LANCZOS), metadata(gain))
    options["xmp"] = xmp[:length_tag.start(1)] + str(len(gain_bytes)).encode() + xmp[length_tag.end(1):]
    primary = encode_jpeg(base, options)

    # Retain the archived MPF directory and update its two image records. The
    # second record's offset is measured from the TIFF header inside APP2.
    directory = bytearray(original.info["mp"])
    endian = {b"II": "<", b"MM": ">"}[bytes(directory[:2])]
    ifd = struct.unpack_from(endian + "I", directory, 4)[0]
    tag_count = struct.unpack_from(endian + "H", directory, ifd)[0]
    for offset in range(ifd + 2, ifd + 2 + tag_count * 12, 12):
        tag, _, count, records = struct.unpack_from(endian + "HHII", directory, offset)
        if tag == 0xB002 and count == 32:
            break
    else:
        raise ValueError(f"Expected an MPF pair in {source}")
    # Keep the JFIF APP0 segment immediately after the SOI marker.
    insert = 4 + int.from_bytes(primary[4:6], "big") if primary[2:4] == b"\xff\xe0" else 2
    primary_length = len(primary) + 8 + len(directory)
    struct.pack_into(endian + "II", directory, records + 4, primary_length, 0)
    struct.pack_into(endian + "II", directory, records + 20, len(gain_bytes), primary_length - insert - 8)
    app2 = b"\xff\xe2" + struct.pack(">H", 6 + len(directory)) + b"MPF\0" + directory
    return primary[:insert] + app2 + primary[insert:] + gain_bytes


def prepare_still(source, reference, staging):
    with Image.open(source) as original:
        base = ImageOps.exif_transpose(original)
        base.thumbnail((LIMIT, LIMIT), Image.Resampling.LANCZOS)
        if b"GainMap" in original.info.get("xmp", b""):
            name = f"{reference}.jpg"
            (staging / name).write_bytes(gainmap_jpeg(source, original, base))
        else:
            name = f"{reference}.webp"
            base.save(staging / name, "WEBP", quality=86, method=5, **metadata(base))
        return name, base.size


def probe(movie):
    return json.loads(subprocess.check_output([
        "ffprobe", "-v", "error", "-show_entries",
        "format=duration:stream=codec_type,codec_name,pix_fmt,width,height,nb_frames,avg_frame_rate,sample_aspect_ratio",
        "-of", "json", str(movie),
    ]))


def display_aspect(stream):
    ratio = stream.get("sample_aspect_ratio", "1:1")
    pixel_aspect = Fraction(ratio.replace(":", "/")) if ratio not in ("N/A", "0:1") else 1
    return Fraction(stream["width"], stream["height"]) * pixel_aspect


def encode_movie(source, destination):
    # Two passes allocate the fixed web budget across dark stretches, movement
    # and lettering. The native file remains linked from its collection entry.
    # Declare square pixels explicitly when the source leaves SAR unspecified.
    # The scaler can then retain the exact display aspect after even-pixel rounding.
    scale = ("setsar=sar='if(gt(sar,0),sar,1)':max=65535,"
             "scale=w='min(iw,960)':h='min(ih,960)':force_original_aspect_ratio=decrease:force_divisible_by=2:flags=lanczos")
    with tempfile.TemporaryDirectory(prefix="carry-film-pass-") as directory:
        command = [
            "ffmpeg", "-hide_banner", "-nostdin", "-loglevel", "error", "-y",
            "-threads", "2", "-i", str(source), "-map", "0:v:0", "-vf", scale,
            "-c:v", "libx264", "-preset", "medium", "-threads", "2", "-g", "90",
            "-b:v", "1720k", "-maxrate", "1950k", "-bufsize", "3200k",
            "-pix_fmt", "yuv420p", "-fps_mode", "passthrough",
            "-passlogfile", str(Path(directory) / "x264"),
        ]
        subprocess.run([*command, "-pass", "1", "-an", "-f", "null", "-"], check=True)
        subprocess.run([
            *command, "-pass", "2", "-map", "0:a?", "-map_metadata", "0",
            "-c:a", "aac", "-profile:a", "aac_low", "-b:a", "128k",
            "-movflags", "+faststart", str(destination),
        ], check=True)


def prepare_movie(source, destination):
    original = probe(source)
    video = next(s for s in original["streams"] if s["codec_type"] == "video")
    audio = [s for s in original["streams"] if s["codec_type"] == "audio"]
    browser_video = (video["codec_name"] == "h264" and video["pix_fmt"] == "yuv420p"
                     and max(video["width"], video["height"]) <= LIMIT)
    if browser_video and all(s["codec_name"] == "aac" for s in audio):
        shutil.copyfile(source, destination)
    else:
        encode_movie(source, destination)
    result = probe(destination)
    encoded = next(s for s in result["streams"] if s["codec_type"] == "video")
    output_audio = [s for s in result["streams"] if s["codec_type"] == "audio"]
    duration = float(result["format"]["duration"])
    if (encoded["codec_name"] != "h264" or encoded["pix_fmt"] != "yuv420p"
        or max(encoded["width"], encoded["height"]) > LIMIT
        or display_aspect(encoded) != display_aspect(video)
        or Fraction(encoded["avg_frame_rate"]) != Fraction(video["avg_frame_rate"])
        or video.get("nb_frames") != encoded.get("nb_frames")
        or len(output_audio) != len(audio) or any(s["codec_name"] != "aac" for s in output_audio)
        or abs(duration - float(original["format"]["duration"])) > 0.075):
        raise ValueError(f"Frame, sound, or duration mismatch for {source}")
    return round(duration, 3)


def read_rows():
    with (ARCHIVE / "Image index.csv").open(encoding="utf-8-sig", newline="") as source:
        rows = sorted(csv.DictReader(source), key=lambda row: row["reference_id"])
    seen, films, next_slide = set(), set(), {}
    for row in rows:
        reference = row["reference_id"]
        post_id, slide = reference.split("-")
        if reference in seen or int(slide) != int(row["slide"]) or int(slide) != next_slide.get(post_id, 1):
            raise ValueError(f"Duplicate, missing or misordered slide at {reference}")
        required = ("post", "visual_observation", "source_account", "credit", "instagram_slide_url", "image_drive_url")
        if not all(row[k] for k in required):
            raise ValueError(f"Missing source metadata for {reference}")
        if row["video_path"]:
            if not row["video_drive_url"] or row["kind"] != "video and poster":
                raise ValueError(f"Missing video source metadata for {reference}")
            films.add(reference)
        seen.add(reference)
        next_slide[post_id] = int(slide) + 1
    files = {file.stem for file in (ARCHIVE / "artworks").glob("*/*.jpg")}
    if seen != files:
        raise ValueError(f"Index differs from archived images: {sorted(seen ^ files)}")
    movies = {file.stem for file in (ARCHIVE / "artworks").glob("*/*.mp4")}
    if films != movies:
        raise ValueError(f"Index differs from archived movies: {sorted(films ^ movies)}")
    return rows


def prepare_entry(row, staging):
    reference = row["reference_id"]
    name, (width, height) = prepare_still(ARCHIVE / row["image_path"], reference, staging)
    movie = row["video_path"]
    entry = {
        "id": reference, "postId": reference.split("-")[0], "slide": int(row["slide"]),
        "title": row["post"], "kind": "video" if movie else "image",
        "observation": row["visual_observation"], "credit": row["credit"],
        "sourceAccount": row["source_account"], "instagramUrl": row["instagram_slide_url"],
        "originalUrl": row["video_drive_url"] if movie else row["image_drive_url"],
        "filename": name, "width": width, "height": height,
    }
    if movie:
        entry["movie"] = f"{reference}.mp4"
        entry["duration"] = prepare_movie(ARCHIVE / movie, staging / entry["movie"])
    return entry


def main():
    rows = read_rows()
    OUTPUT.mkdir(exist_ok=True, parents=True)
    # Publish the index after every binary is ready. Concurrent builds use
    # independent temporary names and failed encodes leave the prior set usable.
    with tempfile.TemporaryDirectory(prefix=".plate-build-", dir=ROOT) as directory:
        staging = Path(directory)
        with ThreadPoolExecutor(max_workers=3) as pool:
            entries = list(pool.map(lambda row: prepare_entry(row, staging), rows))
        for path in staging.iterdir():
            path.replace(OUTPUT / path.name)
        index = staging / "plates.json"
        index.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        index.replace(ROOT / "src" / "plates.json")
    count = sum("movie" in entry for entry in entries)
    size = sum(file.stat().st_size for file in OUTPUT.iterdir() if file.is_file())
    print(f"{len(entries)} viewing images, {count} complete films, {size / 2**20:.2f} MiB")


if __name__ == "__main__":
    main()
