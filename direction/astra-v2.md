# Handoff for Astra: version 2

Version 2 opens on Carry’s profile picture. The light on her face throws fifteen rays, one per work: touch a ray to see its work, touch again to enter. Inside, each work plays like her stories, and the twelve moves from version 1 carry you from work to work. Sound is on by default.

Opus is building all of that now on `review/frontend-narrative`, with a slot for every asset below. Each slot plays its code-built stand-in until you mark it ready, so you can deliver in any order. [Plan](plan-v2.md) · [Prototype of the landing](paths/rays-prototype.html) · [Machine-readable requests](../film/requests/requests.json) (key `v2`) · [Slots](../src/v2-assets.json)

## The contract

The contract from the [first handoff](astra-requests.md) still holds: generate between her images and never instead of them; protect faces, hands, gazes, lettering and borders; never generate her process. Four additions:

1. **Audio is instrumental.** No voices or words, and nothing that imitates a named artist.
   - **Tempo and key:** 84 BPM, centred on D, the same family as the five existing cues, so any two tracks crossfade.
   - **Loudness:** −18 LUFS integrated, true peak −1 dBTP.
   - **Format:** MP3, 192 kbps, stereo, 44.1 kHz.
2. **Switch each asset on.**
   - **Picture:** set `"ready": true` in `src/motion.json`.
   - **Sound:** set `"ready": true` in `src/v2-assets.json`.
   - **Then:** run `npm test`. It refuses a ready slot whose file is missing.
3. **Log every take** in `film/requests/ledger.csv`, as before.
4. **Write to Opus in [`astra-feedback.md`](astra-feedback.md).** Note what failed, what came out better than asked, what you would change, and any question. Opus answers in the same file and adjusts the requests or the code. Write there during generation, not only at the end.

## In this order

### 1 · Fifteen tracks (T)

- **What:** one per work, 75 s, instrumental.
  - The first four seconds must work on their own, because the track starts the moment a ray opens.
  - The last bars should loop back into the first.
- **Model:** ElevenLabs Music. Make four variations each and keep the one closest to the work.
- **Output:** `public/sound/track-<work>.mp3`, for example `track-P05.mp3`.
- **Entry point:** if the best entrance isn’t at 0 s, put its time in `entry` in the slot.

| Work | Prompt |
| --- | --- |
| P01 Dusk til Dawn | Slow warm synth bloom, felt piano, night air |
| P02 Blackout photographs | A house beat heard through a wall, mirror-ball shimmer, a muffled crowd without words |
| P03 The Blackout Awaits | No generation: the soundtrack of her film from the 4K master (E1-P03-01), trimmed to 75 s with a natural loop point |
| P04 Streets of New York | Street pulse, subway hum, upright bass |
| P05 Fly | Airy guitar, wind, a rising figure |
| P06 DC Chronicles | Museum hush, brushed jazz trio |
| P07 Proud Daddy | Warm piano with a basketball bounce as the kick; quiet pride |
| P08 To Bleed in Liquid Gold | Glass beads and metallic taps over a slow sub-bass heartbeat |
| P09 Graphic pose studies | Glitchy synth-pop arpeggios, bright and playful |
| P10 Record-store portraits | Lo-fi tape echo; one short motif repeating like her echoed figures |
| P11 Record-store shoot | Vinyl crackle, boom-bap drums, a chopped soul feel |
| P12 First Weeks at RISD | Pencil scratches as rhythm, solo piano |
| P13 Artful and Grateful | Fire crackle, warm acoustic guitar, distant friends without words |
| P14 Italy in motion | Mandolin and strings on a warm afternoon |
| P15 Domus Dei | Organ pad, distant bells, stone reverb |

Add to every prompt: *Instrumental, 84 BPM, centred on D.*

**Discard if:**
- any voice or word appears;
- the first four seconds are silence or a fade-in;
- the track drifts out of D.

### 2 · The rays: fifteen notes and two sounds

**The notes.** Sliding a finger across her light plays a scale.
- **Source:** generate one clean, dry, plucked-harp note at D4, about 2 s with its natural decay.
- **Tuning:** pitch it to each note with `rubberband` so the tuning is exact. The fifteen pitches are D3, E3, F♯3, A3, B3, D4, E4, F♯4, A4, B4, D5, E5, F♯5, A5, B5.
- **Order:** `note-01` is the lowest and belongs to the first ray (night, low in front of her face); `note-15` belongs to the white ray behind her.
- **Output:** `public/sound/note-01.mp3` to `note-15.mp3`.
- **Discard if:** any note sounds like a different instrument from the others, or carries room noise.

**The two sounds:**

| Slot | Length | What |
| --- | --- | --- |
| `shine` | 2.6 s | A soft glass shimmer that travels from the right speaker to the left, as the light sweeps across the rays when the page opens. Gentle, no whoosh. |
| `open` | 1 s | A short warm swell of air and light as a ray opens into a work. No impact. |

### 3 · L1, the photograph alive

- **Request:** in `requests.json` (shots → L1).
- **Shot:** a 6-second loop of her profile picture. A few strands of hair stir and the light on her face breathes.
- **Protect:** her profile, pixel for pixel. The rays meet it in code, so a 2-pixel shift shows.

### 4 · The open shots from version 1

H2, H3, H4, H7, M2 and M3 are still open. The twelve moves stay in version 2, so these still matter. The requests are unchanged.

### 5 · Living stills: propose first

- **What:** at most one per work, where only light, water, sky, smoke, flame or fabric moves. Every figure, face, hand, letter and border holds, using the `lock-fly-motion.py` method. H5 (*Fly*) and H6 (*Domus Dei*) already count.
- **Before rendering:** go through her works and propose the slide and the motion in the feedback file. Opus agrees or redirects there.
- **Settings:** Seedance 2.5 `omni_reference`, 4K, 1:1, 5 s. The start and end frame are both the slide, so it loops.
- **Output:** `public/motion/V-<slide>.mp4`, with a key in `src/motion.json`.

### 6 · Twelve move sounds

One per move between works, about 1.5 s each, output as `public/sound/move-<move>.mp3`:

| Move | Sound |
| --- | --- |
| shutters | Three tall panels landing one after another, soft wooden thuds |
| window | A rush of air through an opening window |
| rise | A breath of flame rising |
| iris | A struck glass ring |
| spin | A record spinning down |
| flash | A camera flash firing and recharging |
| star | A bright, short zap |
| flood | Paint pouring |
| flip | A card turning over on a table |
| slices | Paper strips pulling apart |
| drain | A low hum fading out |
| unfold | A sheet of paper unfolding |

### 7 · L2, the light switching on (optional)

- **What:** a 3-second shot. It begins almost black and a light from the left finds her face.
- **Status:** the landing now shows the image first and then sweeps the light across the rays, so L2 is an alternative opening for comparison. It is not required.

## When it is all in

Opus reviews every asset in context on a phone and a laptop, wires in the keepers, and the director publishes to Vercel.
