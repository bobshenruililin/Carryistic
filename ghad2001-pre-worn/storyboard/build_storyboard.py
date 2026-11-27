import base64, math, pathlib, html

S = pathlib.Path(__file__).parent
src = (S / "pre-worn.src.html").read_text()

def b64(p):
    return "data:image/jpeg;base64," + base64.b64encode(pathlib.Path(p).read_bytes()).decode()

# Carry refs and graded images
for f in (S / "carry").glob("*.jpg"):
    src = src.replace("{{c-%s}}" % f.stem, b64(f))

# starburst
pts = []
for i in range(24):
    r = 48 if i % 2 == 0 else 24
    a = math.pi * 2 * i / 24 - math.pi / 2
    pts.append(f"{50 + r * math.cos(a):.1f},{50 + r * math.sin(a):.1f}")
src = src.replace("{{STAR}}", f'<polygon points="{" ".join(pts)}"/>')

# draft contact sheet
verdicts = [
 ("rework","Keep the ring on the hole; drop cream and italic"),("keep","“Order by number” moves into F01"),("cut","The receipt gives way to the label"),
 ("move","Etymology is a mini-history: backup"),("keep","Becomes the strip of stages (F03)"),("rework","Becomes the swatch chart (F07)"),
 ("rework","Real NASA images instead (F08)"),("move","Merged into F07"),("rework","Our own macro photo (F10)"),
 ("rework","A credited real photo (F13)"),("keep","The peak (F11)"),("keep","Extended into the constraint chain (F12)"),
 ("move","Merged into F15, without the illustration"),("keep","Fahim stays (F15)"),("move","Merged into F15"),
 ("keep","The question stays (F14); the image goes"),("move","One line in F14"),("keep","The finding stays in F14"),
 ("rework","Feeds F12 and F28"),("move","Patent story: backup"),("keep","Inside the advertising slide (F19)"),
 ("rework","Real logistics and port air (F17)"),("keep","Data stays; our pair on a Hong Kong rack (F20)"),("move","Merged into F22"),
 ("keep","Stays (F22)"),("rework","A real Hong Kong bin photo (F24)"),("move","Merged into F24"),
 ("rework","A credited Kantamanto photo (F25)"),("rework","Three fates and EU law (F26)"),("keep","Logic becomes three stitches (F28)"),
 ("cut","The mended hole ends instead (F29)"),
]
labels = {"keep":"Keep","rework":"Rework","cut":"Cut","move":"Merge or backup"}
cells = []
for i, (v, t) in enumerate(verdicts, 1):
    img = b64(S / "thumbs" / f"d-{i:02d}.jpg")
    cells.append(f'<figure><img loading="lazy" src="{img}" alt="Draft page {i}"><figcaption><span class="chip c-{v}">{labels[v]}</span>{i:02d} · {html.escape(t)}</figcaption></figure>')
src = src.replace("{{SHEET}}", "".join(cells))

def dots(n, cls=""):
    return f'<div class="dots {cls}">' + "".join('<i class="on"></i>' if k < n else "<i></i>" for k in range(74)) + "</div>"

def jean(x, y, w, color, op=1):
    return f'<svg style="left:{x}cqw;top:{y}cqw;width:{w}cqw;height:{w*1.5}cqw;color:{color};opacity:{op}" viewBox="0 0 40 60" fill="currentColor"><use href="#jean"/></svg>'

def flowcard(rows):
    return '<div class="flow">' + "".join(f"<p><b>{k}</b>{v}</p>" for k, v in rows) + "</div>"

A = '<span class="tagl park">{}</span>'
R = '<span class="tagl rub">{}</span>'

def card(fid, time, spk, title, frame, onscreen, say, media, keep, links, extra=""):
    return f'''<article class="card" id="{fid.lower()}">
<div class="fr {frame[0]}" role="img" aria-label="{html.escape(title)}">{frame[1]}</div>
<div class="top"><span class="id">{fid} · {time} · {spk}</span></div>
<h4>{title}</h4>
<dl><dt>On screen</dt><dd>{onscreen}</dd><dt>Say</dt><dd>{say}</dd><dt>Image</dt><dd>{media}</dd><dt>Keep</dt><dd>{keep}</dd></dl>
<div class="links">{links}{extra}</div></article>'''

def chap(n, name, time, colorvar, who):
    return f'<div class="chap"><span class="sw" style="background:var({colorvar});border:1px solid var(--rule)"></span><h3>{n} · {name}</h3><span class="mono">{time} · {who}</span></div>'

F = []
F.append(chap(1, "Introduction", "0:00–2:00", "--f-black", "Speaker 1"))
F.append('<div class="board">')
F.append(card("F01","0:00–0:25","Speaker 1","Two pairs",
 ("g-black", '<div class="ln" style="left:8cqw;top:12cqw;width:22cqw;height:34cqw;color:#cfd6e2"></div>' + jean(12,15,14,"#cfd6e2",.9) +
  '<p class="lab" style="left:8cqw;top:48cqw;color:#cfd6e2;width:30cqw">1880s · FOUND IN A MINE<br>US$87,400 (2022)</p>' +
  '<div class="twill" style="left:44cqw;top:8cqw;right:6cqw;bottom:16cqw;inset:auto;width:50cqw;height:38cqw"></div><div class="hole" style="left:56cqw;top:16cqw;width:26cqw;height:20cqw"></div>' +
  '<p class="lab" style="left:44cqw;top:48cqw;color:#cfd6e2;width:50cqw">2026 · TEACH ME DESTRUCTED<br>PC9 005013599</p><p class="h c big" style="top:40cqw;color:#f3f5f9;opacity:0">.</p>'),
 "Left, a line drawing of the 1880s pair. Right, our knee hole. Then the title, <strong>Pre-Worn</strong>.",
 "“In 2022 a pair of 1880s Levi’s, worn by a miner, sold for 87,400 US dollars. Its wear made it valuable. Today Levi’s sells the wear new. This pair was ripped in a factory before anyone wore it. On any given day nearly half the world is in denim. We followed one pair.”",
 "Line drawing traced from the auction photo (documented). PHOTO 01 (seen). Reel V1.",
 "The hole’s frayed white weft. Reject if the 1880s pair could be mistaken for ours.",
 A.format("Brief: goods we take for granted") + A.format("Miller &amp; Woodward: half the world in denim")))
F.append(card("F02","0:25–0:55","Speaker 1","The label",
 ("", '<div class="ln" style="left:6cqw;top:10cqw;width:27cqw;height:16cqw"></div><p class="lab" style="left:8cqw;top:12cqw;width:24cqw">1880s POCKET<br><br>THE ONLY KIND<br>MADE BY WHITE LABOR</p>' +
  '<div class="ln" style="left:37cqw;top:10cqw;width:27cqw;height:16cqw"></div><p class="lab" style="left:39cqw;top:12cqw;width:24cqw">2026 · LEVI’S HONG KONG<br><br>—</p>' +
  '<div class="ln" style="left:68cqw;top:10cqw;width:27cqw;height:16cqw"></div><p class="lab" style="left:70cqw;top:12cqw;width:24cqw">2026 · LEVI’S US<br><br>MADE IN CHINA</p><div class="tab" style="left:94cqw;top:10cqw"></div>' +
  '<p class="h" style="top:33cqw;font-size:6cqw;width:80cqw">Yours: Made in ______</p><p class="s">R01 · R25 · press reports of the 2022 auction</p>'),
 "Three label texts, then “Yours: Made in ____”.",
 "Ask the room to check a label, then pause for three seconds. “That pocket was printed while California was pushing Chinese workers out. In 1882 the US banned Chinese labour migration. Labels have always said who made the clothes when the seller thought it would sell. Our pair’s Hong Kong page says nothing.”",
 "Line drawing (documented) and PHOTO 02 (seen). Red tab.",
 "Legible label words. Reject if the label shown is not ours and is not marked as a comparison pair.",
 A.format("Migration: labour, exclusion") + A.format("Thesis: the record")))
F.append(card("F03","0:55–1:30","Speaker 1","The record stops",
 ("", "".join(f'<div class="{"ph" if k in (2,5) else ""}" style="left:{5+k*11.4}cqw;top:22cqw;width:10.2cqw;height:13cqw;background:{"" if k in (2,5) else "var(--f-raw)"};border-radius:.4cqw" data-l=""></div>' for k in range(8)) +
  "".join(f'<p class="lab" style="left:{5+k*11.4}cqw;top:37cqw;width:10.4cqw">{n}</p>' for k, n in enumerate(["FIELD","MILL","FACTORY","FINISH","SHIP","SHOP","WARDROBE","AFTER"])) +
  '<p class="h" style="top:7cqw">We could see two of eight stages.</p><p class="s">R01 · R05 · R06 · R25 · R28</p>'),
 "A Carry-style strip of eight windows. Two are lit (factory country, shop) and six are flat indigo.",
 "“Levi’s publishes more than most brands: a supplier map, a life-cycle study. If the trail goes dark for Levi’s, it goes dark sooner for others. Where it went dark we extrapolated, as the brief asks, and the slides show which is which.” Then the evidence key: photograph, line, paint, red tab.",
 "Built strip plus thumbnails of our photos.",
 "“Two of eight” readable from the back row. Reject if more than 15 words besides the stage names.",
 A.format("Brief: processes we do not see") + A.format("Method: following the thing")))
F.append(card("F04","1:30–2:00","Speaker 1","Where the record stops, the cost lands",
 ("", jean(10,6,6,"var(--f-ink)",.25) + jean(22,13,8,"var(--f-ink)",.25) + jean(36,20,10,"var(--f-ink)",.25) + jean(53,26,12.5,"var(--f-ink)",.25) +
  '<div style="left:11cqw;top:8cqw;width:4cqw;height:4cqw;background:var(--f-weft);border:.15cqw solid var(--f-grey)"></div><div style="left:23cqw;top:16cqw;width:6cqw;height:6cqw;background:var(--f-raw)"></div><div style="left:37cqw;top:25cqw;width:8cqw;height:8cqw;background:var(--f-mid)"></div><div style="left:54cqw;top:33cqw;width:11cqw;height:11cqw;background:var(--f-pale)"></div>' +
  '<p class="tx" style="left:70cqw;top:9cqw;width:26cqw;font-family:var(--display);font-weight:650;font-size:2.8cqw;line-height:1.15">Globalisation made this pair cheap by spreading it across borders. Its health costs land where its record stops.</p>' +
  '<p class="s">1 Introduction · 2 Before consumption · 3 Usage &amp; consumption · 4 After consumption · 5 Conclusion &amp; suggestions</p>'),
 "The <em>Fly</em> echo. Our pair four times down a diagonal (field, factory, ship, Hong Kong), growing as it nears us. The pairs drop out and four squares remain. The thesis and the five section names follow.",
 "The thesis, then the test: “does the person who bears the cost have a record of, or a say in, the decision?” Then the route and the handoff: “Speaker 2 starts in the field.”",
 "Our cut-out pair ×4. Reel V5, built with Morph.",
 "The diagonal’s order matches the speaking order. Reject if the squares read as data.",
 A.format("Unifying idea A: decisions separated from consequences") + A.format("A stated criterion")))
F.append('</div>')

F.append(chap(2, "Before consumption", "2:00–10:20", "--f-raw", "Speakers 2, 3, 4"))
F.append('<div class="board">')
F.append(card("F05","2:00–2:15","Speaker 2","Through the hole: before",
 ("g-raw", '<div class="twill"></div><div class="hole dark" style="left:8cqw;top:14cqw;width:34cqw;height:27cqw"></div>' +
  flowcard([("WHAT MOVES","Cotton, dye, cloth, workers’ time"),("ROUTE","Field → mill → factory → finisher → ship"),("WHO CONTROLS","Buyers’ price and deadline; states’ rules"),("CONDITIONS","Water, inspection, insurance"),("WHO BEARS HARM","Pickers, dyers, finishers, sewers, port neighbours")])),
 "Reel V2 pushes through the hole into the waistband indigo, then Park’s five-line flow card appears.",
 "Read only the last line aloud. The card stays up for the marker.",
 "Reel V2 (Kling, from PHOTO 01).",
 "The frayed edge until the push passes through it.",
 A.format("Park’s five flow questions")))
F.append(card("F06","2:15–3:00","Speaker 2","What it’s made of",
 ("", jean(37,8,17,"var(--f-mid)") +
  "".join(f'<div style="left:{x1}cqw;top:{y}cqw;width:{x2-x1}cqw;height:0;border-top:.15cqw solid var(--f-ink)"></div><p class="lab" style="left:{lx}cqw;top:{y-1.2}cqw;width:22cqw">{t}</p>' for x1,x2,y,lx,t in [(56,72,11,73,"BUTTON FLY · METAL"),(56,72,17,73,"RIVETS · COPPER"),(56,72,24,73,"LEATHER PATCH"),(24,40,14,4,"DENIM · INDIGO WARP"),(24,40,20,4,"WHITE WEFT"),(24,40,30,4,"THREAD · POCKET BAGS")]) +
  '<p class="h" style="top:44cqw;font-size:3.6cqw;width:80cqw">One pair, at least five supply chains.</p><div class="tab" style="left:94cqw;top:8cqw"></div><p class="s">PHOTO 08 · R01 · R03 · R05 · count after inspecting the pair</p>'),
 "An overhead flat-lay of our pair, with line callouts to each component.",
 "Where each part comes from: cotton from one of the big growers, synthetic indigo made from petrochemicals since 1897, metals for the hardware, leather for the patch. Levi’s sources from about 30 countries.",
 "PHOTO 08 (seen) with line callouts. Red tab.",
 "Every callout touches the right part. Reject if it names a part our pair lacks.",
 R.format("What is it made from?") + R.format("Where do parts come from?")))
F.append(card("F07","3:00–3:40","Speaker 2","Where the water and the carbon go",
 ("", '<p class="lab" style="left:6cqw;top:20cqw">WATER</p><p class="lab" style="left:6cqw;top:37cqw">CLIMATE</p>' +
  '<div class="row" style="left:18cqw;top:10cqw;height:20cqw">' + "".join(f'<div style="width:{math.sqrt(v)*2.3:.1f}cqw;height:{math.sqrt(v)*2.3:.1f}cqw;background:{c}"></div>' for v,c in [(68,"var(--f-raw)"),(6,"var(--f-mid)"),(1,"var(--f-mid)"),(1,"var(--f-mid)"),(23,"var(--f-copper)"),(1,"var(--f-grey)")]) + '</div>' +
  '<div class="row" style="left:18cqw;top:30cqw;height:14cqw">' + "".join(f'<div style="width:{math.sqrt(v)*2.3:.1f}cqw;height:{math.sqrt(v)*2.3:.1f}cqw;background:{c}"></div>' for v,c in [(9,"var(--f-raw)"),(22,"var(--f-mid)"),(10,"var(--f-mid)"),(8,"var(--f-mid)"),(37,"var(--f-copper)"),(5,"var(--f-grey)")]) + '</div>' +
  '<p class="h" style="top:5cqw;left:60cqw;width:34cqw;font-size:3.4cqw">Two-thirds of the water is used growing the cotton.</p><p class="s">R04 · Levi Strauss &amp; Co. 2015 life-cycle study · squares sized by share · check figures</p>'),
 "A swatch card after Carry’s <em>Fly</em>: two rows of squares sized by each life-cycle stage’s share. Water is led by the fibre (68%), climate by home care (37%).",
 "Then: “Notice what this study counts: water, carbon, energy. It has no row for lungs. The rest of this chapter is about that gap.”",
 "Data from R04 (documented).",
 "Square areas in proportion. Reject if 2009 and 2015 figures are mixed.",
 A.format("Scientific myopia: the whole and the part") + A.format("Planetary health")))
F.append(card("F08","3:40–4:15","Speaker 2","A sea for cotton",
 ("g-raw", '<img src="{{c-aral-2000}}" style="left:5cqw;top:9cqw;width:28cqw;height:28cqw"><img src="{{c-aral-last}}" style="left:34.5cqw;top:9cqw;width:28cqw;height:28cqw">' +
  '<p class="lab" style="left:5cqw;top:38.5cqw;color:#cfd6e2">AUG 2000</p><p class="lab" style="left:34.5cqw;top:38.5cqw;color:#cfd6e2">AUG 2018</p>' +
  '<p class="h" style="left:67cqw;top:9cqw;width:28cqw;font-size:3.4cqw;color:#f3f5f9">Irrigating cotton drained most of the Aral Sea.</p><p class="s" style="color:#cfd6e2">NASA Earth Observatory, World of Change · public domain · graded</p>'),
 "NASA Terra images of the Aral Sea, 2000 and 2018, graded indigo. Reel R-A plays the full 2000–2018 series.",
 "“Soviet planners diverted the two rivers that fed the sea to irrigate cotton. The sea lost about 80% of its volume. Wind lifts salt and farm chemicals off the dry bed, and respiratory illness and anaemia are reported nearby. We don’t know where our pair’s cotton grew. This is what cotton irrigation can cost.”",
 "Archive photographs (NASA, public domain).",
 "NASA’s 1960 shoreline outline. Reject if anything but the colour is changed.",
 A.format("Planetary health: land cover, water capacity") + A.format("A flow becomes a stock")))
F.append(card("F09","4:15–4:55","Speaker 2","A forced harvest, and how it ended",
 ("", '<div style="left:6cqw;top:30cqw;width:88cqw;height:0;border-top:.25cqw solid var(--f-ink)"></div>' +
  "".join(f'<div style="left:{x}cqw;top:28.8cqw;width:2.4cqw;height:2.4cqw;border-radius:50%;background:{c}"></div><p class="lab" style="left:{x-2}cqw;top:33cqw;width:20cqw">{t}</p>' for x,c,t in [(6,"var(--f-ink)","STATE QUOTAS<br>STUDENTS, TEACHERS,<br>DOCTORS IN THE FIELDS"),(30,"var(--f-ink)","331 BRANDS<br>PLEDGE NOT TO BUY"),(54,"var(--f-ink)","ILO MONITORS<br>EVERY HARVEST"),(78,"var(--f-copper)","2021: NO SYSTEMIC<br>FORCED LABOUR ·<br>BOYCOTT LIFTED 2022")]) +
  '<p class="h" style="top:7cqw;width:82cqw;font-size:4cqw">Buyers and monitors ended Uzbekistan’s forced cotton harvest.</p><p class="s">ILO 2022 · Cotton Campaign 2022 · HRW 2026</p>'),
 "A line timeline in four stops.",
 "“Forced labour means work under threat, without a real choice. Low pay alone is not forced labour. When doctors and nurses were sent to the fields, clinics lost staff. In 2026 Human Rights Watch still sees risk where crop quotas remain.”",
 "Line drawing (documented).",
 "The 2021 to 2022 ending stays visible. Reject if it implies Levi’s bought Uzbek cotton.",
 A.format("Crime, corruption and modern slavery") + A.format("Equity makes collective action work")))
F.append(card("F10","4:55–5:30","Speaker 3","Every pale patch is a process",
 ("", '<div class="twill mid" style="left:6cqw;top:8cqw;width:46cqw;height:40cqw;inset:auto;border-radius:.4cqw"></div><div class="hole" style="left:16cqw;top:24cqw;width:20cqw;height:13cqw"></div>' +
  "".join(f'<div style="left:52cqw;top:{y}cqw;width:6cqw;height:0;border-top:.15cqw solid var(--f-ink)"></div><p class="lab" style="left:59cqw;top:{y-1.2}cqw;width:36cqw">{t}</p>' for y,t in [(14,"SANDING · BY HAND"),(21,"SPRAYING · POTASSIUM PERMANGANATE"),(28,"LASER"),(35,"CUTTING · BY HAND")]) +
  '<p class="h" style="top:41cqw;left:52cqw;width:44cqw;font-size:3.2cqw">The worn look is made in a factory.</p><div class="tab" style="left:4cqw;top:8cqw"></div><p class="s">PHOTO 07 · Clean Clothes Campaign Turkey 2019</p>'),
 "A macro of our pair’s whiskers and hole, with four line callouts naming common finishing methods.",
 "“Which method made our pair isn’t recorded. In Turkey, workers spraying potassium permanganate reported skin and breathing problems. That was a small study of about eight factories, and the estimate is that up to two million people work with it.”",
 "PHOTO 07 (seen) with line callouts (documented). Red tab on the photo.",
 "The callouts point at real effects on our pair.",
 A.format("Systems optimise for different things: fashion buys the look, workers pay for the method")))
F.append(card("F11","5:30–6:15","Speaker 3","The disease kept going after the work stopped",
 ("", dots(41,"grey").replace('class="dots grey"','class="dots grey" style="left:8cqw;top:20cqw"') + dots(71).replace('class="dots "','class="dots" style="left:38cqw;top:20cqw"') +
  '<p class="lab" style="left:8cqw;top:16cqw">2007 · 41 OF 74</p><p class="lab" style="left:38cqw;top:16cqw;color:var(--f-tab)">2011 · 71 OF 74</p>' +
  '<p class="h" style="left:66cqw;top:18cqw;width:29cqw;font-size:3.1cqw">Four years after sandblasting stopped, 71 of 74 former workers had silicosis.</p><p class="s">Akgun et al., Chest 2015 · Turkey · no link to Levi’s established</p>'),
 "Two grids of 74 dots. 41 fill grey, then 71 fill red. Reel R-B animates the fill.",
 "“Silica dust scars the lung and keeps scarring after the exposure ends. Nine of the original group had already died. Turkey banned sandblasting in 2009. The product lasts a season. The disease lasts a life.”",
 "Data (documented).",
 "The 74 denominator and both counts. Reject if any wording implies Levi’s.",
 A.format("Consequences outlive transactions: a stock in the lung")))
F.append(card("F12","6:15–7:00","Speaker 3","Each fix exposed the next constraint",
 ("", '<div style="left:6cqw;top:26cqw;width:88cqw;height:0;border-top:.25cqw solid var(--f-ink)"></div>' +
  "".join(f'<div style="left:{x}cqw;top:24.8cqw;width:2.4cqw;height:2.4cqw;border-radius:50%;background:{c}"></div><p class="lab" style="left:{x-1}cqw;top:29cqw;width:16cqw">{t}</p>' for x,c,t in [(6,"var(--f-ink)","2009<br>TURKEY BANS<br>SANDBLASTING;<br>WORK MOVES"),(23,"var(--f-ink)","2010<br>LEVI’S BANS IT"),(40,"var(--f-ink)","2016<br>LEVI’S SHARES<br>WATER&lt;LESS"),(57,"var(--f-ink)","2018<br>LASER: 90 S<br>A PAIR"),(74,"var(--f-ink)","2021<br>IFC LOANS<br>PRICED ON<br>SUPPLIER SCORES"),(90,"var(--f-tab)","THIS<br>PAIR: ?")]) +
  '<p class="h" style="top:7cqw;width:80cqw;font-size:4cqw">Each fix exposed the next constraint.</p><p class="s">R26 · R27 · R31 · Levi’s 2016 · Clean Clothes Campaign</p>'),
 "A line timeline that ends on “This pair: ?”.",
 "“A ban is a policy, not clean lungs. Sharing a method doesn’t pay for the machine. Financing is where it moves.”",
 "Line drawing (documented).",
 "The final “?” in red.",
 A.format("Unifying idea C: removing a constraint exposes another") + A.format("Knowledge: sharing is not access")))
F.append(card("F13","7:00–7:35","Speaker 3","The jeans capital, next door",
 ("g-raw", '<div class="ph" data-l="PHOTO · XINTANG EFFLUENT · GREENPEACE OR RIVERBLUE · CREDIT" style="inset:0;border-radius:0;opacity:.85"></div>' +
  '<p class="h" style="color:#f3f5f9;width:70cqw;font-size:3.8cqw">Xintang, in the Pearl River Delta, called itself the jeans capital of the world.</p><p class="lab" style="left:6cqw;top:26cqw;color:#dfe5ee;width:60cqw">200–300 MILLION PAIRS A YEAR · HEAVY METALS IN 17 OF 21 SAMPLES</p><p class="s" style="color:#cfd6e2">Greenpeace 2010 · RiverBlue 2017 · not established as our pair’s site</p>'),
 "A credited real photograph, full bleed.",
 "Follow the pollution from source to river to farmland. “Our listing says only ‘China’.”",
 "Archive photograph, credited and graded.",
 "The photo is real and credited. Reject any generated river.",
 A.format("Pollution: source, transport, exposure")))
F.append(card("F14","7:35–8:15","Speaker 4","Why not stop buying jeans?",
 ("", '<svg style="left:6cqw;top:12cqw;width:56cqw;height:30cqw" viewBox="0 0 560 300" fill="none" stroke="currentColor" stroke-width="3"><path d="M40 220 C 160 40, 300 40, 420 120"/><path d="M420 120 C 470 160, 500 220, 520 250" stroke-dasharray="8 8"/><circle cx="40" cy="220" r="9" fill="currentColor"/><circle cx="420" cy="120" r="9" fill="currentColor"/><circle cx="520" cy="250" r="9" fill="var(--f-copper)" stroke="none"/></svg>' +
  '<p class="lab" style="left:5cqw;top:38cqw">HONG KONG · QUOTA-CAPPED 1974</p><p class="lab" style="left:42cqw;top:14cqw">BUSAN · DAEWOO</p><p class="lab" style="left:48cqw;top:40cqw">DHAKA · 130 TRAINEES, 1979</p>' +
  '<p class="h" style="left:66cqw;top:10cqw;width:29cqw;font-size:3.2cqw">Garment jobs kept Bangladeshi girls in school longer.</p><p class="s">Heath &amp; Mobarak 2015 · Mottaleb &amp; Sonobe 2011</p>'),
 "A line map: quota rules moved production from Hong Kong via Busan to Dhaka. One headline.",
 "“Quotas pushed production to new countries. Where garment jobs arrived, girls stayed in school longer and married and had children later. A boycott would hit the people we worry about. The aim is safer work, not less work.”",
 "Line map (documented).",
 "Keep the quota history to a single sentence.",
 A.format("Migration: person, origin, destination") + A.format("Plan B: keep the benefit, change who pays")))
F.append(card("F15","8:15–9:05","Speaker 4","Seeing a doctor is not the same as being covered",
 ("", '<div class="ph" data-l="PHOTO · FAHIM · ILO 2026 · © EIS PILOT" style="left:6cqw;top:8cqw;width:26cqw;height:40cqw"></div>' +
  "".join(f'<div style="left:37cqw;top:{y}cqw;width:57cqw;height:0;border-top:.12cqw solid var(--f-grey)"></div><p class="lab" style="left:37cqw;top:{y+1}cqw;width:20cqw">{a}</p><p class="tx" style="left:58cqw;top:{y+.6}cqw;width:36cqw">{b}</p>' for y,a,b in [(18,"CENTRAL FUND","one-time payment"),(24,"INJURY PILOT","monthly pension"),(30,"REHABILITATION","a prosthetic leg"),(36,"EMPLOYER","his job back")]) +
  '<p class="h" style="left:37cqw;top:7cqw;width:57cqw;font-size:3.1cqw">It took four institutions to get Fahim back to work.</p><p class="s" style="left:37cqw;width:58cqw">ILO 2026 · Ahmed et al., BMJ Open 2020 · Rana Plaza 2013</p>'),
 "Fahim’s photograph (ILO, credited) beside four rows.",
 "“After Rana Plaza killed 1,134 people in 2013, Bangladesh still had no employment injury insurance until a pilot began in 2022. Insured workers do see trained doctors more often, but their out-of-pocket costs were not significantly lower. Seeing a doctor is not the same as being covered.”",
 "Archive photograph (ILO, credited).",
 "His face and the four institutions. Reject if anything suggests a Levi’s link.",
 A.format("Diffusion: circulation is not effect") + A.format("Health financing")))
F.append(card("F16","9:05–9:35","Speaker 4","In 2020 a virus travelled the supply chain as lost wages",
 ("", "".join(f'<div class="ln" style="left:{6+k*22.5}cqw;top:22cqw;width:19cqw;height:9cqw"></div><p class="lab" style="left:{7.2+k*22.5}cqw;top:24.5cqw;width:17cqw">{t}</p>' for k,t in enumerate(["LOCKDOWNS","ORDERS<br>CANCELLED","FACTORIES<br>UNPAID","WAGES LOST"])) +
  '<p class="h" style="top:7cqw;width:85cqw;font-size:3.6cqw">In 2020 a virus travelled the supply chain as lost wages.</p><p class="tx" style="left:6cqw;top:37cqw;width:85cqw">Levi’s: listed in June 2020 as not committed; on 2 July pledged to pay in full for finished and in-progress orders.</p><p class="s">WRC tracker · Levi Strauss &amp; Co. 2 July 2020</p>'),
 "A four-box chain and one Levi’s line.",
 "“A pathogen’s economic path reaches workers’ health through their income. Brand payment terms decide who absorbs the shock.”",
 "Line drawing (documented).",
 "Cut this frame first if the run-through is over time.",
 A.format("Pathogens through trade") + A.format("Feedback loop: poverty and ill health"), '<span class="tagl cutfirst">cut first if long</span>'))
F.append(card("F17","9:35–10:20","Speaker 4","Ships are Hong Kong’s biggest local source of air emissions",
 ("", '<svg style="left:6cqw;top:16cqw;width:52cqw;height:30cqw" viewBox="0 0 520 300" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 260 C 120 200, 180 210, 250 150 S 400 60, 500 40"/><path d="M250 150 l 30 -30 l 40 10 l 20 -40" stroke-dasharray="6 6"/><rect x="300" y="60" width="70" height="40" fill="var(--f-raw)" stroke="none"/><text x="300" y="125" font-family="IBM Plex Mono, monospace" font-size="16" fill="currentColor" stroke="none">KWAI TSING</text></svg>' +
  '<p class="h" style="left:6cqw;top:6cqw;width:86cqw;font-size:3.4cqw">Ships are Hong Kong’s biggest local source of air emissions.</p><p class="tx" style="left:62cqw;top:20cqw;width:33cqw">Clean fuel at berth from 2015, in all Hong Kong waters from 2019. The global 0.5% sulphur cap came in 2020.</p><p class="s">EPD Hong Kong · IMO 2020 · R05 · R28</p>'),
 "A line map of the container port and sea lanes, plus one rule timeline.",
 "Logistics in plain words: about 30 sourcing countries, regional distribution, then Levi’s Hong Kong stores and online shipping. Hong Kong regulated its harbour, but the sea lane needed a global rule.",
 "Line drawing (documented).",
 "The EPD claim worded exactly as the EPD words it.",
 A.format("Scale mismatch") + R.format("How is it shipped?")))
F.append('</div>')

F.append(chap(3, "Usage & consumption", "10:20–13:55", "--f-mid", "Speaker 5"))
F.append('<div class="board">')
F.append(card("F18","10:20–10:30","Speaker 5","Through the hole: usage",
 ("g-mid", '<div class="twill mid"></div><div class="hole dark" style="left:8cqw;top:14cqw;width:34cqw;height:27cqw"></div>' +
  flowcard([("WHAT MOVES","Images, money, the pair, wash water"),("ROUTE","Campaign → feed → shop → wardrobe → drain"),("WHO CONTROLS","Levi’s marketing, platforms, the wearer"),("CONDITIONS","Income, climate, home size"),("WHO BEARS HARM","The wearer’s skin and budget; rivers; Arctic sediment")])),
 "Reel V3 pushes through the hole into the launderette drum.", "Read the last line aloud.", "Reel V3.", "The circle of the hole matches the circle of the drum.", A.format("Park’s five flow questions")))
F.append(card("F19","10:30–11:40","Speaker 5","Levi’s has sold the 501 in a launderette twice, forty years apart",
 ("g-mid", '<svg style="left:52cqw;top:2cqw;width:40cqw;height:40cqw;color:var(--f-tab)" viewBox="0 0 100 100" fill="currentColor"><use href="#star"/></svg>' +
  '<div style="left:0;top:30cqw;width:100cqw;height:13cqw;background:rgba(7,9,13,.25)"></div>' +
  "".join(f'<svg style="left:{8+k*21}cqw;top:24cqw;width:9cqw;height:18cqw;color:var(--f-tab)" viewBox="0 0 40 80" fill="currentColor"><circle cx="20" cy="9" r="7"/><path d="M10 18h20l4 30h-6l-2 30h-6l-2-24-2 24h-6l-2-30H6z"/></svg><p class="lab" style="left:{4+k*21}cqw;top:44cqw;width:20cqw;color:#f4f7fb">{t}</p>' for k,t in enumerate(["1985 · LAUNDERETTE","2021 · BUY BETTER,<br>WEAR LONGER","2025 · BEYONCÉ<br>REMAKE","2026 · ROSÉ ·<br>ASIA-PACIFIC"])) +
  '<p class="h" style="color:#f4f7fb;width:46cqw;font-size:3.6cqw">Levi’s has sold the 501 in a launderette twice, forty years apart.</p>'),
 "Carry’s starburst over a strip of four red silhouettes traced from the campaigns.",
 "Targeting: young people through music and fandom, the women’s business through Beyoncé and Rosé, and Asia-Pacific loyalty members through K-pop photocards. The 1985 film is credited with a big sales rise. Then the critical turn: in 2021 Levi’s told Gen Z to buy less. “Is that sustainability or premium positioning? It can be both. Fewer, pricier pairs can still grow revenue.” The WHO calls marketing a commercial determinant of health.",
 "Line silhouettes traced from credited campaign stills, plus the starburst.",
 "Each silhouette’s gesture is recognisable. Reject if a celebrity photo is altered.",
 A.format("Commercial determinants of health") + A.format("Infodemics × marketing: persuasive is not accurate") + R.format("How advertised? Who is targeted?")))
F.append(card("F20","11:40–12:25","Speaker 5","Who line-dries?",
 ("", "".join(f'<p class="lab" style="left:6cqw;top:{y}cqw">{c}</p><div style="left:24cqw;top:{y+.3}cqw;width:{w*.36}cqw;height:2.2cqw;background:{col}"></div><p class="lab" style="left:{25+w*.36}cqw;top:{y}cqw">{t}</p>' for y,c,w,t,col in [(18,"UNITED STATES",18,"18%","var(--f-ink)"),(24,"UK + FRANCE",68,"68%","var(--f-ink)"),(30,"CHINA",88,"88%","var(--f-ink)"),(36,"HONG KONG",0,"not measured","var(--f-tab)")]) +
  '<div class="ph" data-l="PHOTO 12 · OUR PAIR ON A HONG KONG DRYING RACK" style="left:66cqw;top:8cqw;width:28cqw;height:40cqw"></div>' +
  '<p class="h" style="top:6cqw;width:56cqw;font-size:3.2cqw">Home care is 37% of this pair’s climate impact, and it depends on the country.</p><p class="s">R04 consumer data · HKO 1991–2020 · 2021 Census</p>'),
 "Four bars, plus our pair on a Hong Kong rack.",
 "“Hong Kong air averages 78% humidity, and the median home gives each person about 16 square metres. The launderette in the ad is the stage with the biggest carbon share.”",
 "Data (documented) and PHOTO 12 (seen).",
 "The Hong Kong row reads “not measured”.",
 R.format("Does usage look the same globally?")))
F.append(card("F21","12:25–13:15","Speaker 5","Even 100% cotton leaves the house",
 ("", '<div class="ph" data-l="PHOTO 02 · CARE LABEL · WASH COLD" style="left:6cqw;top:8cqw;width:30cqw;height:40cqw"></div>' +
  '<p class="h" style="left:42cqw;top:8cqw;width:52cqw;font-size:3.4cqw">Even 100% cotton leaves the house.</p>' +
  '<p class="tx" style="left:42cqw;top:20cqw;width:52cqw"><b style="font-family:var(--display);font-size:3cqw">~50,000</b><br>indigo fibres per wash of one pair</p><p class="tx" style="left:42cqw;top:32cqw;width:52cqw"><b style="font-family:var(--display);font-size:3cqw">~20%</b><br>of microfibres in Canadian Arctic sediment samples were denim</p><p class="s" style="left:42cqw;width:54cqw">Athey et al. 2020 · Suneja et al. 2007</p>'),
 "Our care label beside two quantities.",
 "“Cotton is dyed and treated, and it lasts. The fibres don’t disappear. They pile up in sediment, so a flow becomes a stock. Whether they harm health is not established. And one direct effect: in tests, 10 to 16% of jeans buttons released nickel, a known cause of dermatitis around the navel.”",
 "PHOTO 02 (seen) and data (documented).",
 "The qualification on health effects is spoken aloud.",
 A.format("Park’s polyester shirt (Brooks), tested on cotton") + A.format("A flow becomes a stock") + R.format("Immediate health impact")))
F.append(card("F22","13:15–13:55","Speaker 5","The same price weighs differently",
 ("", '<p class="lab" style="left:6cqw;top:12cqw">HONG KONG</p><p class="h" style="left:6cqw;top:15cqw;font-size:7cqw;width:40cqw">14 hours</p><p class="tx" style="left:6cqw;top:26cqw;width:38cqw">at the statutory minimum wage</p>' +
  '<p class="lab" style="left:52cqw;top:12cqw;color:var(--f-tab)">BANGLADESH</p><p class="h" style="left:52cqw;top:15cqw;font-size:7cqw;width:42cqw;color:var(--f-tab)">⅔ month</p><p class="tx" style="left:52cqw;top:26cqw;width:40cqw">of an entry-level garment wage</p>' +
  '<p class="tx" style="left:6cqw;top:38cqw;width:85cqw">Cost per wear: HK$20 after 30 wears, HK$6 after 100.</p><p class="s">Illustrative arithmetic · check the listed price · HK minimum wage 2026 · Bangladesh 2023</p>'),
 "Two quantities and a cost-per-wear line.",
 "Affordability, and jeans as a durable, everyday garment. The point is social: the same price is a day here and most of a month there.",
 "Data (illustrative, labelled).",
 "The price must be the real listed price.",
 R.format("Immediate social impact")))
F.append('</div>')

F.append(chap(4, "After consumption", "13:55–17:00", "--f-pale", "Speaker 6"))
F.append('<div class="board">')
F.append(card("F23","13:55–14:05","Speaker 6","Through the hole: after",
 ("g-pale", '<div class="twill pale"></div><div class="hole dark" style="left:8cqw;top:14cqw;width:34cqw;height:27cqw"></div>' +
  flowcard([("WHAT MOVES","Used clothes, bales, fibres"),("ROUTE","HK bin → sorter → export → market → landfill or shore"),("WHO CONTROLS","Collectors, traders, importing states"),("CONDITIONS","Sorting capacity, demand, waste systems"),("WHO BEARS HARM","Porters, traders, coastal neighbourhoods")]).replace('rgba(255,255,255,.35)','rgba(0,0,0,.25)')),
 "Reel V4 pushes through the hole into a Hong Kong collection bin.", "Read the last line aloud.", "Reel V4.", "The knee is the palest ground in the deck.", A.format("Park’s five flow questions")))
F.append(card("F24","14:05–14:55","Speaker 6","Hong Kong has no rule that makes clothing brands pay for what comes after",
 ("", '<div class="ph" data-l="PHOTO 13 · A HONG KONG TEXTILE COLLECTION BIN" style="left:6cqw;top:8cqw;width:24cqw;height:40cqw"></div>' +
  '<svg style="left:34cqw;top:22cqw;width:60cqw;height:20cqw" viewBox="0 0 600 200" fill="none" stroke="currentColor" stroke-width="3"><path d="M10 100 H 200"/><path d="M200 100 C 300 100, 330 30, 420 30 H 590"/><path d="M200 100 C 300 100, 330 170, 420 170 H 590"/><circle cx="10" cy="100" r="8" fill="currentColor"/></svg>' +
  '<p class="lab" style="left:34cqw;top:36cqw;width:20cqw">HK · ~400 T TO LANDFILL<br>EVERY DAY · ~11% RECYCLED</p><p class="lab" style="left:76cqw;top:20cqw;width:20cqw">ASIA 48%</p><p class="lab" style="left:76cqw;top:39cqw;width:20cqw">AFRICA 43%</p>' +
  '<p class="h" style="left:34cqw;top:7cqw;width:60cqw;font-size:3cqw">Hong Kong has no rule that makes clothing brands pay for what comes after.</p><p class="s" style="left:34cqw;width:62cqw">EPD 2021–2022 · EEA · Producer responsibility: bags, e-waste, glass only</p>'),
 "Our photo of a real bin, with a line flow map.",
 "“Exporting a hazard doesn’t remove it. It changes who experiences it.”",
 "PHOTO 13 (seen) and line drawing (documented).",
 "Each figure has a year.",
 A.format("Eliminating a hazard vs moving it") + R.format("Recycled, resold, thrown away?")))
F.append(card("F25","14:55–16:00","Speaker 6","In Accra, the next person to carry these jeans is a porter",
 ("g-pale", '<div class="ph" data-l="PHOTO · KANTAMANTO, ACCRA · THE OR FOUNDATION · CREDIT" style="inset:0;border-radius:0;opacity:.9"></div>' +
  '<p class="h" style="color:#f3f5f9;width:62cqw;font-size:3.8cqw">In Accra, the next person to carry these jeans is a porter.</p><p class="lab" style="left:6cqw;top:30cqw;color:#e9edf4;width:70cqw">~15 MILLION GARMENTS A WEEK · ~40% LEAVES AS WASTE · BALES OVER 55 KG · 30¢–$1 A TRIP</p><p class="s" style="color:#dfe5ee">The Or Foundation · Atmos 2023 · Frontiers in Public Health 2024</p>'),
 "A credited real photograph, full bleed. This is the second peak.",
 "“The porters are called kayayei. Most are young women who moved from northern Ghana. The Or Foundation reports lasting spinal harm. It is an advocacy group, and peer-reviewed work describes the same working conditions. What can’t be sold reaches the drains and the beach. Brooks called the second-hand trade a hidden world.”",
 "Archive photograph (credited).",
 "Real people, credited. Reject any figure seen from behind as a stand-in.",
 A.format("Migration") + A.format("Pollution") + A.format("Brooks: the second-hand trade") + R.format("Long-term health and society")))
F.append(card("F26","16:00–17:00","Speaker 6","Collection is not recycling",
 ("", jean(8,10,10,"var(--f-mid)") +
  '<svg style="left:22cqw;top:12cqw;width:24cqw;height:30cqw" viewBox="0 0 240 300" fill="none" stroke="currentColor" stroke-width="3"><path d="M0 150 C 80 150, 100 40, 220 40"/><path d="M0 150 H 220"/><path d="M0 150 C 80 150, 100 260, 220 260"/></svg>' +
  "".join(f'<p class="tx" style="left:48cqw;top:{y}cqw;width:46cqw"><b>{a}</b> · {b}</p>' for y,a,b in [(14,"Rewear","needs condition and demand"),(25,"Fibre","100% cotton helps; rivets and buttons cut out first"),(36,"Residual","needs safe handling and funding")]) +
  '<p class="s">Directive (EU) 2025/1892: producers pay for collection and sorting, schemes by 2028 · Levi’s SecondHand (US)</p>'),
 "One pair at a sorting table, branching into three fates.",
 "Plus our extrapolation, shown in paint: “A pair ripped before sale may have less wear left when it reaches the table.”",
 "Line drawing (documented) and one paint layer (extrapolated).",
 "The extrapolation is labelled as ours.",
 A.format("Diffusion: circulation is not effect")))
F.append('</div>')

F.append(chap(5, "Conclusion & suggestions", "17:00–19:35", "--f-paper", "Speaker 7"))
F.append('<div class="board">')
F.append(card("F27","17:00–17:55","Speaker 7","Where the costs landed",
 ("", "".join(f'<div style="left:{x}cqw;top:{y}cqw;width:{s}cqw;height:{s}cqw;background:{c}"></div><p class="lab" style="left:{x}cqw;top:{y+s+.8}cqw;width:20cqw">{t}</p>' for x,y,s,c,t in [(6,8,6,"var(--f-raw)","LUNGS · 71 / 74"),(18,14,8,"var(--f-raw)","RIVER · 17 / 21"),(32,21,11,"var(--f-mid)","TILL · HK$ PRICE"),(50,15,8,"var(--f-pale)","ARCTIC · ~20%"),(64,9,5.5,"var(--f-pale)","PORTER · 55 KG")]) +
  '<p class="h" style="left:6cqw;top:40cqw;width:88cqw;font-size:3cqw">Globalisation made this pair cheap by spreading it across borders. Its health costs landed where the record stops.</p>'),
 "The <em>Fly</em> diagonal returns. It reaches us in Hong Kong, then shrinks away towards Accra, and each square holds its evidence.",
 "Three conclusions. (1) Spreading the pair across about 30 countries makes it cheap and everywhere, and it also brings jobs and schooling. (2) It separates the decision (price, deadline, purchase) from the consequence (dust, dye, load), so the costs sit in other accounts: workers’ lungs, Bangladesh’s clinics, Accra’s drains. (3) Where nothing is recorded, nothing gets checked. Six course flows cross in one pair.",
 "Built (documented figures).",
 "The squares shrink after Hong Kong, so the costs move out of sight.",
 A.format("Unifying ideas A and D") + A.format("Birnbaum: costs in different accounts") + R.format("Globalisation’s role")))
F.append(card("F28","17:55–19:05","Speaker 7","Three stitches",
 ("", '<div class="hole" style="left:6cqw;top:12cqw;width:26cqw;height:20cqw"></div>' +
  "".join(f'<div style="left:{8+k*7}cqw;top:{12}cqw;width:.6cqw;height:20cqw;background:var(--f-copper);transform:rotate(12deg)"></div>' for k in range(3)) +
  "".join(f'<p class="tx" style="left:38cqw;top:{y}cqw;width:57cqw"><b>{a}</b><br>{b}</p>' for y,a,b in [(7,"1 · Record the finish","Publish factory and method per product code. Buyers fund safer finishing. Checked by independent air monitoring."),(20,"2 · Make injury cover permanent","Bangladesh’s pilot becomes a national scheme with brand contributions. Checked by injured workers’ out-of-pocket costs."),(33,"3 · Make producers pay for after","A Hong Kong textile scheme like the EU’s. Fees fund sorting here. Checked by tonnes re-worn against tonnes landfilled.")]) +
  '<p class="s">Wearer’s share: wash cold, line-dry, repair (Levi’s Tailor Shop HK). It cuts the home carbon, not the factory dust.</p>'),
 "Three copper stitches across the hole, one per recommendation, each with an ask, a payer and a checker.",
 "Recommendations matched to the stage where the decision sits: production, protection, afterlife. Then the wearer’s line: “Match the fix to the stage.”",
 "Built (documented).",
 "Every ask names who pays and who checks.",
 A.format("Equity makes collective action work") + A.format("Scale mismatch") + R.format("Suggestions")))
F.append(card("F29","19:05–19:35","Speaker 7","Mend",
 ("g-black", '<div class="twill"></div><div class="hole" style="left:34cqw;top:12cqw;width:32cqw;height:24cqw"></div>' +
  "".join(f'<div style="left:{36+k*2.6}cqw;top:13cqw;width:.45cqw;height:22cqw;background:var(--f-copper)"></div>' for k in range(11)) +
  '<p class="h big c" style="top:40cqw;color:#f3f5f9;font-size:7cqw">Pre-Worn</p>'),
 "Reel V6: stop-motion of our own hands darning the hole in copper thread. The title returns.",
 "“We started with a hole someone else made. We end with one we mended. Thank you.” Then silence, then questions.",
 "Our own film (seen).",
 "Real hands, real thread. Reject any generated frame.",
 A.format("Ending on our own act")))
F.append('</div>')
src = src.replace("{{FRAMES}}", "\n".join(F))

sources = [
 ("Athey, S. N., et al. (2020). The widespread environmental footprint of indigo denim microfibers from blue jeans. <em>Environmental Science &amp; Technology Letters</em>.","https://www.sciencedaily.com/releases/2020/09/200902082343.htm","About 50,000 fibres per wash; denim around 20% of microfibres in Canadian Arctic sediment samples (F21)."),
 ("Levi Strauss &amp; Co. (2016). Open Source Water Innovation Manual, 22 March.","https://levistrauss.com/2016/03/22/lsco-recognizes-world-water-day-by-taking-a-chapter-from-the-tech-industry/","Water&lt;Less finishing shared with competitors (F12)."),
 ("Levi Strauss &amp; Co. (2021). Levi’s launches Buy Better, Wear Longer campaign, 22 April.","https://levistrauss.com/2021/04/22/levis-launches-buy-better-wear-longer-campaign/","A Gen Z campaign asking people to buy less (F19)."),
 ("ILO (2022). ILO welcomes lifting of Cotton Campaign boycott of Uzbekistan.","https://www.ilo.org/resource/news/ilo-welcomes-lifting-cotton-campaign-boycott-uzbekistan","2021 harvest free of systemic forced labour; boycott lifted 10 March 2022 (F09)."),
 ("Human Rights Watch (2026). “Farmers have no freedom”: cotton and wheat farmers in Uzbekistan.","https://www.hrw.org/report/2026/02/16/farmers-have-no-freedom/abuse-and-exploitation-of-cotton-and-wheat-farmers-in","Remaining risk under crop quotas (F09 qualification)."),
 ("Atmos (2023). Carrying capacity: the women of Kantamanto.","https://atmos.earth/kantamanto-market-ghana-clothing-waste-women/","Kayayei loads and pay (F25)."),
 ("Frontiers in Public Health (2024). Work-related challenges and coping among female head porters (kayayei) in Ghana.","https://www.frontiersin.org/articles/10.3389/fpubh.2024.1383879/full","Peer-reviewed working conditions (F25)."),
 ("Levi Strauss &amp; Co. (2020). Working with our suppliers in the time of COVID-19, 2 July.","https://levistrauss.com/2020/07/02/working-with-our-suppliers-in-the-time-of-covid-19/","Payment commitment after the WRC listing (F16)."),
 ("Environmental Protection Department, Hong Kong. Guide to the Fuel at Berth Regulation; Fuel for Vessels Regulation.","https://epd.gov.hk/epd/english/environmentinhk/air/prob_solutions/guide-air-pollution-control-ocean-going-vesselsfuel-berth-regulation.html","Marine vessels as the largest local emission source; 2015 and 2019 rules (F17)."),
 ("Information Services Department, Hong Kong (2024). Waste textiles disposed of at landfills.","https://www.info.gov.hk/gia/general/202402/28/P2024022800397.htm","404 tonnes a day in 2021; recycling about 11% in 2022 (F24)."),
 ("Suneja, T., Flanagan, K. H., &amp; Glaser, D. A. (2007). Blue-jean button nickel. <em>Dermatitis</em>.","https://www.mdedge.com/jfponline/article/62573/dermatology/itchy-rash-near-navel/page/0/1","16% of buttons nickel-positive (F21)."),
 ("Clean Clothes Campaign Turkey (2019). Bleached Denim, Bleached Souls.","https://cleanclothes.org/news/2019/faded-denim-look-comes-at-a-steep-price","Potassium permanganate spray: reported skin and breathing problems (F10)."),
 ("UPI / ABC (2022). 1880s Levi’s found in a mine shaft sell for $87,400.","https://abc7.com/post/levis-jeans-auction-new-mexico/12328943/","The opening hook and the “White Labor” pocket (F01, F02)."),
 ("Marketing Week (2020). How Levi’s “Laundrette” ad led to an 800% sales boost; Levi Strauss &amp; Co. (2020).","https://www.marketingweek.com/levis-laundrette-sales-boost/","The 1985 film; the figure is an estimate (F19)."),
 ("Levi Strauss &amp; Co. (2026). Behind Every Original; ambassadors.","https://www.levistrauss.com/2026/04/26/behind-every-original-ambassadors/","Rosé’s multi-year partnership and Asia-Pacific activation (F19)."),
 ("Miller, D., &amp; Woodward, S. (eds.) (2011). <em>Global Denim</em>. Berg.","https://www.ucl.ac.uk/anthropology/people/academic-and-teaching-staff/daniel-miller/global-denim-project","“Nearly half the world” in denim on a given day (F01)."),
 ("NASA Earth Observatory. World of Change: Shrinking Aral Sea.","https://science.nasa.gov/earth/earth-observatory/world-of-change/aral-sea/","2000–2018 images, public domain (F08, reel R-A)."),
 ("Garner, J. K., &amp; Alley, M. (2013). How the design of presentation slides affects audience comprehension. <em>International Journal of Engineering Education</em>, 29(6).","https://www.ijee.ie/articles/Vol29-6/23_ijee2791ns.pdf","Why the slides are assertion–evidence."),
 ("Plus AI (2026). How to make AI-generated slides that don’t look like AI slop.","https://plusai.com/blog/how-to-make-ai-slides-that-dont-look-like-ai-slop","The cream, italic-serif and muted-red default named as a tell."),
]
src = src.replace("{{SOURCES}}", "\n".join(f'<li><span>{a} <a href="{u}">Link</a></span><span class="muted">{n}</span></li>' for a,u,n in sources))

# second pass for images inside frames
for f in (S / "carry").glob("*.jpg"):
    src = src.replace("{{c-%s}}" % f.stem, b64(f))
assert "{{" not in src, src[src.index("{{")-80: src.index("{{")+80]
(S / "pre-worn-storyboard.html").write_text(src)
print(len(src))
