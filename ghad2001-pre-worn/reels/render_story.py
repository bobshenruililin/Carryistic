"""Story reels: V1 opening, V2-V4 through the hole, V5 Fly echo, V6 mend preview."""
import pathlib, subprocess, math
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops

S = pathlib.Path(__file__).resolve().parent.parent
OUT = S / "reels"; F = S / "fonts"; G = S / "img" / "gen"; WEB = S / "img" / "web"
W, H, FPS = 1920, 1080, 30
INK, PAPER, RAW, MID, PALE, TAB, COPPER = "#10141D", "#FAFBFC", "#1B2A47", "#45689A", "#A9BFD8", "#C8202F", "#C27434"
def font(n, s): return ImageFont.truetype(str(F / n), s)
XB, B, REG, SB, MONO = "f2.ttf", "f1.ttf", "f3.ttf", "f4.ttf", "f5.ttf"
def ease(t): t = max(0, min(1, t)); return t * t * (3 - 2 * t)
def lerp(a, b, t): return a + (b - a) * t

def encode(fr, name):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(FPS), "-i", str(fr / "%04d.png"), "-c:v", "libx264",
                    "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "slow", "-movflags", "+faststart", str(OUT / f"{name}.mp4")], check=True)

def frames_dir(name):
    d = OUT / f"{name}_frames"; d.mkdir(exist_ok=True)
    for f in d.glob("*.png"): f.unlink()
    return d

def cover(im, w, h):
    r = max(w / im.width, h / im.height)
    im = im.resize((int(im.width * r + .5), int(im.height * r + .5)), Image.LANCZOS)
    x, y = (im.width - w) // 2, (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))

def zoom_on(im, cx, cy, z, w=W, h=H):
    """crop around (cx,cy) in normalised coords at zoom z (1 = whole image covering frame)"""
    base = cover(im, w, h) if z <= 1.001 else None
    if base is not None: return base
    big = cover(im, int(w * z), int(h * z))
    x = int(cx * big.width - w / 2); y = int(cy * big.height - h / 2)
    x = max(0, min(big.width - w, x)); y = max(0, min(big.height - h, y))
    return big.crop((x, y, x + w, y + h))

def stand_in(dr, light=True):
    dr.text((W - 64, H - 40), "AI STAND-IN · REPLACE WITH PHOTO", font=font(MONO, 20), fill=("#C9D3E3" if light else "#5B6577"), anchor="rs")

hole = Image.open(G / "hole.png").convert("RGB")
HX, HY = 0.545, 0.47   # centre of the hole's dark interior in the stand-in

def v1():
    fr = frames_dir("V1"); mine = Image.open(WEB / "mine.jpg").convert("RGB")
    n = int(FPS * 7)
    for i in range(n):
        t = i / FPS
        a = zoom_on(mine, .5, .5, 1 + .06 * t / 3)
        b = zoom_on(hole, HX, HY, 1.0 + .05 * max(0, t - 2.6))
        k = ease((t - 2.6) / .8)
        cv = Image.blend(a, b, k) if k > 0 else a
        if t >= 4.4:   # darken for title
            cv = Image.blend(cv, Image.new("RGB", (W, H), "#07090D"), .45 * ease((t - 4.4) / .7))
        strip = Image.new("L", (1, 260)); strip.putdata([int(200 * (k / 259) ** 1.5) for k in range(260)])
        cv.paste(Image.new("RGB", (W, 260), "#07090D"), (0, H - 260), strip.resize((W, 260)))
        dr = ImageDraw.Draw(cv)
        cap1 = "1880s · FOUND IN A MINE SHAFT · SOLD FOR US$87,400 (2022)"
        cap2 = "2026 · TEACH ME DESTRUCTED · PC9 005013599"
        f = font(MONO, 30)
        if t < 3.0: dr.text((128, 960), cap1, font=f, fill="#F3F5F9")
        if t > 3.0: dr.text((128, 960), cap2, font=f, fill="#F3F5F9")
        if t >= 4.6:
            al = ease((t - 4.6) / .6); c = tuple(int(lerp(40, 243, al)) for _ in range(3))
            dr.text((W // 2, 470), "Pre-Worn", font=font(XB, 220), fill=c, anchor="mm")
        dr.text((128, 1010), "1880s pair: photo via ABC7 / @denimdoctors · 2026 frame: AI stand-in until PHOTO 01", font=font(MONO, 20), fill="#C9D3E3")
        cv.save(fr / f"{i:04d}.png")
    encode(fr, "V1-opening"); cv.save(OUT / "V1-opening-still.jpg", quality=90)

def v_hole(name, ground, num, title, lines, dark_text):
    fr = frames_dir(name); n = int(FPS * 3.4)
    txt = INK if dark_text else "#F3F5F9"
    for i in range(n):
        t = i / FPS
        z = 1 + 7 * ease(t / 2.2) ** 1.6
        cv = zoom_on(hole, HX, HY, z)
        k = ease((t - 1.7) / .7)
        if k > 0: cv = Image.blend(cv, Image.new("RGB", (W, H), ground), k)
        dr = ImageDraw.Draw(cv)
        if t > 2.2:
            al = ease((t - 2.2) / .5)
            bg = Image.new("RGB", (1, 1), ground).getpixel((0, 0)); fg = Image.new("RGB", (1, 1), txt).getpixel((0, 0))
            c = tuple(int(lerp(bg[j], fg[j], al)) for j in range(3))
            dr.text((128, 128), num, font=font(MONO, 34), fill=c)
            dr.text((128, 180), title, font=font(XB, 120), fill=c)
            y = 420
            for kk, v in lines:
                dr.text((128, y), kk, font=font(MONO, 24), fill=c); dr.text((520, y - 6), v, font=font(REG, 36), fill=c); y += 92
        if t < 1.9: stand_in(dr)
        cv.save(fr / f"{i:04d}.png")
    encode(fr, name); cv.save(OUT / f"{name}-still.jpg", quality=90)

def cutout():
    im = Image.open(G / "flatlay.png").convert("RGB")
    g = im.convert("L"); mask = g.point(lambda p: 255 if p < 228 else 0).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.MinFilter(5)).filter(ImageFilter.GaussianBlur(1.2))
    rgba = im.copy(); rgba.putalpha(mask)
    bb = mask.getbbox(); return rgba.crop(bb)

def v5():
    fr = frames_dir("V5-fly"); jean = cutout()
    pos = [(230, 70, 95, FIELD := "#E9ECF1", "FIELD"), (500, 165, 125, RAW, "FACTORY"), (830, 270, 160, MID, "SHIP"), (1230, 380, 200, PALE, "HONG KONG")]
    n = int(FPS * 7)
    for i in range(n):
        t = i / FPS
        cv = Image.new("RGB", (W, H), PAPER); dr = ImageDraw.Draw(cv)
        for k, (x, y, h, col, lab) in enumerate(pos):
            appear = ease((t - .25 - k * .45) / .4)
            drop = ease((t - 2.6 - k * .35) / .45)
            jw = int(jean.width * h * 2.2 / jean.height); jh = int(h * 2.2)
            if appear > 0 and drop < 1:
                j = jean.resize((jw, jh), Image.LANCZOS)
                a = j.split()[3].point(lambda p: int(p * appear * (1 - drop)))
                j.putalpha(a); cv.paste(j, (x, y - int(jh * .25)), j)
            if drop > 0:
                s = int(h * .9 * drop); cx, cy = x + jw // 2, y + jh // 3
                dr.rectangle([cx - s // 2, cy - s // 2, cx + s // 2, cy + s // 2], fill=col, outline=("#B6BDC9" if col == FIELD else None))
            if appear > .5:
                dr.text((x, y + int(jh * .78)), lab, font=font(MONO, 26), fill="#5B6577")
        if t > 4.6:
            al = ease((t - 4.6) / .6); c = tuple(int(lerp(250, v, al)) for v in (16, 20, 29))
            dr.multiline_text((128, 860), "Globalisation made this pair cheap by spreading it across borders.\nIts health costs land where its record stops.", font=font(B, 52), fill=c, spacing=14)
        stand_in(dr, light=False)
        cv.save(fr / f"{i:04d}.png")
    encode(fr, "V5-fly"); cv.save(OUT / "V5-fly-still.jpg", quality=90)

def v6():
    fr = frames_dir("V6-mend"); n = int(FPS * 8)
    base = zoom_on(hole, HX, HY, 1.35)
    # hole interior box in frame coords (approx, stand-in)
    x0, x1, y0, y1 = 610, 1330, 330, 760
    stitches = 22
    for i in range(n):
        t = i / FPS
        cv = base.copy(); dr = ImageDraw.Draw(cv)
        done = min(stitches, int(stitches * ease(t / 5.2) + .0001))
        for s in range(done):
            x = lerp(x0, x1, (s + .5) / stitches)
            dr.line([(x - 8, y0 + 10), (x + 8, y1 - 10)], fill=COPPER, width=9)
        if t > 5.6:
            k = ease((t - 5.6) / .8)
            cv = Image.blend(cv, Image.new("RGB", (W, H), "#07090D"), .55 * k); dr = ImageDraw.Draw(cv)
            c = tuple(int(lerp(30, 243, k)) for _ in range(3))
            dr.text((W // 2, 520), "Pre-Worn", font=font(XB, 200), fill=c, anchor="mm")
            dr.text((W // 2, 680), "Thank you", font=font(REG, 44), fill=c, anchor="mm")
        dr.text((128, 1010), "Preview: film our own darn as stop-motion on Sunday and replace this", font=font(MONO, 20), fill="#C9D3E3")
        cv.save(fr / f"{i:04d}.png")
    encode(fr, "V6-mend"); cv.save(OUT / "V6-mend-still.jpg", quality=90)

import sys
if __name__ == "__main__" and len(sys.argv) > 1:
    for a in sys.argv[1:]: globals()[a]()
    sys.exit()
if __name__ == "__main__":
    v1()
    v_hole("V2-before", RAW, "2 · BEFORE CONSUMPTION", "Who made the wear", [("WHAT MOVES", "Cotton, dye, cloth, workers’ time"), ("ROUTE", "Field → mill → factory → finisher → ship"), ("WHO CONTROLS", "Buyers’ price and deadline; states’ rules"), ("CONDITIONS", "Water, inspection, insurance"), ("WHO BEARS HARM", "Pickers, dyers, finishers, sewers, port neighbours")], False)
    v_hole("V3-usage", MID, "3 · USAGE & CONSUMPTION", "Who sells the wear", [("WHAT MOVES", "Images, money, the pair, wash water"), ("ROUTE", "Campaign → feed → shop → wardrobe → drain"), ("WHO CONTROLS", "Levi’s marketing, platforms, the wearer"), ("CONDITIONS", "Income, climate, home size"), ("WHO BEARS HARM", "The wearer’s skin and budget; rivers; Arctic sediment")], False)
    v_hole("V4-after", PALE, "4 · AFTER CONSUMPTION", "Who carries it next", [("WHAT MOVES", "Used clothes, bales, fibres"), ("ROUTE", "HK bin → sorter → export → market → landfill or shore"), ("WHO CONTROLS", "Collectors, traders, importing states"), ("CONDITIONS", "Sorting capacity, demand, waste systems"), ("WHO BEARS HARM", "Porters, traders, coastal neighbourhoods")], True)
    v5(); v6(); print("done")
