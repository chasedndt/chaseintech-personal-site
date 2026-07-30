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
// TODO(operator): supply per-project accounts where they exist. Known gap:
// ChaseOS, StrikeZone Crypto and TradeSync were each described as having their
// own socials, but no URLs have been provided.

export const projects = [
  {
    slug: "chaseos",
    name: "ChaseOS",
    frontier: true,
    featured: true,
    category: categories.agentic,
    status: "development",
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
        body: "The framework is split hard: ChaseOS Core is an MIT-licensed public scaffold — folder structure, governance docs, templates, runtime standards, a lean CLI — while identity, credentials, live memory and project state live in a separate private instance. The publication standard requires Core materials to be reusable without exposing private paths, names or deployment state, and a repo-safe secret audit module scans tracked and untracked text before anything ships.",
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
    relatedBuildLogs: ["chaseos-control-plane-boundaries"],
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
    media: [],
    relatedVideos: [],
    relatedBuildLogs: [],
  },
  {
    slug: "strikezone-crypto",
    name: "StrikeZone Crypto",
    featured: true,
    category: categories.trading,
    status: "research",
    role: "Systems Designer and Researcher",
    summary:
      "A structured trading-systems R&D workspace and signal-delivery infrastructure.",
    outcome:
      "Reproducible experiment discipline across indicator development, market-intelligence workflows and Discord signal delivery.",
    technologies: ["Pine Script", "Python", "Discord infrastructure", "ChaseOS workflow pack"],
    repositoryUrl: null,
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
        url: "https://discord.com/invite/BjEMPs5xY9",
      },
    ],
    media: [],
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
    relatedVideos: [],
    relatedBuildLogs: ["strikezone-market-intelligence-pack"],
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
    relatedVideos: [],
    relatedBuildLogs: [],
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
    relatedVideos: [],
    relatedBuildLogs: [],
  },
  {
    slug: "toolshape-studio",
    name: "Toolshape Studio",
    featured: false,
    category: categories.creative,
    status: "development",
    role: "Architect and Engineer",
    summary:
      "A visual-design and video-editing application with a semantic agent control plane.",
    outcome:
      "Unified scene/timeline project with typed edit operations, revision enforcement, undo/redo, SQLite restart recovery and verified render output.",
    technologies: ["TypeScript", "React", "SQLite", "Media pipelines"],
    repositoryUrl: "https://github.com/chasedndt/toolshape-studio",
    liveUrl: null,
    boundary:
      "Milestones 1–5 verified locally. Native shell, signed packaging and broad feature parity remain deferred.",
    links: [
      {
        type: "github",
        label: "toolshape-studio",
        url: "https://github.com/chasedndt/toolshape-studio",
      },
    ],
    media: [],
    relatedVideos: [],
    relatedBuildLogs: [],
  },
  {
    slug: "toolshape-voice",
    name: "Toolshape Voice",
    featured: false,
    category: categories.creative,
    status: "development",
    role: "Architect and Engineer",
    summary:
      "A local-first Windows dictation and writing-intelligence application.",
    outcome:
      "System-wide dictation with Dictionary, Snippets, Voice Styles and Transforms, an agent-first Voice Hub and a packaged desktop build.",
    technologies: ["TypeScript", "Electron", "SQLite", "Windows speech APIs"],
    repositoryUrl: "https://github.com/chasedndt/toolshape-voice",
    liveUrl: null,
    boundary:
      "Not claiming production signed packaging, cloud distribution, or a benchmark-selected transcription provider.",
    links: [
      {
        type: "github",
        label: "toolshape-voice",
        url: "https://github.com/chasedndt/toolshape-voice",
      },
    ],
    media: [],
    relatedVideos: [],
    relatedBuildLogs: [],
  },
];

export const frontierProject = projects.find((p) => p.frontier);
export const featuredProjects = projects.filter((p) => p.featured && !p.frontier);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
