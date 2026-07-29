// Structured video content (§32.2).
//
// EMPTY BY DESIGN. No YouTube channel URL or video URLs have been supplied by
// the operator, and social/content URLs must never be invented (§43.2).
// Add entries here and the homepage "Watch the Build" section plus /videos
// populate automatically — no layout work required.
//
// Shape:
// {
//   title: "Day in the Life of an AI Engineer — Part 3",
//   slug: "day-in-the-life-ai-engineer-part-3",
//   publishedAt: "2026-07-01",
//   youtubeUrl: "",
//   xUrl: null,
//   thumbnail: "/images/videos/<slug>.webp",
//   duration: "12:04",
//   summary: "",
//   relatedProjects: ["chaseos"],
//   relatedBuildLogs: [],
//   tags: ["ai-engineering", "build-in-public"],
//   featured: true,
// }

export const videos = [];

export const featuredVideo = videos.find((v) => v.featured) ?? null;
export const recentVideos = videos.filter((v) => !v.featured).slice(0, 2);
