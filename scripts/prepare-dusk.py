"""Register the pencil portrait to the painted eye used in the opening film."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
source = root / 'archive' / 'artworks' / 'P01 - Dusk til Dawn'
width, height = 960, 1169
with Image.open(source / 'P01-08.jpg') as original:
    drawing = ImageOps.exif_transpose(original).convert('RGB')
    scale = drawing.width / width
    # Both eye landmarks come from the opening shot in film/render.py.
    left = .605 * drawing.width - .575 * width * scale
    top = .493 * drawing.height - .470 * height * scale
    sheet = drawing.transform((width, height), Image.Transform.AFFINE,
                              (scale, 0, left, 0, scale, top),
                              Image.Resampling.BICUBIC, fillcolor=(248, 248, 245))
    sheet.save(root / 'public' / 'art' / 'dusk-window.webp', 'WEBP', quality=90, method=6)
