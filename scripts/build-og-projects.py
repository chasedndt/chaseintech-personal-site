"""Per-project social preview cards -> public/og/projects/<slug>.png.

Reads slugs/names/categories from src/data/projects.js via simple regex over
the literal entries (the file is data-shaped by convention).
Run: python scripts/build-og-projects.py
"""

import os
import re
import textwrap

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (7, 16, 20)
BONE = (242, 240, 232)
TEAL = (57, 222, 201)
VIOLET = (141, 124, 243)
MUTED = (120, 137, 143)

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
MONO = "C:/Windows/Fonts/consola.ttf"

OUT_DIR = "public/og/projects"
os.makedirs(OUT_DIR, exist_ok=True)

source = open("src/data/projects.js", encoding="utf-8").read()
entries = re.findall(
    r'slug:\s*"([a-z0-9-]+)",\s*name:\s*"([^"]+)"[\s\S]*?category:\s*categories\.(\w+)',
    source,
)
category_labels = dict(
    re.findall(r'(\w+):\s*"([^"]+)"', source.split("export const categories")[1].split("};")[0])
)

f_eyebrow = ImageFont.truetype(MONO, 22)
f_title = ImageFont.truetype(BOLD, 74)
f_domain = ImageFont.truetype(MONO, 24)
f_tag = ImageFont.truetype(MONO, 26)


def base_card():
    img = Image.new("RGB", (W, H), INK)
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        draw.line([(0, y), (W, y)], fill=(int(10 - 3 * t), int(24 - 8 * t), int(29 - 9 * t)))
    pts = [(0, H)]
    x, step = 0, W // 16
    for i in range(17):
        y = 560 + (18 if i % 2 else -18) - (i % 3) * 8
        pts += [(x, y), (x + step, y)]
        x += step
    pts.append((W, H))
    draw.polygon(pts, fill=(11, 24, 29))
    return img, draw


count = 0
for slug, name, cat_key in entries:
    img, draw = base_card()
    label = category_labels.get(cat_key, cat_key).upper()
    draw.text((80, 110), f"CASE STUDY \u00b7 {label}", font=f_eyebrow, fill=VIOLET)

    y = 170
    for line in textwrap.wrap(name, width=24)[:3]:
        draw.text((78, y), line, font=f_title, fill=BONE)
        y += 90

    draw.text((80, min(y + 20, 480)), "ChaseInTech \u00b7 builder mode, everywhere.", font=f_tag, fill=TEAL)
    draw.text((80, 566), "chaseintech.com", font=f_domain, fill=MUTED)
    img.save(f"{OUT_DIR}/{slug}.png", optimize=True)
    count += 1

print(f"{count} project cards -> {OUT_DIR}")
