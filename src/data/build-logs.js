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
