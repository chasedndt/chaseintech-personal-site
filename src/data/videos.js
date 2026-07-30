// Content feed.
//
// The YouTube channel is the source of truth (operator decision), read from its
// public RSS feed at build time — no API key, no credentials, no client-side
// fetch. See src/lib/youtube.js for the caching/fallback behaviour.
//
// Cross-posting: when a video also exists on TikTok, add its URL here keyed by
// the YouTube video id. That keeps ONE entry per piece of content instead of
// two near-duplicate cards. It is explicit rather than auto-detected because
// titles, crops and captions diverge across platforms, and a wrong automatic
// match would silently hide a video.
export const tiktokCrossPosts = {
  // "<youtubeVideoId>": "https://www.tiktok.com/@chaseintech_/video/...",
};

// Videos to keep out of the public feed (drafts, unlisted, off-brand back
// catalogue). Add YouTube video ids here.
export const excludedVideoIds = new Set();

/** Shape one raw feed item into a platform-aware content entry. */
function toEntry(video, index) {
  const tiktokUrl = tiktokCrossPosts[video.videoId] ?? null;

  return {
    id: video.videoId,
    publishedAt: video.publishedAt,
    primary: "youtube",
    featured: index === 0,
    relatedProjects: [],
    relatedBuildLogs: [],
    tags: [],
    youtube: {
      url: video.url,
      videoId: video.videoId,
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnail,
      // RSS does not state whether an upload is a Short, so format is left
      // unset rather than guessed — a wrong label is worse than none.
      format: null,
    },
    ...(tiktokUrl
      ? { tiktok: { url: tiktokUrl, caption: video.title } }
      : {}),
  };
}

let cache = null;

/** Build-time content feed. Awaited from pages; result is reused per build. */
export async function getContentFeed() {
  if (cache) return cache;

  const { fetchYouTubeVideos } = await import("../lib/youtube.js");
  const { videos, source } = await fetchYouTubeVideos();

  const entries = videos
    .filter((video) => !excludedVideoIds.has(video.videoId))
    .map(toEntry);

  cache = {
    source,
    videos: entries,
    featured: entries[0] ?? null,
    recent: entries.slice(1, 3),
  };

  return cache;
}

/** Content posted to more than one platform. */
export function platformsFor(video) {
  return ["youtube", "tiktok"].filter((p) => video[p]);
}

/** Title for display: YouTube supplies one, TikTok never does. */
export function displayTitle(video) {
  return video.youtube?.title ?? null;
}

/** Body copy, preferring the primary platform's own wording. */
export function displayBody(video) {
  const primary = video[video.primary];
  return primary?.description ?? primary?.caption ?? "";
}
