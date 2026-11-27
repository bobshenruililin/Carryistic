"""Prepare the images the continuous scroll needs from Carry's original files.

Writes public/scroll/ (sharp stills, strip thumbnails, the Blackout Awaits
flipbook and the sculpture's recorded orbit), src/scroll-assets.json with
every size the page needs before images load, and the start and end frames
for the generated bridges in film/requests/.

Run from the repository root with Python 3, Pillow and FFmpeg:
    python scripts/prepare-scroll.py
"""
import json
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
art = root / 'archive' / 'artworks'
out = root / 'public' / 'scroll'
plates = json.loads((root / 'src' / 'plates.json').read_text())

HERO_EDGE = 1600
THUMB_HEIGHT = 220


def folder(post_id):
    return next(art.glob(post_id + ' - *'))


def original(plate_id):
    image = Image.open(folder(plate_id[:3]) / (plate_id + '.jpg'))
    return ImageOps.exif_transpose(image).convert('RGB')


def save(image, path, quality):
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path, 'WEBP', quality=quality, method=5)


def fit_edge(image, edge):
    scale = min(1, edge / max(image.size))
    if scale == 1:
        return image
    size = (round(image.width * scale), round(image.height * scale))
    return image.resize(size, Image.Resampling.LANCZOS)


def frames(movie, times, size, directory, quality):
    """Decode exact source times from a movie into numbered WebP frames."""
    directory.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as temp:
        for index, time in enumerate(times):
            target = Path(temp) / f'{index:03d}.png'
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{time:.3f}', '-i', str(movie),
                            '-frames:v', '1', '-vf', f'scale={size}:-2:flags=lanczos', str(target)], check=True)
            save(Image.open(target).convert('RGB'), directory / f'{index:03d}.webp', quality)


manifest = {'hero': {}, 'thumb': {}}
for plate in plates:
    pid = plate['id']
    if pid == 'P03-01':
        source = Image.open(root / 'public' / 'plates' / plate['filename']).convert('RGB')
    else:
        source = original(pid)
    hero = fit_edge(source, HERO_EDGE)
    save(hero, out / 'h' / (pid + '.webp'), 80)
    manifest['hero'][pid] = [hero.width, hero.height]
    thumb = source.resize((round(source.width * THUMB_HEIGHT / source.height), THUMB_HEIGHT), Image.Resampling.LANCZOS)
    save(thumb, out / 't' / (pid + '.webp'), 70)
    manifest['thumb'][pid] = [thumb.width, thumb.height]

# The Blackout Awaits: one frame a second through the whole reel, denser where
# the sheet floats on the stream (37–39 s) and where the two prints meet (45.8–48.1 s).
reel = folder('P03') / 'P03-01.mp4'
times = sorted({float(t) for t in range(0, 75)}
               | {round(37.0 + i * 0.2, 2) for i in range(11)}
               | {round(45.8 + i * 0.25, 2) for i in range(10)})
frames(reel, times, 960, out / 'reel', 72)
manifest['reel'] = {'size': [960, 540], 'times': times}

# To Bleed in Liquid Gold: the artist's recorded camera arc around the sculpture.
orbit = folder('P08') / 'P08-02.mp4'
orbit_times = [round(i * 5.9 / 36, 3) for i in range(36)]
frames(orbit, orbit_times, 720, out / 'orbit', 76)
manifest['orbit'] = {'size': [720, 720], 'times': orbit_times}

(root / 'src' / 'scroll-assets.json').write_text(json.dumps(manifest, separators=(',', ':')) + '\n')

# Start and end frames for the generated bridges Astra renders.
requests = root / 'film' / 'requests'
requests.mkdir(parents=True, exist_ok=True)


def square(pid, top=None, edge=1440):
    image = original(pid)
    side = min(image.size)
    left = (image.width - side) // 2
    upper = (image.height - side) // 2 if top is None else top
    crop = image.crop((left, upper, left + side, upper + side))
    return crop.resize((min(edge, side),) * 2, Image.Resampling.LANCZOS)


frames_for_requests = {
    'H1-start.jpg': square('P01-04', top=0),
    'H1-end.jpg': square('P02-01'),
    'H2-start.jpg': square('P02-13'),
    'H3-start.jpg': square('P13-06'),
    'H3-end.jpg': square('P15-01'),
    'H4-start.jpg': square('P15-07'),
    'H4-end.jpg': square('P08-04'),
    'H5-start.jpg': square('P05-01'),
    'H5-reference.jpg': square('P05-02'),
    'H6-start.jpg': square('P15-06'),
    'H7-end.jpg': square('P11-01'),
    'E4-end.jpg': square('P07-01', top=1008),
    'M1-start.jpg': square('P12-07'),
    'M1-end.jpg': square('P07-04'),
    'M2-start.jpg': square('P06-02'),
    'M2-end.jpg': square('P04-02'),
}
for name, image in frames_for_requests.items():
    image.save(requests / name, 'JPEG', quality=92)

print(f"{len(manifest['hero'])} stills, {len(times)} reel frames, {len(orbit_times)} orbit frames, {len(frames_for_requests)} request frames")
