// Build-time YouTube feed loader.
//
// Uses the public RSS feed, which needs no API key and no credentials:
//   https://www.youtube.com/feeds/videos.xml?channel_id=<UC...>
//
// The feed is read at BUILD time, so the site stays fully static and fast.
// Consequence worth knowing: new uploads appear when the site is rebuilt, not
// the instant they publish. A Cloudflare deploy hook on a schedule would close
// that gap without changing any of this code.
//
// If the network call fails, we fall back to a committed snapshot rather than
// shipping an empty feed — a build should never silently delete the content
// section.
// Fallback lives in a .js module, not .json, so plain Node and Vite can both
// import it without differing import-attribute syntax.
import { fallback } from "../data/youtube-fallback.js";

export const CHANNEL_ID = "UCYMroow7WQ2aRR3g_9VKzGA";
export const CHANNEL_URL = "https://www.youtube.com/@ChaseDNDT";
export const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const BUILD_FETCH_TIMEOUT_MS = 10_000;

const fetchForBuild = (url, options = {}) =>
  fetch(url, {
    ...options,
    // A slow upstream must not hold a scheduled static build indefinitely.
    signal: AbortSignal.timeout(BUILD_FETCH_TIMEOUT_MS),
  });

const pick = (xml, tag) => {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? match[1].trim() : null;
};

const attr = (xml, tag, name) => {
  const match = xml.match(new RegExp(`<${tag}[^>]*\\b${name}="([^"]*)"`));
  return match ? match[1] : null;
};

const decode = (text) =>
  text
    ? text
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&")
        .trim()
    : "";

export function parseFeed(xml) {
  const entries = xml.split("<entry>").slice(1);

  return entries
    .map((raw) => {
      const videoId = pick(raw, "yt:videoId");
      if (!videoId) return null;

      const title = decode(pick(raw, "media:title") ?? pick(raw, "title"));
      const description = decode(pick(raw, "media:description") ?? "");
      const published = pick(raw, "published");

      return {
        id: videoId,
        videoId,
        title,
        // First paragraph only: YouTube descriptions carry link dumps and
        // hashtag walls that would wreck the card layout.
        description: description.split(/\n\s*\n/)[0].slice(0, 320),
        publishedAt: published ? published.slice(0, 10) : null,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail:
          attr(raw, "media:thumbnail", "url") ??
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

/**
 * Detect which uploads are Shorts. RSS doesn't expose format, but
 * youtube.com/shorts/<id> returns 200 for a Short and redirects to /watch for
 * long-form. The SOCS consent cookie is required or EU/UK requests get walled
 * at consent.youtube.com before the distinction is visible.
 * Failures leave format null — unknown, never guessed.
 */
export async function detectFormats(videos) {
  await Promise.all(
    videos.map(async (video) => {
      try {
        const response = await fetchForBuild(
          `https://www.youtube.com/shorts/${video.videoId}`,
          {
            redirect: "manual",
            headers: {
              "User-Agent": "Mozilla/5.0 chaseintech.com build",
              Cookie: "SOCS=CAI",
            },
          },
        );
        video.format = response.status === 200 ? "short" : "long";
      } catch {
        video.format = null;
      }
    }),
  );
  return videos;
}

export async function fetchYouTubeVideos() {
  try {
    const response = await fetchForBuild(FEED_URL, {
      headers: { "User-Agent": "chaseintech.com build" },
    });
    if (!response.ok) throw new Error(`feed responded ${response.status}`);

    const parsed = parseFeed(await response.text());
    if (parsed.length === 0) throw new Error("feed parsed to zero entries");

    await detectFormats(parsed);
    // Backfill from the snapshot for any id whose live detection failed.
    const known = new Map((fallback.videos ?? []).map((v) => [v.videoId, v.format]));
    for (const video of parsed) {
      if (video.format == null) video.format = known.get(video.videoId) ?? null;
    }

    return { videos: parsed, source: "live" };
  } catch (error) {
    console.warn(
      `[youtube] live feed unavailable (${error.message}); using committed snapshot`,
    );
    return { videos: fallback.videos ?? [], source: "snapshot" };
  }
}
