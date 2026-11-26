"""Rebuild Afterimage from the Carryistic reference archive with Pillow, NumPy, SciPy and FFmpeg."""

from __future__ import annotations

import argparse
import math
from pathlib import Path
import subprocess
import tempfile
import wave

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy import ndimage, signal

FPS = 24
LENGTH = 22
INK = (15, 15, 19)
PAPER = (244, 242, 234)
R = Image.Resampling
CUES = {
    "eye": 0,
    "fall": 3.75,
    "fold": 8.5,
    "cap": 10.125,
    "discs": 12,
    "turn": 13.875,
    "beads": 15.25,
    "landing": 16.625,
    "studio": 19.5,
    "end": LENGTH,
}
STILLS = [
    "P01-09",
    "P01-08",
    "P01-02",
    "P05-01",
    "P05-02",
    "P05-03",
    "P11-04",
    "P10-01",
    "P10-05",
    "P11-01",
    "P08-04",
    "P08-03",
    "P07-04",
    "P07-01",
    "P07-02",
    "P07-10",
]


def sat(t):
    return max(0, min(1, t))


def ease(a, b, t):
    p = sat((t - a) / (b - a))
    return p * p * (3 - 2 * p)


def mix(a, b, t):
    return a + (b - a) * t


def locate(archive, name):
    matches = list(archive.glob("*/" + name))
    if len(matches) != 1:
        raise FileNotFoundError(f"Expected one {name} under {archive}")
    return matches[0]


class Cut:
    def __init__(self, archive, width):
        self.w, self.h = width, width * 9 // 16
        self.size = (self.w, self.h)
        self.art = {}
        for ref in STILLS:
            with Image.open(locate(archive, ref + ".jpg")) as im:
                still = im.convert("RGB")
                still.thumbnail((2500, 3000), R.LANCZOS)
                self.art[ref] = still
        sea = self.art["P05-01"]
        self.sea_margin = sea.crop((int(sea.width * 0.86), 0, sea.width, sea.height))
        self.blocks = self.read_blocks()
        # This short section is camera movement recorded by the artist.
        video = locate(archive, "P08-02.mp4")
        cmd = [
            "ffmpeg",
            "-loglevel",
            "error",
            "-threads",
            "1",
            "-ss",
            "2.25",
            "-i",
            str(video),
            "-t",
            "1.5",
            "-vf",
            "fps=24,scale=640:640",
            "-threads",
            "1",
            "-f",
            "rawvideo",
            "-pix_fmt",
            "rgb24",
            "pipe:1",
        ]
        raw = subprocess.check_output(cmd)
        length = 640 * 640 * 3
        self.arc = [
            Image.frombytes("RGB", (640, 640), raw[pos : pos + length])
            for pos in range(0, len(raw) - length + 1, length)
        ]
        self.x = (np.arange(self.w, dtype="float32") + 0.5) / self.w
        self.y = ((np.arange(self.h, dtype="float32") + 0.5) / self.h)[:, None]

    def read_blocks(self):
        art = self.art["P05-03"].resize((400, 400), R.BILINEAR)
        pix = np.asarray(art)
        labels, _ = ndimage.label(np.min(pix, axis=2) < 215)
        blocks = []
        for box in ndimage.find_objects(labels):
            if not box:
                continue
            y, x = box
            if x.stop - x.start < 12 or y.stop - y.start < 12:
                continue
            color = tuple(
                map(int, pix[(y.start + y.stop) // 2, (x.start + x.stop) // 2])
            )
            blocks.append(
                (x.start / 400, y.start / 400, x.stop / 400, y.stop / 400, color)
            )
        if len(blocks) != 4:
            raise ValueError("The four color blocks could not be registered")
        return sorted(blocks)

    def surface(self, source, anchor=(0.5, 0.5), at=(0.5, 0.5), width=1.2, bg=INK):
        """Place a source landmark at a screen landmark. Width is in screen widths."""
        im = self.art[source] if isinstance(source, str) else source
        step = im.width / (width * self.w)
        ox = anchor[0] * im.width - at[0] * self.w * step
        oy = anchor[1] * im.height - at[1] * self.h * step
        return im.transform(
            self.size,
            Image.Transform.AFFINE,
            (step, 0, ox, 0, step, oy),
            resample=R.BICUBIC,
            fillcolor=bg,
        )

    def wipe(self, old, new, field, edge, softness=0.004):
        mask = np.clip((edge - field) / softness, 0, 1) * 255
        return Image.composite(
            new,
            old,
            Image.fromarray(np.broadcast_to(mask, self.size[::-1]).astype("uint8")),
        )

    def eye(self, t):
        width = mix(1.80, 1.52, ease(0.1, 2.5, t)) + 0.24 * ease(2.78, 3.75, t)
        at = (0.436 + 0.04 * ease(2.6, 3.65, t), 0.455)

        def plate(ref, anchor):
            return self.surface(ref, anchor, at, width)

        photo = plate("P01-09", (0.602, 0.494))
        if t < 0.68:
            # A shaped aperture exposes the unaltered eye in the source picture.
            opening = 0.022 + 1.05 * ease(-0.10, 0.68, t)
            curve = (self.x - 0.44) ** 2 * 0.52 * (1 - ease(0, 0.66, t))
            mask = abs(self.y - 0.455) + curve
            return self.wipe(
                Image.new("RGB", self.size, INK), photo, mask, opening, 0.012
            )
        if t < 1.0:
            return photo
        pencil = plate("P01-08", (0.605, 0.493))
        if t < 1.48:
            return self.wipe(
                photo,
                pencil,
                self.x + 0.10 * (self.y - 0.5),
                mix(-0.1, 1.1, ease(1, 1.48, t)),
            )
        if t < 1.70:
            return pencil
        oil = plate("P01-02", (0.575, 0.470))
        if t < 2.46:
            # Unequal shutters arrive separately, preserving the axis of the eye.
            field = self.x + 0.20 * (self.y > 0.34) - 0.27 * (self.y > 0.65)
            return self.wipe(pencil, oil, field, mix(-0.15, 1.25, ease(1.70, 2.46, t)))
        return oil

    def fly_layout(self):
        width = 0.684
        x = 0.495 - 0.42 * width
        y = 0.50 - 0.565 * width * self.w / self.h
        return width, x, y

    def fly_plate(self, ref, anchor, at, width, sea_back=False):
        img = self.surface(ref, anchor, at, width, bg=(255, 255, 255))
        if not sea_back:
            return img
        # Frame the published square with two narrow waterfront samples; its
        # four figures remain intact inside the central print.
        source = self.art[ref]
        left = int(round((at[0] - anchor[0] * width) * self.w))
        right = int(round(left + width * self.w))
        if left <= 0 and right >= self.w:
            return img
        short = self.sea_margin
        sx = short.width / self.w
        sy = source.height / (width * self.w)
        oy = anchor[1] * short.height - at[1] * self.h * sy
        surround = short.transform(
            self.size,
            Image.Transform.AFFINE,
            (sx, 0, 0, 0, sy, oy),
            R.BICUBIC,
            fillcolor=(105, 172, 205),
        )
        # Small gutters expose the intentional edit instead of inventing shoreline.
        mid = (max(0, left), 0, min(self.w, right), self.h)
        surround.paste(img.crop(mid), (mid[0], 0))
        dr = ImageDraw.Draw(surround)
        for edge in (left, right):
            if 0 < edge < self.w:
                dr.line(
                    (edge, 0, edge, self.h),
                    fill=(238, 241, 226),
                    width=max(1, self.w // 900),
                )
        return surround

    def fall(self, t):
        if t < 4.25:
            return self.fly_plate(
                "P05-01",
                (0.22, 0.44),
                (0.44, 0.48),
                1.8 - 0.2 * ease(3.75, 4.25, t),
                True,
            )
        if t < 4.625:
            return self.fly_plate("P05-01", (0.445, 0.646), (0.50, 0.50), 1.48, True)
        width, _, _ = self.fly_layout()
        progress = ease(4.625, 5.62, t)
        zoom = mix(1.38, width, progress)
        anchor = (mix(0.665, 0.42, progress), mix(0.816, 0.565, progress))
        at = (mix(0.61, 0.495, progress), 0.50)
        water = self.fly_plate("P05-01", anchor, at, zoom, True)
        if t < 6.04:
            return water
        figures = self.fly_plate("P05-02", anchor, at, zoom)
        if t < 6.92:
            return self.wipe(
                water,
                figures,
                self.x + 0.23 * self.y,
                mix(-0.02, 1.26, ease(6.04, 6.92, t)),
                0.007,
            )
        if t < 7.34:
            return figures
        blocks = self.fly_plate("P05-03", anchor, at, zoom)
        # Four diagonal bands trade successive photographed poses for pigment.
        field = self.x + 0.47 * self.y
        if t < 7.58:
            edge = mix(-0.12, 0.49, ease(7.34, 7.53, t))
        elif t < 7.81:
            edge = mix(0.49, 0.71, ease(7.58, 7.75, t))
        elif t < 8.05:
            edge = mix(0.71, 0.94, ease(7.81, 7.97, t))
        else:
            edge = mix(0.94, 1.52, ease(8.05, 8.37, t))
        return self.wipe(figures, blocks, field, edge)

    def folds(self, t):
        width, left, top = self.fly_layout()
        unit = width * self.w
        left *= self.w
        top *= self.h
        lift = ease(8.5, 9.24, t)
        dolly = ease(9.32, 10.125, t)
        zoom = 1 + 6.1 * dolly**2
        blue = self.blocks[-1]
        blue_x = left + (blue[0] + blue[2]) * unit / 2
        blue_y = top + (blue[1] + blue[3]) * unit / 2
        target_x = mix(blue_x, 0.5 * self.w, dolly)
        target_y = mix(blue_y, 0.5 * self.h, dolly)

        def move(x, y):
            return (target_x + (x - blue_x) * zoom, target_y + (y - blue_y) * zoom)

        bg = Image.new("RGB", self.size, (255, 255, 255))
        shadow = Image.new("L", self.size)
        sd = ImageDraw.Draw(shadow)
        rendered = []
        for i, (x, y, x2, y2, color) in enumerate(self.blocks):
            x0, y0 = left + x * unit, top + y * unit
            wide = (x2 - x) * unit
            high = (y2 - y) * unit
            tilt = lift * (0.12 + 0.025 * i)
            A = move(x0, y0)
            B = move(x0 + wide * (1 - 0.12 * lift), y0 - tilt * wide)
            C = move(x0 + wide * (1 - 0.12 * lift), y0 + high - tilt * wide)
            D = move(x0, y0 + high)
            dx = -0.21 * wide * lift * zoom
            dy = -0.17 * wide * lift * zoom
            A2 = (A[0] + dx, A[1] + dy)
            B2 = (B[0] + dx, B[1] + dy)
            D2 = (D[0] + dx, D[1] + dy)
            if lift > 0.02:
                shade = [
                    (v[0] + 0.08 * wide * lift, v[1] + 0.20 * wide * lift)
                    for v in (D, C, B2, A2)
                ]
                sd.polygon(shade, fill=round(55 * lift))
            rendered.append((A, B, C, D, A2, B2, D2, color))
        if lift:
            bg.paste(
                (89, 86, 82),
                (0, 0, self.w, self.h),
                shadow.filter(ImageFilter.GaussianBlur(self.w * 0.009)),
            )
        dr = ImageDraw.Draw(bg)
        for i, (A, B, C, D, A2, B2, D2, color) in enumerate(rendered):
            lighter = tuple(round(c + (255 - c) * 0.37) for c in color)
            darker = tuple(round(c * 0.56) for c in color)
            dr.polygon([A2, B2, B, A], fill=lighter)
            dr.polygon([A2, A, D, D2], fill=darker)
            dr.polygon([A, B, C, D], fill=color)
            if i == 3 and t > 9.30:
                # The existing blue face is the door. Its left edge stays hinged
                # to the measured block, with a separate photographic plate behind.
                aperture = Image.new("L", self.size)
                ImageDraw.Draw(aperture).polygon([A, B, C, D], fill=255)
                bg.paste(self.cap_photo(t), mask=aperture)
                theta = math.radians(151) * ease(9.30, 9.97, t)
                scale = math.cos(theta)
                depth = math.sin(theta) * (B[0] - A[0])
                tip = (
                    A[0] + (B[0] - A[0]) * scale,
                    A[1] + (B[1] - A[1]) * scale - 0.15 * depth,
                )
                foot = (tip[0] + D[0] - A[0], tip[1] + D[1] - A[1])
                brightness = 1 - 0.39 * math.sin(theta) ** 2
                flap = tuple(round(value * brightness) for value in color)
                dr.polygon([A, tip, foot, D], fill=flap)
        return bg

    def cap_photo(self, t):
        p = ease(9.35, 10.055, t)
        return self.surface(
            "P11-04",
            (0.552, 0.291),
            (mix(0.65, 0.554, p), mix(0.72, 0.368, p)),
            mix(0.53, 1.04, p),
        )

    def lay_print(self, back, front, corners, separation):
        """Project a complete photographic sheet onto four screen coordinates."""
        w, h = self.size
        fw, fh = front.size
        source = [(0, 0), (fw, 0), (fw, fh), (0, fh)]
        equations, values = [], []
        for (x, y), (u, v) in zip(corners, source):
            equations.extend(
                ((x, y, 1, 0, 0, 0, -u * x, -u * y), (0, 0, 0, x, y, 1, -v * x, -v * y))
            )
            values.extend((u, v))
        coefficients = np.linalg.solve(equations, values)
        placed = front.transform(
            self.size,
            Image.Transform.PERSPECTIVE,
            coefficients,
            resample=R.BICUBIC,
            fillcolor=INK,
        )
        matte = Image.new("L", self.size)
        ImageDraw.Draw(matte).polygon(corners, fill=255)
        matte = matte.filter(ImageFilter.GaussianBlur(w / 2400))
        if separation > 0:
            shadow = Image.new("L", self.size)
            offset = w * 0.013 * separation
            points = [(x + offset * 0.3, y + offset) for x, y in corners]
            ImageDraw.Draw(shadow).polygon(points, fill=round(88 * separation))
            shadow = shadow.filter(
                ImageFilter.GaussianBlur(max(1, w * 0.006 * separation))
            )
            back.paste((20, 13, 20), (0, 0, w, h), shadow)
        back.paste(placed, mask=matte)
        return back

    def cap(self, t):
        if t <= 10.42:
            return self.cap_photo(t)
        w, h = self.size
        echo = self.surface(
            "P10-01", (0.372, 0.383), (0.35, 0.32), 1.015, bg=(9, 10, 173)
        )
        if t < 11.17:
            # The photo itself slides to the left. The actual color echoes wait beneath.
            p = ease(10.42, 11.17, t)
            x = -1.04 * w * p
            bow = math.sin(math.pi * p)
            corners = [
                (x, -0.045 * h * bow),
                (x + w - 0.03 * w * bow, 0.055 * h * bow),
                (x + w, h - 0.02 * h * bow),
                (x, h + 0.03 * h * bow),
            ]
            return self.lay_print(echo, self.cap_photo(t), corners, bow)
        if t < 11.375:
            return echo
        # Lift the blue print vertically to uncover the artist's phone controls,
        # both hands and the two records. The printed figures move with their sheet.
        p = ease(11.375, 12.0, t)
        y = -1.07 * h * p
        bow = math.sin(math.pi * p)
        corners = [
            (-0.015 * w * bow, y),
            (w + 0.02 * w * bow, y - 0.01 * h * bow),
            (w, h + y + 0.08 * h * bow),
            (0, h + y - 0.025 * h * bow),
        ]
        return self.lay_print(self.camera_print(t), echo, corners, bow)

    def record_framing(self, t):
        p = ease(12.04, 12.66, t)
        return (mix(0.416, 0.485, p), mix(0.322, 0.47, p)), mix(0.71, 1.12, p)

    def camera_print(self, t):
        at, width = self.record_framing(t)
        return self.surface("P10-05", (0.382, 0.320), at, width, bg=(3, 3, 5))

    def records(self, t):
        camera_exit = 12 + 8 / FPS
        if t < camera_exit:
            return self.camera_print(t)
        # The phone excerpt shows the hands close. The full photograph then
        # recedes until both wrists and the original PHILA 3 are in frame.
        grip, scale = self.record_framing(camera_exit)
        widen = ease(camera_exit, 12.83, t)
        at = (mix(grip[0], 0.48, widen), mix(grip[1], 0.295, widen))
        width = mix(scale, 0.65, widen)
        release = ease(13.22, 13.875, t)
        at = (mix(at[0], 0.68, release), mix(at[1], 0.49, release))
        ring = self.surface("P08-04", (0.700, 0.482), at, mix(1.86, 1.15, release))
        # Tip the uncut photo around a diagonal through the red spindle. The
        # photograph's own edges expose the gold plate underneath on both sides.
        p = ease(12.75, 13.52, t)
        if p >= 0.999:
            return ring
        w, h = self.size
        cx, cy = at[0] * w, at[1] * h
        extent = width * w
        left, top = cx - 0.382 * extent, cy - 0.255 * extent
        right, bottom = left + extent, top + extent
        theta = p * math.pi / 2
        ax, ay = math.cos(-0.16), math.sin(-0.16)
        cosine, sine = math.cos(theta), math.sin(theta)
        corners = []
        for x, y in [(left, top), (right, top), (right, bottom), (left, bottom)]:
            x, y = (x - cx) / w, (y - cy) / w
            along = x * ax + y * ay
            depth = (ax * y - ay * x) * sine
            perspective = 1.60 / (1.60 + depth)
            px = x * cosine + ax * along * (1 - cosine)
            py = y * cosine + ay * along * (1 - cosine)
            corners.append((cx + px * perspective * w, cy + py * perspective * w))
        photo = self.lay_print(ring, self.art["P11-01"], corners, 0.35 + 0.65 * sine)
        if t < 12.70:
            # The near-identical grips register across two distinct source crops.
            # Only the camera's black strips move. The photograph already occupies
            # its preview window at the moment the label pixelates.
            phone = self.camera_print(t)
            at, width = self.record_framing(t)
            p = ease(camera_exit, 12.70, t)
            top = round(at[1] * h + (0.178 - 0.320) * width * w)
            bottom = round(at[1] * h + (0.644 - 0.320) * width * w)
            left = round((at[0] - 0.382 * width) * w)
            right = round((at[0] + 0.618 * width) * w)
            if left > 0:
                photo.paste(phone.crop((0, 0, left, h)), (-round(p * left), 0))
            if right < w:
                photo.paste(
                    phone.crop((right, 0, w, h)), (right + round(p * (w - right)), 0)
                )
            if top > 0:
                photo.paste(phone.crop((0, 0, w, top)), (0, -round(p * top)))
            if bottom < h:
                photo.paste(
                    phone.crop((0, bottom, w, h)), (0, bottom + round(p * (h - bottom)))
                )
        return photo

    def turn(self, t):
        age = t - 13.875
        i = min(len(self.arc) - 1, int(age * FPS))
        return self.surface(
            self.arc[i], (0.50, 0.44), (0.5, 0.5), 1.045 + 0.08 * ease(13.875, 15.25, t)
        )

    def beads(self, t):
        k = ease(15.25, 16.625, t)
        return self.surface(
            "P08-03",
            (mix(0.79, 0.60, k), mix(0.359, 0.71, k)),
            (mix(0.68, 0.50, k), 0.52),
            mix(1.42, 2.20, k),
        )

    def landing(self, t):
        # First the circle is alone. At impact the real photograph expands
        # around it; the child's hands have stayed in their source positions.
        p = sat((t - 16.625) / 0.67)
        y = mix(0.05, 0.61, p**2)
        reveal_face = ease(18.70, 19.50, t)
        width = mix(1.30, 1.08, ease(17.34, 18.70, t)) * (1 - 0.45 * reveal_face)
        at = (0.50 - 0.025 * reveal_face, y + 0.08 * reveal_face)
        photo = self.surface("P07-04", (0.525, 0.748), at, width, bg=PAPER)
        if t < 17.78:
            radius = np.sqrt(
                ((self.x - 0.50) * self.w / self.h) ** 2 + (self.y - y) ** 2
            )
            # The mask edge softens by a few pixels; the ball's contour stays drawn.
            radius_limit = 0.138 + 0.97 * ease(17.285, 17.79, t)
            return self.wipe(
                Image.new("RGB", self.size, (43, 15, 21)),
                photo,
                radius,
                radius_limit,
                0.008,
            )
        if t < 18.10:
            return photo
        oil = self.surface("P07-01", (0.527, 0.706), at, width, bg=PAPER)
        if t < 18.84:
            field = abs(self.y - 0.60) + 0.025 * self.x
            return self.wipe(
                photo, oil, field, mix(-0.02, 0.67, ease(18.10, 18.84, t)), 0.004
            )
        return oil

    def studio(self, t):
        p = ease(19.5, 20.52, t)
        # The final images retain their physical portrait proportions.
        scale = mix(0.90, 0.385, p)
        left = mix(0.47, 0.298, p)
        held = self.surface("P07-02", (0.50, 0.52), (left, 0.5), scale, bg=PAPER)
        right = mix(1.39, 0.707, p)
        studio = self.surface("P07-10", (0.50, 0.51), (right, 0.5), 0.385, bg=PAPER)
        edge = (right - 0.385 / 2) * self.w
        if edge < self.w:
            x = max(0, round(edge))
            held.paste(studio.crop((x, 0, self.w, self.h)), (x, 0))
        if t < 19.78:
            return self.wipe(
                self.landing(19.49),
                held,
                self.y + 0.06 * self.x,
                mix(-0.04, 1.1, ease(19.5, 19.78, t)),
                0.008,
            )
        return held

    def frame(self, t):
        sequence = [
            ("fall", self.eye),
            ("fold", self.fall),
            ("cap", self.folds),
            ("discs", self.cap),
            ("turn", self.records),
            ("beads", self.turn),
            ("landing", self.beads),
            ("studio", self.landing),
            ("end", self.studio),
        ]
        return next(fn(t) for end, fn in sequence if t < CUES[end])


def soundtrack():
    rate = 48000
    out = np.zeros((rate * LENGTH, 2), dtype=np.float64)
    rng = np.random.default_rng(413)

    def add(start, s, level, pan=0.5):
        i = int(start * rate)
        n = min(len(s), len(out) - i)
        if n > 0:
            out[i : i + n] += (
                s[:n, None]
                * level
                * np.array([math.cos(pan * math.pi / 2), math.sin(pan * math.pi / 2)])
            )

    def period(s):
        return np.arange(round(s * rate)) / rate

    def ramps(t, attack=0.015, release=0.04):
        return np.minimum(1, t / attack) * np.minimum(
            1, np.maximum(0, (t[-1] - t) / release)
        )

    def chime(start, hz, length, level, pan):
        t = period(length)
        s = sum(
            np.sin(2 * np.pi * hz * mult * t) * np.exp(-t / (length * k)) * amp
            for mult, k, amp in [(1, 0.43, 1), (2.01, 0.24, 0.32), (3.96, 0.105, 0.12)]
        )
        add(start, s * ramps(t, 0.018, 0.06), level, pan)

    def rub(start, length, level, pan, low, high, reverse=False):
        t = period(length)
        n = signal.sosfilt(
            signal.butter(3, [low, high], btype="bandpass", fs=rate, output="sos"),
            rng.normal(size=len(t)),
        )
        shape = (
            np.sin(np.pi * t / length) ** 1.45 if not reverse else (t / length) ** 1.8
        )
        add(start, n * shape * ramps(t, 0.012, 0.035), level, pan)

    def bounce(start, level, pan, decay=0.23):
        t = period(0.8)
        # Descending membrane transient, shell overtone, then room.
        vib = 2 * np.pi * (57 * t + 100 * 0.044 * (1 - np.exp(-t / 0.044)))
        hit = (np.sin(vib) + 0.39 * np.sin(2.13 * vib)) * np.exp(-t / decay)
        tap = signal.sosfilt(
            signal.butter(2, [360, 2500], btype="bandpass", fs=rate, output="sos"),
            rng.normal(size=t.size),
        ) * np.exp(-t / 0.012)
        s = (hit + 0.45 * tap) * ramps(t, 0.002, 0.05)
        add(start, s, level, pan)
        if start + 0.08 < LENGTH:
            add(start + 0.073, s * 0.13, level, 1 - pan)

    # A low chord breathes in before the graphite; the four taps land with Fly.
    chime(0.02, 110, 3.25, 0.12, 0.43)
    chime(0.15, 164.81, 3.25, 0.05, 0.62)
    rub(0.77, 0.63, 0.095, 0.37, 550, 6100)
    rub(1.51, 0.87, 0.19, 0.64, 720, 7100, True)
    chime(2.08, 246.94, 1.65, 0.065, 0.55)
    rub(3.16, 0.58, 0.23, 0.63, 95, 2900, True)
    for t, l, p in [
        (3.75, 0.31, 0.18),
        (4.25, 0.26, 0.34),
        (4.625, 0.34, 0.55),
        (5.63, 0.23, 0.74),
    ]:
        bounce(t, l, p, 0.12)
    rub(5.98, 0.95, 0.21, 0.58, 450, 4800)
    for t, f, p in [
        (7.34, 311.13, 0.24),
        (7.58, 369.99, 0.38),
        (7.81, 466.16, 0.55),
        (8.05, 554.37, 0.70),
    ]:
        chime(t, f, 0.44, 0.095, p)
    chime(8.5, 116.54, 1.45, 0.14, 0.48)
    rub(9.46, 0.67, 0.27, 0.66, 120, 4400, True)
    bounce(10.125, 0.39, 0.52)
    chime(10.78, 220, 0.40, 0.07, 0.38)
    for t, pan in [(10.86, 0.28), (11.04, 0.46), (11.20, 0.66)]:
        rub(t, 0.07, 0.30, pan, 1200, 6900)
    chime(12, 185, 1.28, 0.12, 0.45)
    rub(12.50, 0.5, 0.20, 0.56, 590, 3100, True)
    chime(13.02, 587.33, 1.04, 0.16, 0.59)
    chime(13.91, 293.66, 1.30, 0.08, 0.35)
    rub(14.76, 0.49, 0.095, 0.62, 2000, 6300)
    for t, pan, q in [
        (15.25, 0.71, 1070),
        (15.53, 0.60, 950),
        (15.72, 0.52, 787),
        (15.86, 0.45, 682),
    ]:
        chime(t, q, 0.20, 0.075, pan)
    rub(16.37, 0.24, 0.14, 0.46, 320, 3900)
    bounce(17.29, 0.68, 0.5, 0.195)
    chime(17.42, 110, 2.45, 0.09, 0.45)
    rub(18.09, 0.68, 0.08, 0.62, 450, 4200)
    chime(19.52, 146.83, 2.18, 0.10, 0.62)
    # Protect the quiet studio hold and the encoded tail.
    out[-int(0.28 * rate) :] *= np.linspace(1, 0, int(0.28 * rate))[:, None]
    peak = np.max(np.abs(out))
    return (out * (0.80 / max(peak, 0.001)) * 32767).astype("<i2"), rate


def write_audio(path, pcm, rate):
    with wave.open(str(path), "wb") as f:
        f.setnchannels(2)
        f.setsampwidth(2)
        f.setframerate(rate)
        f.writeframes(pcm.tobytes())


def render(args):
    archive = Path(args.archive)
    if (archive / "artworks").is_dir():
        archive /= "artworks"
    short = args.proof or args.reveal_proof
    width = 640 if short else 1280
    cut = Cut(archive, width)
    # A short proof registers the gaze, the four poses and the painted grip.
    if args.reveal_proof:
        windows = [(8.25, 14.125)]
    elif args.proof:
        windows = [(0, 2.75), (5.65, 9.70), (16.625, 19.5)]
    else:
        windows = [(0, LENGTH)]
    periods = [(round(a * FPS), round(b * FPS)) for a, b in windows]
    target = Path(args.output)
    target.parent.mkdir(parents=True, exist_ok=True)
    tempout = target.with_suffix(".part.mp4")
    pcm, rate = soundtrack()
    with tempfile.TemporaryDirectory() as temp:
        wav = Path(temp) / "score.wav"
        write_audio(
            wav,
            np.concatenate(
                [pcm[a * rate // FPS : b * rate // FPS] for a, b in periods]
            ),
            rate,
        )
        cmd = [
            "ffmpeg",
            "-hide_banner",
            "-loglevel",
            "error",
            "-y",
            "-f",
            "rawvideo",
            "-pix_fmt",
            "rgb24",
            "-s",
            f"{cut.w}x{cut.h}",
            "-r",
            str(FPS),
            "-i",
            "pipe:0",
            "-i",
            str(wav),
            "-c:v",
            "libx264",
            "-preset",
            "veryfast" if short else "medium",
            "-crf",
            "23" if short else "23.5",
            "-pix_fmt",
            "yuv420p",
            "-threads",
            "3",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-movflags",
            "+faststart",
            "-shortest",
            "-metadata",
            "title=Afterimage",
            "-metadata",
            "comment=An editorial study of Carryistic artwork.",
            str(tempout),
        ]
        encoder = subprocess.Popen(cmd, stdin=subprocess.PIPE)
        try:
            for a, b in periods:
                for n in range(a, b):
                    encoder.stdin.write(cut.frame(n / FPS).tobytes())
            encoder.stdin.close()
            if encoder.wait() != 0:
                raise RuntimeError("FFmpeg encode failed")
        finally:
            if encoder.poll() is None:
                encoder.kill()
                encoder.wait()
        tempout.replace(target)
    print(f"{target} | {sum(b-a for a,b in periods)} frames at {FPS} fps")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--archive",
        required=True,
        help="Downloaded reference archive or its artworks directory.",
    )
    parser.add_argument(
        "--output", help="Destination MP4; proofs default to the temporary directory."
    )
    proofs = parser.add_mutually_exclusive_group()
    proofs.add_argument(
        "--proof",
        action="store_true",
        help="Render the short, three-part registration and movement proof.",
    )
    proofs.add_argument(
        "--reveal-proof",
        action="store_true",
        help="Render the blue block, camera and gold-opening reveals together.",
    )
    args = parser.parse_args()
    if args.output is None:
        if args.proof or args.reveal_proof:
            filename = (
                "afterimage-reveal-proof.mp4"
                if args.reveal_proof
                else "afterimage-proof.mp4"
            )
            args.output = Path(tempfile.gettempdir()) / filename
        else:
            args.output = "public/film/afterimage.mp4"
    render(args)
