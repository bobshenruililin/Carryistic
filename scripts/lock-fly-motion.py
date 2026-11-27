"""Keep Carry's Fly plate fixed and borrow only changes in the sky and water."""

import argparse
import json
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image
from scipy.ndimage import binary_closing, distance_transform_edt


def smoothstep(values):
    values = np.clip(values, 0, 1)
    return values**2 * (3 - 2 * values)


def environmental_mask(poses, side):
    y, x = np.mgrid[0:side, 0:side].astype(np.float32) / side
    pose_areas = [
        (x < .18) & (y > .20) & (y < .44),
        (x > .16) & (x < .425) & (y > .30) & (y < .582),
        (x > .275) & (x < .535) & (y > .47) & (y < .795),
        (x > .385) & (x < .79) & (y > .645) & (y < .974),
    ]
    subjects = binary_closing(
        (poses.min(axis=2) < 219) & np.logical_or.reduce(pose_areas),
        iterations=max(1, side // 500),
    )
    clearance = distance_transform_edt(~subjects) / side
    safe = smoothstep((clearance - .016) / .028)
    sky = smoothstep((.331 - y) / .030)
    water = smoothstep((y - .44) / .031) * smoothstep((.901 - .330 * x - y) / .032)
    mask = (np.maximum(sky, water) * safe).astype(np.float32)
    assert not np.any(mask[subjects]) and not np.any(mask[y > .915])
    return mask[..., None], subjects


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("take", type=Path)
    cli.add_argument("destination", type=Path)
    cli.add_argument("--side", type=int, default=1440)
    cli.add_argument("--crf", type=int, default=20)
    cli.add_argument("--preset", default="slow")
    args = cli.parse_args()
    side = args.side
    references = Path(__file__).resolve().parents[1] / "film" / "requests"

    def reference(name):
        with Image.open(references / name) as picture:
            return np.array(picture.convert("RGB").resize((side, side), Image.Resampling.LANCZOS))

    plate = reference("H5-start.jpg")
    mask, subjects = environmental_mask(reference("H5-reference.jpg"), side)
    source = json.loads(subprocess.check_output([
        "ffprobe", "-v", "error", "-select_streams", "v:0",
        "-show_entries", "stream=r_frame_rate,nb_frames", "-of", "json", str(args.take),
    ]))["streams"][0]
    numerator, denominator = map(int, source["r_frame_rate"].split("/"))
    fps = numerator / denominator
    frames = int(source["nb_frames"])
    args.destination.parent.mkdir(parents=True, exist_ok=True)
    decode = [
        "ffmpeg", "-v", "error", "-threads", "2", "-filter_threads", "1", "-i", str(args.take),
        "-map", "0:v:0", "-vf", f"scale={side}:{side}:flags=lanczos", "-pix_fmt", "rgb24",
        "-c:v", "rawvideo", "-threads", "1", "-f", "rawvideo", "-",
    ]
    encode = [
        "ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
        "-video_size", f"{side}x{side}", "-framerate", source["r_frame_rate"], "-i", "-",
        "-an", "-c:v", "libx264", "-threads", "2", "-preset", args.preset, "-crf", str(args.crf),
        "-g", "4", "-bf", "0", "-x264-params", "keyint=4:min-keyint=4:scenecut=0",
        "-pix_fmt", "yuv420p", "-color_primaries", "bt709", "-color_trc", "bt709",
        "-colorspace", "bt709", "-movflags", "+faststart", str(args.destination),
    ]
    with subprocess.Popen(decode, stdout=subprocess.PIPE) as raw, subprocess.Popen(encode, stdin=subprocess.PIPE) as export:
        for index in range(frames):
            chunk = raw.stdout.read(side * side * 3)
            frame = np.frombuffer(chunk, np.uint8).reshape(side, side, 3)
            if index == 0:
                first = frame.astype("int16")
            amount = min(1, index / (fps * .26), (frames - 1 - index) / (fps * .45))
            change = np.rint(mask * (frame - first) * amount).astype("int16")
            composed = np.clip(plate + change, 0, 255).astype("uint8")
            assert np.array_equal(composed[subjects], plate[subjects])
            export.stdin.write(composed.tobytes())
        export.stdin.close()
        if raw.wait() or export.wait():
            raise RuntimeError("FFmpeg could not finish the Fly composite")


if __name__ == "__main__":
    main()
