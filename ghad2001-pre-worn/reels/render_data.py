"""Render the two real-data reels: R-A Aral Sea 2000-2018 (NASA) and R-B silicosis dots (Akgun 2015)."""
import pathlib, subprocess, urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageOps

S = pathlib.Path(__file__).resolve().parent.parent
OUT = S / "reels"
F = S / "fonts"
W, H, FPS = 1920, 1080, 30
INK, PAPER, RAW, TAB, GREY, SOFT = "#10141D", "#FAFBFC", "#1B2A47", "#C8202F", "#8B95A7", "#C9D3E3"
def font(n, size): return ImageFont.truetype(str(F / n), size)
ARCH_XB, ARCH_B, INTER, INTER_SB, MONO = "f2.ttf", "f1.ttf", "f3.ttf", "f4.ttf", "f5.ttf"

def encode(frames_dir, name):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(FPS), "-i", str(frames_dir / "%04d.png"),
                    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "slow", "-movflags", "+faststart", str(OUT / name)], check=True)

def lerp(a, b, t): return a + (b - a) * t
def ease(t): return t * t * (3 - 2 * t)

# ---------- R-A: Aral Sea ----------
def aral():
    d = OUT / "aral_src"; d.mkdir(exist_ok=True)
    years = list(range(2000, 2019))
    html = (S / "dl" / "aral.html").read_text()
    import re
    urls = {int(m.group(1)[:4]): m.group(0) for m in re.finditer(r"https://[^\"' ]+woc/images/aral/aralsea_tmo_(\d+)\.jpg", html)}
    imgs = []
    for y in years:
        p = d / f"{y}.jpg"
        if not p.exists():
            urllib.request.urlretrieve(urls[y], p)
        im = Image.open(p).convert("L").resize((860, 860), Image.LANCZOS)
        im = ImageOps.autocontrast(im, cutoff=1)
        im = ImageOps.colorize(im, black="#14203A", white="#F2F5FA")
        imgs.append(im)
    fr = OUT / "aral_frames"; fr.mkdir(exist_ok=True)
    for f in fr.glob("*.png"): f.unlink()
    hold, fade = 12, 6
    seq = []
    for i, im in enumerate(imgs):
        for k in range(hold): seq.append((i, None, 0))
        if i < len(imgs) - 1:
            for k in range(fade): seq.append((i, i + 1, (k + 1) / (fade + 1)))
    seq += [(len(imgs) - 1, None, 0)] * 45
    big, lab, src = font(ARCH_XB, 200), font(MONO, 28), font(MONO, 24)
    head = font(ARCH_B, 52)
    for n, (a, b, t) in enumerate(seq):
        cv = Image.new("RGB", (W, H), RAW)
        im = imgs[a] if b is None else Image.blend(imgs[a], imgs[b], t)
        cv.paste(im, (128, 110))
        dr = ImageDraw.Draw(cv)
        year = years[a] if (b is None or t < .5) else years[b]
        dr.text((1080, 150), "ARAL SEA · AUGUST", font=lab, fill=SOFT)
        dr.text((1072, 190), str(year), font=big, fill="#F3F5F9")
        # progress line
        x0, x1 = 1080, 1792
        prog = (a + (t if b is not None else 0)) / (len(years) - 1)
        dr.line([(x0, 460), (x1, 460)], fill="#3A4C70", width=4)
        dr.line([(x0, 460), (lerp(x0, x1, prog), 460)], fill="#C27434", width=4)
        dr.text((x0, 480), "2000", font=src, fill=SOFT); dr.text((x1 - 70, 480), "2018", font=src, fill=SOFT)
        dr.multiline_text((1080, 600), "Irrigating cotton\ndrained most of\nthe Aral Sea.", font=head, fill="#F3F5F9", spacing=12)
        dr.text((128, 1000), "NASA Earth Observatory · World of Change · Terra MODIS · public domain · colour graded, nothing else changed", font=src, fill=SOFT)
        cv.save(fr / f"{n:04d}.png")
    encode(fr, "R-A-aral.mp4")
    cv.save(OUT / "R-A-aral-still.jpg", quality=90)

# ---------- R-B: silicosis dots ----------
def dots():
    fr = OUT / "dots_frames"; fr.mkdir(exist_ok=True)
    for f in fr.glob("*.png"): f.unlink()
    r, gap, cols = 22, 20, 10
    def grid_pos(ox, oy, i):
        c, rr = i % cols, i // cols
        return ox + c * (2 * r + gap), oy + rr * (2 * r + gap)
    L, R, top = 128, 900, 420
    lab, src = font(MONO, 30), font(MONO, 24)
    head = font(ARCH_B, 56)
    total = int(FPS * 8.5)
    for n in range(total):
        t = n / FPS
        cv = Image.new("RGB", (W, H), PAPER); dr = ImageDraw.Draw(cv)
        dr.text((128, 110), "FORMER DENIM SANDBLASTERS, TURKEY · THE SAME 74 PEOPLE", font=lab, fill="#5B6577")
        dr.text((L, top - 60), "2007 · 41 OF 74", font=lab, fill="#5B6577")
        dr.text((R, top - 60), "2011 · 71 OF 74", font=lab, fill=TAB)
        nl = 0 if t < .4 else min(41, int(ease(min(1, (t - .4) / 2.0)) * 41 + .0001))
        nr = 0 if t < 2.8 else min(71, int(ease(min(1, (t - 2.8) / 2.4)) * 71 + .0001))
        for i in range(74):
            x, y = grid_pos(L, top, i)
            on = i < nl
            dr.ellipse([x, y, x + 2 * r, y + 2 * r], fill=("#8B95A7" if on else None), outline="#8B95A7", width=3)
            x, y = grid_pos(R, top, i)
            on = i < nr
            dr.ellipse([x, y, x + 2 * r, y + 2 * r], fill=(TAB if on else None), outline=(TAB if on else "#B6BDC9"), width=3)
        if t > 5.6:
            a = min(1, (t - 5.6) / .6)
            col = tuple(int(lerp(250, c, a)) for c in (16, 20, 29))
            dr.multiline_text((128, 190), "Four years after the sandblasting stopped,\n71 of 74 former workers had silicosis.", font=head, fill=col, spacing=14)
        dr.text((128, 1000), "Akgun et al., Chest 2015 · 74 re-examined of 145 first studied; 9 had died · no link to Levi’s established", font=src, fill="#5B6577")
        cv.save(fr / f"{n:04d}.png")
    encode(fr, "R-B-silicosis.mp4")
    cv.save(OUT / "R-B-silicosis-still.jpg", quality=90)

if __name__ == "__main__":
    dots(); print("done")
