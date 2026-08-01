import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Articles are the canonical home for content-engine output.
//
// The ChaseOS content engine publishes by committing a markdown file into
// src/content/articles/. Frontmatter is validated at build time, so a
// malformed article fails the build loudly instead of shipping broken.
//
// Anything with `draft: true` is never rendered and never enters the feed.
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    /** Optional editorial series and hero artwork for long-form pieces. */
    series: z.string().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    /** Where this was also posted, for cross-referencing. */
    canonicalUrl: z.string().url().optional(),
    xUrl: z.string().url().optional(),
    linkedinUrl: z.string().url().optional(),
    /** Optional links back into the portfolio. */
    relatedProject: z.string().optional(),
    relatedBuildLog: z.string().optional(),
    /** Set when a piece was drafted by the content engine rather than by hand. */
    generatedBy: z.string().optional(),
  }),
});

export const collections = { articles };
