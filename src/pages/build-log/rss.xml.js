import { site } from "../../data/site.js";
import { publishedBuildLogs } from "../../data/build-logs.js";

// BUILD LOG FEED — engineering entries only, kept separate from the articles
// feed at /rss.xml so a subscriber can take one without the other.
const esc = (text) =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const items = publishedBuildLogs
    .map((entry) => ({
      title: entry.title,
      description: entry.summary,
      link: new URL(`/build-log/${entry.slug}`, site.url).href,
      date: new Date(entry.publishedAt),
      tags: entry.tags ?? [],
    }))
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());

  const latest = items[0]?.date ?? new Date(0);
  const self = new URL("/build-log/rss.xml", site.url).href;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.brand)} — Build Log</title>
    <link>${new URL("/build-log", site.url).href}</link>
    <description>Architecture, trade-offs, testing and corrections from real projects.</description>
    <language>en-gb</language>
    <lastBuildDate>${latest.toUTCString()}</lastBuildDate>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${esc(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${esc(item.description)}</description>
      <pubDate>${item.date.toUTCString()}</pubDate>
${item.tags.map((tag) => `      <category>${esc(tag)}</category>`).join("\n")}
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=1800",
    },
  });
}
