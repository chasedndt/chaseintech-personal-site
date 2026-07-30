// Structured project content (§32.1).
// Status vocabulary is fixed (§23.2) and must stay truthful — a prototype is
// never described as a production product.

export const statusLabels = {
  live: "Live",
  development: "In Development",
  oss: "Open Source",
  research: "Research",
  prototype: "Prototype",
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
    links: [
      { type: "site", label: "chaseos.ai", url: "https://chaseos.ai" },
      {
        type: "github",
        label: "ChaseOS-Core",
        url: "https://github.com/chasedndt/ChaseOS-Core",
      },
      // TODO(operator): ChaseOS X / Discord / YouTube accounts
    ],
    media: [],
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
    links: [
      // NOTE(operator): @ChaserCrypto_ is currently wired as the PERSONAL X
      // account in src/data/site.js, taken from the GitHub profile. If that
      // handle actually belongs to StrikeZone Crypto rather than to
      // ChaseInTech, move it here and supply the personal handle separately.
      // TODO(operator): StrikeZone Discord / X / Whop URLs
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
