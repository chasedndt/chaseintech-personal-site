# Publishing contract — chaseintech.com

This is the single pipe through which both ChaseOS instances (content system and
developer system) publish to the public site. The git repository is the merge
point: whichever machine produces the piece, its harness commits here, and the
site takes care of the rest.

```text
content engine (either system)
        │  writes one markdown file
        ▼
src/content/articles/<kebab-slug>.md      ← commit + push to main
        │  scheduled rebuild (or any deploy)
        ▼
/articles/<slug>  +  /rss.xml  +  sitemap  ← live automatically
        │  harness posts to LinkedIn linking BACK to the article URL
        ▼
impressions land on chaseintech.com
```

## Rules for the harness

1. **One file per article** at `src/content/articles/<kebab-slug>.md`. The
   filename becomes the URL, permanently — do not rename after publishing.
2. **Frontmatter is validated at build time.** Required: `title`,
   `description`, `publishedAt`. A malformed file fails the whole build loudly;
   that is intentional. See `src/content/articles/_TEMPLATE.md` for every field.
3. **Set `generatedBy: "ChaseOS Content Engine"`** on engine-produced pieces.
   It is provenance, not a disclaimer; it is not rendered as a warning.
4. **Publish here first, platform second.** Commit → wait for deploy → then
   post to LinkedIn with the article URL. Never the reverse: if a piece went
   to LinkedIn first, set `canonicalUrl` to the LinkedIn URL instead.
5. **After posting**, update the article's `linkedinUrl` (and `xUrl` if
   cross-posted) in a follow-up commit so the article page links to the
   discussion.
6. **`draft: true` = invisible everywhere** (site, feed, sitemap). Use it for
   anything awaiting operator review under the ChaseOS approval gate.
7. **Publication gate applies** exactly as in ChaseOS: no secrets, tokens,
   private paths, live identifiers, customer data, or claims beyond verified
   evidence. When in doubt, commit as draft and route to operator review.
8. **No deletions without operator approval.** Published URLs are contracts;
   prefer an `updatedAt` correction over removal.

## Auto-/now (same pipe, different file)

The `/now` page can be kept provably current the same way: a weekly harness
job edits `src/pages/now.astro`'s items and `lastUpdated` date from approved
status receipts, commits, and the scheduled rebuild ships it. Same gate: the
receipt must already be operator-approved in the control plane before it can
appear publicly.

## Video feed

Nothing to do — the YouTube RSS feed is read at build time. Publishing a video
to the channel and waiting for the next scheduled rebuild is the entire
workflow.
