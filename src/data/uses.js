// What I actually use. Kept honest and dated — a stale /uses page dates the
// whole site, so `lastUpdated` is displayed rather than hidden.
//
// Entries marked `pending: true` render as awaiting detail instead of being
// guessed at. Machine specs are not invented.
export const lastUpdated = "30 July 2026";

export const groups = [
  {
    title: "AI and coding",
    note: "The day-to-day loop: agentic tools doing the drafting, me reviewing.",
    items: [
      { name: "Claude Code", detail: "Primary agentic coding harness, running Anthropic's Claude models." },
      { name: "Codex", detail: "OpenAI-backed second opinion and parallel implementation passes." },
      { name: "VS Code", detail: "Editor of record." },
    ],
  },
  {
    title: "Agent harnesses",
    note: "The runtimes doing autonomous work inside ChaseOS, all behind human approval gates.",
    items: [
      {
        name: "Hermes",
        detail: "ChaseOS runtime agent — scheduled jobs, watchdogs and workflow execution.",
      },
      {
        name: "OpenClaw",
        detail: "Peer runtime within the ChaseOS agent bus.",
      },
      {
        name: "Chaser Agent",
        detail: "Review-first source-intelligence harness. Open source — see the project page.",
      },
    ],
  },
  {
    title: "Hosting and platform",
    note: "Everything public runs on Cloudflare.",
    items: [
      {
        name: "Cloudflare",
        detail: "Pages, Workers, D1 and DNS. Hosts chaseintech.com and chaseos.ai.",
      },
      { name: "Clerk", detail: "Authentication and session management." },
      { name: "Stripe", detail: "Payments and subscription billing." },
    ],
  },
  {
    title: "Languages and frameworks",
    note: "Drawn from what the project repositories actually run on.",
    items: [
      { name: "Python", detail: "ChaseOS runtime, Chaser Agent, TradeSync, Flask services." },
      { name: "TypeScript", detail: "Toolshape Studio and Voice, front-end work." },
      { name: "React", detail: "ChaseOS Web, Hypelist, Toolshape Studio editor shell." },
      {
        name: "Astro",
        detail:
          "Default for content-shaped web builds — this site, and the stack I reach for when a React SPA would be overkill.",
      },
      { name: "Vite", detail: "Build tooling across the front ends." },
      { name: "Pine Script", detail: "StrikeZone Crypto indicators and strategies." },
    ],
  },
  {
    title: "Trading and research",
    items: [
      { name: "TradingView", detail: "Charting and Pine Script strategy development for StrikeZone Crypto." },
      {
        name: "StrikeZone Market Intelligence",
        detail: "ChaseOS workflow pack running governed daily market research. No trade execution.",
      },
    ],
  },
  {
    title: "Terminal and shell",
    items: [
      { name: "Windows Terminal", detail: "Primary terminal." },
      { name: "PowerShell", detail: "Windows-side scripting and ops." },
      { name: "WSL + Ubuntu", detail: "Linux side of the workflow; Ubuntu for anything POSIX." },
    ],
  },
  {
    title: "Content and design",
    note: "The production pipeline behind the YouTube and TikTok output.",
    items: [
      { name: "OBS Studio", detail: "Screen and build-session recording." },
      { name: "Recordly", detail: "Recording workflow." },
      { name: "CapCut", detail: "Short-form editing." },
      { name: "Photoshop", detail: "Image work and thumbnails." },
      { name: "Canva", detail: "Fast graphics and social assets." },
      {
        name: "Figma",
        detail:
          "Learning it now for interface and product design work. Not yet used on a shipped project — it will move up this page when it has been.",
      },
    ],
  },
  {
    title: "Knowledge and operations",
    items: [
      {
        name: "ChaseOS knowledge graph",
        detail: "The knowledge base is a system I built — governed graph with provenance, not a notes app.",
      },
      { name: "GitHub", detail: "Source of record; Actions for scheduled builds and deploys." },
      {
        name: "Discord",
        detail: "Control plane. One lane per project for status receipts and approval gates.",
      },
      { name: "Whop", detail: "Distribution and access for StrikeZone Crypto." },
    ],
  },
  {
    title: "Data and storage",
    items: [
      { name: "SQLite", detail: "Local-first state for ChaseOS, Toolshape and Hypelist." },
      { name: "Cloudflare D1", detail: "Hosted SQL for the public web surfaces." },
      { name: "Firebase", detail: "Alternate mode in Hypelist." },
    ],
  },
  {
    title: "Machines",
    note: "Two systems; specs read from the hardware, not from memory.",
    items: [
      {
        name: "Surface Pro 7+",
        detail:
          "Intel Core i7-1165G7 (4c/8t) · 16GB RAM · Iris Xe · 256GB NVMe · Windows 11 Pro with WSL/Ubuntu. The everywhere machine — a surprising amount of ChaseOS runs from it.",
      },
      { name: "Second system", detail: null, pending: true },
    ],
  },
];
