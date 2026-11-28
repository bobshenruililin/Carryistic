# Six Layers: handoff for Astra

Astra, this is the film and image work for a 20-minute university talk on Monday 30 November. The subject is CuMask+, the reusable copper mask the Hong Kong government gave every resident in 2020. Claude wrote the deck and its speaker notes. Please make the films with your Higgsfield integration and return them as described under “Hand back”. Claude places them in the deck and reviews each one on its slide.

[Deck](https://claude.ai/artifact/HcR1rSiRoWmuBS3FUNwcKP) (private until the owner shares it) · [Slide sources](project) · [The bench](../bench.md)

**The argument.** A mask made “in Hong Kong” was six layers of globalisation: copper fibre from Jerusalem, sewing in Hong Kong and Vietnam, testing in the United States, delivery by Hongkong Post. The public record names every maker. It never measured the seventh layer: whether we wore it.

## Rules

1. **Start from real photographs.** Use the group’s photos (list below) or, until they arrive, the government’s official product photo: <https://gia.info.gov.hk/general/202005/05/P2020050500692_photo_1172214.jpg>. Mark any take built on the official photo **PRELIMINARY**.
2. **Never generate** a real place, a real person, a face or an event (no queues, no beaches, no factories). The deck uses real, credited photos for those.
3. **One slow move per film.** No text, logos or captions inside the film; the slide carries the words.
4. **Judge every take full screen on its slide**, and reject it the moment its failure condition appears. Two or three takes per shot; keep the best.
5. **Encode:** 1920×1080, 16:9, 30 fps, H.264, under 20 MB, no audio. Also export the last frame as a JPEG still.

## Style header

Paste this at the start of every prompt:

> Documentary product cinematography with Apple-keynote restraint. One real object on a plain ground. Soft top light or one raking key light. One slow camera move. Muted palette: graphite #15181C, deep copper #5C2E14, sky blue #8FCBE5, concrete grey #C9CED4, paper #F6F7F8, copper accent #B8642E. No text, no logos, no faces, no lens flares, no glossy CGI, no added objects.

## The films

| ID | Slide | Model and settings | Start → end | Prompt after the header | Must survive | Reject if |
| --- | --- | --- | --- | --- | --- | --- |
| **S1** | 1, cover | Seedance 2.5 · `omni_reference` · 6 s · 1080p · `generate_audio: false` · 16:9 | P1 (mask flat on white) → P2 (stripe macro) | A slow, continuous push-in from a reusable fabric face mask lying flat on white paper to an extreme close-up of its woven copper-coloured stripes. The mask does not move. | Stripe spacing, white edge binding, ear loops | A logo, text or face appears; the stripes change colour or direction |
| **S2** | 7, chapter 2 card | Cinema Studio Video 3.0 · `start_image` · 4 s · 1080p · audio off | P2 → flat deep copper | Extreme macro of woven copper stripes. The camera drifts forward and the fabric softly dissolves into flat deep copper #5C2E14. | The weave until the dissolve | The fabric turns to liquid, smoke or sparks |
| **S3** | 9, the six layers | FLUX 3 Video · `start_image` P3a · `image_references` P3b–P3e in order · `end_image` P3f · 6 s · 1080p · audio off | The group’s six teardown stills, from the layers stacked to the layers fanned out | The layers of a cut-open fabric mask separate one at a time and float apart on white, evenly spaced, as in a technical exploded view. | Exactly six layers, each in its real colour | The layer count changes, or a layer gains a pattern it doesn’t have |
| **S4** | 16, chapter 3 card | Cinema Studio Video 3.0 · `start_image` P4 · 5 s · 1080p · audio off | P4 (an opened Hongkong Post envelope) | Locked-off overhead camera. A hand slides a fabric mask out of a paper envelope on a table. Only the hand moves. | The envelope’s real shape | A face, invented readable text or a second mask appears |
| **S5** | 21, chapter 4 card | Cinema Studio Video 3.0 · `start_image` P5 · 4 s · 1080p · audio off | P5 (a mask in an open drawer) | Locked-off camera. The drawer slowly closes over the mask. | The drawer’s contents as photographed | Anything is added to or removed from the drawer |
| **S6** | 27, ending | Seedance 2.5 · `omni_reference` · 5 s · 1080p · audio off | P6 (mask on a hook) → P7 (hands holding the mask) | A slow lateral track. A fabric face mask hangs on a hook, then hands lift it towards the lens. No face is ever visible. | Fit, stripes, ear loops | A face becomes visible, or the mask changes shape |

**Tonight, before the photos:** make S1 and S2 as PRELIMINARY takes from the official photo, cropped to the single adult mask.

## Data films

Build these in code, not with generation. A Python or ffmpeg render like `../reels/render_data.py` works. They use the same palette, with Archivo 700/800 for numbers, Inter for words and JetBrains Mono for labels and the source line. Every figure must be exactly as given, with the source shown at the bottom.

| ID | Slide | What it shows | Length |
| --- | --- | --- | --- |
| **D1** | 2 | On graphite: “6 MAY 2020 · THE FIRST DAY OF REGISTRATION”. A counter runs 0 → 720,000 (“registrations”), then 0 → 2,000,000 (“people covered, in one day”), then holds. Source: news.gov.hk, 7 May 2020. | 7 s |
| **D2** | 15 | On paper: horizontal bars growing one at a time. Post, round one 4.14m; post offices, round two 3.6m; schools 1.67m; welfare services 0.77m; border crossings 0.16m; still in stock 0.45m (in copper). A total counter reaches 10.34 million. Source: LCQ19, 13 Jan 2021. | 8 s |
| **D3** | 22 | On concrete grey: 1,000 dots, each standing for 52 million masks, so 52 billion made in 2020. Thirty dots (3%) turn copper and sink into a sea band at the bottom; the label reads “1.56 billion · 4,680–6,240 tonnes of polypropylene”. Source: OceansAsia, Masks on the Beach, Dec 2020 · estimates, not measurements. | 8 s |

## Photos the group takes on Saturday

| ID | Shot |
| --- | --- |
| P1 | A CuMask+ flat on white paper, top light |
| P2 | A macro of its copper stripes |
| P3a–f | The mask cut open: six stills, from the layers stacked to the layers fanned out and counted |
| P4 | An opened Hongkong Post envelope, if anyone kept one; otherwise any plain envelope |
| P5 | A CuMask+ in a drawer |
| P6 | The mask on a hook |
| P7 | Hands holding the mask, no face |

Grade the photos to the palette if needed, changing colour only, never content.

## Hand back

1. Put each keeper and its still in `ghad2001-pre-worn/six-layers/media/`, named by ID (`S1.mp4`, `S1.jpg`, `D1.mp4`, …). Commit to the branch `claude/zealous-mccarthy-jpmouc`, or to a branch Claude can merge.
2. Add one row per take, kept or not, to `six-layers/ledger.csv`: `shot,model,settings,job_id,credits,decision,reason`. The methodology report draws on this log.
3. Tell Claude which takes are PRELIMINARY. Claude places every keeper on its slide and checks it against the failure conditions above.
