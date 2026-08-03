// Structured build-log content (§32.3).
//
// Publication gate (§25.5): entries are written from source material that is
// ALREADY PUBLIC (public repositories). Anything sourced from a local-only or
// unpublished repository stays `status: "draft"` and is never rendered until
// the operator reviews it. No secrets, tokens, absolute machine paths,
// private URLs or internal identifiers appear in any entry below.

export const buildLogs = [
  {
    slug: "chaser-agent-source-card-harness",
    title: "Chaser Agent: designing a harness that refuses to be trusted",
    publishedAt: "2026-07-29",
    updatedAt: null,
    status: "published",
    source: "Public repository: chasedndt/Chaser-Agent",
    relatedProject: "chaser-agent",
    relatedVideos: [],
    tags: ["architecture", "agent-design", "evidence"],
    summary:
      "Why the first version of Chaser Agent deliberately has no authority, and what a review-first output artifact has to separate to be worth reading.",
    sections: [
      {
        heading: "Context",
        body: "Chaser Agent started as an extraction from ChaseOS: take the part that reads sources and reasons about them, and make it stand alone. The temptation with an agent that reads sources is to let it act on what it finds. V0 goes the other way.",
      },
      {
        heading: "Problem",
        body: "An agent that reads a source and returns a confident paragraph destroys the one thing a reviewer needs: the seam between what the source said, what the agent inferred, and what the agent is unsure about. Once those are blended into prose, verification costs as much as doing the work yourself.",
      },
      {
        heading: "Requirements",
        body: "The output had to keep source claims, evidence snippets, uncertainty, action candidates and memory candidates as separate, individually reviewable fields. A reviewer should be able to reject an inference without discarding the evidence underneath it.",
      },
      {
        heading: "Constraints",
        body: "No provider routing, no browser control and no runtime authority by default. The harness produces artifacts; it does not take actions. Memory is proposed, never promoted automatically.",
      },
      {
        heading: "Trade-offs",
        body: "Structured output is more verbose and less immediately readable than a summary. That cost is accepted deliberately: the artifact is optimised for a human deciding whether to trust it, not for a human skimming it.",
      },
      {
        heading: "Current status",
        body: "Source Card Harness V0 is complete and produces deterministic local review artifacts. It is not a production autonomous agent and is not described as one.",
      },
      {
        heading: "Next milestone",
        body: "Evaluation harness: a way to measure whether the separation actually improves reviewer decisions, rather than assuming it does.",
      },
    ],
  },
  {
    slug: "chaseos-control-plane-boundaries",
    title: "ChaseOS: treating agent governance as the product, not the paperwork",
    publishedAt: "2026-07-29",
    updatedAt: null,
    status: "published",
    source: "Public repository: chasedndt/ChaseOS-Core",
    relatedProject: "chaseos",
    relatedVideos: [],
    tags: ["architecture", "governance", "control-plane"],
    summary:
      "The approval boundary is the most-used surface in ChaseOS. Notes on why the governance layer earned first-class status instead of being bolted on.",
    sections: [
      {
        heading: "Context",
        body: "ChaseOS runs multiple agents across multiple real projects. Every one of those projects has actions that are cheap to undo and actions that are not.",
      },
      {
        heading: "Problem",
        body: "Autonomy is easy to add and very hard to retract. An agent that can deploy, post publicly, spend money or mutate canonical state is useful right up until the first time it is wrong, at which point the cost is unbounded.",
      },
      {
        heading: "Architecture",
        body: "Each project gets its own control-plane lane. Agents draft, implement and test freely inside the lane; a fixed set of actions — production deploys, DNS changes, credential use, public posting, customer commitments — sits behind an explicit human approval gate that the agent cannot self-authorise.",
      },
      {
        heading: "Trade-offs",
        body: "This is slower than full autonomy and occasionally frustrating. It also means the failure mode of a confused agent is a rejected proposal rather than a live incident.",
      },
      {
        heading: "Lessons",
        body: "Publishing the boundary is part of the credibility story rather than a footnote. A system that states what it will not do without asking is easier to trust than one that claims it never makes mistakes.",
      },
      {
        heading: "Current status",
        body: "Active framework in developer preview. Not a production SaaS deployment and not a managed public agent service.",
      },
    ],
  },
  {
    slug: "chaseos-cloud-metering-architecture",
    title: "ChaseOS Cloud: designing the meter before the product",
    publishedAt: "2026-07-30",
    updatedAt: null,
    status: "published",
    source:
      "ChaseOS Cloud architecture and gateway specifications (internal design docs, screened for publication)",
    relatedProject: "chaseos",
    relatedVideos: [],
    tags: ["architecture", "cloud", "billing", "governance"],
    summary:
      "Cloud is planned, not live — but its billing architecture is already specified. Notes on the single-chokepoint meter, the reserve-execute-settle state machine, and why the local path is free by construction.",
    sections: [
      {
        heading: "Context",
        body: "ChaseOS Cloud is the planned managed layer over the local-first core: managed providers, sync, compute, hosted runtimes and deploy. None of it is live, and the public site says so. What does exist is the architecture — because the question 'credits exist, but what actually spends them?' describes a bug if you can't answer it, and a design once you can.",
      },
      {
        heading: "The chokepoint decision",
        body: "Credits are consumed in exactly one place: the Cloud provider gateway. Not in the chat panel, not in the graph builder, not in the workflow engine. Features ask for work; the gateway prices it. Spend caps are enforced once, correctly, instead of N times inconsistently — and a new feature is metered from day one without writing any billing code.",
      },
      {
        heading: "Local is free by construction",
        body: "The most important property falls out of the same decision: the local path never touches the gateway, so it has no meter on it. 'Local-first stays free' isn't a pricing policy someone has to remember to honour — it is structurally true. The same feature that meters when ChaseOS supplies the compute costs nothing on your own machine or your own keys, on every plan, permanently.",
      },
      {
        heading: "Reserve, execute, settle",
        body: "You can't know a request's token count before making it. Consuming credits afterwards lets a user overrun into negative balance; consuming before overcharges. So the gateway reserves an estimated amount, executes, settles the actual, and releases the remainder. A reservation leaves its reserved state exactly once — enforced by an idempotency key, a database uniqueness constraint, and a per-account settlement lock, all three required. Insufficient balance is a hard stop with the shortfall reported, never a silent slide into debt.",
      },
      {
        heading: "The boundary that matters most",
        body: "The gateway supplies inference only. Tools always execute locally in the harness, under the same ChaseOS governance and approval gates as everything else. Hosted compute never becomes a side door around the control plane — and per the commercial architecture, founder hardware never runs customer production.",
      },
      {
        heading: "Current status",
        body: "Specification, not deployment: the credits ledger exists in code; the gateway state machine is specified but unbuilt. Cloud remains planned and early-access, and nothing here should be read as a launch. Designing the meter before the product is the point — billing retrofitted onto a working system is where trust goes to die.",
      },
    ],
  },
  {
    slug: "toolshape-voice-code-integrity-launcher",
    title: "Toolshape Voice: shipping a launcher the OS is trying to block",
    publishedAt: null,
    updatedAt: "2026-08-04",
    // DRAFT — the linked public repository is currently empty. Keep this
    // unpublished until fresh public-safe implementation evidence is available.
    status: "draft",
    source:
      "Previously attributed to chasedndt/toolshape-voice; repository currently empty — operator evidence review required",
    relatedProject: "toolshape-voice",
    relatedVideos: [],
    tags: ["windows", "packaging", "security"],
    summary:
      "The workstation's application-control policy blocks newly compiled unsigned executables. Notes on shipping a desktop entry point that works with the policy instead of around it.",
    sections: [
      {
        heading: "Context",
        body: "Toolshape Voice needed a double-clickable operator entry point on a Windows machine running an enforced application-control policy. The original design generated a small wrapper executable at build time.",
      },
      {
        heading: "Problem",
        body: "The policy blocks newly compiled unsigned executables — correctly, since that is exactly what malware looks like. Every fresh build produced a wrapper the OS refused to run. The naive fixes (disable the policy, sign ad hoc, whitelist a build directory) all weaken the machine to make the tool convenient.",
      },
      {
        heading: "Decision",
        body: "Stop generating wrappers entirely. The packaged application itself becomes the launch target, with Desktop and repo-root shortcuts regenerated by the packaging step, and a dedicated launcher test that verifies the exact shortcut target, an isolated authenticated launch, and a real Explorer launch with zero matching Code Integrity blocks.",
      },
      {
        heading: "Lessons",
        body: "Security policy is an environment constraint, not an obstacle. Designs that fight the policy create support burden forever; designs that treat 'launches cleanly under enforcement, with proof' as an acceptance test get more trustworthy over time, not less.",
      },
      {
        heading: "Current status",
        body: "Packaged build and shortcuts in daily use. Production signing remains deferred and is listed as such in the repository.",
      },
    ],
  },
  {
    slug: "hypelist-dual-mode-storage",
    title: "Hypelist: one app, two storage modes, no cloud requirement",
    publishedAt: "2026-07-30",
    updatedAt: null,
    status: "published",
    source: "Public repository: chasedndt/Hypelist",
    relatedProject: "hypelist",
    relatedVideos: [],
    tags: ["architecture", "full-stack", "local-first"],
    summary:
      "Why an inventory app for resellers supports both Firebase and SQLite behind the same Flask backend, and what the dual-mode abstraction costs.",
    sections: [
      {
        heading: "Context",
        body: "Hypelist tracks streetwear inventory, listing prep and sales for resellers — data a solo operator may reasonably refuse to put in someone else's cloud, and that a multi-user deployment can't keep on one laptop.",
      },
      {
        heading: "Decision",
        body: "Rather than choosing, the Flask backend runs against a swappable persistence layer: SQLite for local-first single-operator use, Firebase for hosted multi-user mode. The React frontend does not know which one it is talking to.",
      },
      {
        heading: "Trade-offs",
        body: "Every schema change now has two migration stories, and the abstraction layer forbids leaning on either store's special features. That is real, permanent overhead — accepted because the local-first mode is a product promise, not a development convenience.",
      },
      {
        heading: "Current status",
        body: "Working in development. Stripe integration exists as documented setup rather than live billing, and stays that way until the repo passes a hygiene review.",
      },
    ],
  },
  {
    slug: "tradesync-preview-before-execution",
    title: "TradeSync: making the preview more important than the execute button",
    publishedAt: "2026-08-03",
    updatedAt: null,
    status: "published",
    source:
      "Public repository: chasedndt/TradeSync (README, preview/risk contracts and dated change records)",
    relatedProject: "tradesync",
    relatedVideos: [],
    tags: ["architecture", "trading-systems", "risk", "dry-run"],
    summary:
      "How TradeSync separates scoring, risk review and execution authority—and why its public cockpit had to distinguish demo data from paper operation before live trading could even be discussed.",
    sections: [
      {
        heading: "Context",
        body: "TradeSync turns funding, open interest, cumulative volume delta, price structure and technical indicators into inspectable directional scores. The difficult part is not producing a long or short label. It is preserving enough evidence and state around that label for a person to understand what the system believes, what could invalidate it and whether an execution path is allowed to proceed.",
      },
      {
        heading: "One scoring and risk pipeline",
        body: "The public Phase 3D record documents a shared tradesync_core library for scoring, risk and symbol normalisation. Services import that canonical logic, while an offline replay runner sends historical JSONL events through the same calculate-score, enhanced-score and RiskGuardian sequence. That avoids the dangerous version of a backtest: one that quietly evaluates different rules from the live-facing services.",
      },
      {
        heading: "Preview before authority",
        body: "The execution contract gives preview its own first-class endpoint. A preview returns a proposed plan, an allow-or-block risk verdict, machine-readable block codes and execution-risk evidence such as spread, estimated impact and market depth. The point is to make the decision inspectable before any executor is considered—not to use a confirmation dialog as decoration around an opaque order request.",
      },
      {
        heading: "A truthful cockpit is part of the safety system",
        body: "A March 2026 public audit removed hard-coded flow metrics and fake event lines, replaced a static dry-run badge with backend-derived state, separated DEMO from PAPER and LIVE, and disabled Copilot and source-upload surfaces that did not exist yet. Those fixes matter because a trading dashboard that cannot distinguish mock positions from connected paper operation is not merely unfinished; it gives the operator the wrong mental model.",
      },
      {
        heading: "Current boundary",
        body: "TradeSync remains an engineering and research system. Its public README describes the cockpit as mock/dry-run, states that no real venue keys are configured, and marks wallet authority and later AI surfaces as future work. The repository contains execution-shaped contracts and services, but this site does not convert those shapes into a claim of live trade execution, autonomous authority or financial performance.",
      },
      {
        heading: "Next proof",
        body: "The next credible milestone is not a louder autonomy claim. It is a reproducible paper evaluation where the same versioned scoring and risk rules produce a reviewable preview, a blocked-or-allowed result and an outcome record—without silently crossing into live execution.",
      },
    ],
  },
  {
    slug: "chaseos-web-early-access-boundaries",
    title: "ChaseOS Web: making Early Access a technical boundary",
    publishedAt: "2026-08-04",
    updatedAt: null,
    status: "published",
    source:
      "ChaseOS Web repository README, route/configuration surfaces and public chaseos.ai deployment (privacy-screened)",
    relatedProject: "chaseos-web",
    relatedVideos: [],
    tags: ["web", "cloudflare", "product-boundaries", "early-access"],
    summary:
      "How the ChaseOS front door exposes a real waitlist and product story while keeping downloads, checkout, admin export and managed-agent claims behind explicit gates.",
    sections: [
      {
        heading: "Context",
        body: "A governance-first product is unusually easy to misrepresent on a marketing site. The interesting features are often the boundaries: which surfaces are genuinely live, which are previews, and which actions the public deployment must refuse. ChaseOS Web treats those distinctions as implementation state rather than footer disclaimers.",
      },
      {
        heading: "Static story, narrow dynamic edge",
        body: "The public shell is a Vite/React application deployed through Cloudflare Pages. Dynamic behaviour is deliberately narrow: Pages Functions handle the edges that need server authority, while the waitlist uses Turnstile verification and D1 storage. Ordinary local builds and smoke tests do not need Cloudflare, credentials, DNS or production data.",
      },
      {
        heading: "Disabled means disabled",
        body: "The public admin route is a stub, not a hidden control panel. Export requires an explicit enable flag, the correct storage mode, authorization and an approved database binding. Downloads, marketplace payments and managed agents remain blocked. The page copy and the backend gates describe the same state, which prevents a marketing promise from quietly getting ahead of the system.",
      },
      {
        heading: "Route boundaries are product boundaries",
        body: "Studio, Forge, standards, pricing, docs, security, roadmap and support each have a public route, but the existence of a route is not treated as proof that every underlying service ships. The website can explain a product surface, collect interest or expose reviewed metadata without implying an installer, transaction path or managed runtime exists.",
      },
      {
        heading: "Current boundary",
        body: "ChaseOS Web is live on chaseos.ai as an Early Access website with a verified waitlist path. It is not a public installer, live marketplace checkout or managed-agent service. The next proof for each gated surface must come from its own implementation and acceptance evidence before the website promotes it from preview to live.",
      },
    ],
  },
  {
    slug: "greytheory-proof-before-finding",
    title: "GreyTheory AI: a signal is not a vulnerability",
    publishedAt: "2026-08-04",
    updatedAt: null,
    status: "published",
    source:
      "Public repository: chasedndt/GreyTheory-Research (README, scope policy, product boundary map and safe local proof plan)",
    relatedProject: "greytheory-ai",
    relatedVideos: [],
    tags: ["security", "architecture", "governance", "agent-safety"],
    summary:
      "How GreyTheory separates raw signals, deterministic validation, model-assisted reasoning and human authority—before anything can become a reportable finding.",
    sections: [
      {
        heading: "Context",
        body: "AI-assisted security tools can generate convincing explanations long before they have evidence. GreyTheory starts by refusing that shortcut. Its public architecture treats a version match, exposed path or unusual response as a signal to investigate—not a vulnerability, impact claim or report.",
      },
      {
        heading: "A finding has to earn its name",
        body: "The shared taxonomy moves evidence through Informational, Contextual, Candidate, Validated and Report-Ready states. A candidate cannot advance because a model sounds confident: it needs a deterministic check, reproducible evidence and a human decision. Severity and remediation remain provisional until the underlying condition has actually been validated.",
      },
      {
        heading: "The model reasons; hard tools prove",
        body: "The intended labour split is explicit. Deterministic components own scope checks, requests, parsing, binary pass/fail decisions and audit records. The model interprets evidence, explains confidence factors and drafts human-readable rationale. That boundary keeps probabilistic reasoning useful without letting it silently become execution authority or proof.",
      },
      {
        heading: "Authority is a hard input",
        body: "GreyTheory's active scope policy defaults to local repo, documentation and toy-demo work. External scanning, live target interaction, credential validation, disclosure and public claims about real findings remain blocked unless a separate approval packet names the owner, written authorization, exact assets, allowed actions, limits, data handling and required audit artifact. Missing authority means hold, not improvise.",
      },
      {
        heading: "Build public proof without touching a target",
        body: "The safe proof plan uses intentionally local fixtures: mocked high-authority actions, prompt-injection samples and fictional finding records. Each demo must avoid external targets, real credentials and third-party data while producing a reproducible command or screenshot, an explicit local-only banner and a public-safe summary. That creates something inspectable before expanding the system's authority.",
      },
      {
        heading: "Current boundary",
        body: "GreyTheory remains an incubation and architecture lane. The public repository contains policies, schemas, product boundaries and proof plans; it does not establish a live scanner, autonomous exploit engine, real-world finding or security outcome. The next credible milestone is a reproducible local defensive demo that proves the scope and evidence gates behave as designed.",
      },
    ],
  },
  {
    slug: "toolshape-studio-semantic-kernel-before-ui",
    title: "Toolshape Studio: designing the operation before the interface",
    publishedAt: "2026-08-03",
    updatedAt: null,
    status: "published",
    source:
      "Public repository: chasedndt/toolshape-studio (architecture constitution, reference architecture, Studio PRD and validation report)",
    relatedProject: "toolshape-studio",
    relatedVideos: [],
    tags: ["architecture", "agent-native", "creative-tools", "local-first"],
    summary:
      "Why Toolshape Studio starts with a semantic kernel, typed operations and state-based verification instead of teaching an agent to click around a creative editor.",
    sections: [
      {
        heading: "Context",
        body: "Creative software is usually built screen-first: the application knows what a layer, timeline and export are, but automation sees buttons and coordinates. Toolshape Studio's public architecture pack begins from the opposite direction. A professional human editor still matters, but the durable product is the semantic system beneath it.",
      },
      {
        heading: "Natural language proposes; typed operations mutate",
        body: "An agent may interpret a brief and assemble a plan, but model output cannot grant itself authority or write directly into domain state. Each meaningful change is expressed as a typed, revision-aware operation with declared inputs, risk, retention, authorization and provenance. That makes preview, exact approval, retries and recovery properties of the application boundary rather than conventions hidden in prompts.",
      },
      {
        heading: "One kernel, several control surfaces",
        body: "The design routes the operator UI, MCP, SDK, HTTP/IPC and CLI through the same application services and result schemas. Generate captions should mean the same state transition whether a human presses a button or a harness invokes a capability. Adapter-parity tests are therefore supposed to compare resulting state and envelopes, not merely successful HTTP responses.",
      },
      {
        heading: "Operations are not memory",
        body: "The operation envelope records who requested a state transition and what happened. Learned style belongs somewhere else: versioned profiles, approved examples, correction events and retrieval indexes with explicit retention. Keeping those stores separate prevents an audit trail from becoming an opaque memory dump and makes a preference change inspectable, attributable and reversible.",
      },
      {
        heading: "Local-first is an architectural boundary",
        body: "The reference design starts as a modular monolith with local application services, SQLite, content-addressed assets and local render/model workers. Hosted services may add sync, collaboration or paid compute, but they must not become hidden dependencies of features declared offline. Process boundaries are earned by isolation, scaling, security or lifecycle requirements—not by turning every toolbar section into a microservice.",
      },
      {
        heading: "Current boundary",
        body: "This is a design and handover milestone, not a product launch. The public validation report passes document structure, JSON/schema examples, links, diagrams and common secret-pattern checks across 137 files. It explicitly does not certify product implementation, Windows compatibility, model quality, privacy compliance or legal clearance. The next honest proof is a narrow golden workflow implemented through the shared kernel and verified from resulting state.",
      },
    ],
  },
  {
    slug: "strikezone-market-intelligence-pack",
    title: "Packaging a market-intelligence workflow so it runs on someone else's machine",
    publishedAt: null,
    updatedAt: null,
    // DRAFT — sourced from a local-only, unpublished repository. Not rendered
    // publicly until the operator reviews it for disclosure (§25.5).
    status: "draft",
    source: "Local-only repository — operator review required before publication",
    relatedProject: "strikezone-crypto",
    relatedVideos: [],
    tags: ["packaging", "workflow", "portability"],
    summary:
      "Notes on turning a working local workflow into an installable pack, and the six independent reasons the first attempt could not have worked anywhere else.",
    sections: [],
  },
];

export const publishedBuildLogs = buildLogs.filter(
  (entry) => entry.status === "published",
);

export function getBuildLog(slug) {
  return publishedBuildLogs.find((entry) => entry.slug === slug);
}

export function buildLogsForProject(projectSlug) {
  return publishedBuildLogs.filter((e) => e.relatedProject === projectSlug);
}
