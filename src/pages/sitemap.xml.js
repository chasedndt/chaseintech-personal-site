import { site } from "../data/site.js";
import { projects } from "../data/projects.js";
import { publishedBuildLogs } from "../data/build-logs.js";
// Videos have no internal routes — cards link straight to YouTube/TikTok.

export function GET() {
  const routes = [
    "/",
    "/projects",
    "/videos",
    "/build-log",
    "/links",
    "/work-with-me",
    "/about",
    "/now",
    "/privacy",
    ...projects.map((p) => `/projects/${p.slug}`),
    ...publishedBuildLogs.map((e) => `/build-log/${e.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${new URL(route, site.url).href}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
