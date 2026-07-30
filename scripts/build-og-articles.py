"""Per-article social preview cards.

Reads every published article's frontmatter and renders a titled 1200x630 PNG
to public/og/articles/<slug>.png, on the same ink/teal identity as the default
card. Run: python scripts/build-og-articles.py (after build-og-image.py exists
is not required — this script is standalone).
"""

import os
import re
import textwrap

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (7, 16, 20)
BONE = (242, 240, 232)
TEAL = (57, 222, 201)
SLATE = (168, 181, 184)
MUTED = (120, 137, 143)

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
MONO = "C:/Windows/Fonts/consola.ttf"

ARTICLES_DIR = "src/content/articles"
OUT_DIR = "public/og/articles"
os.makedirs(OUT_DIR, exist_ok=True)

FM_RE = re.compile(r"^---\r?\n(.*?)\r?\n---", re.S)


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    match = FM_RE.match(text)
    if not match:
        return {}
    data = {}
    for line in match.group(1).splitlines():
        if ":" in line and not line.startswith((" ", "-")):
            key, value = line.split(":", 1)
            data[key.strip()] = value.strip().strip('"')
    return data


def base_card():
    img = Image.new("RGB", (W, H), INK)
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        draw.line([(0, y), (W, y)], fill=(int(10 - 3 * t), int(24 - 8 * t), int(29 - 9 * t)))
    # Stepped ridgeline along the bottom, echoing the site hero.
    pts = [(0, H)]
    x, step = 0, W // 16
    for i in range(17):
        y = 560 + (18 if i % 2 else -18) - (i % 3) * 8
        pts += [(x, y), (x + step, y)]
        x += step
    pts.append((W, H))
    draw.polygon(pts, fill=(11, 24, 29))
    return img, draw


f_eyebrow = ImageFont.truetype(MONO, 22)
f_title = ImageFont.truetype(BOLD, 58)
f_desc = ImageFont.truetype(MONO, 22)
f_domain = ImageFont.truetype(MONO, 24)

count = 0
for fname in sorted(os.listdir(ARTICLES_DIR)):
    if not fname.endswith(".md") or fname.startswith("_"):
        continue
    fm = frontmatter(os.path.join(ARTICLES_DIR, fname))
    if fm.get("draft", "false").lower() == "true":
        continue
    slug = fname[:-3]

    img, draw = base_card()
    draw.text((80, 96), "ARTICLE", font=f_eyebrow, fill=TEAL)

    y = 150
    for line in textwrap.wrap(fm.get("title", slug), width=32)[:4]:
        draw.text((78, y), line, font=f_title, fill=BONE)
        y += 72

    date = fm.get("publishedAt", "")
    draw.text((80, min(y + 18, 500)), date, font=f_desc, fill=SLATE)
    draw.text((80, 566), "chaseintech.com", font=f_domain, fill=MUTED)

    img.save(f"{OUT_DIR}/{slug}.png", optimize=True)
    count += 1
    print("wrote", f"{OUT_DIR}/{slug}.png")

print(f"{count} article cards")
