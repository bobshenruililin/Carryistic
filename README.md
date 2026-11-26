# Carryistic · Dream studies

[Open the portfolio](https://carryistic.vercel.app/) · [Offline screening kit](https://drive.google.com/drive/folders/1qjbQmd1ob6WyTthBDtWGXcai26FL3Zgz) · [Google Drive reference library](https://drive.google.com/drive/folders/1fbso1aN0VT27E0wNxjwqrTS4eapcjhkn)

*Afterimage* opens on a sideways glance. The photograph becomes a line drawing, then an oil painting. In *Fly*, four poses break free of the waterfront and land as four blocks of color. The blue block opens on the red cap. Under its printed echoes are a camera frame and two hands holding records. One record label turns into the gold opening of a sculpture. The film ends in the studio with the basketball portrait and a number 30 jersey. These connections are the director’s reading of Carry’s published work.

After the 22-second film, play a study or drag through it by hand. *The fall* lifts four waterfront poses into relief. In *The room*, watch the bouquet as a paper cutout gives way to a crowded photograph. Three hinged strips open onto an empty hall. *The orbit* follows the camera through 24 photographed views of the sculpture. All three studies play on devices without WebGL. [Open The room](https://carryistic.vercel.app/#room-study) · [See how the photographs align](direction/artist-reading.md#a-room-held-together-by-a-bouquet)

Move across the opening portrait to find the pencil eye inside the oil. The title and study names carry textures from the work you are moving. In *The Blackout Awaits*, a hand and a window give the printed words a place in the scene. Drag the original excerpt in either direction, or follow its title into the complete film. [Move the prints](https://carryistic.vercel.app/#blackout-print) · [Original film](https://carryistic.vercel.app/#work-P03-01) · [Three outside references and what they suggested](direction/three-reels.md)

**All works** opens each of the 153 published positions individually. Move between the 150 stills and three full-length source films by title, slide number or arrow key. Each position has its own link, visual description, credit and original file. The four-second Higgsfield bead test remains in Film notes beside the reason the photographic move won the cut. [Enter the collection](https://carryistic.vercel.app/#work-index) · [Originals](archive/artworks) · [36-page atlas](archive/Reference%20atlas.pdf) · [Slide index](archive/Image%20index.csv)

## Reviewing with Carry

Enter the film, then let Carry move at her own pace. She can pin a viewpoint and write what stayed with her. **Make a response link** prepares a link containing her words and slider positions. She chooses whom to send it to. Opening it restores those moments for the recipient. **Save as a file** downloads the same response in JSON. A draft stays in the current browser. The portfolio collects no microphone, camera or analytics data.

An admissions reader can follow the photograph, outline and oil through *Dusk til Dawn*. A commissioning client can see the edit, its source photographs and collaborators’ roles. The work index and Instagram contact are accessible before, during a pause in, or after the film. [Artist’s work](https://www.instagram.com/carryistic/)

## Working with Opus

Opus starts with the [original post folders](archive/artworks) and leaves an independent visual reading in [the open challenge](https://github.com/bobshenruililin/Carryistic/issues/1). The director and Codex then compare the solo cuts and make one revision Carry can respond to. Opus can request a Higgsfield shot in the issue. Codex renders it and returns the take, cost and source ID. [First-pass instructions](CLAUDE.md) · [Director’s record and decisions to challenge](direction/director-record.md) · [Evidence and predictions](direction/artist-reading.md) · [Collaboration research and viewer questions](direction/collaboration.md)

## Edit or screen the work

Use Node 22.12 or newer. The checked-in MP4 plays as soon as the dev server starts.

```sh
npm ci
npm run dev
npm test
npm run build
```

The Vercel project `carryistic` builds the `main` branch with Vite and serves `dist/`. Each original work has a fragment link such as `#work-P03-01`. A GitHub Pages edition remains available at its previous address. [Vercel portfolio](https://carryistic.vercel.app/) · [GitHub Pages](https://bobshenruililin.github.io/Carryistic/)

`dist/Carryistic.html` is the single-file edition. Save it and open it in a browser. All 153 positions, the opening film, spatial studies, fonts and contact sheets are embedded. Instagram and full-resolution archive links open online. [Download the HTML](https://github.com/bobshenruililin/Carryistic/raw/refs/heads/main/handoff/Carryistic.html) · [Film and timecodes](film) · [Higgsfield material test](film/experiments) · [Rhythm reference](direction/rhythm.md)
