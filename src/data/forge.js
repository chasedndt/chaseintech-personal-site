// ChaseOS Forge packs — snapshotted from the live structured index at
// https://chaseos.ai/forge/index.json (schema chaseos.forge-index.json v0.1.0).
// Every pack is status "preview" and approval-gated; keep that framing.
export const forgeIndexUrl = "https://chaseos.ai/forge";

export const packs = [
  {
    id: "startup_validation_launch",
    name: "Startup Validation Launch",
    category: "Startup",
    description: "Source-backed launch research, offer tests, and operating briefs.",
    artifacts: ["Research brief", "Offer test", "Operating brief", "Decision log"],
  },
  {
    id: "content_distribution_pack",
    name: "Content Distribution Pack",
    category: "Content",
    description:
      "Plan, adapt, and review distribution workflows without external posting by default.",
    artifacts: ["Content brief", "Post draft", "Editorial calendar", "Approval record"],
  },
  {
    id: "research_briefing_pack",
    name: "Research Briefing Pack",
    category: "Research",
    description: "Collect sources, summarize insight, and preserve citation-ready evidence.",
    artifacts: ["Source digest", "Research brief", "Evidence map", "Citation set"],
  },
  {
    id: "local_developer_ops_pack",
    name: "Local Developer Ops Pack",
    category: "Developer ops",
    description: "Inspect repos, propose patches, run tests, and write bounded handovers.",
    artifacts: ["Implementation plan", "Patch artifact", "Test summary", "Handover doc"],
  },
  {
    id: "ecommerce_reselling_ops_pack",
    name: "Ecommerce Reselling Ops Pack",
    category: "Commerce ops",
    description:
      "Track sourcing, listing prep, and operator approvals before marketplace actions.",
    artifacts: ["Sourcing summary", "Listing draft", "SOP", "Approval log"],
  },
  {
    id: "agent_governance_pack",
    name: "Agent Governance Pack",
    category: "Governance",
    description:
      "Define runtime capability manifests, permission ceilings, and result shapes.",
    artifacts: ["Capability manifest", "Permission ceiling", "Result schema", "Audit log"],
  },
];

// Shared truth for every pack, from the index: preview status, requires
// sources.read / docs.write / approvals.request, and human approval.
export const packBoundary =
  "Every pack is in preview, runs under ChaseOS Studio Early Access, and requires human approval — packs request permissions, they do not grant themselves any.";
