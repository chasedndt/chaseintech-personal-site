"""Generate the social preview image as a real PNG.

X, LinkedIn and most scrapers will not render an SVG Open Graph image, so the
preview must be a raster. Run: python scripts/build-og-image.py
"""

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (7, 16, 20)
BONE = (242, 240, 232)
TEAL = (57, 222, 201)
SLATE = (168, 181, 184)
MUTED = (120, 137, 143)

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
MONO = "C:/Windows/Fonts/consola.ttf"

img = Image.new("RGB", (W, H), INK)
draw = ImageDraw.Draw(img)

# Vertical sky gradient
for y in range(H):
    t = y / H
    draw.line([(0, y), (W, y)], fill=(int(10 - 3 * t), int(24 - 8 * t), int(29 - 9 * t)))

# Teal glow on its own layer so it can be blended softly
glow = Image.new("RGB", (W, H), (0, 0, 0))
gdraw = ImageDraw.Draw(glow)
for r in range(420, 0, -14):
    a = int(26 * (1 - r / 420))
    gdraw.ellipse([340 - r * 1.5, 300 - r, 340 + r * 1.5, 300 + r], fill=(a // 3, a, max(a - 2, 0)))
img = Image.blend(img, Image.blend(img, glow, 0.5), 0.55)
draw = ImageDraw.Draw(img)


def ridge(base_y, steps, colour, amp):
    """Stepped ridgeline, echoing the pixel landscape in the site hero."""
    pts = [(0, H)]
    x = 0
    step_w = W // steps
    for i in range(steps + 1):
        y = base_y + (amp if i % 2 else -amp) - (i % 3) * 12
        pts.append((x, y))
        pts.append((x + step_w, y))
        x += step_w
    pts.append((W, H))
    draw.polygon(pts, fill=colour)


ridge(486, 18, (12, 27, 32), 26)
ridge(548, 13, (9, 21, 25), 20)

# Profile image, circular. NEAREST keeps the pixel art crisp.
pfp = Image.open("public/images/pfp-pixel.png").convert("RGB").resize((118, 118), Image.NEAREST)
mask = Image.new("L", (118, 118), 0)
ImageDraw.Draw(mask).ellipse([0, 0, 117, 117], fill=255)
img.paste(pfp, (80, 132), mask)
draw.ellipse([79, 131, 199, 251], outline=(60, 90, 95), width=2)

f_eyebrow = ImageFont.truetype(MONO, 21)
f_name = ImageFont.truetype(BOLD, 92)
f_sig = ImageFont.truetype(MONO, 30)
f_body = ImageFont.truetype(BOLD, 27)
f_domain = ImageFont.truetype(MONO, 24)

draw.text((80, 300), "LONDON \u00b7 AGENTIC AI \u00b7 SOFTWARE \u00b7 CREATOR", font=f_eyebrow, fill=TEAL)
draw.text((78, 336), "ChaseInTech", font=f_name, fill=BONE)
draw.text((80, 462), "Builder mode, everywhere.", font=f_sig, fill=TEAL)
draw.text((80, 520), "AI engineer, founder and systems builder", font=f_body, fill=SLATE)
draw.text((80, 574), "chaseintech.com", font=f_domain, fill=MUTED)

img.save("public/og-default.png", optimize=True)
print("wrote public/og-default.png", img.size)
