"""Measure the placement and area of the four published figures and blocks in Fly."""

import argparse
import math
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage


def measure(path):
    with Image.open(path) as original:
        pixels = np.asarray(original.convert("RGB"))

    labels, _ = ndimage.label(pixels.min(axis=2) < 240)
    areas = np.bincount(labels.ravel())[1:]
    largest = np.argsort(areas)[-4:] + 1
    points = []
    for segment in largest:
        y, x = np.nonzero(labels == segment)
        points.append((x.mean() / pixels.shape[1], y.mean() / pixels.shape[0], len(x)))

    return pixels, np.array(sorted(points, key=lambda p: p[0]))


def draw_plate(studies, output):
    from matplotlib import pyplot as plt
    from matplotlib.ticker import PercentFormatter

    paper = "#f7f5ef"
    ink = "#25252c"
    line = "#694681"
    figure, axes = plt.subplots(1, 2, figsize=(8.8, 5.0))
    figure.patch.set_facecolor(paper)
    for ax, (reference, title, pixels, points) in zip(axes, studies):
        ax.set_facecolor("white")
        ax.imshow(pixels, extent=(0, 1, 1, 0), origin="upper", alpha=0.78)
        ax.plot(points[:, 0], points[:, 1], linestyle=(0, (2, 3)), color=line, linewidth=1.25)
        ax.scatter(points[:, 0], points[:, 1], s=42, facecolor=ink, edgecolor="white", linewidth=1)
        for i, (x, y, _) in enumerate(points, 1):
            ax.annotate(str(i), (x, y), xytext=(7, -9), textcoords="offset points",
                        color=ink, fontsize=8, weight="bold",
                        bbox={"facecolor": "white", "edgecolor": "none", "pad": 0.9})
        ax.set_title(f"{reference}    {title}", loc="left", fontsize=11, color=ink, pad=9)
        ax.set_xticks([0, 0.25, 0.50, 0.75, 1.0])
        ax.set_yticks([0, 0.25, 0.50, 0.75, 1.0])
        ax.xaxis.set_major_formatter(PercentFormatter(xmax=1, decimals=0))
        ax.yaxis.set_major_formatter(PercentFormatter(xmax=1, decimals=0))
        ax.tick_params(labelsize=7, length=2, width=0.5, colors=ink)
        for spine in ax.spines.values():
            spine.set_color("#aba99f")
            spine.set_linewidth(0.6)
    figure.subplots_adjust(left=0.056, right=0.979, top=0.80, bottom=0.10, wspace=0.10)
    figure.text(0.051, 0.92, "Four positions on two paths", fontsize=18, color=ink, weight="bold")
    figure.text(0.051, 0.865, "Dots mark the centers of the four visible shapes. Coordinates start at the upper left.",
                fontsize=9, color=ink)
    figure.savefig(output, dpi=155, facecolor=paper)
    plt.close(figure)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    repo = Path(__file__).resolve().parents[1]
    parser.add_argument("--artworks", type=Path, default=repo / "archive" / "artworks")
    parser.add_argument("--figure", type=Path, help="Write the annotated comparison to this path")
    args = parser.parse_args()

    studies = []
    for reference, title in [("P05-02", "Cutout figures"), ("P05-03", "Color blocks")]:
        pixels, points = measure(args.artworks / "P05 - Fly" / f"{reference}.jpg")
        dx, dy = points[-1, :2] - points[0, :2]
        angle = math.degrees(math.atan2(dy, dx))
        growth = points[-1, 2] / points[0, 2]
        print(f"{reference}  angle {angle:.1f} deg  last/first visible area {growth:.2f}")
        for x, y, count in points:
            print(f"  x {x:.4f}  y {y:.4f}  pixels {count:.0f}")
        studies.append((reference, title, pixels, points))
    if args.figure:
        draw_plate(studies, args.figure)


if __name__ == "__main__":
    main()
