# Generation handoff for Astra

The scroll is built, and every passage works as a straight cut today. Seven shots can make it better. Each one starts on one of Carry’s frames and lands on another of her frames, or plays inside a single frame of hers. The site picks a clip up automatically once it’s delivered and marked ready. Nothing else needs to change. [Machine-readable requests](../film/requests/requests.json) · [Start and end frames](../film/requests) · [Direction](scroll-direction.md)

## The contract

1. Render with the settings below. Use the exact start and end images in `film/requests/`. Every image there is a 1:1 crop of the original file.
2. Compare the take with the straight cut **in context**: run `npm run dev`, scroll to the room and scrub it in both directions. Keep the clip only if it beats the cut, and discard it if its failure condition shows up even once.
3. Encode the keeper for scroll scrubbing. Write it to `public/motion/<ID>.mp4`:

   ```sh
   ffmpeg -i master.mp4 -an -vf "scale=1080:1080:flags=lanczos" -c:v libx264 -preset slow -crf 22 -g 4 -bf 0 -pix_fmt yuv420p -movflags +faststart public/motion/H1.mp4
   ```

   Keyframes every four frames and no B-frames let the browser seek smoothly when a visitor scrolls backwards. Keep the 4K master outside the repository and link it in the ledger.
4. Set `"ready": true` for that key in `src/motion.json`, run `npm test`, and add a row to `film/requests/ledger.csv` with the model, settings, job ID, credits, your decision and the reason.

The tests refuse a clip that is marked ready but missing. The live site never shows a half-delivered shot.

## Spend: cheap first, then 4K on the winners

- **Explore:** Seedance 2.5 `omni_reference`, `draft: true` (480p), `generate_audio: false`, aspect 1:1. Make two or three drafts per shot.
- **Second opinion:** for any shot that fails as a draft, try MAGI-2 with the same first and last frames. It is the lower-cost model in the catalog.
- **Finalize:** finalize the chosen draft with `draft_job_id` at `4k` (`bitrate_mode: high`). Seedance 2.5 bills the finalize for the draft’s full duration.

The workspace held about 40,100 credits when this was written. Codex’s four-second 720p bead test cost 28 credits. The connector in Opus’s session can read the balance and the models but cannot generate, which is why this is a handoff.

## The seven shots

| ID | Where in the scroll | From → to | Length | Must survive | Discard if |
| --- | --- | --- | --- | --- | --- |
| H1 | End of *Dusk til Dawn* | P01-04 (white flecks on black) → P02-01 (BLACKOUT triptych) | 5 s | The painted head early on; the BLACKOUT lettering at the end | The flecks rearrange before they glint, a face appears in the black, or the letters warp |
| H2 | Last image of *Blackout photographs* | P02-13, a slow dolly into the empty hall | 5 s | The lone figure stays small and still; the window grid stays straight | The figure moves, a second person appears, or the grid bends |
| H3 | End of *Artful and Grateful* | P13-06 (flame) → P15-01 (gold dome) | 5 s | The flame’s reflection early on; the dome’s arches at the end | The flame becomes a candle or a lamp, or a figure appears |
| H4 | End of *Domus Dei* | P15-07 (gold halo) → P08-04 (gold-rimmed opening) | 4 s | The ring holds its place and size on screen | The painted face morphs into the sculpture, or the rim changes shape |
| H5 | *Fly*, once the blocks have become the waterfront | P05-01: the four bodies stay frozen mid-air while the clouds and water move | 6 s | All four figures, completely still | Any figure moves or blurs, or a fifth figure appears |
| H6 | *Domus Dei*, the dusk moon | P15-06: the sky deepens and windows light up; the moon and star hold still | 5 s | The collage borders, the moon, the star, the crane | Anything in the collage layout shifts, or stars are added |
| H7 | End of *To Bleed in Liquid Gold* | P08-04 (gold-rimmed opening) → P11-01 (red record label) | 4 s | The hands, the PHILA 3 lettering, the record labels | The hands deform or a face appears behind the records |

The full prompts are in [requests.json](../film/requests/requests.json). Every prompt names its first and last frame and says what may move and what may not. Every prompt also asks for silence, no added text, and no new people.

## Four rules these shots must keep

- **Generate between her images, never instead of them.** Her pixels are the first and last frame.
- **Never generate her process.** No shot shows a painting being painted or a drawing being drawn. P07-05 → P07-06 → P07-01 in *Proud Daddy* stays a straight sequence of her own photographs.
- **Faces, hands, gazes, lettering and her borders are protected in every shot.**
- **H5 is the most interpretive shot.** Her photograph is a still. If the moving water makes the jump read as a video of one jump rather than her composite of four moments, drop it.

## Changes since the first direction note

- The old H2 (the BLACK OUT sheet on the stream → the river at night) is dropped. In the built scroll, *The Blackout Awaits* plays through to its own HAVE FUN end card and fades to the night of *Artful and Grateful*. In her reel, a hand lifts the sheet out of the water at 39 s, so sending it downstream would contradict her film.
- The old H5 asked for invented in-between poses for *Fly*. It now freezes her four poses exactly as photographed and moves only the world around them.
- H7 is new. It carries the circle from the sculpture to the record. This was the original film’s move, now played in reverse.
