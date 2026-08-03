import { projects } from "../src/data/projects.js";
import { buildLogs } from "../src/data/build-logs.js";

const errors = [];

function duplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
}

for (const slug of duplicates(projects.map((project) => project.slug))) {
  errors.push(`Duplicate project slug: ${slug}`);
}

for (const slug of duplicates(buildLogs.map((entry) => entry.slug))) {
  errors.push(`Duplicate build-log slug: ${slug}`);
}

const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
const logsBySlug = new Map(buildLogs.map((entry) => [entry.slug, entry]));

for (const project of projects) {
  const linked = new Set(project.relatedBuildLogs ?? []);

  for (const slug of linked) {
    const entry = logsBySlug.get(slug);
    if (!entry) {
      errors.push(`${project.slug} links missing build log: ${slug}`);
      continue;
    }
    if (entry.status !== "published") {
      errors.push(`${project.slug} links non-published build log: ${slug}`);
    }
    if (entry.relatedProject !== project.slug) {
      errors.push(
        `${project.slug} links ${slug}, but that log belongs to ${entry.relatedProject}`,
      );
    }
  }

  for (const entry of buildLogs.filter(
    (candidate) =>
      candidate.status === "published" && candidate.relatedProject === project.slug,
  )) {
    if (!linked.has(entry.slug)) {
      errors.push(`${project.slug} is missing published build log link: ${entry.slug}`);
    }
  }
}

for (const entry of buildLogs) {
  if (!projectsBySlug.has(entry.relatedProject)) {
    errors.push(`${entry.slug} references unknown project: ${entry.relatedProject}`);
  }

  if (entry.status === "published") {
    if (!entry.publishedAt) {
      errors.push(`${entry.slug} is published without a publication date`);
    }
    if (!entry.source?.trim()) {
      errors.push(`${entry.slug} is published without a source boundary`);
    }
    if (!entry.sections?.length) {
      errors.push(`${entry.slug} is published without content sections`);
    }
  }
}

if (errors.length) {
  console.error("Project publication audit failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const publishedCount = buildLogs.filter((entry) => entry.status === "published").length;
const draftCount = buildLogs.filter((entry) => entry.status === "draft").length;

console.log(
  `Project publication audit passed: ${projects.length} projects, ${publishedCount} published logs, ${draftCount} drafts.`,
);
