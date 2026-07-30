---
title: "Article template — not published"
description: "Reference format for the ChaseOS content engine. draft: true keeps this out of the site and the RSS feed."
publishedAt: 2026-07-30
draft: true
tags:
  - template
generatedBy: "template"
---

This file documents the publishing contract and is never rendered, because
`draft: true`.

## How the content engine publishes

Write one markdown file per article into `src/content/articles/`. Use a
kebab-case filename — it becomes the URL, so
`governed-agents-in-practice.md` publishes at
`/articles/governed-agents-in-practice`.

Required frontmatter: `title`, `description`, `publishedAt`. Everything else is
optional. Frontmatter is schema-validated at build time, so a missing or
malformed field fails the build rather than shipping a broken page.

## Fields worth using

- `tags` — surfaced on the article and used for grouping.
- `xUrl` / `linkedinUrl` — link to where the piece was also posted, so the
  article page becomes the hub rather than a dead end.
- `canonicalUrl` — set this **only** if the piece was published somewhere else
  first, so search engines credit the original.
- `relatedProject` / `relatedBuildLog` — slugs that cross-link into the
  portfolio.
- `generatedBy` — record the producing system. Useful provenance; it is not
  displayed as a disclaimer.

## Publishing order that actually drives traffic

Publish here first, then post to X and LinkedIn linking back to the article
URL. That way the impressions land on a page you own, the canonical version
lives on chaseintech.com, and the RSS feed at `/rss.xml` picks it up
automatically.

Set `draft: false` — or drop the field — when a piece is ready.
