"""Pack the rays landing prototype (lab/rays) into one file that opens anywhere,
including on a phone, with every image and font inside it.

    python scripts/build-rays-prototype.py

Writes direction/paths/rays-prototype.html. Needs Python 3 with Pillow.
"""
import base64
import io
import json
import re
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parents[1]
page = (root / 'lab/rays/index.html').read_text()


def data(path, mime):
    return f'data:{mime};base64,' + base64.b64encode(Path(path).read_bytes()).decode()


def webp(path, size, quality=80, mode='RGB'):
    image = Image.open(path).convert(mode)
    image.thumbnail((size, size), Image.Resampling.LANCZOS)
    buffer = io.BytesIO()
    image.save(buffer, 'WEBP', quality=quality, method=5)
    return 'data:image/webp;base64,' + base64.b64encode(buffer.getvalue()).decode()


# Fonts: the two the site already uses.
for match in set(re.findall(r"url\('(\.\./\.\./node_modules/[^']+\.woff2)'\)", page)):
    page = page.replace(match, data(root / 'lab/rays' / match, 'font/woff2'))

ids = re.findall(r"\['(P\d\d)', '", page)
covers = {i: webp(root / f'public/scroll/h/{i}-01.webp', 900) for i in ids}
inline = {
    'photo': data(root / 'archive/profile/carry-profile.jpg', 'image/jpeg'),
    'soft': data(root / 'archive/profile/carry-person-soft.png', 'image/png'),
}
script = ('<script>window.__INLINE = ' + json.dumps(inline) + ';\n'
          'window.__INLINE.covers = ' + json.dumps(covers) + ';\n'
          'window.__INLINE.cover = id => window.__INLINE.covers[id];</script>\n')
page = page.replace('<script>\n// Fifteen works', script + '<script>\n// Fifteen works', 1)
out = root / 'direction/paths/rays-prototype.html'
out.write_text(page)
print(out.relative_to(root), f'{out.stat().st_size / 1e6:.1f} MB')
