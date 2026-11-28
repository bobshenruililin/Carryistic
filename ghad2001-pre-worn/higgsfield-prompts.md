# Higgsfield prompt pack

Films for both decks. Make them in the team workspace, which had about 35,900 credits on 28 November. The rules come from the bench: start from **our own photographs**; never generate a real place, person or event; reject a take the moment its failure appears; log every keeper (model, settings, job ID, decision, reason) for the methodology report.

## Style header

Paste this before every prompt.

> Documentary product cinematography with Apple-keynote restraint. One real object on a plain ground or in its true setting. Soft natural light, or one hard raking key light. One slow camera move: a push-in, a lateral track, or locked off. No text, no logos, no faces, no lens flares, no glossy CGI, no added objects.

Add the deck’s palette line:

- **Pre-Worn:** ink indigo #1B2A47, mid blue #45689A, pale blue #A9BFD8, paper #FAFBFC; copper #C27434 only as thread.
- **Six Layers:** graphite #15181C, deep copper #5C2E14, CuMask+ sky #8FCBE5, concrete #C9CED4, paper #F6F7F8; copper #B8642E only on the mask’s stripes.

## Models

| Job | Model | Settings |
| --- | --- | --- |
| Bridge between two of our photos | Seedance 2.5 | `omni_reference`, `start_image` and `end_image`, 4–8 s, 1080p, `generate_audio: false` |
| Slow macro move on one photo | Cinema Studio Video 3.0 | `start_image`, 4–6 s, 1080p, audio off |
| Stop-motion feel from ordered stills | FLUX 3 Video | `start_image`, `image_references` in order, `end_image` |

Export the keepers at 1920×1080, H.264, under 20 MB, so they play in the deck and in PowerPoint.

## Six Layers (CuMask+)

| ID | Slide | Start → end | Length | Motion | Must survive | Reject if |
| --- | --- | --- | --- | --- | --- | --- |
| S1 | Cover | Our photo of a CuMask+ flat on paper → macro of its copper stripes | 6 s | Slow push-in until the stripes fill the frame | The stripe spacing, the white binding, the ear loops | Any logo, text or face appears; the stripes change colour |
| S2 | Chapter 2 card | Macro of the stripes → flat deep copper #5C2E14 | 3 s | The push continues; the fabric dissolves into the ground | The weave until the dissolve | The fabric turns to liquid or smoke |
| S3 | Six layers | Our photo of a CuMask+ cut open, layers fanned out → the six layers floating apart, evenly spaced | 6 s | Exploded view; layers separate upward one at a time | Exactly six layers; each layer’s real colour | The layer count changes; a layer gains a pattern it didn’t have |
| S4 | Chapter 3 card | Our photo of a Hongkong Post envelope opened on a table → the mask lifted out by a hand, no face | 5 s | Locked off; only the hand moves | The envelope’s real shape; the mask’s three-size label if visible | Any face, readable invented text or a second mask |
| S5 | Chapter 4 card | Our photo of a CuMask+ in a drawer → the drawer slowly closing | 4 s | Locked off | The drawer contents as photographed | Objects added to or removed from the drawer |
| S6 | Ending | Our photos of the mask on a hook, worn by no one → the same mask worn, seen from the side, face out of frame | 5 s | Lateral track | The fit and the stripes | A face becomes visible; the mask changes shape |

**Our own shots to take first:** the mask flat; a stripe macro; the mask cut open into its layers, which also checks the six-layer claim; a Hongkong Post envelope; a drawer; the mask on a hook.

## Pre-Worn (Levi’s 501, 00501-0162)

| ID | Slide | Start → end | Length | Motion | Must survive | Reject if |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | Opening | Line drawing traced from the 1880s auction photo → our knee or fade macro | 6 s | Cross-move and push-in | The fade pattern of our pair | Extra holes appear; the denim melts |
| P2–P4 | Chapter cards | Our knee macro → each chapter ground (#1B2A47, #45689A, #A9BFD8) | 3 s each | Push through the worn patch into flat colour | The weft threads until the push passes | The patch changes shape before the push |
| P5 | The *Fly* echo | No generation: built with PowerPoint Morph or Keynote Magic Move | 4 s | Our cut-out pair four times down a diagonal, then four squares | The diagonal order | The squares read as a chart |
| P6 | Mend | No generation: our stop-motion of a darn in copper thread | 8–10 s | One frame per stitch, 12 fps | Real hands, real thread | Any generated frame |

**Our own shots to take first:** the 501’s care label (check it says Türkiye), a fade or knee macro, an overhead flat-lay, the pair on a Hong Kong drying rack, and the darn.
