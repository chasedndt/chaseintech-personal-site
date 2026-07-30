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
    slug: "toolshape-voice-code-integrity-launcher",
    title: "Toolshape Voice: shipping a launcher the OS is trying to block",
    publishedAt: "2026-07-30",
    updatedAt: null,
    status: "published",
    source: "Public repository: chasedndt/toolshape-voice",
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
