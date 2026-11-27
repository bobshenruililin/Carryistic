# Generation handoff for Astra

The scroll is built. Every passage works today without any generated media: each work hands on to the next with its own move, taken from Carry’s pictures. This handoff asks Higgsfield for three things:

- **Bridges and living stills (H1–H7):** generated passages that start on one of her frames and land on another, or move inside a single frame.
- **Material moves (M1–M3):** rendered versions of three of the code-built moves.
- **Experiments (E1–E5):** her own footage in 4K, her sculpture in 3D, a score, and a 4K HDR passage that follows the recurring circle.

Every request has its source frames, model, settings, prompt, protected details and discard condition. [Machine-readable requests](../film/requests/requests.json) · [Start and end frames](../film/requests) · [Direction](scroll-direction.md)

## The contract

1. **Render natively in 4K.** Use Seedance 2.5 `omni_reference` with `resolution: "4k"`, `bitrate_mode: "high"`, aspect 1:1 and `generate_audio: false`. Make two or three takes per shot and keep the best. Credits are not the constraint; Carry’s pictures are.
2. **Judge each take in context.** Run `npm run dev`, scroll to the room, and scrub it in both directions against the current move. Keep the take only if it is better, and discard it the moment its failure condition appears.
3. **Encode the keeper for scrubbing.** Keep the 4K master out of the repository and link it in the ledger. The site gets a 1440 copy with a keyframe every four frames, so scrolling backwards stays smooth:

   ```sh
   ffmpeg -i master.mp4 -an -vf "scale=1440:1440:flags=lanczos" -c:v libx264 -preset slow -crf 20 -g 4 -bf 0 -pix_fmt yuv420p -movflags +faststart public/motion/H1.mp4
   ```

4. **Switch it on.** Set `"ready": true` for its key in `src/motion.json`, run `npm test`, and add a ledger row to `film/requests/ledger.csv` with the model, settings, job ID, credits, your decision and the reason. The tests refuse a key marked ready whose file is missing.
5. **Commit and push.** Commit to `review/frontend-narrative`, or to a branch Opus can merge. Opus reviews every clip in the scroll before anything goes to Vercel.

## H · Bridges and living stills

| ID | Where | From → to | Length | Must survive | Discard if |
| --- | --- | --- | --- | --- | --- |
| H1 | End of *Dusk til Dawn* | P01-04 (white flecks on black) → P02-01 (BLACKOUT triptych) | 5 s | The painted head early on; the BLACKOUT lettering at the end | The flecks rearrange before they glint, a face appears in the black, or the letters warp |
| H2 | Last image of *Blackout photographs* | P02-13, a slow dolly into the empty hall | 5 s | The small stand and its rectangular base hold position; the window grid stays straight | The stand changes shape, a person appears, or the grid bends |
| H3 | End of *Artful and Grateful* | P13-06 (flame) → P15-01 (gold dome) | 5 s | The flame’s reflection early on; the dome’s arches at the end | The flame becomes a candle or a lamp, or a figure appears |
| H4 | End of *Domus Dei* | P15-07 (gold halo) → P08-04 (gold-rimmed opening) | 4 s | The ring holds its place and size on screen | The painted face morphs into the sculpture, or the rim changes shape |
| H5 | *Fly*, once the blocks have become the waterfront | P05-01: the four bodies stay frozen while the clouds and water move | 6 s | All four figures, completely still | Any figure moves or blurs, or a fifth appears |
| H6 | *Domus Dei*, the dusk moon | P15-06: the sky deepens and windows light up; the moon, star and crane hold | 5 s | The collage borders, the moon, the star, the crane | Anything in the layout shifts, or stars are added |
| H7 | End of *To Bleed in Liquid Gold* | P08-04 (gold-rimmed opening) → P11-01 (red record label) | 4 s | The hands, the PHILA 3 lettering, the record labels | The hands deform, or a face appears behind the records |

If Seedance can’t land a shot, try Kling 4.0 `image-to-video` at `4k` with the same start and end images.

## M · Material moves

The site already performs these three moves in code. A rendered version replaces the code-built move only if it is better in context. The code move stays as the fallback.

| ID | The move | From → to | What should happen |
| --- | --- | --- | --- |
| M1 | Unfold (RISD → *Proud Daddy*) | P12-07 → P07-04 | The sheet taped to the light table lifts and folds open like real paper, landing on the source photograph of the child with the basketball |
| M2 | Flip (DC → New York) | P06-02 → P04-02 | The square print turns over like a card on a table; its back is the raised-arm print on the same pale blue |
| M3 | Shutters (*Dusk til Dawn* → *Blackout*) | P01-04 → P02-01 | Three tall black panels fall in like stage flats and land as the three vertical panels of the BLACKOUT triptych |

## E · Experiments

**E1 · Carry’s own footage in 4K.**
- **What:** upscale her three source films.
  - P08-02 (720 × 720), the camera arc around the sculpture.
  - P08-07, the gold hand.
  - P03-01, *The Blackout Awaits*.
- **How:** Topaz at `2160p` (enhancement `prob-4`), or ByteDance Video Upscale at `4k` (`ugc`, `pro`).
- **Where:** put the results in `film/upscaled/`. Opus will re-cut the orbit and reel flipbooks from them.
- **Discard if:** a face or letter looks repainted, or new texture appears in the beads.

**E2 · The sculpture in three dimensions.**
- **How:** Tripo H3.1 Multiview to 3D, detailed geometry and textures, aligned to the original images. Try Meshy Multi-Image and Hunyuan3D v3 for comparison.
- **Inputs:** P08-01, P08-04, P08-05, P08-06, plus two frames from P08-02.
- **Output:** `public/motion/E2-sculpture.glb`.
- **Use:** the visitor could turn the object in room 6. Opus adds a lazy-loaded viewer only after Carry agrees to show a reconstruction of her sculpture.
- **Discard if:** rendered from the four photographed angles, the model disagrees with any photograph about where the gold sits or how many openings there are.

**E3 · A score that follows the light.**
- **How:** ElevenLabs Music v2.5, instrumental, 90 s, four variations each.
- **The stems:** five stems (night, gold, neon, day, studio) at one tempo and key so they crossfade. The prompts are in the JSON.
- **Output:** `public/motion/E3-<chapter>.mp3`, loudness-matched to −23 LUFS.
- **Use:** sound stays off until a visitor turns it on with one small toggle, and then follows the scroll. Opus integrates it.
- **Discard if:** a stem has any vocals or words, or anything sounds like a named artist.

**E4 · The circle in one 4K HDR shot.**
- **How:** Kling 4.0 `image-to-video`, `4k`, `hdr`, 10 s, with ordered keyframes: the halo (H4-start), the gold rim (H4-end), the record label (H7-end) and the painted basketball (E4-end).
- **Use:** it is compared against H4 and H7. It could also open the ending as the recurring circle.

**E5 · Material moves.** See M1–M3 above.

## Rules every request keeps

- **Generate between her images, never instead of them.** Her pixels are the first and last frame.
- **Never generate her process.** Nothing should look like footage of Carry painting, drawing or building. P07-05 → P07-06 → P07-01 stays a sequence of her own photographs.
- **Faces, hands, gazes, lettering and her borders are protected everywhere.**
- **Reconstructions and upscales are labelled as such** in the credits. Carry decides whether a 3D version of her sculpture is shown at all.
