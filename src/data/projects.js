// Structured project content (§32.1).
// Status vocabulary is fixed (§23.2) and must stay truthful — a prototype is
// never described as a production product.

export const statusLabels = {
  live: "Live",
  development: "In Development",
  oss: "Open Source",
  research: "Research",
  prototype: "Prototype",
  planned: "Planned",
  archived: "Archived",
  private: "Private",
};

export const categories = {
  agentic: "Agentic AI and Infrastructure",
  fullstack: "Full-Stack Products",
  automation: "Automation and Business Systems",
  trading: "Trading and Data Engineering",
  security: "Cybersecurity Research",
  creative: "Creative Tooling",
};

// Per-project links (§: each project carries its own presence).
// `type` drives the icon: site | github | x | youtube | tiktok | discord | docs
// NEVER invent a URL. A project with no verified account simply has fewer
// entries — an empty row is honest, a guessed handle is not.
//
export const projects = [
  {
    slug: "chaseos",
    name: "ChaseOS",
    frontier: true,
    featured: true,
    category: categories.agentic,
    // Operator decision 2026-07-30: ChaseOS is live (chaseos.ai + Forge public).
    status: "live",
    role: "Founder and Systems Builder",
    summary:
      "A human-AI operating system and governance layer for orchestrating agents, projects, knowledge, approvals and persistent digital workflows.",
    outcome:
      "Local-first control plane that lets one builder run many agents across real projects without giving up review, memory or approval boundaries.",
    technologies: ["Python", "SQLite", "Agent orchestration", "MCP", "Discord control plane"],
    repositoryUrl: "https://github.com/chasedndt/ChaseOS-Core",
    liveUrl: "https://chaseos.ai",
    systemAreas: [
      "Studio",
      "Governance and approvals",
      "Runtime orchestration",
      "Hermes and peer runtimes",
      "Chaser Agent",
      "Knowledge graph",
      "Memory",
      "Agent bus",
      "MCP and tools",
      "Projects and workflows",
    ],
    boundary:
      "Not claiming production SaaS deployment, unbounded agent execution, or a managed public agent service.",
    // ChaseOS carries its own presence, separate from the personal accounts.
    links: [
      { type: "site", label: "chaseos.ai", url: "https://chaseos.ai" },
      { type: "x", label: "@chaseos_ai", url: "https://x.com/chaseos_ai" },
      {
        type: "discord",
        label: "Community",
        url: "https://discord.gg/s3EAKYJUCW",
      },
      {
        type: "github",
        label: "ChaseOS-Core",
        url: "https://github.com/chasedndt/ChaseOS-Core",
      },
      {
        type: "docs",
        label: "chaseos-core on PyPI",
        url: "https://pypi.org/project/chaseos-core/",
      },
      // LinkedIn: the directive's blanket exclusion targeted a PERSONAL
      // profile. The operator explicitly approved this ChaseOS *company* page,
      // so it is in scope here and nowhere else on the site.
      {
        type: "linkedin",
        label: "Company page",
        url: "https://www.linkedin.com/company/chaseos/",
      },
    ],
    media: [],
    // Significant surfaces shipped within ChaseOS. Only entries verified
    // against the live site or the repository appear here.
    components: [
      {
        name: "ChaseOS Forge",
        detail:
          "Public workflow-pack marketplace. Packs are installable units of governed automation rather than prompt templates.",
        status: "live",
        url: "https://chaseos.ai/forge",
      },
      {
        name: "Plans and pricing",
        detail: "Public commercial surface for Early Access tiers.",
        status: "live",
        url: "https://chaseos.ai/pricing",
      },
      {
        name: "ChaseOS Studio",
        detail:
          "Operator surface for projects, review queues and approvals — where agent output gets accepted or rejected.",
        status: "development",
        url: null,
      },
      {
        name: "Control plane",
        detail:
          "Per-project lanes carrying status receipts and human approval gates that agents cannot self-authorise.",
        status: "development",
        url: null,
      },
      {
        // Sourced from the ChaseOS commercial site content, which is explicit
        // that Cloud is planned/early-access — never describe it as live.
        name: "ChaseOS Cloud",
        detail:
          "Planned managed layer over the local-first core: Providers & Tools, encrypted Sync, usage-based Compute, Managed Runtimes and Deploy. Local-first and BYOK stay viable; managed is opt-in convenience.",
        status: "planned",
        url: "https://chaseos.ai/cloud",
      },
    ],
    // Deep case study (§24.1), written from the ChaseOS-Core repository.
    caseStudy: [
      {
        heading: "The problem",
        body: "Running many agents across real projects collapses too much into one stream: source facts, model guesses, proposed actions, memory writes and public claims all arrive looking equally confident. Once an agent can deploy, spend or publish, the cost of that ambiguity stops being theoretical. ChaseOS starts from the position that the boundary — not the model — is the product.",
      },
      {
        heading: "The design decision that shapes everything else",
        body: "ChaseOS's runtime contract does not assume an LLM should do each step. Before any execution, its decision router selects a modality per material step: a human for accountability and liability, deterministic rules for exact or security-sensitive operations, ML for versioned prediction over structured data, and generative AI only for bounded interpretation and synthesis. The first shipped foothold of this is deliberately read-only — it validates a decision contract and produces an approval plan naming the accountable human, the exact scope, the required evidence and the block-on-timeout behaviour, without executing anything.",
      },
      {
        heading: "Public core, private instance",
        body: "The framework is split hard: ChaseOS Core is an MIT-licensed public scaffold — folder structure, governance docs, templates, runtime standards, a lean CLI — while identity, credentials, live memory and project state live in a separate private instance. The publication standard requires Core materials to be reusable without exposing private paths, names or deployment state, and a repo-safe secret audit module scans tracked and untracked text before anything ships. Core is now published independently on PyPI as chaseos-core and stands on its own as a governance framework for any agent system; ChaseOS is its first and most demanding consumer rather than its only possible one.",
      },
      {
        heading: "What the CLI actually does today",
        body: "The lean Core CLI covers version and health checks, explicit capture into quarantine (file, stdin, local image-text — no ambient screen or browser capture), schedule-intent listing, a bounded workflow runner with dry-run, a local-first connections registry that discovers provider manifests without authenticating anything, and read-only commercial scaffolding for catalog, entitlements and ledger surfaces.",
      },
      {
        heading: "Trade-offs accepted",
        body: "Everything defaults to fail-closed, read-only, or dry-run, which makes the system slower to demo than an autonomous agent stack. That is deliberate: the failure mode of a confused agent here is a rejected proposal or a blocked approval, not a live incident. Convenience is being layered on top (Forge packs, and eventually the managed Cloud lane) rather than by weakening the boundary.",
      },
      {
        heading: "Where it is now",
        body: "Active framework in developer preview. The Forge workflow-pack marketplace and pricing surfaces are live on chaseos.ai; Studio and the control plane are in development; the managed Cloud lane is planned and explicitly not live. Not a production SaaS, not unbounded agent execution, and not described as either.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: [
      "chaseos-control-plane-boundaries",
      "chaseos-cloud-metering-architecture",
    ],
  },
  {
    slug: "chaseos-core",
    name: "ChaseOS Core",
    featured: true,
    category: categories.agentic,
    status: "oss",
    role: "Architect and Engineer",
    summary:
      "A standalone, MIT-licensed governance framework for agent systems: approval-gated writes, fail-closed authority, and decision routing that picks a human, deterministic code, an ML model or a generative agent before it picks a provider.",
    outcome:
      "Installable from PyPI as chaseos-core and usable inside any Python project. ChaseOS is the framework's own proving ground — the same package is the substrate the wider system runs on, so the governance model is demonstrated in production rather than described in a README.",
    technologies: ["Python 3.11+", "MIT licence", "PyPI", "Ports and adapters", "YAML policy manifests"],
    repositoryUrl: "https://github.com/chasedndt/ChaseOS-Core",
    // No liveUrl: this is a library, not a hosted product, and the primary
    // "Visit live product" CTA would be wrong. The repository is the
    // destination; PyPI is where you install from and sits in the link row.
    liveUrl: null,
    boundary:
      "Alpha and pre-1.0. Core ships no workflow manifests, so workflow execution escalates rather than running, and it deliberately denies gated operations until an authority provider is registered. It is not a production autonomy runtime, a hosted service, or a model.",
    links: [
      {
        type: "github",
        label: "ChaseOS-Core",
        url: "https://github.com/chasedndt/ChaseOS-Core",
      },
      {
        type: "docs",
        label: "Install from PyPI",
        url: "https://pypi.org/project/chaseos-core/",
      },
      {
        type: "docs",
        label: "Start here — concepts",
        url: "https://github.com/chasedndt/ChaseOS-Core/tree/main/docs/concepts",
      },
      {
        type: "docs",
        label: "Architecture",
        url: "https://github.com/chasedndt/ChaseOS-Core/blob/main/docs/ARCHITECTURE.md",
      },
      {
        type: "docs",
        label: "Runnable examples",
        url: "https://github.com/chasedndt/ChaseOS-Core/tree/main/examples",
      },
      {
        type: "docs",
        label: "Decision records",
        url: "https://github.com/chasedndt/ChaseOS-Core/tree/main/docs/adr",
      },
    ],
    media: [
      {
        src: "/images/projects/chaseos-core/authority-pipeline.svg",
        wide: true,
        alt: "The ChaseOS Core authority pipeline: a request is routed by modality, checked by the approval gateway, executed within a bounded write scope and recorded as evidence, with a deny path when no gateway is bound",
        caption:
          "The authority pipeline. A request is routed by modality, gated, bounded and evidenced — and with no authority provider bound it denies rather than proceeds. Canonical knowledge is reached only through an explicit promotion gate, never by direct agent writeback.",
      },
      {
        src: "/images/projects/chaseos-core/chaseos-core-banner.svg",
        wide: true,
        alt: "ChaseOS Core banner showing the ChaseOS mark with the tagline: governed, local-first framework for hybrid-intelligence systems",
        caption:
          "MIT licensed, approval-gated, fail-closed — the three properties the framework is built to guarantee.",
      },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "Agent frameworks compete on capability: more tools, more autonomy, more things the model is allowed to do. That leaves the harder question unanswered — not whether a system can perform an action, but whether it was permitted to, who is accountable for it, and what evidence survives afterwards. Once agents can write to durable memory, the failure mode is rarely dramatic. It is quiet corruption: a plausible inference gets written down, read back later as fact, and within weeks the knowledge base holds confident claims nobody verified and nobody can trace.",
      },
      {
        heading: "Authority as the engineered property",
        body: "Core treats capability as assumed and authority as the thing being designed. Every gated operation resolves through a single port, and the resolution order ends in a deny-by-default fallback — so an installation with no authority provider registered refuses gated work instead of silently permitting it. A misconfiguration produces a denial, not an accident. The cost is real and stated plainly in the docs: a fresh install cannot perform gated operations until you supply a policy.",
      },
      {
        heading: "Deciding who acts, before deciding which model",
        body: "The decision router asks which kind of actor should own a step — a human, deterministic code, an ML model, or a generative agent — before any provider is chosen. Action classes such as money movement, access control, identity and canonical transitions cannot be delegated to a generative model: the router blocks routes that try. Generative steps must declare a cost ceiling and explicitly opt into bounded nondeterminism; ML steps must declare model version, evaluation reference and drift status. Inspection derives the full approval plan without dispatching anything, so a route can be checked in CI or a pull request without touching production authority.",
      },
      {
        heading: "Truth is promoted, never written",
        body: "Captured material lands in quarantine and becomes canonical only by passing an explicit promotion gate with provenance and a review decision. Agents produce candidates; candidates become knowledge through a gate. Provenance is enforced rather than assumed — content without a traceable source cannot be promoted — which closes the obvious hole of an agent that is allowed to write, writing something unattributable.",
      },
      {
        heading: "Open framework, private instance",
        body: "The split is enforced rather than encouraged. Core is the public MIT layer: contracts, governance, fail-closed adapters, a lean CLI. Credentials, live runtime state and personal content live in a separate private instance and never enter the public tree — a publication standard backed by a repo-safe secret audit that reports credential-shaped strings without ever emitting their values. The proprietary enforcement engine is a registered implementation behind the port, which is why the open half can be inspected, forked and extended without the closed half.",
      },
      {
        heading: "Proven on ChaseOS itself",
        body: "ChaseOS is the framework's first and most demanding consumer: the same published package is the substrate the wider control plane runs on. That is the practical case study — the governance model is not a proposal, it is the thing already carrying real multi-agent work. Because Core is a standalone dependency rather than an extract, anyone building their own agent system can adopt the same boundaries without adopting ChaseOS.",
      },
      {
        heading: "Built to be verified, not trusted",
        body: "Continuous integration runs the test suite across Python 3.11 and 3.12, a lint gate scoped to defect-class rules rather than style, and a job that installs the built wheel outside the source tree and asserts the packaged policy data actually loads — a guard added after a real defect where the published package installed cleanly but shipped none of its manifests. Five runnable examples double as executable documentation: they assert the framework's own guarantees, including that no provider enables a write capability by default, so a claim in the docs cannot quietly stop being true.",
      },
      {
        heading: "Where it is now",
        body: "Published on PyPI and installable with pip. Alpha and pre-1.0: Core ships no workflow manifests, so workflow execution escalates rather than running, and gated operations deny until an authority provider is registered. Both are deliberate, and both are stated in the README rather than discovered later. Architecture decision records document why the seams sit where they do.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: [],
  },
  {
    slug: "chaser-agent",
    name: "Chaser Agent",
    featured: true,
    category: categories.agentic,
    status: "oss",
    role: "Architect and Engineer",
    summary:
      "A governed, review-first source-intelligence agent harness extracted from ChaseOS principles.",
    outcome:
      "Source Card Harness V0 separates source claims, evidence, uncertainty, action candidates and memory candidates so a human reviews before anything is trusted.",
    technologies: ["Python", "Deterministic review artifacts", "Evidence modelling"],
    repositoryUrl: "https://github.com/chasedndt/Chaser-Agent",
    liveUrl: null,
    boundary:
      "Not claiming a production autonomous agent, live provider routing, or a browser-control adapter.",
    links: [
      {
        type: "github",
        label: "Chaser-Agent",
        url: "https://github.com/chasedndt/Chaser-Agent",
      },
    ],
    media: [],
    // Deep case study (§24.1), written from the Chaser-Agent repository.
    caseStudy: [
      {
        heading: "The problem",
        body: "Most agent demos optimise for speed and autonomy, which collapses source facts, model inference, recommended actions and memory updates into one confident blob of prose. Once that happens, a reviewer cannot tell what is grounded, what is speculative, what is safe to act on, or what deserves to become durable knowledge — so verification costs as much as doing the work by hand.",
      },
      {
        heading: "Behaviour before implementation",
        body: "The repo is deliberately built in thinking order: a Layer 0 Behaviour Contract — the product constitution — comes first, then a V0 definition and blueprint, with a 17-layer architecture map kept subordinate to the contract. Code only exists where behaviour was defined first, and existing tests were reclassified as smoke or schema checks unless they genuinely test contract behaviour.",
      },
      {
        heading: "What V0 produces",
        body: "The Source Card Harness takes safe source input and emits a deterministic local review packet: a source card, a claims table kept separate from inference, traceable evidence snippets, explicit uncertainty and contradiction labels, action candidates that require human acceptance, memory candidates that are never auto-promoted, and a run log. It calls no LLM provider, browses nothing, and mutates no memory.",
      },
      {
        heading: "Testing and evals",
        body: "Twenty-eight tests across ten suites verify the harness, the packet schemas, skill gating, research intake and the repo scaffold itself. Five golden JSONL datasets — action extraction, citation grounding, memory candidates, source-card summaries and a trading-research workflow — are in place as the seed of a real evaluation harness rather than a demo suite.",
      },
      {
        heading: "The governance boundary",
        body: "Chaser Agent may propose; ChaseOS decides. Canonical truth, permission boundaries, runtime authority and promotion rules stay with the parent control plane. The harness's outputs are review-only by design, which is the point: an artifact optimised for a human deciding whether to trust it, not for skimming.",
      },
      {
        heading: "Where it is now",
        body: "Phase 1 — Source Card Harness V0 — is complete and open source under MIT. It is not production-ready autonomy, not a foundation model, and not a canonical truth engine; live providers, browser authority and managed hosting are future lanes that only open once the review loop has earned trust.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: ["chaser-agent-source-card-harness"],
  },
  {
    slug: "chaseos-web",
    name: "ChaseOS Web",
    featured: true,
    category: categories.fullstack,
    status: "live",
    role: "Full-Stack Developer",
    summary: "The public product website and front door for chaseos.ai.",
    outcome:
      "Cloudflare-deployed public site with a Vite/React shell, implemented route map, D1-backed waitlist path and Early Access boundaries.",
    technologies: ["Vite", "React", "Cloudflare Pages", "Pages Functions", "D1"],
    repositoryUrl: null,
    liveUrl: "https://chaseos.ai",
    boundary:
      "Not claiming a public installer, live marketplace transactions, or a managed-agent service.",
    links: [{ type: "site", label: "chaseos.ai", url: "https://chaseos.ai" }],
    media: [
      {
        src: "/images/projects/chaseos-web/chaseos-web-dark-hero.webp",
        alt: "ChaseOS Web homepage hero in dark mode, showing the inputs-project-outputs graph",
        caption:
          "The homepage in dark mode — the default theme, framing the product as one private command layer over work, memory, agents and execution.",
      },
      {
        src: "/images/projects/chaseos-web/chaseos-web-light-hero.webp",
        alt: "ChaseOS Web homepage hero in light mode, showing the inputs-project-outputs graph",
        caption: "The same hero in light mode. Theme preference is saved per visitor.",
      },
      {
        src: "/images/projects/chaseos-web/chaseos-web-dark-live-graph.webp",
        alt: "Live agent knowledge-graph visualization showing runtime profiles, projects and approval waiting states",
        caption:
          "\"See it live\": real footage of the knowledge graph as an operating surface — runtime profiles (OpenClaw, Codex, Claude Code) parked on nodes, work-beams into the projects they're touching, and a pending-approvals badge rendered live.",
      },
      {
        src: "/images/projects/chaseos-web/chaseos-web-light-live-graph.webp",
        alt: "Live agent knowledge-graph visualization in light mode",
        caption: "The same live graph view in light mode.",
      },
      {
        src: "/images/projects/chaseos-web/chaseos-web-dark-studio.webp",
        alt: "Studio command-surface section listing runtime lanes and the approvals review boundary",
        caption:
          "The Studio, Runtime Lanes and Approvals sections, each tagged with its real status (configured, gated, planned) rather than uniform marketing language.",
      },
      {
        src: "/images/projects/chaseos-web/chaseos-web-light-studio.webp",
        alt: "Studio command-surface section in light mode",
        caption: "The same section in light mode.",
      },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "A governance-first agent OS is a hard thing to explain on a landing page: the product's value is what it refuses to do, and most product sites are structured to promise the opposite. ChaseOS Web has to sell restraint without underselling capability.",
      },
      {
        heading: "Architecture",
        body: "Vite/React shell deployed on Cloudflare Pages with Pages Functions for the dynamic edges and a D1-backed waitlist path. The route map covers the product story — Studio, Forge, Cloud, developers, pricing, updates — with Early Access boundaries stated per surface rather than buried in a footer.",
      },
      {
        heading: "The content system underneath",
        body: "Every public surface is driven from a structured content file that carries not just the copy but the operator boundary for that surface — what the page may claim as live, what is gated, and what proof comes next. Marketing copy and governance rules live in the same object, so the site cannot drift into overclaiming without the diff showing it.",
      },
      {
        heading: "Where it is now",
        body: "Live on chaseos.ai behind Cloudflare with a hardening pass documented. Forge and pricing are public; checkout and managed services deliberately are not, and the site says so in its own words.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: ["chaseos-web-early-access-boundaries"],
  },
  {
    slug: "strikezone-crypto",
    name: "StrikeZone Crypto",
    featured: true,
    category: categories.trading,
    status: "live",
    role: "Systems Designer and Researcher",
    summary:
      "A private trading-systems R&D workspace for indicator, market-intelligence and signal-delivery research.",
    outcome:
      "A research framework for reproducible experiments across indicator development, market intelligence and governed delivery workflows.",
    technologies: ["Pine Script", "Python", "Discord infrastructure", "ChaseOS workflow pack"],
    repositoryUrl: "https://github.com/chasedndt/Strikezone-Crypto-Pinescript-V6-Indicators",
    liveUrl: null,
    boundary:
      "No live trade execution, no financial performance guarantees, and no production signal subscription service.",
    // StrikeZone Crypto's own presence, separate from the personal accounts.
    links: [
      {
        type: "site",
        label: "Whop",
        url: "https://whop.com/strike-zone-crypto/",
      },
      { type: "x", label: "@StrikeZone_HQ", url: "https://x.com/StrikeZone_HQ" },
      {
        type: "discord",
        label: "Community",
        url: "https://discord.gg/SEPe7wMrnE",
      },
      {
        type: "github",
        label: "Pine Script Indicators",
        url: "https://github.com/chasedndt/Strikezone-Crypto-Pinescript-V6-Indicators",
      },
    ],
    media: [
      {
        src: "/images/projects/strikezone-crypto/cap_btc_1h.webp",
        alt: "BTCUSDT 1h chart with break-of-structure, change-of-character and order-block zones drawn by the StrikeZone indicator suite",
        caption:
          "The Market Structure Analyzer working on BTC 1h. Every BOS, CHoCH and order block you can see also emits a JSON alert payload — the drawing and the Discord message come from the same event.",
      },
      {
        src: "/images/projects/strikezone-crypto/cap_sol_1h.webp",
        alt: "SOLUSDT 1h chart showing the same structure detection across three weeks of price",
        caption:
          "The same suite on SOL. Captured by the agent driving a scoped research browser over the DevTools protocol, not screenshotted by hand.",
      },
      {
        src: "/images/projects/strikezone-crypto/structure-15m.webp",
        alt: "BTCUSDT 15m chart with break-of-structure, change-of-character and order-block markers at intraday scale",
        caption:
          "The same detection dropped to 15m, which is where the entries actually get taken. Denser structure, same rules.",
      },
      {
        src: "/images/projects/strikezone-crypto/pine-source-alertjson.webp",
        alt: "Pine Script source open beside the chart, showing the buildAlertJson call that creates a webhook payload",
        caption:
          "Where a chart event becomes a message. Each structure event calls buildAlertJson() and fires once per bar close — the line that turns a drawing into a webhook.",
      },
      {
        src: "/images/projects/strikezone-crypto/discord-webhook-feed.webp",
        alt: "Discord channel receiving EMA 21/55 crossover alerts for several assets",
        caption:
          "The delivery side. One channel per signal per timeframe, so a member follows only the feeds they trade.",
      },
    ],
    subProjects: [
      {
        name: "TradeSync",
        summary:
          "AI-powered crypto trading engine for signal scoring and on-chain execution research.",
        status: "research",
        repositoryUrl: "https://github.com/chasedndt/TradeSync",
      },
      {
        name: "Pine Script indicators",
        summary:
          "Strategy and indicator development for the StrikeZone Crypto system.",
        status: "research",
        repositoryUrl:
          "https://github.com/chasedndt/Strikezone-Crypto-Pinescript-V6-Indicators",
      },
      {
        name: "StrikeZone Market Intelligence",
        summary:
          "A ChaseOS workflow pack running governed daily market intelligence: evidence acquisition, thesis drafting and publication with fetch-back proof. No trade execution.",
        status: "research",
        repositoryUrl: null,
      },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "Trading content is the least trustworthy corner of the internet, because claims are cheap and evidence is optional. StrikeZone is run as the opposite experiment: a trading-systems workspace where everything is an audited artifact — and where no live trade execution exists to overclaim about.",
      },
      {
        heading: "Indicator engineering as reviewed software",
        body: "The private research design treats indicator changes as reviewed software, with audit material intended to preserve why detection logic changed. No public repository is currently declared on this portfolio, so individual indicators and their validation state are not presented here as independently verified releases.",
      },
      {
        heading: "The automation layer",
        body: "Private project materials describe a governed research loop spanning evidence acquisition, context gathering, thesis drafting and reviewed delivery. Those implementation details remain outside the public evidence set, and nothing on this page grants execution authority or converts internal workflow notes into a public performance claim.",
      },
      {
        heading: "Where it is now",
        body: "A private research workspace with no public repository currently linked here. The portfolio publishes the research boundary, not an implementation audit: no live trade execution, performance guarantee, validated public track record or production subscription service is claimed.",
      },
    ],
    relatedVideos: [],
    caseStudy: [
      {
        heading: "Two engines, one server",
        body: "The member-facing half is a suite of proprietary TradingView indicators — market structure, scored fair-value gaps, liquidity sweeps, EMA crossovers, session killzones and an alt risk-regime index. Each one builds a JSON alert payload and fires it at bar close into its own Discord webhook, so a member subscribes to exactly the signals they trade rather than one firehose. The second half is a research runtime that reads evidence, drafts market analysis, and grades itself.",
      },
      {
        heading: "A browser the system drives itself",
        body: "Research capture runs through an isolated Chromium profile controlled over the DevTools protocol. It is scoped to StrikeZone research sources only: the accounts used for community posting are bound to separate profiles and explicitly excluded from capture, so a research automation cannot reach a public account even by mistake. The chart images in this gallery were captured through that lane rather than taken by hand.",
      },
      {
        heading: "Sources are declared, not scraped",
        body: "Every source the system may read is a registry entry with an operational status and a selector contract naming the fields a capture must produce — task identity, completion timestamp, evidence cutoff, freshness, canonical URL, body quality. A capture missing a contract field is not a weak source; it is not a source. Adding one means registering an adapter and letting it run in shadow until it earns usable status; retiring one is a config change, and past captures keep their provenance so old analysis stays auditable.",
      },
      {
        heading: "It reviews itself weekly, and the review has teeth",
        body: "Each week the runtime audits its own output — false reads, missed moves, gate failures, which sources actually changed an analysis versus which added noise — and writes a patch plan. Patches become upgrade proposals carrying before-and-after configuration hashes and a set of governance flags. If a proposal would mutate policy, methodology, credentials or member-facing behaviour, it stops and waits for a human. Failed verification after apply rolls the change back.",
      },
      {
        heading: "Failure is recorded, not hidden",
        body: "Every scheduled job stores its last status, last error and last delivery error. A bounded-retry watchdog re-attempts missing output within a cap, and a repair pass fixes publication failures inside a defined policy and escalates whatever it may not touch. A refusal is deliberately distinguished from a crash: when a gate declines to publish because the evidence is stale or incomplete, that is the system working, and reporting it as a failure would train the operator to ignore the error channel.",
      },
      {
        heading: "Absence detection, because silence is the hardest failure",
        body: "The hardest thing to notice is a job that stopped rather than one that broke — a stopped job raises nothing. A drift detector holds a committed baseline of expected jobs and alarms when one disappears, and a freshness checker alarms when an artifact stops growing even though its job still reports success. Both exist because a green status is structurally blind to work that quietly ceased.",
      },
      {
        heading: "What it deliberately cannot do",
        body: "There is no wallet, no exchange key and no order placement anywhere in the system — not disabled, absent. Analysis is evaluated on paper against public candles, and publishing to member channels sits behind an allowlist with an explicit operator approval phrase. The boundary is structural rather than a setting someone could flip.",
      },
    ],
relatedBuildLogs: [],
  },
  {
    // Promoted to a standalone project by operator decision 2026-07-30 —
    // it also remains listed inside the StrikeZone Crypto ecosystem.
    slug: "tradesync",
    name: "TradeSync",
    featured: true,
    category: categories.trading,
    status: "development",
    role: "Architect and Engineer",
    summary:
      "An AI-powered crypto trading engine for signal scoring, market-structure analysis and on-chain execution research.",
    outcome:
      "Ingests funding, open interest, CVD and price structure in real time, scores directional bias through configurable rule-weighting models, and delivers long/short alerts with confidence scores and written rationale.",
    technologies: ["Python", "Docker", "Signal scoring", "Discord/Telegram delivery", "Hyperliquid data"],
    repositoryUrl: "https://github.com/chasedndt/TradeSync",
    liveUrl: null,
    boundary:
      "Research and engineering: no live trade execution, no autonomous trading authority, no performance claims. Execution across Drift and Hyperliquid is a designed future lane, not a shipped one.",
    links: [
      { type: "github", label: "TradeSync", url: "https://github.com/chasedndt/TradeSync" },
    ],
    media: [],
    caseStudy: [
      {
        heading: "The problem",
        body: "Discretionary crypto trading runs on vibes dressed up as analysis. TradeSync is built on the opposite premise: if a directional bias can't be produced by an inspectable scoring model over defined inputs, it isn't a signal — it's a feeling.",
      },
      {
        heading: "Architecture",
        body: "A modular Python engine ingests real-time market data — funding rates, open interest, cumulative volume delta, price structure — and computes bias scores through configurable rule-weighting models. Outputs are human-readable by design: every alert carries its confidence score and a written rationale, because a signal you can't interrogate is a signal you can't trust.",
      },
      {
        heading: "The execution boundary",
        body: "The execution layer is deliberately swappable and deliberately unshipped. Drift and Hyperliquid adapters are designed as future lanes behind a common interface, and a Hyperliquid-focused variant exists for paper evaluation — but no code path today places a trade. Inside the wider ChaseOS ecosystem, that boundary is enforced by governance, not by promise.",
      },
      {
        heading: "Where it is now",
        body: "Active development within the StrikeZone Crypto ecosystem, feeding its signal-delivery infrastructure. The interesting engineering is in the scoring discipline and the refusal to blur research into execution — which is exactly what makes it worth building in public.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: ["tradesync-preview-before-execution"],
  },
  {
    slug: "hypelist",
    name: "Hypelist",
    featured: true,
    category: categories.fullstack,
    status: "development",
    role: "Full-Stack Developer",
    summary: "A full-stack inventory and marketplace product.",
    outcome:
      "React frontend with a Flask backend and Firebase/SQLite modes covering inventory, admin and marketplace workflows.",
    technologies: ["React", "Flask", "Firebase", "SQLite"],
    repositoryUrl: "https://github.com/chasedndt/Hypelist",
    liveUrl: null,
    boundary:
      "Not claiming a production commerce site, live billing, or live customer operations ahead of a repo-hygiene review.",
    links: [
      { type: "github", label: "Hypelist", url: "https://github.com/chasedndt/Hypelist" },
    ],
    media: [],
    caseStudy: [
      {
        heading: "The problem",
        body: "Resellers track inventory, sales and margins across spreadsheets that rot. Hypelist is a full-stack answer for streetwear and hype-item workflows: one place for inventory state, listing prep and the admin work around it.",
      },
      {
        heading: "Architecture",
        body: "React frontend over a Flask backend, with a deliberately swappable persistence layer: Firebase for hosted mode, SQLite for local-first mode. The dual-mode design means development and personal use never require a cloud dependency, while the hosted path stays available for multi-user scenarios.",
      },
      {
        heading: "Trade-offs",
        body: "Supporting two storage modes costs abstraction effort that a single-backend app would skip, and keeping Stripe integration at the documented-setup stage rather than live billing was a deliberate scope line: no payment path ships before the repo passes a hygiene review.",
      },
      {
        heading: "Where it is now",
        body: "Working full-stack application in development. Not described as a production commerce site, and live billing and customer operations stay off the claims list until they are real.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: ["hypelist-dual-mode-storage"],
  },
  {
    slug: "greytheory-ai",
    name: "GreyTheory AI",
    featured: true,
    category: categories.security,
    status: "research",
    role: "Security Architect",
    summary: "A proof-first, AI-assisted bug bounty architecture.",
    outcome:
      "Modular architecture pairing deterministic validation with a confidence taxonomy and mandatory human review gates.",
    technologies: ["Architecture", "Deterministic validation", "Confidence taxonomy"],
    repositoryUrl: "https://github.com/chasedndt/GreyTheory-Research",
    liveUrl: null,
    boundary:
      "Architecture and pre-implementation only. No live scanner, no autonomous exploit engine, no validated findings.",
    links: [
      {
        type: "github",
        label: "GreyTheory-Research",
        url: "https://github.com/chasedndt/GreyTheory-Research",
      },
    ],
    media: [],
    caseStudy: [
      {
        heading: "The problem",
        body: "AI-assisted security tooling has a credibility crisis: LLMs generate plausible vulnerability reports that waste triage time, and 'AI bug bounty' mostly means noise at scale. GreyTheory starts from the position that an AI-assisted finding is worthless until something deterministic has proven it.",
      },
      {
        heading: "The architecture",
        body: "A modular bug-bounty operating system in the ChaseOS mould: LLM reasoning proposes, deterministic validation confirms, a confidence taxonomy grades every finding, and a mandatory human review gate sits before anything leaves the system. The evidence threshold is designed in from the start rather than bolted on after the first embarrassing false positive.",
      },
      {
        heading: "Why architecture-first",
        body: "Security work punishes overclaiming harder than any other domain. Publishing the architecture before the implementation is a deliberate ordering: the validation and review design is the hard part, and it deserves scrutiny before a single scanner runs.",
      },
      {
        heading: "Where it is now",
        body: "Architecture phase, pre-implementation, with the design public. No live scanner, no autonomous exploit engine, no validated findings claimed — and none will be claimed until the deterministic layer can prove them.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: ["greytheory-proof-before-finding"],
  },
  {
    slug: "toolshape-studio",
    name: "Toolshape Studio",
    featured: true,
    category: categories.creative,
    status: "live",
    role: "Architect and Engineer",
    summary:
      "An agent-native content studio for screen capture, video editing and visual design, where an AI agent operates the same typed operation surface a person does.",
    outcome:
      "A running editor and an authenticated MCP server sharing one kernel, so an agent edits a project while a person watches the same interface update — one revision sequence, every change attributed, and any single change reversible without rewinding the rest.",
    technologies: ["TypeScript", "React", "MCP", "SQLite", "FFmpeg", "JSON Schema", "Local-first architecture"],
    repositoryUrl: "https://github.com/chasedndt/toolshape-studio",
    liveUrl: null,
    boundary:
      "The source is public and the build runs locally. Screenshots below are generated by driving the running application, not mocked. Not claimed: the screen-capture pillar, the desktop shell, network egress, and at-rest encryption — all specified and none built, and the repository threat model lists them as explicit non-claims.",
    links: [
      {
        type: "github",
        label: "toolshape-studio",
        url: "https://github.com/chasedndt/toolshape-studio",
      },
    ],
    media: [
      {
        type: "video",
        src: "/images/projects/toolshape-studio/demo-agent-live.mp4",
        poster: "/images/projects/toolshape-studio/demo-agent-live-poster.webp",
        alt: "An AI agent editing a Toolshape Studio project over MCP while the editor updates live",
        caption:
          "An agent rewrites the headline twice over MCP while the editor is open. The canvas and the history update live, and every change is attributed — agent or you — in one revision sequence. Recorded by driving the running application.",
      },
      {
        src: "/images/projects/toolshape-studio/workspace-home.webp",
        alt: "Toolshape Studio home dashboard showing project stats and the live agent capability surface",
        caption:
          "Home. The capability list is rendered from the same definitions the MCP server advertises, so it cannot drift from what an agent can actually call.",
      },
      {
        src: "/images/projects/toolshape-studio/workspace-edit.webp",
        alt: "Multi-track timeline editor with media panel, canvas preview and inspector",
        caption:
          "Edit. A trim drag emits exactly one typed operation at pointer-up — the identical operation an agent submits.",
      },
      {
        src: "/images/projects/toolshape-studio/detail-activity.webp",
        alt: "Activity panel listing three operations, one blocked from reverting with the reason shown",
        caption:
          "Selective revert. Any single change can be reversed without rewinding what came after. The middle entry is refused because a later edit touched the same object.",
      },
      {
        src: "/images/projects/toolshape-studio/workspace-capture.webp",
        alt: "Capture workspace with source selection and a consent-gated recording plan",
        caption:
          "Capture, specified and not yet built. Zoom, cursor styling and backdrop are project data rather than baked pixels.",
      },
      {
        src: "/images/projects/toolshape-studio/detail-timeline-selected.webp",
        alt: "Timeline with a clip selected showing frame-snapped trim handles",
        caption: "Frame-snapped trim handles on a selected clip.",
      },
      {
        src: "/images/projects/toolshape-studio/workspace-review.webp",
        alt: "Review workspace showing diffs, quality gates and activity history",
        caption: "Review opens on Activity: what changed, and who changed it.",
      },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "Design and video tools weren't built for a world where an agent is a second pair of hands. Toolshape Studio is being designed from the start around a semantic control plane: natural language can propose work, but only typed operations may change application state.",
      },
      {
        heading: "Architecture",
        body: "One unified scene/timeline project model sits behind one application-service boundary shared by the human interface, MCP, SDK and CLI adapters. Every mutation carries an expected revision and an idempotency key, so a stale write is refused rather than silently overwriting a concurrent edit, and a retried request cannot apply twice. Long work becomes a durable job that survives restart, and a completed render means the output file was probed — not that a model reported success.",
      },
      {
        heading: "Trade-offs",
        body: "Typed operations, previews and revision checks make the implementation slower than direct UI or database mutation. That cost is deliberate: it creates one inspectable boundary for human edits and agent edits instead of maintaining a fragile automation layer beside the application.",
      },
      {
        heading: "Where it is now",
body: "The source is public and running. Shipped: the unified project model, typed operations with revision checks and idempotency, a a multi-track timeline with frame-snapped direct editing, assembly (move, reorder, delete, duplicate, merge) and exact rational speed, media ingestion that quarantines and probes untrusted bytes before they reach the trusted store, durable render jobs with progress and cancellation, an authenticated MCP server exposing ten capabilities over stdio and HTTP, and a visible activity history where any single past operation can be reversed without rewinding the ones after it. Verified by 130 tests, an eleven-check end-to-end smoke over real HTTP, and browser QA. Screen capture, the desktop shell and the design pillar are specified and not built.",
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: ["toolshape-studio-semantic-kernel-before-ui"],
  },
  {
    slug: "toolshape-voice",
    name: "Toolshape Voice",
    featured: false,
    category: categories.creative,
    status: "live",
    role: "Architect and Engineer",
    summary:
      "A local-first Windows dictation app that types what you say into any application, with speech recognition running entirely on your own machine.",
    outcome:
      "Hold a hotkey anywhere in Windows and speak: a local Whisper model transcribes on-device and the text is typed into whatever you were focused on. Sub-second for typical dictation lengths, measured under full CPU load. No account, no subscription, no audio leaves the device.",
    technologies: ["TypeScript", "C#", "Electron", "SQLite", "whisper.cpp", "Windows UI Automation", "WASAPI"],
    repositoryUrl: "https://github.com/chasedndt/toolshape-voice",
    liveUrl: null,
    boundary:
      "The source is public and the build runs locally. Latency figures are reproducible with the benchmark script in the repository, and the screenshots below are generated by driving the running application rather than mocked. Not claimed: a code-signed production installer, GPU-accelerated recognition, and translation between two non-English languages — the local model translates into English only. Recognition accuracy is bounded by that local model, which is a deliberate trade against sending audio to a server.",
    links: [
      {
        type: "github",
        label: "toolshape-voice",
        url: "https://github.com/chasedndt/toolshape-voice",
      },
    ],
    media: [
      {
        src: "/images/projects/toolshape-voice/dictation-dark.webp",
        alt: "Toolshape Voice dictation history grouped by day, with per-application word counts",
        caption:
          "The home view. Every dictation is written to local history before insertion is attempted, which is why one is never lost when the target application cannot accept it.",
      },
      {
        src: "/images/projects/toolshape-voice/voicebar-listening.webp",
        alt: "The Voice Bar while listening, showing a live waveform with cancel and accept controls",
        caption:
          "The Voice Bar while the hotkey is held. The waveform is the real microphone level, so it is visible whether the machine is actually hearing anything.",
      },
      {
        src: "/images/projects/toolshape-voice/insights-dark.webp",
        alt: "Insights showing total words, speed, activity streak and a per-application breakdown",
        caption:
          "Usage analytics are content-free by construction: counts and categories only, never transcript text. An automated test fails the build if a dictated canary string reaches the analytics table.",
      },
      {
        src: "/images/projects/toolshape-voice/languages-dark.webp",
        alt: "Language picker listing thirty languages, each shown in its own script",
        caption:
          "Thirty languages, each shown in its own script. The list is what the local model handles well rather than everything it claims, because a language it transcribes badly is worse than one not offered at all.",
      },
      {
        src: "/images/projects/toolshape-voice/settings-dark.webp",
        alt: "General settings showing the activation shortcut, microphone, dictation language, clipboard copy and theme",
        caption:
          "The settings that decide how a dictation behaves, in one pane: the hold shortcut, which microphone, which language, and whether every transcript is also copied to the clipboard.",
      },
      {
        src: "/images/projects/toolshape-voice/style-dark.webp",
        alt: "Voice styles offering built-in profiles that preview their changes before applying",
        caption:
          "Voice styles match tone to the application being dictated into. Built-in profiles preview their exact changes; custom instructions fail closed until a provider exists rather than silently doing nothing.",
      },
      {
        src: "/images/projects/toolshape-voice/transforms-dark.webp",
        alt: "Transform recipes bound to hotkeys, each showing its plan and protected spans before applying",
        caption:
          "Transforms rewrite a dictation after the fact. Each previews its plan, its protected placeholders and the revision it expects, so a rewrite is inspected before it is trusted.",
      },
      {
        src: "/images/projects/toolshape-voice/dictation-light.webp",
        alt: "The same dictation history in light mode",
        caption:
          "Light and dark follow the Windows theme.",
      },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "Dictation tools either ship audio to someone else's cloud or trust every text field equally. Toolshape Voice is a local-first Windows dictation and writing-intelligence app built on the opposite assumptions: audio is process-lifetime-only, and no target application is written to until it has been verified safe to write to.",
      },
      {
        heading: "Architecture",
        body: "Two local processes. An Electron hub holds the SQLite-backed application service, the transcript pipeline and the interface; a native C# companion owns what the Electron sandbox cannot reach — the system-wide keyboard hook, raw WASAPI audio capture, and UI Automation text insertion into other applications. They speak only over authenticated loopback. Recognition runs against a quantised Whisper model kept resident in memory, because loading it per dictation is the difference between usable and not.",
      },
      {
        heading: "The hard part nobody plans for",
        body: "Latency was erratic rather than merely slow, and the cause was not the model. On a four-core laptop the same request measured 3.7 seconds idle and 28 seconds while other applications saturated the CPU. Quantisation and sizing the audio context to the actual speech helped, but the decisive change was scheduling: recognition is interactive work the operator is waiting on, and had to be prioritised as such. Getting there meant building an automated benchmark first, because single manual timings were hiding an eight-fold variance.",
      },
      {
        heading: "Where it is now",
        body: "In daily use, with the source public. Dictation reaches any focused Windows control rather than an application allow-list, and reports honestly when it cannot verify the text landed instead of claiming proof it does not have. Still open: a code-signed installer, GPU-accelerated recognition, and a saved-reference library."
      },
    ],
    relatedVideos: [],
    relatedBuildLogs: [],
  },
];

export const frontierProject = projects.find((p) => p.frontier);
export const featuredProjects = projects.filter((p) => p.featured && !p.frontier);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
