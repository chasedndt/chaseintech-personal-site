import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const outputDirectory = "dist";
const htmlFiles = [];
const violations = [];

function collectHtmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(path);
    else if (entry.name.endsWith(".html")) htmlFiles.push(path);
  }
}

collectHtmlFiles(outputDirectory);

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");

  for (const match of html.matchAll(/href=["'](\/[^"'#?]+)["']/g)) {
    const href = match[1];
    const isRoot = href === "/";
    const isCanonicalPage = href.endsWith("/");
    const isFile = /\.[a-z0-9]+$/i.test(href);

    if (!isRoot && !isCanonicalPage && !isFile) {
      violations.push({
        file: relative(outputDirectory, file).replaceAll("\\", "/"),
        href,
      });
    }
  }
}

if (violations.length > 0) {
  console.error("Generated pages contain noncanonical internal links:");
  for (const violation of violations) {
    console.error(`- ${violation.file}: ${violation.href}`);
  }
  process.exit(1);
}

console.log(
  `Generated-link audit passed: ${htmlFiles.length} HTML pages, 0 noncanonical internal links.`,
);
