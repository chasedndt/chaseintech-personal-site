# Playwright Linux CI Fix

- Date: 2026-07-30
- Runtime: Codex
- Session descriptor: `playwright-linux-ci-fix`
- Phase / pass: Post-launch CI verification
- Status: PARTIAL

## Task summary

Continue the unfinished investigation of the GitHub Actions smoke-test failure after the local Playwright suite passed.

## Repo-truth baseline

- The Astro site builds 42 static pages.
- `main` already contains the 28-test Playwright suite and GitHub Actions workflows.
- Public GitHub Actions run `30582180885` passed checkout, dependency installation, the production build, Chromium installation, and Lighthouse; only the Playwright smoke step failed.
- The public run exposed no failing test name and produced no Playwright report.
- Scheduled rebuild run `30578162750` failed in the Cloudflare deploy action; GitHub secret acceptance remains unverified.
- `README.md` and `PROJECT.md` still contain pre-launch wording and are stale, but updating product-positioning docs is outside this focused CI pass.

## Files read

- `README.md`
- `PROJECT.md`
- `package.json`
- `.github/workflows/quality-checks.yml`
- `.github/workflows/scheduled-rebuild.yml`
- `playwright.config.js`
- `tests/smoke.spec.js`

## Files modified

- `playwright.config.js`
- `tests/smoke.spec.js`

## Files created

- `07_LOGS/Build-Logs/2026-07-30-ChaseOS-playwright-linux-ci-fix.md`
- `07_LOGS/Build-Logs/Build-Logs-Index.md`
- `99_ARCHIVE/Documentation-History/2026-07-30_playwright-linux-ci-fix.md`
- `99_ARCHIVE/Documentation-History/Documentation-History-Index.md`
- `07_LOGS/Daily/2026-07-30.md`
- `07_LOGS/Daily/Daily-Index.md`
- `07_LOGS/Agent-Activity/2026-07-30-codex-playwright-linux-ci-fix.md`

## Tests run

```powershell
npm run build
npx playwright install chromium
npx playwright test --project=chromium --reporter=list
$env:CI='true'
node -e "import('./playwright.config.js').then(m => console.log(JSON.stringify(m.default.reporter)))"
```

## Test results

- `npm run build`: PASS — 42 pages built and indexed by Pagefind.
- Chromium installation: PASS — Playwright Chromium and headless shell revision 1234 installed.
- Playwright Chromium suite: PASS — 28/28 tests in 52.7 seconds.
- CI reporter resolution: PASS — resolves to GitHub annotations plus an HTML report.
- An earlier local Playwright attempt failed because the newly required Chromium revision was not installed; this was an environment failure, not a regression.
- A bounded isolated CI-mode browser invocation exceeded the local command window; the reporter configuration was then validated directly.

## Verification evidence

- Public Actions metadata confirms only the `npx playwright test` step failed in Quality Checks run `30582180885`.
- Public annotations confirm the old run had only a generic exit-code failure and no uploaded `playwright-report/`.
- The stricter 320px overflow checks pass locally on all covered routes.

## What changed

- CI now emits GitHub test annotations and an HTML Playwright report.
- Horizontal-overflow measurement now compares `scrollWidth` with `documentElement.clientWidth`, avoiding scrollbar-dependent viewport slack.

## What did not change

- No site content, styles, routes, production configuration, credentials, or Cloudflare settings changed.
- No GitHub or Cloudflare secrets were read or written.

## What remains unverified

- The replacement GitHub-hosted Ubuntu run has not yet completed.
- GitHub repository secrets for the scheduled Cloudflare rebuild are not confirmed.
- The exact failing test in the previous Linux run is unavailable because that run lacked a useful reporter artifact.

## Remaining open loops

- Push the focused CI change and inspect the replacement GitHub Actions run.
- If it fails, use the new annotations/report to repair the exact Linux-only assertion.
- Have the operator add or confirm `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in GitHub repository Actions secrets, then manually dispatch Scheduled rebuild.
- Refresh stale pre-launch wording in `README.md` and `PROJECT.md` in a separate documentation pass.

## Next recommended pass

Close the Ubuntu CI loop first, then verify the scheduled Cloudflare rebuild with the operator-created GitHub secrets.

## Links

- [Documentation history](../../99_ARCHIVE/Documentation-History/2026-07-30_playwright-linux-ci-fix.md)
- [Daily note](../Daily/2026-07-30.md)
- [Agent activity](../Agent-Activity/2026-07-30-codex-playwright-linux-ci-fix.md)
- Feature / R&D row: none in this repository
