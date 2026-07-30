// Platform-aware content feed.
//
// One entry = one PIECE OF CONTENT, not one upload. When the same video is
// posted to both YouTube and TikTok, it stays a SINGLE entry with both
// platform payloads attached — that is the cross-posting de-duplication.
// Reliable automatic detection across platforms is not possible (titles,
// crops and durations all differ), so the link is explicit and therefore
// always correct.
//
// Per-platform rendering differences are real and handled in VideoCard:
//   youtube → has a title AND a description; long-form and Shorts
//   tiktok   → has NO title, only a caption/description
// `primary` decides which platform's presentation leads on the card.
//
// EMPTY BY DESIGN: no channel or profile URLs have been supplied, and social
// URLs are never invented. Add entries and every surface populates itself.
//
// Shape:
// {
//   id: "chaseos-control-plane-walkthrough",
//   publishedAt: "2026-07-20",
//   primary: "youtube",
//   featured: true,
//   relatedProjects: ["chaseos"],
//   relatedBuildLogs: ["chaseos-control-plane-boundaries"],
//   tags: ["build-in-public"],
//   youtube: {
//     url: "https://www.youtube.com/watch?v=...",
//     videoId: "...",
//     title: "Inside the ChaseOS control plane",
//     description: "...",
//     duration: "12:04",
//     format: "long",          // "long" | "short"
//   },
//   tiktok: {
//     url: "https://www.tiktok.com/@handle/video/...",
//     videoId: "...",
//     caption: "...",          // TikTok has no separate title
//   },
// }

export const videos = [];

/** Content posted to more than one platform. */
export function platformsFor(video) {
  return ["youtube", "tiktok"].filter((p) => video[p]);
}

/** Title for display: YouTube supplies one, TikTok never does. */
export function displayTitle(video) {
  if (video.youtube?.title) return video.youtube.title;
  return null;
}

/** Body copy for display, preferring the primary platform's own wording. */
export function displayBody(video) {
  const primary = video[video.primary];
  return primary?.description ?? primary?.caption ?? "";
}

export const featuredVideo = videos.find((v) => v.featured) ?? null;
export const recentVideos = videos.filter((v) => !v.featured).slice(0, 2);
