# Two flyers in one window

The scrub strip covers one continuous shot from *The Blackout Awaits*, P03-01, published by @carryistic. At 45.833 s the foreground figure’s head and shoulder obscure a white flyer against the glass. As the figure moves left, the two lines of dark type come into view. By 47.133 s **BLACK OUT** is readable on the white sheet. A figure on the far side raises a black sheet bearing the same words in white. By 47.500 s both versions can be read side by side. The last sample at 48.100 s keeps the raised hand, the window frame and both flyers. [Original reel](https://www.instagram.com/carryistic/reel/DfMdUS6BebC/?hl=en)

The atlas contains 20 complete video frames. The 640 × 360 tiles run left to right in each row of five, from the top row down. The manifest lists zero-based source frame numbers at 30 frames per second. Divide each number by 30 for its original timestamp. [Atlas](../public/art/blackout-print-strip.webp) · [Frame manifest](../src/blackout-print.json)

## Rebuild the atlas

Run from the repository root with Python 3 and FFmpeg built with `libwebp`. The command reads the exact selection from the manifest.

```sh
frames=$(python -c 'import json; print("+".join(f"eq(n,{n})" for n in json.load(open("src/blackout-print.json"))["sourceFrames"]))')
ffmpeg -v error -y -i 'archive/artworks/P03 - The Blackout Awaits/P03-01.mp4' -an \
  -vf "select='$frames',scale=640:360:flags=lanczos,setsar=1,tile=5x4" \
  -frames:v 1 -c:v libwebp -quality 89 -compression_level 6 -threads 2 \
  public/art/blackout-print-strip.webp
```
