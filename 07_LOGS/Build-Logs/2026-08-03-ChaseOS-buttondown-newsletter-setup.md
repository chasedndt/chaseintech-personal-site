# Buttondown Newsletter Setup

- Date: 2026-08-03
- Runtime: Codex
- Session descriptor: `buttondown-newsletter-setup`
- Phase / pass: Audience and publishing infrastructure
- Status: PARTIAL

## Task summary

Audit the published article catalogue, define an accurate newsletter identity, and integrate a Buttondown email subscription path throughout the ChaseInTech site without adding paid RSS automation or exposing provider credentials.

## Repo-truth baseline

- The site already published five articles and separate build-log content.
- The article catalogue covers AI news and analysis, independent model evaluation, technical performance work, product boundaries, and agent governance.
- Article RSS existed at `/rss.xml`, but the site had no newsletter route, reusable signup component, navigation entry, or provider configuration.
- The existing Content Security Policy allowed form submissions only to the site itself.
- Buttondown account verification and the public username `ChaseInTech` were already complete.
- Unrelated local edits in `src/data/uses.js`, three untracked docs, and `public/og/projects/tradesync-card.png` belonged to the operator and were preserved.

## Files read

- `README.md`
- `PROJECT.md`
- `package.json`
- `src/content/articles/*`
- `src/data/site.js`
- Site navigation, layout, privacy, article, sitemap, RSS, and smoke-test sources
- Current build-log, documentation-history, daily, and agent-activity conventions
- Official Buttondown subscriber-form documentation

## Files modified

- `public/_headers`
- `src/components/CommandPalette.astro`
- `src/components/SiteFooter.astro`
- `src/components/SiteHeader.astro`
- `src/data/site.js`
- `src/pages/articles/[...id].astro`
- `src/pages/articles/index.astro`
- `src/pages/index.astro`
- `src/pages/privacy.astro`
- `src/pages/sitemap.xml.js`
- `tests/smoke.spec.js`
- `07_LOGS/Build-Logs/Build-Logs-Index.md`
- `99_ARCHIVE/Documentation-History/Documentation-History-Index.md`
- `07_LOGS/Daily/Daily-Index.md`

## Files created

- `src/components/NewsletterSignup.astro`
- `src/pages/newsletter.astro`
- `07_LOGS/Build-Logs/2026-08-03-ChaseOS-buttondown-newsletter-setup.md`
- `99_ARCHIVE/Documentation-History/2026-08-03_buttondown-newsletter-setup.md`
- `07_LOGS/Daily/2026-08-03.md`
- `07_LOGS/Agent-Activity/2026-08-03-codex-buttondown-newsletter-setup.md`

## Tests run

```powershell
git diff --check
npm run check
npm run build
npx playwright test tests/smoke.spec.js --project=chromium
curl.exe -I -L --max-time 20 https://buttondown.com/ChaseInTech
```

## Test results

- Diff whitespace validation: PASS.
- Astro build: PASS - 45 pages built and indexed by Pagefind.
- Playwright smoke suite: PASS - 34/34 tests, including newsletter route health, 320px overflow, and the Buttondown form contract.
- Built-artifact inspection: PASS - newsletter route, sitemap entry, exact subscribe endpoint, and Buttondown CSP allowance are present.
- Public Buttondown page: PASS - HTTP 200.
- `npm run check`: NOT RUN - Astro offered to install missing optional `@astrojs/check` and `typescript` packages interactively, so no static-check result is claimed.

## Verification evidence

- `/newsletter` is generated in the production build.
- The form posts directly to `https://buttondown.com/api/emails/embed-subscribe/ChaseInTech` with required `email` and hidden `embed=1` fields.
- The CSP allows form submission to Buttondown while retaining the existing restrictions.
- The newsletter description matches the actual published editorial catalogue: AI news and analysis, technical deep dives, independent model studies, and practical build notes.
- The public Buttondown page for `ChaseInTech` returns HTTP 200.

## What changed

- Added a provider-configured newsletter identity named ChaseInTech Dispatch.
- Added a reusable, responsive, no-script signup form and a dedicated newsletter page.
- Added newsletter discovery from the header, footer, command palette, homepage, article index, and individual article pages.
- Added Buttondown disclosure to the privacy page and `/newsletter` to the sitemap.
- Added targeted browser regression coverage.

## What did not change

- No Buttondown API key, mailbox credential, or other secret was stored.
- No paid Buttondown RSS automation was enabled.
- Existing RSS feeds and article publishing behavior were not replaced.
- User-owned changes in `src/data/uses.js`, `docs/LINKEDIN-PROFILE.md`, `docs/PROPOSAL-SYSTEM.md`, `docs/SERVICE-DELIVERY-PLAYBOOKS.md`, and `public/og/projects/tradesync-card.png` were not modified or staged.

## What remains unverified

- Final public branding fields in the Buttondown dashboard were not saved during this pass because the shared browser was in active operator use.
- A real double-opt-in subscription and delivery cycle has not been performed.
- The new route has not yet been deployed to production from this branch.

## Remaining open loops

- Save the approved Buttondown name, author, description, and `#39dec9` brand colour in the provider dashboard.
- Perform one controlled test subscription after deployment.
- Decide later whether the paid RSS-to-email automation is valuable enough to enable.

## Next recommended pass

Save the Buttondown branding, deploy this branch, then verify the live `/newsletter` form with one controlled subscription.

## Links

- [Documentation history](../../99_ARCHIVE/Documentation-History/2026-08-03_buttondown-newsletter-setup.md)
- [Daily note](../Daily/2026-08-03.md)
- [Agent activity](../Agent-Activity/2026-08-03-codex-buttondown-newsletter-setup.md)
- Feature / R&D row: none in this repository
