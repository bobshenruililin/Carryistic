"""Prepare the lightweight, offline-friendly index of the original post sheets."""

import csv
import json
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parents[1]
posts = []
with (root / 'direction/post-evidence.csv').open(newline='') as source:
    for row in csv.DictReader(source):
        post_id = row['post_id']
        folder, = (root / 'archive/artworks').glob(f'{post_id} - *')
        image_name = f'archive-{post_id.lower()}.webp'
        with Image.open(root / 'archive/contact-sheets' / f'{post_id}.jpg') as image:
            image.save(root / 'public/art' / image_name, 'WEBP', quality=80, method=6)
        posts.append({
            'id': post_id, 'title': row['post_label'], 'count': int(row['positions']),
            'credit': row['posted_by'], 'note': row['reading'], 'url': row['source_url'],
            'folder': folder.name, 'image': image_name,
        })
(root / 'src/archive.json').write_text(json.dumps(posts, ensure_ascii=False, indent=2) + '\n')
