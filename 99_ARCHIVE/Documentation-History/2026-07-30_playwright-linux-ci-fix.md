# Documentation History — Playwright Linux CI Fix

- Date: 2026-07-30
- Runtime: Codex
- Pass type: Implementation and verification
- Status: PARTIAL

## Historical change

This pass converted an opaque Linux-only Playwright failure into a diagnosable CI path. GitHub Actions now publishes test annotations and retains an HTML report, while the mobile overflow assertion uses scrollbar-independent viewport geometry. The mobile identity-card status line now wraps safely. Enhanced geometry confirmed a real 18px Linux document overflow, but its first report was dominated by already-clipped ambient SVG descendants. Explicit SVG clipping did not change the result and was removed; the diagnostic now separates clipped geometry from the element that owns the document edge. A public YouTube request that hung during local verification also received a bounded deadline so the existing snapshot fallback can keep scheduled builds moving.

## Why it mattered

The preceding public workflow run exposed only exit code 1 and uploaded no Playwright artifact. Local Windows success was therefore insufficient to close the regression. This pass preserves the local 28/28 result while making the next Ubuntu run decisive.

## Surfaces affected

- `playwright.config.js`
- `tests/smoke.spec.js`
- `src/pages/index.astro`
- `src/lib/youtube.js`
- `src/components/AmbientHeroScene.astro`
- CI verification records and session indexes

No production content, route, credential, or Cloudflare configuration changed.

## Completion boundary

The diagnostic implementation is verified in GitHub Actions, but the first geometry report over-attributed the result to already-clipped SVG descendants. The ineffective SVG rule was removed. The result remains PARTIAL until the enhanced unclipped-element evidence identifies and closes the remaining source.

## Links

- [Build log](../../07_LOGS/Build-Logs/2026-07-30-ChaseOS-playwright-linux-ci-fix.md)
- [Daily note](../../07_LOGS/Daily/2026-07-30.md)
- [Agent activity](../../07_LOGS/Agent-Activity/2026-07-30-codex-playwright-linux-ci-fix.md)
- Related roadmap / feature doc: none in this repository
