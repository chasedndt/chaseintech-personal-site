// Smoke tests for the regressions that actually happened, plus route health.
import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/projects/",
  "/projects/chaseos/",
  "/articles/",
  "/articles/kimi-k3-vendor-benchmarks-independent-workflow-test/",
  "/videos/",
  "/build-log/",
  "/links/",
  "/work-with-me/",
  "/about/",
  "/uses/",
  "/press/",
  "/search/",
  "/privacy/",
];

for (const route of routes) {
  test(`route ${route} responds`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
  });
}

test("command palette is closed on load, opens and closes", async ({ page }) => {
  await page.goto("/");
  const palette = page.locator("[data-palette]");
  // Regression: display rules once overrode the hidden attribute.
  await expect(palette).toBeHidden();

  // Open via the visible trigger — the path every user has. (Ctrl+K is
  // browser-reserved in headless Chromium, so it can't be asserted here.)
  await page.locator("[data-palette-open]").click();
  await expect(palette).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(palette).toBeHidden();
});

// Mobile responsiveness: no page may scroll horizontally at small-phone width.
const mobileRoutes = [
  "/",
  "/projects/",
  "/projects/chaseos/",
  "/articles/",
  "/articles/kimi-k3-vendor-benchmarks-independent-workflow-test/",
  "/videos/",
  "/build-log/",
  "/build-log/chaseos-cloud-metering-architecture/",
  "/uses/",
  "/press/",
  "/work-with-me/",
  "/links/",
];

for (const route of mobileRoutes) {
  test(`no horizontal overflow at 320px on ${route}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto(route);
    const layout = await page.evaluate(() => {
      const root = document.documentElement;
      const viewportWidth = root.clientWidth;
      const labelFor = (element) =>
        [
          element.tagName.toLowerCase(),
          element.id ? `#${element.id}` : "",
          ...Array.from(element.classList).map((name) => `.${name}`),
        ].join("");

      const offenders = Array.from(document.querySelectorAll("*"))
        .map((element) => {
          const rect = element.getBoundingClientRect();
          let clippedBy = null;
          let ancestor = element.parentElement;
          while (ancestor) {
            const style = getComputedStyle(ancestor);
            if (style.overflowX === "hidden" || style.overflowX === "clip") {
              const ancestorRect = ancestor.getBoundingClientRect();
              if (
                rect.left < ancestorRect.left - 1 ||
                rect.right > ancestorRect.right + 1
              ) {
                clippedBy = labelFor(ancestor);
                break;
              }
            }
            ancestor = ancestor.parentElement;
          }

          return {
            element: labelFor(element),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            clippedBy,
          };
        })
        .filter(
          ({ right, width }) => width > 0 && right > viewportWidth + 1,
        );

      const byDocumentEdge = [...offenders]
        .sort(
          (a, b) =>
            Math.abs(a.right - root.scrollWidth) -
            Math.abs(b.right - root.scrollWidth),
        )
        .slice(0, 20);
      const unclipped = offenders
        .filter(({ clippedBy }) => !clippedBy)
        .sort((a, b) => b.right - a.right)
        .slice(0, 20);

      return {
        overflow: root.scrollWidth - viewportWidth,
        innerWidth: window.innerWidth,
        viewportWidth,
        rootScrollWidth: root.scrollWidth,
        bodyClientWidth: document.body.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
        unclippedOffenders: unclipped,
        offendersNearestDocumentEdge: byDocumentEdge,
      };
    });
    expect(
      layout.overflow,
      `Horizontal layout diagnostics:\n${JSON.stringify(layout, null, 2)}`,
    ).toBeLessThanOrEqual(0);
  });
}

test("More dropdown stacks items vertically", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.locator("[data-more-menu] summary").click();
  const boxes = await page
    .locator(".more-panel > li > a")
    .evaluateAll((els) => els.map((el) => el.getBoundingClientRect()));
  expect(boxes.length).toBeGreaterThanOrEqual(4);
  // Every item must start below the previous one — vertical, not side-by-side.
  for (let i = 1; i < boxes.length; i++) {
    expect(boxes[i].top).toBeGreaterThanOrEqual(boxes[i - 1].bottom - 1);
  }
  // And the panel must not spill past the viewport edge.
  for (const box of boxes) {
    expect(box.right).toBeLessThanOrEqual(1280);
  }
});

test("articles feed is valid and article pages render", async ({ page }) => {
  const rss = await page.request.get("/rss.xml");
  expect(rss.status()).toBe(200);
  const body = await rss.text();
  expect(body).toContain("<rss");
  expect(body).toContain("content:encoded");
});

test("Kimi K3 ChaseOS Digest article renders its series and hero", async ({ page }) => {
  await page.goto("/articles/kimi-k3-vendor-benchmarks-independent-workflow-test/");
  await expect(page.locator("article > header > .section-label")).toHaveText("ChaseOS Digest");
  const hero = page.locator("article > header > .hero img");
  await expect(hero).toBeVisible();
  await expect(hero).toHaveAttribute(
    "src",
    "/images/articles/kimi-k3-vendor-benchmarks-independent-workflow-test.png",
  );
});

test("video page mounts click-to-play without loading YouTube", async ({ page }) => {
  await page.goto("/videos/");
  const firstCard = page.locator(".video-card a").first();
  await firstCard.click();
  await expect(page.locator("[data-player]")).toBeVisible();
  // No iframe until the visitor asks for it.
  expect(await page.locator("[data-player] iframe").count()).toBe(0);
});
