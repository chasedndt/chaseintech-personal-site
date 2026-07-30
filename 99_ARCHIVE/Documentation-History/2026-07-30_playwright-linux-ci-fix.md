# Documentation History — Playwright Linux CI Fix

- Date: 2026-07-30
- Runtime: Codex
- Pass type: Implementation and verification
- Status: PARTIAL

## Historical change

This pass converted an opaque Linux-only Playwright failure into a diagnosable CI path. GitHub Actions now publishes test annotations and retains an HTML report, while the mobile overflow assertion uses scrollbar-independent viewport geometry. The mobile identity-card status line now wraps safely. Enhanced geometry then identified the actual 18px Linux overflow: slice-scaled decorative children escaped the ambient hero SVG's scroll accounting, so clipping is now enforced at the SVG viewport itself. A public YouTube request that hung during local verification also received a bounded deadline so the existing snapshot fallback can keep scheduled builds moving.

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

The diagnostic implementation is verified in GitHub Actions and the geometry identified the ambient SVG as the remaining source. The SVG-boundary repair is implemented. The result remains PARTIAL until local and GitHub-hosted Linux verification pass.

## Links

- [Build log](../../07_LOGS/Build-Logs/2026-07-30-ChaseOS-playwright-linux-ci-fix.md)
- [Daily note](../../07_LOGS/Daily/2026-07-30.md)
- [Agent activity](../../07_LOGS/Agent-Activity/2026-07-30-codex-playwright-linux-ci-fix.md)
- Related roadmap / feature doc: none in this repository
