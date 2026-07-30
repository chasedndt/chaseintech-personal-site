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
      { name: "Claude Code", detail: "Primary agentic coding harness." },
      { name: "Codex", detail: "Second opinion and parallel implementation passes." },
      { name: "VS Code", detail: "Editor of record." },
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
      { name: "Astro", detail: "This site." },
      { name: "Vite", detail: "Build tooling across the front ends." },
      { name: "Pine Script", detail: "StrikeZone Crypto indicators and strategies." },
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
    title: "Operations",
    items: [
      { name: "GitHub", detail: "Source of record; Actions for scheduled builds and deploys." },
      {
        name: "Discord",
        detail: "Control plane. One lane per project for status receipts and approval gates.",
      },
      { name: "Whop", detail: "Distribution and access for StrikeZone Crypto." },
    ],
  },
  {
    title: "Machines",
    note: "Two systems. Full specifications to be added.",
    items: [
      { name: "Primary workstation", detail: null, pending: true },
      { name: "Secondary system", detail: null, pending: true },
    ],
  },
];
