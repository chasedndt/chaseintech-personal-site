# Documentation History — Playwright Linux CI Fix

- Date: 2026-07-30
- Runtime: Codex
- Pass type: Implementation and verification
- Status: PARTIAL

## Historical change

This pass converted an opaque Linux-only Playwright failure into a diagnosable CI path. GitHub Actions will now publish test annotations and retain an HTML report, while the mobile overflow assertion uses scrollbar-independent viewport geometry.

## Why it mattered

The preceding public workflow run exposed only exit code 1 and uploaded no Playwright artifact. Local Windows success was therefore insufficient to close the regression. This pass preserves the local 28/28 result while making the next Ubuntu run decisive.

## Surfaces affected

- `playwright.config.js`
- `tests/smoke.spec.js`
- CI verification records and session indexes

No production content, route, style, credential, or Cloudflare configuration changed.

## Completion boundary

The implementation is complete locally. The result remains PARTIAL until a replacement GitHub-hosted Ubuntu run passes or provides the exact failing assertion.

## Links

- [Build log](../../07_LOGS/Build-Logs/2026-07-30-ChaseOS-playwright-linux-ci-fix.md)
- [Daily note](../../07_LOGS/Daily/2026-07-30.md)
- [Agent activity](../../07_LOGS/Agent-Activity/2026-07-30-codex-playwright-linux-ci-fix.md)
- Related roadmap / feature doc: none in this repository
