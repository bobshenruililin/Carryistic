# Afterimage

A 22-second wordless film for Carry’s review. The same eye appears in a photograph, pencil and oil. Four falling figures become four blocks. A circle carries us from a record to a sculpture to the painted basketball. In the last studio photograph, the number 30 jersey beside the canvas supplies the Curry reference suggested by the director. [Watch the film](../public/film/afterimage.mp4) · [English sound captions](../public/film/afterimage.en.vtt)

The blocks acquire depth along the diagonal Carry established in *Fly*. The turn around the red-and-gold sculpture comes from the artist’s own camera. The bead test compares a generated camera move with the photographic bridge used in the film. [Shot ledger and source IDs](shots.csv) · [Seedance comparison](experiments/README.md)

## The passage from blue to gold

At 9.30 seconds the blue block begins to open on its left edge. Behind it, two hands hold a red cap in P11-04. The photograph slips left at 10.42 seconds, uncovering Carry’s printed cap echoes in P10-01. That print lifts at 11.375 seconds. The camera controls, both hands and the two vinyl records underneath come from P10-05. [Waterfront forms](https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?img_index=3) · [Printed echoes](https://www.instagram.com/carryistic/p/DbjsE4DjMr6/) · [Camera artwork](https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?img_index=5)

At 12.333 seconds the fingers stay registered while the red record label takes on the pixelation in P11-01. The view widens far enough to read **PHILA 3**. The sculpture is already showing around the print when the photograph tips at 12.75 seconds. Its red spindle and the actual opening in P08-04 share a pivot until the last paper edge clears at 13.50 seconds. [Record photograph](https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/) · [Gold opening](https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?img_index=4)

## Rhythm and sound

The director’s reference reel gives its first idea about 2.8 seconds and leaves a beat before the next arrives around 3.8. In *Afterimage*, the eye holds its position through two changes of material. The first hard cut and hollow impact arrive together at 3.75 seconds. Later, four glass taps settle over the beads. The orange circle drops at 16.625 seconds and the bounce waits until it reaches the hands at 17.29. The last studio view has 2.5 seconds and a single fading note. [Reference reel by @jordans.archivess](https://www.instagram.com/reel/DeKDmkmh_gM/)

Paper scrapes, pitched membrane hits, struck glass and the low studio note were synthesized for this edit. The stereo master measures −23.0 LUFS integrated and −2.0 dBTP. The eight timed English captions describe the score and its movement across the stereo field. [Caption file](../public/film/afterimage.en.vtt)

## Render the film

Use Python 3 with Pillow, NumPy and SciPy, plus FFmpeg with H.264 and AAC encoders. From the repository root, point the renderer at the downloaded reference archive. It finds each P-numbered still or video in its post folder.

```sh
python film/render.py --archive /path/to/carryistic-portfolio/artworks
```

The renderer writes `public/film/afterimage.mp4`. Add `--reveal-proof` to render the continuous 8.25–14.125 s passage at 640 pixels wide. Use `--proof` to see the opening eye, waterfront and painted grip in sequence. Proofs go in the system temporary directory. Set `--output` to choose another filename. Adjust cut timing in `CUES` and the individual shot functions. The stereo score is synthesized by `soundtrack()` with a fixed seed. If the timing changes, update the accompanying WebVTT file against the new cut.

## Source credits

- *Dusk til Dawn*, *Fly* and *Proud Daddy* were posted by @carryistic. [Painted portrait](https://www.instagram.com/carryistic/p/DgLzM60E9bh/) · [Waterfront study](https://www.instagram.com/carryistic/p/DeN7bsakfqJ/) · [Basketball painting](https://www.instagram.com/carryistic/p/DdtIVSOk4ew/)
- *To Bleed in Liquid Gold* was posted by @20.09.07.29 and appears on Carry’s grid. [Sculpture post](https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/)
- The graphic record-store series was posted by @carryistic and credits @bigartparty for photography. The source shoot was posted by @bigartparty and credits @ca.m.z with help taking the photos. [Graphic series](https://www.instagram.com/carryistic/p/DbjsE4DjMr6/) · [Source photographs](https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/)
