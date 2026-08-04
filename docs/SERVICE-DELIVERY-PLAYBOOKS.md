# Service delivery playbooks — Upwork Project Catalog

How to actually deliver the three services that are live on Upwork, with honest
hour estimates for **agent-orchestrated development** (Claude Code / Codex doing
the building, you directing and reviewing).

Written for a university student with limited weekday time. Every estimate is
*your* hours, not calendar time. Calendar conversion is at the bottom.

---

## 0. The velocity model — read this before quoting anything

### The calibration point

This portfolio site is the honest benchmark:

| Measure | Value |
|---|---|
| Source files | 55 |
| Lines (Astro/JS/CSS) | 8,393 |
| Calendar span | 29 Jul – 2 Aug 2026 |
| Bulk of the work | 63 files touched on one day (30 Jul) |

That is a deployed, tested, multi-route site with structured content, OG image
generation, Playwright tests and CI — in roughly **three working days**.

### What that actually means

The mistake is concluding "everything is 3× faster now." It isn't. Agent
orchestration collapses *one* cost — writing code — and leaves the others
untouched.

**Compressed hard (5–10× faster):**
- Scaffolding, boilerplate, config
- Writing tests once behaviour is defined
- Refactors, renames, mechanical migration
- Documentation and runbooks
- Second and third instances of a pattern you've already built once

**Barely compressed (1–1.5×):**
- Deciding what the thing should do
- Reading a client's existing codebase well enough to not break it
- Debugging integration failures against systems you can't see
- Reviewing agent output carefully enough to sign your name on it

**Not compressed at all (0×):**
- Client response latency (the single biggest schedule risk)
- Waiting for credentials, API keys, sandbox access
- Client review cycles and revision rounds
- Anything requiring a decision only the client can make

**The planning rule:** estimate the build, then ask what fraction of the job is
actually building. On these three services it's roughly **40%**. The other 60%
is spec, review, integration and waiting — and that 60% sets your floor.

---

## 1. Service: AI Agent Harness

**Live as:** "AI Agent Harness Development, Evals, Approval Gates & Tests"
**Boilerplate:** `chaser-agent/` — this is the reference implementation. Do not
start from scratch. Fork the structure: source-card separation, uncertainty
labelling, eval harness, test layout.

### Intake — get these before writing code

1. What task must the agent perform, end to end?
2. Which tools/APIs does it touch? Read or write?
3. What does a **correct** output look like? Get 5 real examples.
4. What does a **wrong** output look like? Get 3 real failures if they have them.
5. Which actions must never happen without human approval?
6. Who is the accountable reviewer?

If they can't answer 3 and 5, the project isn't ready. Say so.

### Phases and hours — Starter ($1,800 / 14 days)

| Phase | Hours | Notes |
|---|---|---|
| Intake call + written spec | 3 | Spec is the deliverable that prevents scope creep |
| Scaffold from chaser-agent | 1 | Agent does this in minutes |
| Domain schema + structured output | 3 | Their data shapes, not yours |
| Approval gate wiring | 2 | |
| Golden eval set (1) | 3 | Hand-curated. Agent drafts, you verify every row |
| Test suite | 3 | Agent writes, you check they'd actually fail |
| Review + hardening | 4 | **Do not compress this** |
| Docs + handover walkthrough | 2 | |
| Client comms overhead | 2 | |
| **Total** | **23h** | Effective rate ≈ **$78/h** |

### Standard ($3,200 / 21 days) — 3 workflows, 3 eval sets, CI

~**40h**. Workflows 2 and 3 cost ~40% of workflow 1 each (pattern already set).
CI wiring ~2h. Effective rate ≈ **$80/h**.

### Advanced ($5,400 / 30 days) — 6 workflows, full governance, observability

~**70h**. Integration with an existing stack is the wildcard — budget 10h for
"their system is weirder than described." Effective rate ≈ **$77/h**.

### Definition of done
- Client runs the test suite themselves and sees it pass
- Every eval row has been read by a human (you)
- Approval gates demonstrated blocking a real action
- Handover doc lets someone else change it without you

### Refuse if
- They want the agent to act autonomously on money, sends, or deletes
- They want "an AI that does everything" with no defined success criteria

---

## 2. Service: Workflow Automation

**Live as:** "Workflow Automation, API Integration, Failure Alerts & Runbook"
**Boilerplate:** StrikeZone pipeline patterns — scheduled jobs, manifest
validation, fetch-back verification, alert routing.

### Intake
1. Walk me through the process as it happens today, step by step.
2. Which tools/systems? Do you have API access or only UI?
3. How often does it run? What happens if it runs twice?
4. What's the cost of a silent failure?
5. Who gets alerted, and on what channel?

Question 3 matters more than it looks — idempotency is where these break.

### Phases and hours — One workflow ($950 / 10 days)

| Phase | Hours | Notes |
|---|---|---|
| Process mapping + boundary doc | 2 | |
| Auth/credential setup | 1.5 | Often blocked on client — start day 1 |
| Build the happy path | 2 | Fast with an agent |
| Error handling, retries, idempotency | 2.5 | The actual product |
| Alerting | 1 | |
| Test against real data | 2 | |
| Runbook + walkthrough | 1.5 | |
| **Total** | **12.5h** | Effective rate ≈ **$76/h** |

### Multi-step ($1,900 / 18 days) — 4 workflows
~**23h**. Effective rate ≈ **$83/h**.

### With AI steps ($3,600 / 28 days) — 8 workflows + gated AI decisions
~**42h**. The AI steps need their own small eval set — reuse the harness
tooling. Effective rate ≈ **$86/h**.

### Definition of done
- Deliberately break it in front of the client; the alert fires
- Runbook tested by someone who didn't build it
- Client can run and modify it without you

---

## 3. Service: Hosted 24/7 Agent

**Live as:** "AI Agent Deployment, 24/7 Server Hosting Setup & Monitoring"

### Intake
1. What is the agent, and does it already work locally?
2. Whose cloud account? (Must be theirs — you never hold the bill.)
3. What credentials does it need, and who can grant them?
4. What's the acceptable downtime? Be specific.
5. Who is on the alert channel at 3am?

### Phases and hours — Deploy + 30 days ($1,400 / 10 days)

| Phase | Hours | Notes |
|---|---|---|
| Intake + infra decisions | 1.5 | |
| Containerise | 2 | |
| Deploy pipeline (repeatable, not hand-configured) | 3 | |
| Health checks + auto-restart | 2 | |
| Alerting to a named human | 1.5 | |
| Runbook | 1.5 | |
| 30 days monitoring | 2 | ~30 min/week if built properly |
| **Total** | **13.5h** | Effective rate ≈ **$104/h** |

### Deploy + 90 days ($3,300 / 14 days)
~**32h** (20h setup incl. dashboard, 12h monitoring). Rate ≈ **$103/h**.

### Resilient + 90 days ($5,900 / 21 days)
~**52h** (34h setup incl. redundancy/failover, 18h monitoring). Rate ≈ **$113/h**.

**Monitoring is the risk.** If it's noisy, it eats your term-time. Build the
alerting properly in week 1 or you'll pay for it for three months.

### Definition of done
- Kill the process; it restarts and you get the alert
- Client's own account, client's own keys
- Redeployable from scratch by following the runbook

---

## 4. Calendar conversion — student reality

Assume during term:

| | Hours available |
|---|---|
| Weekday | 2–3 focused |
| Weekend day | 5–6 focused |
| **Realistic week** | **22–25h** |

Deadline weeks and exam weeks: assume **zero**. Do not sell delivery windows
that cross an assessment deadline.

**Quoting formula:**

```
calendar days = (estimated hours / 22 per week) * 7 * 1.5
```

The 1.5 covers client latency and the thing you didn't foresee. This is why the
listed delivery windows are what they are:

| Tier | Hours | Formula | Listed | Verdict |
|---|---|---|---|---|
| Harness Starter | 23 | ~11 days | 14 | comfortable |
| Harness Standard | 40 | ~19 days | 21 | tight but real |
| Harness Advanced | 70 | ~33 days | 45 | comfortable (raised from 30) |
| Automation One | 12.5 | ~6 days | 10 | comfortable |
| Automation Multi | 23 | ~11 days | 18 | comfortable |
| Automation + AI | 42 | ~20 days | 28 | comfortable |
| Hosted 30 | 13.5 | ~6 days | 10 | comfortable |
| Hosted 90 | 32 | ~15 days | 14 | tight |
| Hosted resilient | 52 | ~25 days | 30 | comfortable (raised from 21) |

The two top tiers were originally listed at 30 and 21 days against ~33 and ~25
needed. Both were raised so neither forces a clear week during term. Hosted 90
(14 listed vs ~15 needed) is still tight but the monitoring portion is spread
across 90 days, so the setup fits.

---

## 4b. The stack you actually build in

Quote in these unless the client's existing system forces otherwise. Deviating
costs hours you didn't budget.

| Layer | Default | Why |
|---|---|---|
| Agent/backend | **Python** | chaser-agent is Python; harness patterns transfer directly |
| Web app frontend | **React + TypeScript** | ChaseOS Web, Toolshape Studio |
| Content/marketing sites | **Astro** | This site: 8,393 LOC in ~3 days, ships static and fast |
| Desktop | **Electron + TypeScript** | Toolshape Studio and Voice |
| Storage | **SQLite** local-first, **D1/Postgres** hosted | Dual-mode is a Hypelist pattern worth reusing |
| Hosting/edge | **Cloudflare** Pages, Workers, D1 | Already proven on chaseintech.com and chaseos.ai |
| Tests | **Playwright** (web), **pytest** (Python) | |

**Astro is the one to reach for on any content-shaped build** — docs sites,
marketing sites, portfolios, landing pages, anything where a React SPA is
overkill. It is on the Upwork skills list for exactly this reason. If a client
asks for a "website" rather than an "app", the answer is almost always Astro on
Cloudflare Pages, and the velocity benchmark in section 0 is *that* stack, so
estimates transfer directly.

---

## 5. Build these once, reuse forever

Every hour here pays back on the second contract:

1. **Harness starter template** — extracted from chaser-agent, genericised
2. **Eval set generator** — schema in, golden rows out for human verification
3. **Alert module** — one interface, Slack/Discord/email behind it
4. **Deploy template** — container + health check + restart policy
5. **Runbook template** — fill-in-the-blanks
6. **Intake questionnaire** — the questions above, as a form to send on day 1
7. **Astro content-site starter** — this site, stripped of ChaseInTech content:
   layout, design tokens, OG image generation, Playwright suite, Cloudflare
   Pages deploy. Unlocks a fourth service (content sites) at near-zero build cost

Target: after two contracts per service, Starter tiers should drop 30–40%.

---

## 6. Rules that protect you

- **Spec before code, always.** The written spec is what stops "can it also…"
- **Never start without credentials in hand.** Kick off day 1; it's the #1 delay.
- **Review every line you ship.** Speed comes from generation, trust comes from
  review. If you sign it, you read it.
- **State boundaries in writing.** What it will not do belongs in the spec, not
  discovered later.
- **One contract at a time during term.** Max simultaneous is set to 3 on the
  platform; that is a ceiling, not a target.
- **If it's not a good fit, say so.** It's in your profile copy — mean it.
