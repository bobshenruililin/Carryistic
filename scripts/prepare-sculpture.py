"""Make the web copy of the To Bleed in Liquid Gold reconstruction.

Input is the Tripo H3.1 multiview GLB that Astra generated from Carry's
photographs and filmed orbit (Higgsfield job 2e56e55f-3f5c-4964-a00a-8df0f1414060,
about 66 MB with 1.9 million triangles). Output is public/sculpture/sculpture.glb:

- vertices merged on a spatial grid (UV seams kept apart, so textures stay put);
- positions, normals and UVs quantized with KHR_mesh_quantization;
- textures re-encoded as JPEG at web sizes.

    python scripts/prepare-sculpture.py path/to/tripo.glb [--cells 150 --uv 96]

Needs Python 3 with NumPy and Pillow.
"""
import argparse
import io
import json
import struct
from pathlib import Path

import numpy as np
from PIL import Image

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('source')
parser.add_argument('--cells', type=int, default=150, help='grid cells across the longest side')
parser.add_argument('--uv', type=int, default=96, help='UV neighbourhoods across the texture atlas')
parser.add_argument('--out', default=str(root / 'public' / 'sculpture' / 'sculpture.glb'))
args = parser.parse_args()

data = Path(args.source).read_bytes()
_, _, length = struct.unpack_from('<III', data, 0)
offset, chunks = 12, []
while offset < length:
    size, kind = struct.unpack_from('<II', data, offset)
    chunks.append(data[offset + 8:offset + 8 + size])
    offset += 8 + size
gltf, binary = json.loads(chunks[0]), chunks[1]


def accessor(index):
    acc = gltf['accessors'][index]
    view = gltf['bufferViews'][acc['bufferView']]
    width = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[acc['type']]
    dtype = {5126: np.float32, 5125: np.uint32, 5123: np.uint16}[acc['componentType']]
    start = view.get('byteOffset', 0) + acc.get('byteOffset', 0)
    return np.frombuffer(binary, dtype, acc['count'] * width, start).reshape(acc['count'], width)


primitive = gltf['meshes'][0]['primitives'][0]
P = accessor(primitive['attributes']['POSITION']).astype(np.float64)
N = accessor(primitive['attributes']['NORMAL']).astype(np.float64)
UV = accessor(primitive['attributes']['TEXCOORD_0']).astype(np.float64)
I = accessor(primitive['indices']).reshape(-1, 3).astype(np.int64)

# Merge vertices that share a grid cell. Position and normal are averaged per
# spatial cell; texture coordinates per (cell, UV neighbourhood), so a seam
# keeps its two sides of the atlas while both sides share one position.
lo, hi = P.min(0), P.max(0)
step = (hi - lo).max() / args.cells
cell = np.floor((P - lo) / step).astype(np.int64)
_, spatial = np.unique(cell, axis=0, return_inverse=True)
spatial = spatial.ravel()
uv_cell = np.floor(np.clip(UV, 0, 1) * args.uv).astype(np.int64)
_, key = np.unique(np.column_stack([spatial, uv_cell]), axis=0, return_inverse=True)
key = key.ravel()


def mean_by(groups, values, count):
    weights = np.bincount(groups, minlength=count).astype(np.float64)
    return np.column_stack([np.bincount(groups, values[:, k], count) for k in range(values.shape[1])]) / weights[:, None]


n_spatial, n_key = spatial.max() + 1, key.max() + 1
spatial_of_key = np.zeros(n_key, np.int64)
spatial_of_key[key] = spatial
P2 = mean_by(spatial, P, n_spatial)[spatial_of_key]
N2 = mean_by(spatial, N, n_spatial)[spatial_of_key]
N2 /= np.maximum(np.linalg.norm(N2, axis=1, keepdims=True), 1e-9)
UV2 = mean_by(key, UV, n_key)

T = key[I]
spatial_T = spatial[I]
keep = (spatial_T[:, 0] != spatial_T[:, 1]) & (spatial_T[:, 1] != spatial_T[:, 2]) & (spatial_T[:, 0] != spatial_T[:, 2])
T = np.unique(T[keep], axis=0)

# Drop vertices no triangle uses and renumber.
used = np.zeros(n_key, bool)
used[T.ravel()] = True
remap = np.cumsum(used) - 1
T = remap[T].astype(np.uint32)
P2, N2, UV2 = P2[used], N2[used], UV2[used]
print(f'{len(P):,} vertices / {len(I):,} triangles  →  {len(P2):,} vertices / {len(T):,} triangles')

# KHR_mesh_quantization: 16-bit positions (dequantized by the node transform),
# 8-bit normals, 16-bit texture coordinates.
plo, phi = P2.min(0), P2.max(0)
span = np.maximum(phi - plo, 1e-9)
qP = np.round((P2 - plo) / span * 65535).astype(np.uint16)
qN = np.zeros((len(N2), 4), np.int8)
qN[:, :3] = np.round(N2 * 127).astype(np.int8)
qUV = np.round(np.clip(UV2, 0, 1) * 65535).astype(np.uint16)
qP4 = np.zeros((len(qP), 4), np.uint16)
qP4[:, :3] = qP


def jpeg(index, edge, quality):
    view = gltf['bufferViews'][gltf['images'][index]['bufferView']]
    raw = binary[view.get('byteOffset', 0):view.get('byteOffset', 0) + view['byteLength']]
    image = Image.open(io.BytesIO(raw)).convert('RGB')
    image.thumbnail((edge, edge), Image.Resampling.LANCZOS)
    out = io.BytesIO()
    image.save(out, 'JPEG', quality=quality, optimize=True)
    return out.getvalue()


material = gltf['materials'][0]
textures = [
    jpeg(gltf['textures'][material['pbrMetallicRoughness']['baseColorTexture']['index']]['source'], 2048, 86),
    jpeg(gltf['textures'][material['pbrMetallicRoughness']['metallicRoughnessTexture']['index']]['source'], 1024, 90),
    jpeg(gltf['textures'][material['normalTexture']['index']]['source'], 2048, 92),
]

blob, views = bytearray(), []


def add(raw, target=None, stride=None):
    while len(blob) % 4:
        blob.append(0)
    view = {'buffer': 0, 'byteOffset': len(blob), 'byteLength': len(raw)}
    if target:
        view['target'] = target
    if stride:
        view['byteStride'] = stride
    blob.extend(raw)
    views.append(view)
    return len(views) - 1


vP = add(qP4.tobytes(), 34962, 8)
vN = add(qN.tobytes(), 34962, 4)
vUV = add(qUV.tobytes(), 34962)
vI = add(T.tobytes(), 34963)
vImages = [add(t) for t in textures]

out = {
    'asset': {'version': '2.0', 'generator': 'Carryistic prepare-sculpture.py'},
    'extensionsUsed': ['KHR_mesh_quantization'],
    'extensionsRequired': ['KHR_mesh_quantization'],
    'scene': 0,
    'scenes': [{'nodes': [0]}],
    'nodes': [{'name': 'To Bleed in Liquid Gold (reconstruction)', 'mesh': 0, 'translation': plo.tolist(), 'scale': span.tolist()}],
    'meshes': [{'primitives': [{'attributes': {'POSITION': 0, 'NORMAL': 1, 'TEXCOORD_0': 2}, 'indices': 3, 'material': 0}]}],
    'materials': [{
        'name': 'reconstruction',
        'pbrMetallicRoughness': {'baseColorTexture': {'index': 0}, 'metallicRoughnessTexture': {'index': 1}, 'metallicFactor': 1.0, 'roughnessFactor': 1.0},
        'normalTexture': {'index': 2},
    }],
    'textures': [{'source': 0}, {'source': 1}, {'source': 2}],
    'images': [{'bufferView': v, 'mimeType': 'image/jpeg'} for v in vImages],
    'accessors': [
        {'bufferView': vP, 'componentType': 5123, 'normalized': True, 'count': len(qP), 'type': 'VEC3', 'min': [0, 0, 0], 'max': [65535, 65535, 65535]},
        {'bufferView': vN, 'componentType': 5120, 'normalized': True, 'count': len(qN), 'type': 'VEC3'},
        {'bufferView': vUV, 'componentType': 5123, 'normalized': True, 'count': len(qUV), 'type': 'VEC2'},
        {'bufferView': vI, 'componentType': 5125, 'count': T.size, 'type': 'SCALAR'},
    ],
    'bufferViews': views,
    'buffers': [{'byteLength': len(blob)}],
}
text = json.dumps(out, separators=(',', ':')).encode()
text += b' ' * (-len(text) % 4)
while len(blob) % 4:
    blob.append(0)
glb = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(text) + 8 + len(blob))
glb += struct.pack('<II', len(text), 0x4E4F534A) + text + struct.pack('<II', len(blob), 0x004E4942) + bytes(blob)
Path(args.out).parent.mkdir(parents=True, exist_ok=True)
Path(args.out).write_bytes(glb)
print(f'{args.out}: {len(glb) / 1e6:.1f} MB')
