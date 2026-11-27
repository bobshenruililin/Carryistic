"""Compose a face out of fragments of Carry's work, for the landing page.

The canvas is cut into rows of strips (her slice device, P04-06, P09-01,
P10-08). Every segment is a real crop of one of the 153 published slides,
chosen by colour against the face beneath, spread across all fifteen works
and never next to the same work. Each fragment is then tinted in two colours
taken from the face (her duotone, P09 and P10), so the face appears while
every piece stays recognisable. A map records which slide each fragment came
from, so the landing can open the right work.

    python scripts/prepare-collage.py --face painting --size 1440x900 --scale 2 --out public/landing/painting-desktop
    python scripts/prepare-collage.py --face carry --size 390x844 --scale 2 --out public/landing/carry-phone

Needs Python 3 with NumPy and Pillow.
"""
import argparse
import json
import random
from pathlib import Path

import numpy as np
from PIL import Image

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--face', default='painting', help="'painting' (Dusk til Dawn), 'carry' (P07-10), or a path to any portrait, such as Carry's profile picture")
parser.add_argument('--crop', default=None, help='x0,y0,x1,y1 in fractions of a --face file')
parser.add_argument('--real', choices=['none', 'radial', 'split', 'strips'], default='none',
                    help='keep part of the face as the real picture: around the --focus, on one side, or on alternate strips')
parser.add_argument('--edge', type=float, default=.16, help='width of the band where real strips break into collage')
parser.add_argument('--shape', choices=['strips', 'circles'], default='strips', help='rows of strips, or circles: her recurring circle, with space between')
parser.add_argument('--radii', default='4,34', help='circle radius range in CSS pixels, small where the face has detail')
parser.add_argument('--size', default='1440x900')
parser.add_argument('--scale', type=float, default=2)
parser.add_argument('--tint', type=float, default=.72, help='0 shows the fragments as they are, 1 is pure duotone')
parser.add_argument('--rows', default='9,40', help='row height range in CSS pixels, small where the face has detail')
parser.add_argument('--widths', default='12,150', help='segment width range in CSS pixels, small where the face has detail')
parser.add_argument('--seed', type=int, default=7)
parser.add_argument('--focus', default=None, help='x,y,r in canvas fractions: where the eyes and mouth are, to keep strips fine there')
parser.add_argument('--out', required=True)
args = parser.parse_args()
rng = random.Random(args.seed)
W, H = (int(v) for v in args.size.split('x'))
S = args.scale
CW, CH = round(W * S), round(H * S)


def to_lab(rgb):
    c = rgb / 255.0
    c = np.where(c > .04045, ((c + .055) / 1.055) ** 2.4, c / 12.92)
    m = np.array([[.4124, .3576, .1805], [.2126, .7152, .0722], [.0193, .1192, .9505]])
    xyz = c @ m.T / np.array([.95047, 1.0, 1.08883])
    f = np.where(xyz > .008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return np.stack([116 * f[..., 1] - 16, 500 * (f[..., 0] - f[..., 1]), 200 * (f[..., 1] - f[..., 2])], -1)


# ---- the face, composed onto the canvas -------------------------------------------------
def target_image():
    canvas = Image.new('RGB', (CW, CH))
    if args.face == 'painting':
        face = Image.open(root / 'public/scroll/h/P01-02.webp').convert('RGB')
        canvas.paste((4, 4, 6), (0, 0, CW, CH))
        height = CH * (1.06 if CW > CH else .78)
    elif args.face not in ('carry',):
        face = Image.open(args.face).convert('RGB')
        if args.crop:
            x0, y0, x1, y1 = (float(v) for v in args.crop.split(','))
            face = face.crop((round(x0 * face.width), round(y0 * face.height), round(x1 * face.width), round(y1 * face.height)))
        corner = np.asarray(face).reshape(-1, 3)
        canvas.paste(tuple(int(v) for v in np.percentile(corner, 8, axis=0)), (0, 0, CW, CH))
        height = CH * (1.0 if CW > CH else .62)
    else:
        source = Image.open(root / 'archive/artworks/P07 - Proud Daddy/P07-10.jpg').convert('RGB')
        face = source.crop((800, 150, 1206, 700))
        # The photograph is small and soft at this size; stretch its contrast before cutting.
        arr = np.asarray(face).astype(np.float64)
        lo_, hi_ = np.percentile(arr, 2), np.percentile(arr, 98)
        face = Image.fromarray(np.clip((arr - lo_) / (hi_ - lo_) * 255, 0, 255).astype(np.uint8))
        wall = tuple(int(v) for v in np.asarray(source.crop((300, 60, 600, 200))).reshape(-1, 3).mean(0))
        canvas.paste(wall, (0, 0, CW, CH))
        height = CH * (1.0 if CW > CH else .7)
    width = height * face.width / face.height
    face = face.resize((round(width), round(height)), Image.Resampling.LANCZOS)
    canvas.paste(face, ((CW - face.width) // 2, (CH - face.height) // 2 if CW > CH else round(CH * .1)))
    return canvas


target = target_image()
T = np.asarray(target).astype(np.float64)
LUM = T @ np.array([.2126, .7152, .0722])
# Where the face has detail (eyes, mouth, the edge of the hair), the strips get small.
gy, gx = np.gradient(LUM)
edge = np.hypot(gx, gy)
k = max(3, round(18 * S))
pad = np.pad(edge, k, mode='edge').cumsum(0).cumsum(1)
blur = (pad[2 * k:, 2 * k:] - pad[:-2 * k, 2 * k:] - pad[2 * k:, :-2 * k] + pad[:-2 * k, :-2 * k]) / (2 * k) ** 2
DETAIL = np.clip(blur / np.percentile(blur, 97), 0, 1) ** .7
REAL = np.zeros((CH, CW))
if args.focus:
    fx, fy, fr = (float(v) for v in args.focus.split(','))
    yy0, xx0 = np.mgrid[0:CH, 0:CW]
    dist = np.hypot(xx0 - fx * CW, yy0 - fy * CH) / (fr * min(CW, CH))
    if args.real == 'radial':
        REAL = np.clip((1.35 - dist) / (args.edge * 6), 0, 1)
    elif args.real == 'split':
        # The face side stays real; the far side becomes her work, breaking along a band.
        REAL = np.clip((fx * CW + args.edge * CW - xx0) / (2 * args.edge * CW), 0, 1)
if args.focus:
    yy, xx = np.mgrid[0:CH, 0:CW]
    prior = np.exp(-(((xx - fx * CW) ** 2 + (yy - fy * CH) ** 2) / (fr * min(CW, CH)) ** 2))
    DETAIL = np.maximum(DETAIL, prior * .95)

# ---- the fragments ------------------------------------------------------------------------
plates = json.loads((root / 'src/plates.json').read_text())
titles = {p['postId']: p['title'] for p in plates}
ASPECTS = [1.0, 1.8, 3.0, 4.5]
images, cands = [], []  # cands: (image index, aspect bucket, box in 0-1, mean Lab)
for index, plate in enumerate(plates):
    image = Image.open(root / f"public/scroll/h/{plate['id']}.webp").convert('RGB')
    image.thumbnail((720, 720), Image.Resampling.LANCZOS)
    images.append(image)
    small = np.asarray(image.resize((96, round(96 * image.height / image.width)))).astype(np.float64)
    lab = to_lab(small)
    h, w = lab.shape[:2]
    for bucket, aspect in enumerate(ASPECTS):
        for _ in range(10):
            ch = rng.uniform(.16, .5) * min(h, w / aspect)
            cw = min(ch * aspect, w)
            ch = cw / aspect
            x0, y0 = rng.uniform(0, w - cw), rng.uniform(0, h - ch)
            region = lab[int(y0):max(int(y0 + ch), int(y0) + 1), int(x0):max(int(x0 + cw), int(x0) + 1)]
            cands.append((index, bucket, (x0 / w, y0 / h, cw / w, ch / h), region.reshape(-1, 3).mean(0)))
cand_img = np.array([c[0] for c in cands])
cand_bucket = np.array([c[1] for c in cands])
cand_lab = np.array([c[3] for c in cands])
cand_post = np.array([plates[c[0]]['postId'] for c in cands])

out = Image.new('RGB', (CW, CH), (4, 4, 6))
use = np.zeros(len(plates))
used_crop = np.zeros(len(cands))
segments, above = [], {}


def render_fragment(x0, y, x1, y1, left=None, nearby=()):
    """Pick and tint one fragment for the box [x0, x1) × [y, y1) of the canvas."""
    cell = T[y:y1, x0:x1].reshape(-1, 3)
    cell_lab = to_lab(cell).mean(0)
    aspect = (x1 - x0) / (y1 - y)
    bucket = int(np.argmin([abs(np.log(aspect / a)) for a in ASPECTS]))
    cost = np.linalg.norm(cand_lab - cell_lab, axis=1) + 7.0 * use[cand_img] + 30.0 * used_crop
    cost = cost + 40.0 * (cand_post == left) + 22.0 * np.isin(cand_post, list(nearby))
    cost[cand_bucket != bucket] = np.inf
    k = int(np.argmin(cost))
    img_i, _, (bx, by, bw, bh), _ = cands[k]
    used_crop[k] += 1
    image = images[img_i]
    crop = image.crop((round(bx * image.width), round(by * image.height), round((bx + bw) * image.width), round((by + bh) * image.height)))
    frag = np.asarray(crop.resize((x1 - x0, y1 - y), Image.Resampling.LANCZOS)).astype(np.float64)
    lum = cell @ np.array([.2126, .7152, .0722])
    lo, hi = np.percentile(lum, 12), np.percentile(lum, 88)
    dark = cell[lum <= lo].mean(0) if (lum <= lo).any() else cell.mean(0)
    light = cell[lum >= hi].mean(0) if (lum >= hi).any() else cell.mean(0)
    fl = frag @ np.array([.2126, .7152, .0722])
    f0, f1 = np.percentile(fl, 4), np.percentile(fl, 96)
    t_frag = np.clip((fl - f0) / max(f1 - f0, 1), 0, 1)
    t_face = np.clip((LUM[y:y1, x0:x1] - lo) / max(hi - lo, 1), 0, 1)
    d = float(DETAIL[y:y1, x0:x1].mean())
    weave = .22 + .4 * d
    t = (t_frag * (1 - weave) + t_face * weave)[..., None]
    duo = dark + (light - dark) * t
    tint = min(.95, args.tint * (.82 + .36 * d))
    mixed = frag * (1 - tint) + duo * tint
    mixed += (cell.mean(0) - mixed.reshape(-1, 3).mean(0)) * .3
    use[img_i] += 1
    return np.clip(mixed, 0, 255).astype(np.uint8), img_i, (bx, by, bw, bh)


if args.shape == 'circles':
    # Her recurring circle: round windows into her work, packed big-to-small, with space between.
    rmin, rmax = (float(v) * S for v in args.radii.split(','))
    content = np.clip((LUM - 14) / 40, 0, 1)
    tries = []
    for _ in range(int(CW * CH / (rmin * rmin) * .9)):
        x, y = rng.uniform(0, CW), rng.uniform(0, CH)
        d = DETAIL[int(y), int(x)]
        r = rmax + (rmin - rmax) * d
        r *= rng.uniform(.75, 1.15)
        if rng.random() > .12 + .88 * content[int(y), int(x)]:
            r = min(r, rmin * 1.3)  # sparse small circles in the dark, like her paint flecks
            if rng.random() > .1:
                continue
        tries.append((r, x, y))
    tries.sort(reverse=True)
    cellsize = 2 * rmax
    grid, placed = {}, []
    gap = 1.5 * S
    canvas = np.asarray(out).astype(np.uint8).copy()
    masks = {}
    for r, x, y in tries:
        gx, gy = int(x // cellsize), int(y // cellsize)
        clash = False
        for i in range(gx - 1, gx + 2):
            for j in range(gy - 1, gy + 2):
                for (ox, oy, orr) in grid.get((i, j), ()):
                    if (ox - x) ** 2 + (oy - y) ** 2 < (orr + r + gap) ** 2:
                        clash = True
                        break
                if clash: break
            if clash: break
        if clash:
            continue
        size = max(3, int(round(2 * r)))
        x0, y0 = int(round(x - r)), int(round(y - r))
        x1, y1 = x0 + size, y0 + size
        if x0 < 0 or y0 < 0 or x1 > CW or y1 > CH or x1 - x0 < 3:
            continue
        grid.setdefault((gx, gy), []).append((x, y, r))
        if size not in masks:
            ss = 4
            yy, xx = np.mgrid[0:size * ss, 0:size * ss]
            m = ((xx + .5) / ss - size / 2) ** 2 + ((yy + .5) / ss - size / 2) ** 2 <= (size / 2) ** 2
            masks[size] = m.reshape(size, ss, size, ss).mean((1, 3))[..., None]
        m = masks[size][: y1 - y0, : x1 - x0]
        if rng.random() < REAL[int(y), int(x)]:
            piece = T[y0:y1, x0:x1]
            entry = {'cx': round(x / S, 1), 'cy': round(y / S, 1), 'r': round(r / S, 1), 'real': True}
        else:
            piece, img_i, crop = render_fragment(x0, y0, x1, y1)
            entry = {'cx': round(x / S, 1), 'cy': round(y / S, 1), 'r': round(r / S, 1), 'slide': plates[img_i]['id'], 'work': plates[img_i]['postId'], 'crop': [round(v, 4) for v in crop]}
        region = canvas[y0:y1, x0:x1].astype(np.float64)
        canvas[y0:y1, x0:x1] = np.clip(region * (1 - m) + piece[: y1 - y0, : x1 - x0] * m, 0, 255).astype(np.uint8)
        segments.append(entry)
    out = Image.fromarray(canvas)

# ---- rows of strips -------------------------------------------------------------------------
rmin, rmax = (float(v) for v in args.rows.split(','))
wmin, wmax = (float(v) for v in args.widths.split(','))
gap = max(1, round(2 * S))
y = 0
row = 0
mix = lambda a, b, t: a + (b - a) * t
while args.shape == 'strips' and y < CH:
    band = DETAIL[y:min(y + round(rmin * S) + 1, CH)]
    d_row = float(np.percentile(band, 92)) if band.size else 0
    rh = max(2, round(mix(rmax, rmin, d_row) * rng.uniform(.8, 1.2) * S))
    x = -round(rng.uniform(0, wmax * .6) * S)
    left = None
    row_posts = {}
    while x < CW:
        probe = DETAIL[y:min(y + rh, CH), max(x, 0):min(max(x, 0) + round(wmin * 2 * S), CW)]
        d_local = float(probe.mean()) if probe.size else 0
        sw = max(2, round(mix(wmax, wmin, d_local) * rng.uniform(.7, 1.3) * S))
        x0, x1 = max(x, 0), min(x + sw, CW)
        y1 = min(y + rh, CH)
        keep_real = x1 - x0 > 4 and y1 - y > 4 and (
            (args.real == 'strips' and row % 2 == 0 and DETAIL[y:y1, x0:x1].mean() > .25)
            or (args.real in ('radial', 'split') and rng.random() < REAL[(y + y1) // 2, (x0 + x1) // 2]))
        if keep_real:
            # This strip keeps the real picture, unaltered.
            out.paste(target.crop((x0, y, x1, y1)), (x0, y))
            segments.append({'x': round(x0 / S, 1), 'y': round(y / S, 1), 'w': round((x1 - x0 - gap) / S, 1), 'h': round((y1 - y - gap) / S, 1), 'real': True})
        elif x1 - x0 > 4 and y1 - y > 4:
            cell = T[y:y1, x0:x1].reshape(-1, 3)
            cell_lab = to_lab(cell).mean(0)
            aspect = (x1 - x0) / (y1 - y)
            bucket = int(np.argmin([abs(np.log(aspect / a)) for a in ASPECTS]))
            pick = cand_bucket == bucket
            cost = np.linalg.norm(cand_lab - cell_lab, axis=1) + 4.0 * use[cand_img]
            cost = cost + 40.0 * (cand_post == left) + 22.0 * np.isin(cand_post, list(above.get((x0 + x1) // 2 // max(1, round(60 * S)), ())))
            cost[~pick] = np.inf
            k = int(np.argmin(cost))
            img_i, _, (bx, by, bw, bh), _ = cands[k]
            image = images[img_i]
            crop = image.crop((round(bx * image.width), round(by * image.height), round((bx + bw) * image.width), round((by + bh) * image.height)))
            frag = np.asarray(crop.resize((x1 - x0, y1 - y), Image.Resampling.LANCZOS)).astype(np.float64)
            # Her duotone: the fragment's own light and dark, mapped to the face's light and dark here.
            lum = cell @ np.array([.2126, .7152, .0722])
            lo, hi = np.percentile(lum, 12), np.percentile(lum, 88)
            dark = cell[lum <= lo].mean(0) if (lum <= lo).any() else cell.mean(0)
            light = cell[lum >= hi].mean(0) if (lum >= hi).any() else cell.mean(0)
            fl = frag @ np.array([.2126, .7152, .0722])
            f0, f1 = np.percentile(fl, 4), np.percentile(fl, 96)
            t_frag = np.clip((fl - f0) / max(f1 - f0, 1), 0, 1)
            # The face's own shading is woven into the fragment where the face has detail.
            local = LUM[y:y1, x0:x1]
            t_face = np.clip((local - lo) / max(hi - lo, 1), 0, 1)
            d = float(DETAIL[y:y1, x0:x1].mean())
            weave = mix(.22, .62, d)
            t = (t_frag * (1 - weave) + t_face * weave)[..., None]
            duo = dark + (light - dark) * t
            tint = min(.95, args.tint * mix(.82, 1.18, d))
            mixed = frag * (1 - tint) + duo * tint
            mixed += (cell.mean(0) - mixed.reshape(-1, 3).mean(0)) * .3
            out.paste(Image.fromarray(np.clip(mixed, 0, 255).astype(np.uint8)), (x0, y))
            post = plates[img_i]['postId']
            use[img_i] += 1
            left = post
            row_posts.setdefault((x0 + x1) // 2 // max(1, round(60 * S)), set()).add(post)
            segments.append({'x': round(x0 / S, 1), 'y': round(y / S, 1), 'w': round((x1 - x0 - gap) / S, 1), 'h': round((y1 - y - gap) / S, 1),
                             'slide': plates[img_i]['id'], 'work': post, 'crop': [round(v, 4) for v in (bx, by, bw, bh)]})
        x += sw
    above = row_posts
    y += rh
    row += 1

# Gutters: thin dark lines between strips and segments, as in her layouts.
draw = np.asarray(out).copy()
for s in segments if args.shape == 'strips' else []:
    x1, y1 = round((s['x'] + s['w']) * S), round((s['y'] + s['h']) * S)
    draw[max(y1, 0):min(y1 + gap, CH), max(round(s['x'] * S), 0):min(x1 + gap, CW)] = (4, 4, 6)
    draw[max(round(s['y'] * S), 0):min(y1 + gap, CH), max(x1, 0):min(x1 + gap, CW)] = (4, 4, 6)
out = Image.fromarray(draw)

prefix = Path(args.out)
prefix.parent.mkdir(parents=True, exist_ok=True)
out.save(prefix.with_suffix('.webp'), 'WEBP', quality=84, method=5)
target.resize((W, H)).save(prefix.with_name(prefix.name + '-target.jpg'), quality=80)
works = sorted({s['work'] for s in segments if 'work' in s})
prefix.with_suffix('.json').write_text(json.dumps({'face': args.face, 'size': [W, H], 'segments': segments}, separators=(',', ':')))
print(f"{prefix.with_suffix('.webp')}: {sum('work' in s for s in segments)} fragments from {len({s['slide'] for s in segments if 'slide' in s})} slides across {len(works)} works, {sum(1 for s in segments if s.get('real'))} real strips")
