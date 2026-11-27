import json, pathlib, copy
from pptx import Presentation
from pptx.util import Emu
from lxml import etree

H = pathlib.Path(__file__).resolve().parent
meta = json.load(open(H / "meta.json"))
prs = Presentation()
prs.slide_width, prs.slide_height = Emu(12192000), Emu(6858000)
blank = prs.slide_layouts[6]
W, Hh = prs.slide_width, prs.slide_height
pngs = sorted((H / "png").glob("*.png"))
NS = "http://schemas.openxmlformats.org/presentationml/2006/main"

def autoplay(slide, spid, dur_ms):
    """Replace python-pptx's click-to-play timing with play-on-slide-entry."""
    sld = slide._element
    for t in sld.findall(f"{{{NS}}}timing"):
        sld.remove(t)
    xml = f'''<p:timing xmlns:p="{NS}"><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>
<p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>
<p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="indefinite"/><p:cond evt="onBegin" delay="0"><p:tn val="2"/></p:cond></p:stCondLst><p:childTnLst>
<p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>
<p:par><p:cTn id="5" presetID="1" presetClass="mediacall" presetSubtype="0" fill="hold" nodeType="afterEffect"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>
<p:cmd type="call" cmd="playFrom(0.0)"><p:cBhvr><p:cTn id="6" dur="{dur_ms}" fill="hold"/><p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl></p:cBhvr></p:cmd>
</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par>
</p:childTnLst></p:cTn><p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst><p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq>
<p:video><p:cMediaNode vol="80000"><p:cTn id="7" fill="hold" display="0"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst></p:cTn><p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl></p:cMediaNode></p:video>
</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>'''
    el = etree.fromstring(xml)
    ext = sld.find(f"{{{NS}}}extLst")
    if ext is not None: ext.addprevious(el)
    else: sld.append(el)

DUR = {"V1-opening": 7000, "V5-fly": 7000, "V2-before": 3400, "V3-usage": 3400, "V4-after": 3400, "V6-mend": 8000, "R-A-aral": 13000, "R-B-silicosis": 8500}
for sid, png in zip(meta["order"], pngs):
    assert sid in png.name, (sid, png.name)
    s = prs.slides.add_slide(blank)
    s.shapes.add_picture(str(png), 0, 0, W, Hh)
    if sid in meta["videos"]:
        mp4 = pathlib.Path(meta["videos"][sid])
        mv = s.shapes.add_movie(str(mp4), 0, 0, W, Hh, poster_frame_image=str(png), mime_type="video/mp4")
        autoplay(s, mv.shape_id, DUR.get(mp4.stem, 8000))
    s.notes_slide.notes_text_frame.text = meta["notes"][sid]
out = H / "Pre-Worn-with-films.pptx"
prs.save(out)
print(out, out.stat().st_size)
