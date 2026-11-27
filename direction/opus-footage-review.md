# Footage for Opus’s scroll

*Screening notes by Astra, with Opus’s review at the end.*

Opus’s [continuous scroll](scroll-direction.md) sets the pace. The four passes below use video where light, water or paper can change within a picture. They keep the sequence of her handoffs and the original images on either side. [Original requests and frames](astra-requests.md) · [Take ledger](../film/requests/ledger.csv) · [Private screening folder](https://drive.google.com/drive/folders/10KqTfryWejcJOwXEGmexX4aoq00gP2kg)

| Where to look | Take in the review build | What to compare |
| --- | --- | --- |
| *Dusk til Dawn*, before the BLACKOUT shutters | **H1-A**, first 3.375 s | The paint flecks catch light. The cut comes before the generated triptych so Opus’s shutters reveal the full original print and lettering once. |
| *Domus Dei*, at the dusk collage | **H6-A**, first 3.75 s | The blue darkens inside the collage and a window warms. The original white field, seams, crane, moon and point of light hold their places. |
| *Fly*, after the blocks reach the waterfront | **H5-B**, with the photographed figures and shoreline held in every frame | Only motion in open sky and water comes from the generated take. Carry’s four bodies, horizon and shoreline come from P05-01. The first and last frame use the original square. |
| RISD into *Proud Daddy* | **M1-B**, registered to P07-04 | One sheet lifts from the light table and turns into a printed basketball photograph. The video settles on the center of the original portrait before that portrait takes over and extends the edges. |

The 1440 × 1440 clips scrub forward and back at 1440 × 900 and 390 × 844. Cold seeks, reduced motion, an unavailable clip and the offline edition were checked. Each stream is silent and has a keyframe every four frames. Seedance’s 4K setting returned 2880 × 2880 masters for these squares. They are in the private screening folder. [Offline review edition](../handoff/Carryistic.html)

To re-cut *Fly*, run `python scripts/lock-fly-motion.py H5-B.mp4 public/motion/H5.mp4` with NumPy, Pillow, SciPy and FFmpeg. The script uses the original cutout as a subject mask, protects the shoreline and brings the original photograph back at both ends. The ledger’s credit figures are the provider’s quotes at submission. [Fly composite script](../scripts/lock-fly-motion.py)

## Handoffs that work better with the original images

- **H2, hall.** The dark object in P02-13 is a stand with a weighted base. The Seedance takes loosen the window bars and stand during the push. The Kling take adds a white border and pulls away. Opus’s dolly keeps the grid straight and brings the next film through the far window.
- **H3, flame into dome.** The first two takes lose the original architectural insets. Kling reaches the complete collage through a circular reveal. The climb from the flame is a stronger lead into the halo iris in the next room.
- **H4, halo into gold rim.** In the supplied squares the halo is near the upper middle and the big opening is lower and right. One take zooms through a smaller medallion. The other dissolves across the painted face. The built iris can begin on the actual ring.
- **H7, gold rim into red label.** Two takes redraw the pixelated label. Kling preserves the print but starts a circular opening high on the wrong part of the sculpture. The authored spin has a clear center and leaves the labels and hands intact.
- **M2, card flip.** Kling turns the whole card over and reaches both source images. The white outside the paper interrupts the pale-blue ground that connects Carry’s two works. Opus’s flip carries the blue through the edge.
- **M3, three panels.** Opus splits the real triptych at its own gutters. The generated full reveal would repeat the arrival after the glint. Keep the original shutters.

## Experiments for the edit room

- **E1, source footage.** All three originals have ByteDance Pro upscale comparisons. The separate 3840 × 2160 Blackout master retains all 2,255 original picture frames and its original audio. Compare to Carry’s footage before changing either flipbook. [Recut notes](../film/upscaled/README.md)
- **E2, sculpture.** Tripo and Meshy used genuine angles from Carry’s camera sweep. Hunyuan used one three-quarter view as a control. The archive supplies a partial turn. Tripo adds apertures, Meshy adds feet and merges the support, and Hunyuan loses the bead pile and hanging strands. Room 6 uses Carry’s original orbit. The comparisons stay in the director’s private folder while Carry considers showing any reconstruction.
- **E3, instrumental score.** Five 90-second cues are available at 192 kbps and approximately −23 LUFS. The 38-second audition plays all four joins. Speech detection found zero words across twenty takes. Listen to the sustained Gold pad and the D-minor to D-major transition before wiring a sound button. [Cue notes](../film/requests/E3-cue-report.md)
- **E4, circles.** Two 10-second, 2880 × 2880 HLG masters follow the halo, sculpture opening, red record label and painted ball. The first adds holes and imagines a tube full of beads. The second keeps the four pictures more legible and uses the same luminous iris for each change. The separate originals support Opus’s distinct halo and record moves. Both renders stay in the edit room. [First SDR preview](https://drive.google.com/file/d/1Jqx8GrLQYtPEanKzwzUxJHiglYvmtFb4/view) · [Second SDR preview](https://drive.google.com/file/d/1ZB7g1eaoHoKUw21qEbBUrF82t7pVkw6t/view)

Opus and the director can screen this branch locally before a Vercel build. The studio sequence lands on Carry beside her canvas in P07-10. The linen in P07-11 can be opened in All works, and any featured use waits for Carry’s decision.

## Opus’s review

The four clips are reviewed frame by frame against the discard conditions in [astra-requests.md](astra-requests.md). They are also scrubbed in place, forward and backward, at 1280 × 800.

| Clip | Verdict | What I checked |
| --- | --- | --- |
| **H1** | Keep | The flecks hold their shapes and only gain light. No face appears in the black. The cut to the shutters lands before any generated lettering, so the first BLACKOUT anyone reads is Carry’s print. |
| **H6** | Keep | The moon, tower, crane and seams stay fixed while the sky deepens and two windows warm. It is subtle, which is right for a held image. |
| **H5** | Keep, re-encoded | Her four figures are pixel-identical in every frame, held by `lock-fly-motion.py`. I re-encoded the clip at CRF 26 with the same keyframe spacing. It drops from 18 MB to 9.5 MB at SSIM 0.98 against Astra’s encode, which matters on a phone. |
| **M1** | Keep | The sheet lifts as paper. Nothing shows painting or drawing. It settles registered on P07-04 before the portrait takes over. |

I agree with every rejection. The built moves for H2, H3, H4, H7, M2 and M3 stay.

**Sculpture.** The three meshes are rendered from four sides with studio lighting, next to Carry’s photographs.

- **Tripo** is the most convincing surface: the glossy red, the gold leaf, the bead pile, the dish and the striped cloth. It adds openings.
- **Meshy** invents a split stem on the unseen side.
- **Hunyuan** loses the beads.

The director chose Tripo for the site. Room 6 runs in two steps. First, Carry’s own filmed orbit, which visitors can drag. Then the Tripo reconstruction lifts onto her red and turns a full circle with the scroll and by hand, lit so the gold leaf catches the light, with a caption that names it a reconstruction from her photographs. `scripts/prepare-sculpture.py` reduces the 66 MB mesh to 5.8 MB: 1.9 million triangles become 200,000 on a vertex grid that keeps UV seams apart, with KHR_mesh_quantization and 2048 px textures. It renders indistinguishably from the original at all four test angles. The added openings and the unseen back remain the reconstruction’s, so Carry can still ask for it to come down. Removing the `model(...)` beat from room 6 restores her film alone.

**Score.** The director asked for the music, so the five cues are in `public/sound/`. A **Sound** button plays them from Astra’s entry points and crossfades by chapter as the visitor scrolls, backwards too. It is off by default and ducks whenever a sheet opens or a film plays. I can’t listen, so the joins and the Gold pad still need a human ear on the live site. The offline edition leaves the score out and hides the button.

**Linen.** P07-11 stays out of the ending until Carry answers. It remains in All works.
