import json, pathlib
H = pathlib.Path(__file__).parent

# (style, text) paragraphs; styles: SUB, N, H1, H2
P = [
("SUB", "GHAD2001 Globalisation and Health · Methodology report, version 2 · rebuilt 27 November 2026"),
("N", "This version replaces the 10 November draft (Astra’s draft is kept in this document’s version history). The four required sections below are written as the report we will submit on Friday 4 December. Square brackets mark facts only the group can supply after this weekend: names, dates, run-through times and what the real pair’s label says. Target: 1,500 words for the four sections (1,350–1,650). The decision log, the checks and the bibliography sit outside the count; we still need to ask the lecturer whether the bibliography counts."),
("H1", "How we conducted initial research"),
("N", "We approached the brief as a problem of following one object. The brief asks how a product we take for granted is sourced, made, shipped, sold, used and discarded, and what each stage does to health. That suggested an established research design from anthropology and geography: an object biography (Kopytoff 1986), or “following the thing” (Marcus 1995; Cook et al. 2004), the approach Rivoli (2005) used for a T-shirt. After the lecturer asked on 10 November for a specific brand, we chose one product code: Levi’s 501 Original “Teach Me Destructed”, PC9 005013599, from the Levi’s Hong Kong online store. A single code made every claim testable. A source was either about this pair, about Levi’s, or about the industry."),
("N", "Our first round (9–10 November) used targeted searches and AI-assisted retrieval of primary sources: Levi’s product listings, its 2015 life-cycle assessment, its Form 10-K and supplier map, peer-reviewed health studies, ILO and OECD documents and EU waste data. We recorded 32 sources (R01–R32), each with the claim it could support and its limits."),
("N", "The most important result was negative. We tried to trace the pair stage by stage and found a record for only two of eight stages: the shop, and the country of manufacture (the US listing for the same code says “Made in China”; the Hong Kong page says nothing). Rather than hide this, we made it our argument: the health costs of the pair land where its record stops. The brief asks us to extrapolate where answers cannot be found, so we sorted every claim into four kinds, which the slides show visually: what we observed, what a document records, what sector evidence shows and what we extrapolate."),
("N", "A second round (27 November) rebuilt the presentation around the course’s own analytical questions. For each stage we asked what moves, through which route, who controls it, what conditions shape its effects and who bears harm, and we looked for evidence of a mechanism linking the stage to health. This round added sources on forced labour in Uzbekistan’s cotton harvest and how it ended (ILO 2022), potassium permanganate spraying (Clean Clothes Campaign 2019), indigo microfibres in Arctic sediment (Athey et al. 2020), nickel in jeans buttons (Suneja et al. 2007), port emissions in Hong Kong (EPD), textile waste in Hong Kong (ISD 2024) and the women who carry clothing bales in Accra (Atmos; Frontiers in Public Health 2024). It also added Levi’s own record: the 2016 release of its water-saving finishing methods, the 2021 “Buy Better, Wear Longer” campaign, the 2020 supplier-payment commitment and its advertising from the 1985 “Launderette” film to the 2026 partnership with Rosé."),
("N", "[Primary research this weekend: on [date] we inspected a Levi’s 501 [product code ____; if not PC9 005013599, a comparison pair], photographed its labels, components and wear, and recorded that its label names [country]. On [date] we emailed Levi’s Hong Kong to ask where PC9 005013599 is made and how it is finished; [reply received on __ / no reply by 4 December]. We photographed a textile collection bin at [location].]"),
("H1", "The task sharing within our group"),
("N", "[Replace with the real allocation.] Seven members each owned one part of the talk and its evidence: [Bob], introduction and method; [name], fibre and the harvest; [name], finishing and occupational disease; [name], worker protection and shipping; [name], advertising and use; [name], after use and waste; [Hansen], conclusions and recommendations. Each owner read the primary sources behind their numbers, checked each figure against its source and wrote their own speaker notes. A second member checked every number they did not own [record who checked whom]. [Name] coordinated the deck and timing, [name] ran the photo shoot and [name] edited the films."),
("N", "We worked from one shared storyboard. For each slide it lists what is on screen, what is said, where the image comes from, the detail that must survive and the visible failure that sends the slide back. The format came from a storyboard practice one of us uses in an art-direction project, and it let us divide the work without the deck losing a single voice. We kept a decision log (below) of what we first believed, what changed our minds and who proposed each change. [Add meetings with dates, and rehearsal times: run-through 1 __:__, run-through 2 __:__, final __:__.]"),
("H1", "The sources we used"),
("N", "We used five kinds of source and gave each a different job. Official product pages identify the pair. Company documents (the 10-K, the life-cycle assessment, policies and press releases) tell us what Levi’s says it does, within its own reporting boundaries; we treat them as statements of policy, not proof of outcomes. Peer-reviewed studies supply mechanisms and effect sizes: silicosis after sandblasting, insurance and out-of-pocket spending, girls’ schooling near garment jobs, denim microfibres. Institutional data from the ILO, OECD, EEA, Hong Kong’s EPD and NASA gives scale and dates. NGO and press sources such as the Clean Clothes Campaign, Greenpeace, the Or Foundation and Atmos reach places researchers rarely do, and we flag them as advocacy where they are."),
("N", "For each source we recorded what it can and cannot support. The Akgun cohort shows silicosis progressing after exposure ended among former Turkish sandblasters, but it has no link to Levi’s. The Ahmed study found that insured garment workers used trained providers more, but its non-randomised design means a non-significant result on out-of-pocket spending is not evidence of no effect. The Or Foundation’s finding of spinal harm among porters comes from an advocacy group, so we pair it with peer-reviewed work on their working conditions."),
("N", "Images followed the same rule. Real places appear in real, credited photographs, graded in colour but not otherwise altered. Generated images were used only as stand-ins for photographs of our own pair and for transitions, and were [replaced by our photographs / labelled as AI-generated on the slide]. The bibliography below uses the same codes as the slide footers."),
("H1", "A note on the challenges we faced"),
("N", "Traceability. We could not follow the pair past the shop. The Hong Kong listing names no country, the supplier map cannot link a factory to a product and no record shows how the pair was distressed. We turned this into our finding, but it demanded discipline: every slide says whether it shows this pair, Levi’s or the industry."),
("N", "Balance. Most evidence about garment work describes harm, but garment jobs also brought income and schooling, especially for women in Bangladesh (Heath and Mobarak 2015). We kept that counter-evidence in the talk and let it shape our recommendations, which aim at safer work rather than less work."),
("N", "Time. Twenty minutes forced cuts. The first deck had 31 pages. Slides on the origin of the word “denim” and the 1873 rivet patent moved to backup, because the course asks for mechanisms rather than mini-histories. [Report the actual run-through times and what was cut.]"),
("N", "AI use. We used AI tools to search, summarise, draft, design and generate images. They saved time, and they also made mistakes we had to catch. One search gave 2015 as the year Levi’s shared its Water<Less methods; the press release is dated 22 March 2016. Another mixed figures from Levi’s 2009 life-cycle study into the 2015 one. Our first deck also looked machine-made: cream backgrounds, italic serif headings and nineteen generated watercolours, several of them standing in for real places. Guides to slide design name that combination as a typical AI default, and a marker could not tell an illustration from evidence. We rebuilt the deck around real photographs, line drawings for documents and paint only for our own extrapolations. A group member checked every number in the final deck against its source [name the checker for each section]."),
("N", "Audience. [Report the outsider test on 29 November: who it was, what they could and could not repeat afterwards, and what we changed as a result.]"),
("H1", "Decision log"),
("N", "Outside the word count. Each row: what we first believed → what changed it · who proposed the change · the evidence that moved us. Add a row whenever the group changes its mind."),
("N", "1. Generated watercolours on cream paper → real photographs of a real pair, line drawings for documents, paint only for extrapolation · group brief, then the planning pass with Claude on 27 Nov · design guides name cream, italic serif and muted red as the AI default; markers could not tell illustration from evidence."),
("N", "2. “Who pays beyond the checkout?” (the receipt) → the label and the wear pattern · planning pass · the label is part of the product, and an 1880s Levi’s pocket printed “The only kind made by White Labor” shows labels were always selective."),
("N", "3. Before / During / After headings → the brief’s own five section names · planning pass · structure and timing are worth 15 marks."),
("N", "4. A disclaimer on every slide → open extrapolation with an evidence key shown once · planning pass · the brief: “you must extrapolate based on the evidence you can find”."),
("N", "5. Bangladesh as the main production case → [to decide once we read a real label] · open · the country the label names."),
("N", "6. [Next change: from the outsider test or a run-through.]"),
("H1", "Checks before Monday"),
("N", "Life-cycle percentages against the 2015 deck itself (secondary sources mix in the 2009 study’s 49% and 45% water and 58% energy figures). Whether the 2015 study has any human-health category. The listed Hong Kong price of PC9 005013599. The number of sourcing countries in the FY2025 10-K. Hong Kong textile landfill tonnage for 2024 and the “two-thirds exported” claim (the latest official figure found is 404 tonnes a day in 2021). The EU export figure and its year. A peer-reviewed source on health around the Aral Sea. Xintang’s distance from Hong Kong and the title of the 2010 Greenpeace report. Levi’s own statement on the “White Labor” slogan."),
("H1", "Plan, storyboard and deck"),
("N", "Storyboard and plan: https://claude.ai/artifact/GgHbaooqcPdQZgVDfRAPGu · Deck: https://claude.ai/artifact/2biRnyPKsnzV4ifZow3Qfz (both private to their owner until shared from the page’s Share menu)."),
]

refs = [
"R33  Athey, S. N., et al. (2020). The widespread environmental footprint of indigo denim microfibers from blue jeans. Environmental Science & Technology Letters, 7(11), 840–847. doi:10.1021/acs.estlett.0c00498. Supports: about 50,000 fibres per wash; denim about 20% of microfibres in Canadian Arctic sediment samples. Limit: no health effect measured.",
"R34  Levi Strauss & Co. (2016, 22 March). LS&Co. recognizes World Water Day by taking a chapter from the tech industry. https://levistrauss.com/2016/03/22/lsco-recognizes-world-water-day-by-taking-a-chapter-from-the-tech-industry/ Supports: Water<Less methods shared with competitors. Limit: sharing is not adoption.",
"R35  Levi Strauss & Co. (2021, 22 April). Levi’s launches Buy Better, Wear Longer campaign. https://levistrauss.com/2021/04/22/levis-launches-buy-better-wear-longer-campaign/",
"R36  International Labour Organization (2022). ILO welcomes lifting of Cotton Campaign boycott of Uzbekistan. https://www.ilo.org/resource/news/ilo-welcomes-lifting-cotton-campaign-boycott-uzbekistan Supports: 2021 harvest free of systemic forced labour; boycott lifted 10 March 2022.",
"R37  Human Rights Watch (2026, 16 February). “Farmers have no freedom”: abuse and exploitation of cotton and wheat farmers in Uzbekistan. https://www.hrw.org/report/2026/02/16/farmers-have-no-freedom/abuse-and-exploitation-of-cotton-and-wheat-farmers-in Supports: remaining risk under crop targets.",
"R38  Atmos (2022). Carrying capacity: the women of Kantamanto. https://atmos.earth/kantamanto-market-ghana-clothing-waste-women/ Supports: kayayei loads and pay per trip. Limit: journalism.",
"R39  [Authors to confirm] (2024). Work-related challenges and coping mechanisms among female head porters (kayayei) in Ghana. Frontiers in Public Health, 12, 1383879. doi:10.3389/fpubh.2024.1383879.",
"R40  Levi Strauss & Co. (2020, 2 July). Working with our suppliers in the time of COVID-19. https://levistrauss.com/2020/07/02/working-with-our-suppliers-in-the-time-of-covid-19/",
"R41  Worker Rights Consortium (2020–2021). COVID-19 tracker: which brands acted responsibly toward suppliers and workers? https://www.workersrights.org/issues/covid-19/tracker/",
"R42  Environmental Protection Department, Hong Kong (2015; 2019). Guide to the Air Pollution Control (Ocean Going Vessels) (Fuel at Berth) Regulation; Fuel for Vessels Regulation. https://epd.gov.hk/epd/english/environmentinhk/air/prob_solutions/guide-air-pollution-control-ocean-going-vesselsfuel-berth-regulation.html",
"R43  Information Services Department, Hong Kong (2024, 28 February). Government reply on waste textiles. https://www.info.gov.hk/gia/general/202402/28/P2024022800397.htm Supports: 404 tonnes of textiles a day to landfill in 2021; recycling about 11% in 2022.",
"R44  Suneja, T., Flanagan, K. H., & Glaser, D. A. (2007). Blue-jean button nickel: prevalence and prevention of its release from buttons. Dermatitis, 18(4), 208–211. Supports: 16% of 62 pairs’ buttons nickel-positive.",
"R45  Clean Clothes Campaign Turkey (2019). Bleached Denim, Bleached Souls. https://cleanclothes.org/news/2019/faded-denim-look-comes-at-a-steep-price Limit: small, preliminary study of about eight factories.",
"R46  ABC7 / Associated Press (2022, October). 19th-century Levi’s jeans found in mine shaft sell for more than $87,000. https://abc7.com/post/levis-jeans-auction-new-mexico/12328943/",
"R47  Marketing Week (2020). ‘It was a piece of magic’: how Levi’s ‘Laundrette’ ad led to an 800% sales boost. https://www.marketingweek.com/levis-laundrette-sales-boost/ Limit: the sales figure is an estimate.",
"R48  Levi Strauss & Co. (2026). Behind Every Original; ambassadors. https://www.levistrauss.com/2026/04/26/behind-every-original-ambassadors/",
"R49  Miller, D., & Woodward, S. (Eds.) (2011). Global Denim. Berg.",
"R50  NASA Earth Observatory (n.d.). World of Change: Shrinking Aral Sea. https://science.nasa.gov/earth/earth-observatory/world-of-change/aral-sea/",
"R51  Garner, J. K., & Alley, M. (2013). How the design of presentation slides affects audience comprehension: a case for the assertion–evidence approach. International Journal of Engineering Education, 29(6), 1564–1579.",
"R52  Greenpeace East Asia (2010). [Report title to confirm] on heavy metals around Xintang and Gurao.",
"R53  Kopytoff, I. (1986). The cultural biography of things: commoditization as process. In A. Appadurai (Ed.), The Social Life of Things (pp. 64–91). Cambridge University Press.",
"R54  Marcus, G. E. (1995). Ethnography in/of the world system: the emergence of multi-sited ethnography. Annual Review of Anthropology, 24, 95–117.",
"R55  Cook, I., et al. (2004). Follow the thing: papaya. Antipode, 36(4), 642–664.",
"R56  Rivoli, P. (2005). The Travels of a T-Shirt in the Global Economy. Wiley.",
"R57  Mottaleb, K. A., & Sonobe, T. (2011). An inquiry into the rapid growth of the garment industry in Bangladesh. Economic Development and Cultural Change, 60(1), 67–89.",
"R58  Plus AI (2026). How to make AI-generated slides that don’t look like AI slop. https://plusai.com/blog/how-to-make-ai-slides-that-dont-look-like-ai-slop",
]

def u16(s): return len(s.encode("utf-16-le")) // 2

START = 46            # start of the old subtitle; we delete [46, 11867) and insert here
DEL_END = 11867
DOC_END = 16924       # last index before the final newline

text = "".join(t + "\n" for _, t in P)
reqs = []
# 1) append references at end (affects only the tail)
reqs.append({"insertText": {"endOfSegmentLocation": {}, "text": "".join("\n" + r for r in refs)}})
# 2) delete old subtitle..challenges
reqs.append({"deleteContentRange": {"range": {"startIndex": START, "endIndex": DEL_END}}})
# 3) insert new block
reqs.append({"insertText": {"location": {"index": START}, "text": text}})
end = START + u16(text)
# 4) clear inherited run styles on the new block
reqs.append({"updateTextStyle": {"range": {"startIndex": START, "endIndex": end}, "textStyle": {}, "fields": "bold,italic,underline,fontSize,weightedFontFamily,foregroundColor,backgroundColor,link"}})
# 5) paragraph styles
idx = START
names = {"SUB": "SUBTITLE", "N": "NORMAL_TEXT", "H1": "HEADING_1", "H2": "HEADING_2"}
for st, t in P:
    L = u16(t) + 1
    reqs.append({"updateParagraphStyle": {"range": {"startIndex": idx, "endIndex": idx + L}, "paragraphStyle": {"namedStyleType": names[st]}, "fields": "namedStyleType"}})
    # bold the lead word of the challenges paragraphs
    for lead in ("Traceability.", "Balance.", "Time.", "AI use.", "Audience."):
        if st == "N" and t.startswith(lead):
            reqs.append({"updateTextStyle": {"range": {"startIndex": idx, "endIndex": idx + u16(lead)}, "textStyle": {"bold": True}, "fields": "bold"}})
    idx += L
assert idx == end
words = sum(len(t.split()) for st, t in P[2:21] if st == "N")
print("report words (4 sections):", words)
json.dump(reqs, open(H / "requests.json", "w"), ensure_ascii=False)
print(len(json.dumps(reqs, ensure_ascii=False)))
