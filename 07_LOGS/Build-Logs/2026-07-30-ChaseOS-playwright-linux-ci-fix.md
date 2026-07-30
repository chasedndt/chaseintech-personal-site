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
- `src/pages/index.astro`
- `src/lib/youtube.js`
- `src/components/AmbientHeroScene.astro`

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
# A mocked stalled fetch was also run through fetchYouTubeVideos().
```

## Test results

- `npm run build`: PASS — 42 pages built and indexed by Pagefind.
- Chromium installation: PASS — Playwright Chromium and headless shell revision 1234 installed.
- Playwright Chromium suite before the homepage repair: PASS — 28/28 tests in 52.7 seconds.
- Final production build after the homepage and fetch-deadline repairs: PASS — 42 pages built in 16.77 seconds and indexed by Pagefind.
- Final Playwright Chromium suite: PASS — 28/28 tests in 1.1 minutes.
- Enhanced diagnostic Playwright suite: PASS — 28/28 tests in 1.7 minutes.
- YouTube deadline / snapshot fallback: PASS — a mocked stalled request aborted in 10.11 seconds and returned the 11-video committed snapshot.
- CI reporter resolution: PASS — resolves to GitHub annotations plus an HTML report.
- Dependency restoration after the WSL diagnostic path error: PASS — 207 packages restored from `package-lock.json` with a fresh temporary cache; 0 vulnerabilities.
- Final SVG-repair production build: PASS — 42 pages built in 18.05 seconds and indexed by Pagefind.
- Final mobile overflow subset: PASS — 11/11 routes in 36.5 seconds.
- Refined-diagnostic production build after removing ineffective SVG clipping: PASS — 42 pages built in 7.87 seconds.
- Refined-diagnostic mobile subset: PASS — 11/11 routes in 18.6 seconds.
- An earlier local Playwright attempt failed because the newly required Chromium revision was not installed; this was an environment failure, not a regression.
- A bounded isolated CI-mode browser invocation exceeded the local command window; the reporter configuration was then validated directly.
- A later local build exposed an unbounded YouTube request; the hung process was stopped and the public build-time fetch path was given a 10-second deadline.

## Verification evidence

- Public Actions metadata confirms only the `npx playwright test` step failed in Quality Checks run `30582180885`.
- Public annotations confirm the old run had only a generic exit-code failure and no uploaded `playwright-report/`.
- The stricter 320px overflow checks pass locally on all covered routes.
- Replacement Actions run `30583918543` used the new reporter and identified the exact Linux failure: the homepage exceeded the 320px viewport by 18px; all other 27 tests passed.
- Visual QA at 320px: PASS — the frontier-status pill wraps into two centered lines, while `clientWidth` and `scrollWidth` both measure 320px.
- Replacement Actions run `30585252356` still measured exactly 18px on the Linux homepage after the pill repair; 27/28 tests and Lighthouse passed. The overflow assertion now emits root/body geometry and offending elements to distinguish real overflow from scrollbar-gutter accounting.
- Diagnostic Actions run `30585670598` confirmed a real 18px overflow: viewport and client widths were both 320px, while root/body scroll width was 338px. Its first offender list was dominated by off-canvas SVG descendants already clipped by their scene wrapper, so it did not yet prove which element owned the extra scroll width.
- Actions run `30586696434` proved that explicit SVG overflow clipping did not change the 18px result. That ineffective rule was removed, and the diagnostic now excludes clipped descendants and ranks elements nearest the actual document edge.
- A WSL reproduction attempt resolved its temporary path incorrectly and started `npm ci` in the main checkout. It touched only ignored/generated `node_modules`, was terminated, and dependencies were restored from the lockfile before verification resumed.

## What changed

- CI now emits GitHub test annotations and an HTML Playwright report.
- Horizontal-overflow measurement now compares `scrollWidth` with `documentElement.clientWidth`, avoiding scrollbar-dependent viewport slack.
- The homepage frontier-status pill can wrap and center at mobile widths instead of forcing Linux's wider monospace rendering beyond the identity card.
- YouTube RSS and format detection now time out and use the existing committed snapshot fallback instead of holding scheduled builds indefinitely.

## What did not change

- No site content, routes, credentials, or Cloudflare settings changed.
- No GitHub or Cloudflare secrets were read or written.

## What remains unverified

- The unclipped element responsible for Linux's remaining 18px document width is still under diagnostic verification.
- The new build-fetch deadline has not yet passed a replacement GitHub-hosted Ubuntu run.
- GitHub repository secrets for the scheduled Cloudflare rebuild are not confirmed.

## Remaining open loops

- Run the local suite after the mobile pill repair, push it, and inspect the replacement GitHub Actions run.
- Have the operator add or confirm `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in GitHub repository Actions secrets, then manually dispatch Scheduled rebuild.
- Refresh stale pre-launch wording in `README.md` and `PROJECT.md` in a separate documentation pass.

## Next recommended pass

Close the Ubuntu CI loop first, then verify the scheduled Cloudflare rebuild with the operator-created GitHub secrets.

## Links

- [Documentation history](../../99_ARCHIVE/Documentation-History/2026-07-30_playwright-linux-ci-fix.md)
- [Daily note](../Daily/2026-07-30.md)
- [Agent activity](../Agent-Activity/2026-07-30-codex-playwright-linux-ci-fix.md)
- Feature / R&D row: none in this repository
