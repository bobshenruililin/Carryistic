# Carryistic

[Open the portfolio](https://carryistic.vercel.app/) · [Offline screening kit](https://drive.google.com/drive/folders/1qjbQmd1ob6WyTthBDtWGXcai26FL3Zgz) · [Google Drive reference library](https://drive.google.com/drive/folders/1fbso1aN0VT27E0wNxjwqrTS4eapcjhkn)

![Her light: Carry’s profile picture, with fifteen rays of colour coming from the light on her face.](direction/paths/rays-landing.jpg)

**Version 2** (on `review/frontend-narrative`) opens on Carry’s profile picture. The light on her face throws fifteen flat rays, one per work, each in a colour taken from that work. Its only words are *Hi, I’m Carry.*, *All works* and *Play the film*.
- **The opening:** the picture comes first, then the light sweeps across the rays from right to left.
- **Choosing a work:** touch a ray to see its work inside it, and touch again to open the ray into it.
- **Inside a work:** it plays like her stories.
  - Tap or click for the next picture, hold to pause.
  - Swipe sideways for another work, swipe down to return to her light.
  - Version 1’s twelve moves carry you from work to work.
- **Sound and addresses:** sound is on from the first touch, and every work and picture has its own address (`#P05`, `#P05/3`).

[Plan](direction/plan-v2.md) · [Handoff for Astra](direction/astra-v2.md) · [Astra ↔ Opus](direction/astra-feedback.md)

**Version 1**, live at [carryistic.vercel.app](https://carryistic.vercel.app/) until version 2 is published, is one continuous scroll through the same rooms. [Direction, storyboard and the twelve moves](direction/scroll-direction.md) · [Walkthrough](direction/scroll-walkthrough.mp4)

All 153 slides remain one click away with credits, Instagram links and originals. Carry can decide whether to bring the linen in P07-11 into the studio ending. [Originals](archive/artworks) · [36-page atlas](archive/Reference%20atlas.pdf) · [Slide index](archive/Image%20index.csv)

## Generated passages

Four clips are ready for review on this branch. Glints in the oil painting lead into Opus’s shutters. Clouds and water move behind the four frozen poses in *Fly*. Dusk darkens inside the *Domus Dei* collage. A real-looking paper fold leads from the RISD light table into the original basketball photograph. The other handoffs play with Opus’s own choreography. In *To Bleed in Liquid Gold*, visitors first drag Carry’s own filmed orbit, then the object lifts onto her red as a 3D reconstruction that turns a full circle with the scroll or by hand. Its caption says it is a reconstruction from her photographs. **Sound** at the top right plays a five-part instrumental score that follows the chapters of light. It is off until a visitor turns it on. [Sculpture script](scripts/prepare-sculpture.py) · [Score notes](film/requests/E3-cue-report.md) [Screen the footage with Opus](direction/opus-footage-review.md) · [Requests, frames and encoding](direction/astra-requests.md) · [Private takes and masters](https://drive.google.com/drive/folders/10KqTfryWejcJOwXEGmexX4aoq00gP2kg)

## Working with Opus

Opus started from the unannotated contact sheets and saved an independent reading before reading the director’s record. That reading led to the colour and shape handoffs in the scroll. Opus also proposed P07-11 for the ending. The current cut lands on Carry beside the canvas while she considers the linen. [Independent first look](direction/opus-independent.md) · [Director’s record](direction/director-record.md) · [Collaboration research](direction/collaboration.md)

## Edit or screen the work

Use Node 22.12 or newer.

```sh
npm ci
npm run dev
npm test
npm run build
```

The rooms are written in `src/rooms.js`, one beat per move. `src/stage.js` draws them; `src/reel.js` plays them like stories and `src/light.js` is the landing. `scripts/prepare-profile-masks.py` rebuilds the landing’s photograph and figure mask from `archive/profile`. `scripts/prepare-scroll.py` rebuilds the sharp stills, strip thumbnails, reel and orbit flipbooks, and Astra’s request frames from `archive/artworks`. It needs Python 3 with Pillow, and FFmpeg.

The Vercel project `carryistic` builds `main`, which serves the scroll. Review branches are not deployed (`vercel.json`). [Vercel portfolio](https://carryistic.vercel.app/) · [GitHub Pages](https://bobshenruililin.github.io/Carryistic/)

`dist/Carryistic.html` is the offline review edition. It embeds the stills, the reel and orbit frames, the review clips, fonts and the first film. Full-length source movies and full-resolution originals open online. [Download the review edition](handoff/Carryistic.html) · [Film and timecodes](film) · [Rhythm reference](direction/rhythm.md)
