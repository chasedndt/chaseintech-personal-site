import { getCollection } from "astro:content";
import { site } from "../data/site.js";

// ARTICLES FEED — articles only. Build logs have their own feed at
// /build-log/rss.xml so subscribers to this one get long-form writing and
// nothing else.
//
// Direction of travel matters here. This feed is OUTBOUND: chaseintech.com is
// the source of record and LinkedIn is a distribution channel. It is not, and
// cannot be, a mirror of a LinkedIn feed — LinkedIn dropped RSS in 2013 and
// exposes no public API for personal profile posts, so any "LinkedIn to RSS"
// service is scraping and breaks without warning.
//
// Nothing from X enters this feed. Short-form posts are not articles.
// Drafts are excluded by the collection filter.
const esc = (text) =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function GET() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const items = articles
    .map((article) => ({
      title: article.data.title,
      description: article.data.description,
      link: new URL(`/articles/${article.id}`, site.url).href,
      date: article.data.publishedAt,
      category: "Article",
      tags: article.data.tags,
    }))
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());

  const latest = items[0]?.date ?? new Date(0);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.brand)} — Articles</title>
    <link>${new URL("/articles", site.url).href}</link>
    <description>Long-form writing on agentic AI, governed automation and systems architecture by Chase (ChaseInTech).</description>
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
