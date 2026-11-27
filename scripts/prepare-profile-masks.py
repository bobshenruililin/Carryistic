"""Masks for the rays landing, from Carry's profile picture.

- carry-light-mask.png: the light on her face. It is the brightest thing in the
  photograph, so its edge comes from the picture itself and looks natural.
- carry-person-soft.png: where her head and shoulders stand in front of the rays.
  Her hair and shoulders follow a rough hand-drawn outline (carry-outline.json),
  blurred wide so no traced edge ever shows; her profile takes the crisp edge of
  the light mask. Move the outline's points to adjust it.

    python scripts/prepare-profile-masks.py [--check out.png]

It also writes the site's copies to public/landing.

Needs Python 3 with NumPy and Pillow.
"""
import argparse
import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

root = Path(__file__).resolve().parents[1]
folder = root / 'archive/profile'
parser = argparse.ArgumentParser()
parser.add_argument('--check', help='also write a picture of the outline and both masks')
args = parser.parse_args()

photo = Image.open(folder / 'carry-profile.jpg').convert('RGB')
S = photo.width
outline = json.loads((folder / 'carry-outline.json').read_text())
lx, ly = outline['light']

# The light on her face: bright pixels near her cheek, with the photograph's own falloff.
rgb = np.asarray(photo).astype(np.float64) / 255
lum = rgb @ np.array([.2126, .7152, .0722])
yy, xx = np.mgrid[0:S, 0:S]
near = np.clip((outline['lightRadius'] - np.hypot(xx - lx, yy - ly)) / 60, 0, 1)
lit = np.clip((lum - .3) / .32, 0, 1)
lit = lit * lit * (3 - 2 * lit) * near
light = Image.fromarray((lit * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.5))
light.save(folder / 'carry-light-mask.png')

# Her figure, from the rough outline, blurred wide.
figure = Image.new('L', (S, S), 0)
ImageDraw.Draw(figure).polygon([tuple(p) for p in outline['figure']], fill=255)
soft = figure.filter(ImageFilter.GaussianBlur(outline['blur']))
# On the side she faces, her profile is cut by the light itself, so that edge stays crisp.
# Closing the light mask takes in what the light misses inside her profile: lips, nostril, eye.
r = outline['close']
whole = light.filter(ImageFilter.MaxFilter(r)).filter(ImageFilter.MinFilter(r)).filter(ImageFilter.GaussianBlur(1.2))
soft = Image.fromarray(np.maximum(np.asarray(soft), np.asarray(whole)))
soft.save(folder / 'carry-person-soft.png')

if args.check:
    view = Image.fromarray(np.clip(np.asarray(photo).astype(np.float64) * 2.6, 0, 255).astype(np.uint8))
    draw = ImageDraw.Draw(view)
    draw.line([tuple(p) for p in outline['figure']] + [tuple(outline['figure'][0])], fill=(255, 40, 170), width=4)
    draw.ellipse((lx - 8, ly - 8, lx + 8, ly + 8), outline=(255, 255, 0), width=3)
    sheet = Image.new('RGB', (S * 3 // 2, S // 2))
    sheet.paste(view.resize((S // 2, S // 2)), (0, 0))
    sheet.paste(light.convert('RGB').resize((S // 2, S // 2)), (S // 2, 0))
    sheet.paste(soft.convert('RGB').resize((S // 2, S // 2)), (S, 0))
    sheet.save(args.check)
# The site's copies: the photograph and the soft figure the rays are kept off.
site = root / 'public/landing'
site.mkdir(parents=True, exist_ok=True)
photo.save(site / 'photo.webp', 'WEBP', quality=86, method=6)
soft.save(site / 'figure.png', optimize=True)
print('light and figure masks written to', folder.relative_to(root), 'and', site.relative_to(root))
