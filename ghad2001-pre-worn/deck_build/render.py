"""Render each deck slide to a 1920x1080 PNG locally, then assemble a .pptx with the films embedded and notes."""
import json, re, pathlib, subprocess, html
S = pathlib.Path(__file__).resolve().parent.parent
D = S / "deck" / "project"; A = S / "deck_assets"; R = S / "reels"; OUT = S / "deck_build"
B = {
 "f001398ec985322d241b3151f2890bae": A/"listing.jpg", "b0fdae1ba5a8d50119c59647b79c91db": A/"flatlay-standin.jpg",
 "25256ea70db6e7f0d3cb257f8244eea3": A/"hole-standin.jpg", "5d6b5dd9865a0c21935a15740d829704": A/"fahim-ilo.jpg",
 "f3a4a48b33f179e0bed4784bd1e2ff10": A/"launderette-1985.jpg", "a5c590bafff7bbdef3b34f55c1cc2d99": A/"launderette-2025.jpg",
 "842d6194aa179b1f5d046ff5c6842577": A/"rose-2026.jpg", "7b9ca86f38853b602b3912abe7941846": A/"rack-standin.jpg",
 "d42c3aa655d2706947fe4b81750e644b": A/"kantamanto-atmos.jpg", "5ba58f3ec4fc60852371086dacf1209c": A/"R-A-aral-still.jpg",
 "2679d074e6c7e518b9aad823772025eb": A/"R-B-silicosis-still.jpg", "94343439150c8fcb304d51dd0a9dc6a6": A/"V2-before-still.jpg",
 "83e0e9c2ecd5bbd2011c47a184157724": A/"V3-usage-still.jpg", "242587c04803fba082aeeead15d247b4": A/"V4-after-still.jpg",
 "b76b309884d6ad75744d0b500126e367": A/"V6-mend-still.jpg", "88ef5780151a02f7ca0b757b48db3fcd": A/"V1-opening-still.jpg",
 "299c507678e809c9f8d2cfe61aa3a9b6": A/"V5-fly-still.jpg",
}
V = {"59c03206bd269e0ef84a160afa37fcf9": R/"V1-opening.mp4", "13bd1867f65638aa50345533680fb0e3": R/"V5-fly.mp4",
     "c673f8f8f754b8a640869ca17fce0503": R/"V2-before.mp4", "8539bae28dae498c7cde2a76b9546eae": R/"V3-usage.mp4",
     "a72913b1d096be687e16b94ef4a5c0f9": R/"V4-after.mp4", "dde01d663ec962dca9763085e5c6478f": R/"V6-mend.mp4",
     "4b78f67ce22deb4ffd0ce763672e0822": R/"R-A-aral.mp4", "615ec9c0a720958d08559256f7e14195": R/"R-B-silicosis.mp4"}
idx = json.loads((D / "deck.json").read_text())
css = (D / "deck.css").read_text()
slides, notes, videos = [], {}, {}
for sid in idx["order"]:
    h = (D / "slides" / f"{sid}.html").read_text()
    m = re.search(r"<aside>(.*?)</aside>", h, re.S)
    notes[sid] = html.unescape(m.group(1).strip()) if m else ""
    h = re.sub(r"<aside>.*?</aside>", "", h, flags=re.S)
    mv = re.search(r'data-video="/_blob/([0-9a-f]+)"', h)
    if mv: videos[sid] = V[mv.group(1)]
    h = re.sub(r'/_blob/([0-9a-f]+)', lambda m: B[m.group(1)].as_uri() if m.group(1) in B else "", h)
    slides.append(h)
page = f"""<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400..800&family=Inter:wght@400;600&family=JetBrains+Mono:wght@400;500&display=swap">
<style>{css}
html,body{{margin:0;background:#333}} section{{position:relative;width:1920px;height:1080px;overflow:hidden;display:block}}
section *{{animation:none!important}} .fragment{{opacity:1!important}} h2,p{{margin-block:0}}
img:not([src]){{display:block}}
</style></head><body>{''.join(slides)}</body></html>"""
(OUT / "preview.html").write_text(page)
json.dump({"order": idx["order"], "notes": notes, "videos": {k: str(v) for k, v in videos.items()}}, open(OUT / "meta.json", "w"), ensure_ascii=False)
print("slides", len(slides), "videos", len(videos))
