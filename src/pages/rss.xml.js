import { getCollection } from "astro:content";
import { site } from "../data/site.js";
import { publishedBuildLogs } from "../data/build-logs.js";

// Primary feed: articles plus engineering build logs, newest first.
// Drafts are excluded by the collection filter and by build-log status.
const esc = (text) =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function GET() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const items = [
    ...articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      link: new URL(`/articles/${article.id}`, site.url).href,
      date: article.data.publishedAt,
      category: "Article",
      tags: article.data.tags,
    })),
    ...publishedBuildLogs.map((entry) => ({
      title: entry.title,
      description: entry.summary,
      link: new URL(`/build-log/${entry.slug}`, site.url).href,
      date: new Date(entry.publishedAt),
      category: "Build log",
      tags: entry.tags ?? [],
    })),
  ].sort((a, b) => b.date.valueOf() - a.date.valueOf());

  const latest = items[0]?.date ?? new Date(0);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.brand)}</title>
    <link>${site.url}</link>
    <description>${esc(site.description)}</description>
    <language>en-gb</language>
    <lastBuildDate>${latest.toUTCString()}</lastBuildDate>
    <atom:link href="${new URL("/rss.xml", site.url).href}" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${esc(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${esc(item.description)}</description>
      <pubDate>${item.date.toUTCString()}</pubDate>
      <category>${esc(item.category)}</category>
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
