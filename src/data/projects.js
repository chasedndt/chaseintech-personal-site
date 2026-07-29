// Status vocabulary: "live" | "local" | "architecture" | "rd" | "archive"
// live        = deployed/public-facing and verified
// local       = works locally with proof, not deployed
// architecture = designed, not yet implemented
// rd          = experiments/evidence, not a production product
// archive     = older project retained for progression/context

export const statusLabels = {
  live: "Live public",
  local: "Local working",
  architecture: "Architecture",
  rd: "R&D",
  archive: "Archive",
};

export const projects = [
  {
    id: "chaseos",
    name: "ChaseOS",
    lane: "Operating system / control plane",
    status: "local",
    tagline: "Flagship local-first AI operating system for builders.",
    description:
      "Local-first AI operating system for builders running real projects with governed agents, memory, approvals, and workflow infrastructure.",
    repoUrl: "https://github.com/chasedndt/ChaseOS-Core",
    boundary:
      "Not claiming: production SaaS deployment, unbounded agent execution, or a managed public agent service.",
    detail: {
      label: "Control-plane infrastructure",
      body:
        "ChaseOS agent harnesses run their day-to-day review and approval loop over Discord-based control-plane lanes — one lane per active project, used for status receipts and human review gates rather than public chat.",
    },
  },
  {
    id: "chaseos-web",
    name: "ChaseOS Web",
    lane: "Operating system / public site",
    status: "local",
    tagline: "Public product website and front door for chaseos.ai.",
    description:
      "Cloudflare-ready public website with a Vite/React shell, implemented public routes, a D1-backed waitlist path, and Early Access boundaries.",
    repoUrl: null,
    boundary:
      "Not claiming: a public installer, live marketplace transactions, or a managed-agent service.",
  },
  {
    id: "chaser-agent",
    name: "Chaser Agent",
    lane: "Runtime / agent product",
    status: "local",
    tagline: "Governed, review-first source-intelligence agent harness.",
    description:
      "Review-first Source Card Harness V0 that separates source claims, evidence snippets, uncertainty, action candidates, and memory candidates for human review — extracted from ChaseOS principles.",
    repoUrl: "https://github.com/chasedndt/Chaser-Agent",
    boundary:
      "Not claiming: a production autonomous agent, live provider routing, or a browser-control adapter.",
  },
  {
    id: "strikezone-crypto",
    name: "StrikeZone Crypto",
    lane: "Trading R&D / signal infrastructure",
    status: "rd",
    tagline: "Trading-systems R&D workspace and signal infrastructure.",
    description:
      "Structured R&D workspace covering strategy/indicator development, Discord signal-delivery infrastructure, and reproducible experiment logs.",
    repoUrl: null,
    boundary:
      "Not claiming: live trade execution, financial performance guarantees, or a production signal subscription service.",
    subProjects: [
      {
        id: "tradesync",
        name: "TradeSync",
        tagline:
          "AI-powered crypto trading engine for signal scoring and on-chain execution research.",
        status: "rd",
        repoUrl: "https://github.com/chasedndt/TradeSync",
      },
      {
        id: "pinescript-indicators",
        name: "Pine Script indicators",
        tagline: "Strategy and indicator development for the StrikeZone Crypto system.",
        status: "rd",
        repoUrl:
          "https://github.com/chasedndt/Strikezone-Crypto-Pinescript-V6-Indicators",
      },
      {
        id: "chaseos-workflow",
        name: "ChaseOS-built trading workflow",
        tagline:
          "Internal ChaseOS agent workflow supporting StrikeZone Crypto's research pipeline.",
        status: "rd",
        repoUrl: null,
      },
    ],
  },
  {
    id: "hypelist",
    name: "Hypelist",
    lane: "Commerce / inventory product",
    status: "local",
    tagline: "Full-stack inventory and marketplace product.",
    description:
      "React frontend with a Flask backend and Firebase/SQLite modes for inventory and marketplace workflows.",
    repoUrl: "https://github.com/chasedndt/Hypelist",
    boundary:
      "Not claiming: a production commerce site, live Stripe billing, or live customer/admin operations ahead of a repo-hygiene review.",
  },
  {
    id: "greytheory-ai",
    name: "GreyTheory AI",
    lane: "Security research architecture",
    status: "architecture",
    tagline: "Proof-first, AI-assisted bug bounty architecture.",
    description:
      "Modular AI-assisted bug bounty operating-system architecture with deterministic validation, a confidence taxonomy, and human review gates.",
    repoUrl: "https://github.com/chasedndt/GreyTheory-Research",
    boundary:
      "Not claiming: a live scanner, autonomous exploit engine, or validated bug bounty findings.",
  },
  {
    id: "toolshape-studio",
    name: "Toolshape Studio",
    lane: "Creative tooling product",
    status: "local",
    tagline: "Visual-design and video-editing app with an agent control plane.",
    description:
      "Unified scene/timeline editor with typed edit operations, undo/redo, media probing, and a scalable React editor shell — milestones 1 through 5 verified locally.",
    repoUrl: "https://github.com/chasedndt/toolshape-studio",
    boundary:
      "Not claiming: a shipped native app, signed packaging, or full feature parity — the native shell and several features remain deferred.",
  },
];
