# Project publication audit

Last verified: 2026-08-04

This file records the evidence boundary for every project published on ChaseInTech. It is intentionally public-safe: no credentials, private paths, internal identifiers, customer data or unpublished implementation details belong here.

## Publication rule

A project page may describe:

- behaviour supported by an accessible repository, validation record or inspected public deployment;
- architecture clearly labelled as architecture, planning or research;
- privacy-screened local evidence when the public wording does not expose protected implementation details.

A build log is published only when its source is sufficient for the claims it makes. Missing, private-only or contradictory evidence must produce an explicit boundary, not a stronger story.

## Current dispositions

| Project | Authoritative evidence | Public disposition | Build-log disposition |
|---|---|---|---|
| ChaseOS | Public `chasedndt/ChaseOS-Core`, screened architecture material and public product surface | Active framework/developer preview; public Core remains separate from private instance state; no production SaaS claim | `chaseos-control-plane-boundaries` and `chaseos-cloud-metering-architecture` published |
| Chaser Agent | Public `chasedndt/Chaser-Agent` README, harness code and test/eval documentation | Bounded Source Card Harness V0; not production autonomy, live provider routing or canonical memory ownership | `chaser-agent-source-card-harness` published and linked |
| ChaseOS Web | Screened local ChaseOS Web repository plus public `chaseos.ai` deployment | Live Early Access website and waitlist; downloads, checkout, admin export and managed agents remain gated | `chaseos-web-early-access-boundaries` published and linked |
| StrikeZone Crypto | No public repository declared on the portfolio | Private research workspace; implementation, performance and subscription claims withheld | Existing market-intelligence draft remains unpublished and unlinked |
| TradeSync | Public `chasedndt/TradeSync` README, contracts and dated change records | Development/research system with mock or dry-run cockpit; no live execution, autonomous authority or performance claim | `tradesync-preview-before-execution` published and linked |
| Hypelist | Public `chasedndt/Hypelist` frontend/backend tree and README | Development application with React/Flask and Firebase/SQLite modes; no production commerce, live billing or customer-operation claim | `hypelist-dual-mode-storage` published and linked |
| GreyTheory AI | Public `chasedndt/GreyTheory-Research` README, scope policy, product boundary map and safe local proof plan | Architecture/incubation only; external testing and real-world finding claims blocked without explicit authority | `greytheory-proof-before-finding` published and linked |
| Toolshape Studio | Public `chasedndt/toolshape-studio` architecture pack and validation report; operator confirms a working local dashboard | In development; working dashboard in local use, operator-attested — public repository does not yet contain the running build, so it is not independent verification | `toolshape-studio-semantic-kernel-before-ui` published and linked |
| Toolshape Voice | Public `chasedndt/toolshape-voice` repository is currently empty; operator confirms daily personal use of a working local build | In development; in daily personal use, operator-attested — public repository does not yet contain the running build, so packaging, signing and integration claims stay withheld until the code is published | Earlier launcher log remains withdrawn pending publishable repo evidence |

## Verification checklist

Before a project content change ships:

1. Re-open the declared source and confirm its current state.
2. Compare summary, outcome, boundary and every case-study section against that evidence.
3. Screen the proposed copy for secrets, private paths, internal identifiers and unsupported performance/security claims.
4. Confirm published build logs are linked from the matching project and drafts are not linked.
5. Run `npm run build` and `npm run test:e2e -- --project=chromium`.
6. Confirm the project page, build-log page, build-log RSS and sitemap in generated output.
7. After deployment, confirm the same surfaces in production and require fresh green GitHub Actions.
