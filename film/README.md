# Afterimage

A 22-second wordless film for Carry’s review. The same eye appears in a photograph, pencil and oil. Four falling figures become four blocks. A circle carries us from a record to a sculpture to the painted basketball. In the last studio photograph, the number 30 jersey beside the canvas supplies the Curry reference suggested by the director. [Watch the film](../public/film/afterimage.mp4) · [English sound captions](../public/film/afterimage.en.vtt)

The blocks acquire depth along the diagonal Carry established in *Fly*. The turn around the red-and-gold sculpture comes from the artist’s own camera. The bead test compares a generated camera move with the photographic bridge used in the film. [Shot ledger and source IDs](shots.csv) · [Seedance comparison](experiments/README.md)

## Rhythm and sound

The director’s reference reel gives its first idea about 2.8 seconds and leaves a beat before the next arrives around 3.8. In *Afterimage*, the eye holds its position through two changes of material. The first hard cut and hollow impact arrive together at 3.75 seconds. Later, four glass taps settle over the beads. The orange circle drops at 16.625 seconds and the bounce waits until it reaches the hands at 17.29. The last studio view has 2.5 seconds and a single fading note. [Reference reel by @jordans.archivess](https://www.instagram.com/reel/DeKDmkmh_gM/)

Paper scrapes, pitched membrane hits, struck glass and the low studio note were synthesized for this edit. The stereo master measures −23.0 LUFS integrated and −2.0 dBTP. The eight timed English captions describe the score and its movement across the stereo field. [Caption file](../public/film/afterimage.en.vtt)

## Render the film

Use Python 3 with Pillow, NumPy and SciPy, plus FFmpeg with H.264 and AAC encoders. From the repository root, point the renderer at the downloaded reference archive. It finds each P-numbered still or video in its post folder.

```sh
python film/render.py --archive /path/to/carryistic-portfolio/artworks
```

The renderer writes `public/film/afterimage.mp4`. Add `--proof --output /tmp/afterimage-proof.mp4` to render a 640-pixel movement proof. Adjust cut timing in `CUES` and the individual shot functions. The stereo score is synthesized by `soundtrack()` with a fixed seed. If the timing changes, update the accompanying WebVTT file against the new cut.

## Source credits

- *Dusk til Dawn*, *Fly* and *Proud Daddy* were posted by @carryistic. [Painted portrait](https://www.instagram.com/carryistic/p/DgLzM60E9bh/) · [Waterfront study](https://www.instagram.com/carryistic/p/DeN7bsakfqJ/) · [Basketball painting](https://www.instagram.com/carryistic/p/DdtIVSOk4ew/)
- *To Bleed in Liquid Gold* was posted by @20.09.07.29 and appears on Carry’s grid. [Sculpture post](https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/)
- The graphic record-store series was posted by @carryistic and credits @bigartparty for photography. The source shoot was posted by @bigartparty and credits @ca.m.z with help taking the photos. [Graphic series](https://www.instagram.com/carryistic/p/DbjsE4DjMr6/) · [Source photographs](https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/)
