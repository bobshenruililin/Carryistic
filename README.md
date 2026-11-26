# Carryistic · Dream studies

[Open the portfolio](https://bobshenruililin.github.io/Carryistic/) · [Offline screening kit](https://drive.google.com/drive/folders/1qjbQmd1ob6WyTthBDtWGXcai26FL3Zgz) · [Google Drive reference library](https://drive.google.com/drive/folders/1fbso1aN0VT27E0wNxjwqrTS4eapcjhkn)

*Afterimage* opens on a sideways glance. The photograph becomes a line drawing, then an oil painting. In *Fly*, four poses break free of the waterfront and land as four blocks of color. The film ends in the studio with the basketball portrait and a number 30 jersey. The visual argument is the director’s reading of Carry’s published work. The artist has the final word on what it means.

After the 22-second film, drag through two spatial studies. *The fall* lifts individually cut poses into relief. *The orbit* follows the camera on the sculpture post through 24 recorded viewpoints. Open a work in the index for its sources, process and credits. The full archive holds 150 image slides, three video posters and the three complete motion files across 15 posts. [Archive](archive) · [36-page visual atlas](archive/Reference%20atlas.pdf) · [Slide index](archive/Image%20index.csv)

## Reviewing with Carry

Enter the film, then let Carry move at her own pace. She can pin a viewpoint and write what stayed with her. **Make a response link** prepares a link containing her words and slider positions. She chooses whom to send it to. Opening it restores those moments for the recipient. **Save as a file** downloads the same response in JSON. A draft stays in the current browser. The portfolio collects no microphone, camera or analytics data.

An admissions reader can follow the photograph, outline and oil through *Dusk til Dawn*. A commissioning client can see the edit, its source photographs and collaborators’ roles. The work index and Instagram contact are accessible before, during a pause in, or after the film. [Artist’s work](https://www.instagram.com/carryistic/)

## Working with Opus

Opus starts with the [original post folders](archive/artworks) and leaves an independent visual reading in [the open challenge](https://github.com/bobshenruililin/Carryistic/issues/1). The director and Codex then compare the solo cuts and make one revision Carry can respond to. Opus can request a Higgsfield shot in the issue. Codex renders it and returns the take, cost and source ID. [First-pass instructions](CLAUDE.md) · [Evidence and predictions](direction/artist-reading.md) · [Collaboration research and viewer questions](direction/collaboration.md)

## Edit or screen the work

Use Node 22.12 or newer. The checked-in MP4 plays as soon as the dev server starts.

```sh
npm ci
npm run dev
npm test
npm run build
```

Serve `dist/` on any static host. The public demo serves the built files from the `gh-pages` branch. `dist/Carryistic.html` is a single-file edition with the film, fonts, images and interactions embedded. Save it to disk and open it in a browser for an in-person review. All 15 contact sheets work offline. The full-resolution originals and source posts open online. [Download the standalone HTML](https://github.com/bobshenruililin/Carryistic/raw/refs/heads/main/handoff/Carryistic.html) · [Film and timecodes](film) · [Higgsfield material test](film/experiments) · [Rhythm reference](direction/rhythm.md)
