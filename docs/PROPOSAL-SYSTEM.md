# Proposal system — Upwork

**INTERNAL. Never publish this.** It lives in `docs/`, which is not part of the
build output and is never served as a page. It contains how you filter clients
out and how you decline them. A client reading it would be bad for you.

Companion docs: `FREELANCE-PROFILES.md` (how you present yourself),
`SERVICE-DELIVERY-PLAYBOOKS.md` (how you deliver once you win).

---

## 0. Why this exists — the Connects problem

Upwork charges you to apply. Connects are tokens you buy, and every proposal
spends some. Your balance is currently 0.

The consequence: **a proposal to a client who was never going to hire you costs
exactly as much as one to a client who was.** Most freelancers burn their
balance writing careful proposals into jobs they had no chance at — wrong
budget, unresponsive client, 50 applicants already there.

So the system has two halves:

1. **The filter** — decide whether to spend a Connect at all. Saves the most money.
2. **The kit** — once you've decided to bid, write it in 10 minutes, not 45.

Track everything (section 6). After ~15 proposals you'll know what converts and
can stop guessing.

---

## 1. The qualification filter

Run this **before** clicking Apply. Takes 60 seconds.

### Hard stops — do not bid, no exceptions

- [ ] **Payment method not verified.** You cannot be paid reliably. Walk away.
- [ ] **Budget below your floor.** Fixed under ~$800, or hourly under $45.
- [ ] **Job is older than ~5 days** with no client activity.
- [ ] **50+ proposals already.** You are invisible unless you're the cheapest.
- [ ] **The ask doesn't map to a service you sell.** "Build me a website" when
      you sell governed agents is a distraction, not a foot in the door.
- [ ] **Client wants the agent to act autonomously on money, sends or deletes**
      and pushes back when you raise it. This ends in a dispute.
- [ ] **Asks to move off-platform before a contract exists.** Against ToS and
      usually a scam.

### Green flags — bid, and bid properly

- Client has hired before and has good history
- The post describes a *problem*, not just a technology shopping list
- They mention reliability, trust, review, compliance or "it keeps breaking"
- Fewer than ~15 proposals and posted within 48 hours
- Budget is stated and matches one of your tiers

### The judgement call

If it's mixed, ask: **can I say something in the first two lines that no other
applicant will say?** If yes, bid. If you'd just be writing "I can build that",
don't — that's what the other 40 wrote.

---

## 2. The proposal structure

Clients skim. The first two lines decide whether the rest gets read. Never open
with "Dear Hiring Manager" or your own biography.

**Five beats, roughly 150–200 words total:**

1. **Mirror the problem in their words.** Prove you read the post.
2. **Name the risk they didn't mention.** This is your edge — see below.
3. **One piece of concrete proof.** A number, not an adjective.
4. **What you'd do first.** Specific, week-one, shows you've already thought.
5. **One question.** Real, not "when can we chat?" It starts a conversation and
   signals you scope before you build.

### Beat 2 is the whole strategy

Every other applicant says they can build it. You say: *here is the failure mode
you haven't accounted for, and here is how I'd gate it.* It's the same
positioning as your profile, compressed. It works because it's the one thing a
client can't evaluate from a portfolio — it demonstrates judgement live.

Examples of the move:
- They want an agent that emails customers → "what stops it emailing the wrong
  person at 3am, and who reviews before send?"
- They want automation across three tools → "what happens when the API changes
  shape and it half-runs? Who finds out, and how?"
- They want an AI that categorises data → "how will you know it's still right in
  six weeks? Without an eval set you're trusting vibes."

### Annotated example

> Your team is spending hours re-checking what the agent produced, which
> defeats the point of having it.
>
> The usual cause is that the output isn't structured for review — a reviewer
> can't tell what the source actually said, what the model inferred, and what
> it's unsure about, so they redo the work to be safe.
>
> I build agent harnesses that separate those three things explicitly. My
> open-source one ships with 28 tests across 10 suites and 5 golden evaluation
> datasets, so behaviour is measurable rather than asserted.
>
> First week I'd map one workflow end to end, agree what a correct output looks
> like with real examples, and put an approval gate on anything irreversible.
>
> One question: when the agent gets something wrong today, who catches it, and
> how long does that take?

Note what it does *not* do: no CV, no adjectives, no "passionate", no rate
negotiation, no links dumped at the bottom.

---

## 3. Service variants

Most jobs map to a catalog service. Start from the matching variant and edit —
five minutes, not a blank page.

### Variant A — Agent harness / AI reliability
**Trigger words:** agent, LLM, automation with AI, hallucination, accuracy,
"it works sometimes", evaluation, RAG
**Beat 2:** unreviewable output, no eval set, no approval gate on irreversible actions
**Proof:** 28 tests / 10 suites / 5 golden eval sets, MIT-licensed and public
**Week one:** one workflow mapped, success criteria agreed with 5 real examples

### Variant B — Workflow automation
**Trigger words:** Zapier, Make, n8n, integration, manual process, spreadsheet,
"we do this by hand"
**Beat 2:** silent failure — nobody finds out until a customer complains
**Proof:** a governed daily pipeline running ~35 scheduled jobs with fetch-back
verification at every stage
**Week one:** map the current process, agree what stays a human decision

### Variant C — Deployment / hosting / reliability
**Trigger words:** deploy, server, uptime, monitoring, "runs on my machine",
production, scaling
**Beat 2:** an unattended agent with no limits is a liability, not a feature
**Proof:** containerised deploys into the client's own cloud, health checks,
auto-restart, alert to a named human
**Week one:** repeatable deploy, not a hand-configured box

### Variant D — Web build (if you take these)
**Trigger words:** website, landing page, docs site, portfolio, marketing site
**Beat 2:** most of these ship as a heavy SPA when static would be faster and cheaper
**Proof:** chaseintech.com — 8,393 lines, 55 files, built in ~3 working days on
Astro and Cloudflare Pages, with tests and CI
**Week one:** content model first, then build

---

## 4. Proof snippet library

Copy-paste. Every number here is real — **never inflate these under time
pressure.** If a claim isn't on this list, don't make it.

**Governance and review**
- "Agents draft, implement and test freely, but cannot deploy, spend or publish
  without a person approving."
- "Output separates what the source said, what the model inferred, what's
  uncertain, and what actions are proposed."
- "A decision router picks human judgement, deterministic rules, ML or
  generative AI per step *before* anything executes."

**Testing and evaluation**
- "28 tests across 10 suites and 5 golden evaluation datasets."
- "MIT licensed and public — you can read the code before you hire me."

**Delivery speed**
- "8,393 lines across 55 files, deployed with tests and CI, in about three
  working days."

**Reliability and ops**
- "Retries where retrying is safe, hard stops where it isn't, and an alert to a
  named person the moment something doesn't complete."
- "A governed research pipeline running roughly 35 scheduled jobs daily with
  fetch-back verification."

**Boundaries — say these out loud, they build trust**
- "It executes no trades and holds no funds. That's a design decision, not a
  limitation."
- "Hosting costs are paid by you directly to your provider, not marked up
  through me."
- "You own the infrastructure, the keys and the code at the end."

---

## 5. Response templates

### "What's your rate?"
> $60/hour, or fixed price if the scope is clear — I usually prefer fixed,
> because it means you're buying an outcome rather than my hours. For [their
> job] I'd expect [tier] territory, around $X, once I've seen [the specific
> unknown].

### Scope creep mid-conversation
> That's a reasonable thing to want, and it's outside what we agreed. I can
> either fold it in and move the date, or do it as a follow-on once this is
> delivered. Which suits you better?

### "Can you do it cheaper?"
> I can make it smaller, not cheaper. Here's what I'd cut to hit your budget:
> [specific reductions]. What I won't cut is the tests and the handover —
> without those you can't verify what you've bought.

### Decline (use it — it's a promise you already made publicly)
> Thanks for the detail. I don't think I'm the right fit for this one: [honest
> reason in one line]. You'd be better served by someone who [what they
> actually need]. Happy to talk if the scope changes.

### They want unbounded autonomy
> I can build that, but not without an approval gate on [the irreversible
> action]. An unattended system that can [spend/send/delete] with no limit is a
> liability for you, not a feature. If that's a dealbreaker I'd rather say so
> now than halfway through.

---

## 6. Send log

Keep this updated. It's the only way to learn what converts.

| Date | Job | Variant | Connects | Client verified | Reply? | Outcome |
|---|---|---|---|---|---|---|
| | | | | | | |

Review after every 15 proposals:
- Which variant gets replies?
- What was the Connects cost per reply, and per contract?
- Which filter rule, if any, did you break on the ones that went nowhere?

---

## 7. Rules

- **Never bid on a hard stop.** The filter exists because you'll be tempted.
- **Never inflate a proof number.** Everything you claim must survive a client
  opening the repo.
- **Two lines, then decide.** If your opening two lines could have been written
  by any of the other applicants, rewrite them or don't send it.
- **Say no in writing.** Your profile promises it. It costs one Connect and
  earns more respect than a bad fit.
- **One contract at a time during term.** See the delivery playbooks.
