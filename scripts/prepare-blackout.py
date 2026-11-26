"""Derive The room's web plates and alpha layers from the archived JPEGs."""

import json
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "archive" / "artworks" / "P02 - Blackout photographs"
OUTPUT = ROOT / "public" / "art"
GEOMETRY = json.loads((ROOT / "src" / "blackout-registration.json").read_text())


def cropped(image, rect):
    x, y, width, height = rect
    return image.crop((x, y, x + width, y + height))


def save(image, name, lossless=False):
    image.save(OUTPUT / f"blackout-{name}.webp", "WEBP", quality=91, method=6,
               lossless=lossless, alpha_quality=100)


def lift_from_white(image, room, rect, hole_points):
    """Keep white costume detail and remove the white paper inside identified openings."""
    left, top, _, _ = rect
    color = np.asarray(cropped(image, rect))
    ink = color.min(axis=2) <= 239
    objects, _ = ndimage.label(ink)
    largest = np.bincount(objects.ravel())[1:].argmax() + 1
    solid = ndimage.binary_fill_holes(objects == largest)

    paper, _ = ndimage.label(~ink)
    openings = []
    for x, y in hole_points:
        component = paper[y - top, x - left]
        assert component and component != paper[0, 0], "Opening must be enclosed"
        opening = paper == component
        solid[opening] = False
        openings.append(opening)

    # Recover the coverage of the white cut from the corresponding colour in the
    # original room. Near-white fabric has little contrast against the paper, so
    # use its nearest coloured edges there.
    transform = GEOMETRY["cutToRoom"]
    yy, xx = np.indices(ink.shape)
    coordinates = (transform["scale"] * (yy + top) + transform["y"],
                   transform["scale"] * (xx + left) + transform["x"])
    room_rgb = np.asarray(room, dtype=np.float32)
    room_color = np.stack([
        ndimage.map_coordinates(channel, coordinates, order=1, prefilter=False)
        for channel in room_rgb.transpose(2, 0, 1)
    ], axis=2)
    deficit = 255 - color.astype(np.float32)
    room_deficit = 255 - room_color
    contrast = np.mean(room_deficit * room_deficit, axis=2)
    local_deficit = ndimage.maximum_filter(deficit, size=(5, 5, 1))
    reference = np.where(contrast[..., None] > 30**2, room_deficit, local_deficit)
    energy = np.sum(reference * reference, axis=2)
    alpha = np.sum(deficit * reference, axis=2) / np.maximum(energy, 1)
    alpha = np.maximum(alpha, deficit.max(axis=2) / 255)
    alpha[ndimage.distance_transform_edt(solid) >= 4] = 1
    alpha[(~solid & (deficit.max(axis=2) <= 5)) |
          (ndimage.distance_transform_edt(~solid) > 2.25)] = 0
    alpha8 = np.rint(np.clip(alpha, 0, 1) * 255).astype(np.uint8)
    unmasked = 255 - deficit * 255 / np.maximum(alpha8[..., None], 1)
    rgb = np.rint(np.clip(unmasked, 0, 255)).astype(np.uint8)
    rgb[alpha8 == 0] = 0
    layer = Image.fromarray(np.dstack([rgb, alpha8]))
    return layer, openings, paper == paper[0, 0]


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    cut, room, hall = [
        Image.open(SOURCE / f"P02-{slide:02d}.jpg").convert("RGB")
        for slide in (4, 5, 13)
    ]
    for original, name in ((cut, "cut"), (room, "room"), (hall, "hall")):
        assert original.size == (GEOMETRY["size"], GEOMETRY["size"])
        save(original, name)
    save(cropped(room, GEOMETRY["roomInsetRect"]), "room-inset")

    shape, (hollow,), exterior = lift_from_white(
        cut, room, GEOMETRY["silhouetteRect"], [GEOMETRY["apertureCenter"]]
    )
    # The figure has a gap between the forearms, one above the shorts and
    # a tiny slit at the ponytail. The inset photograph confirms all three.
    figure, _, _ = lift_from_white(
        cut, room, GEOMETRY["figureRect"], [(725, 735), (764, 830), (822, 517)]
    )
    save(shape, "silhouette")
    save(figure, "kneeling")

    # At the hollow's boundary the mask and its photographic rim add to 255.
    # The distance comparison excludes every pixel of the exterior paper.
    inside = ndimage.distance_transform_edt(~hollow) < ndimage.distance_transform_edt(~exterior)
    aperture_alpha = np.where(inside, 255 - np.asarray(shape.getchannel("A")), 0)
    aperture = Image.new("RGBA", shape.size, "white")
    aperture.putalpha(Image.fromarray(aperture_alpha.astype(np.uint8)))
    save(aperture, "aperture", lossless=True)


if __name__ == "__main__":
    main()
