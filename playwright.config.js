// Smoke-test config. Serves the built site with `astro preview` — the tests
// run against exactly what production will serve.
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 1,
  // Named explicitly so `--project=chromium` resolves; without a projects
  // array that flag errors out rather than selecting a default.
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  use: {
    baseURL: "http://localhost:4321",
  },
  webServer: {
    command: "npm run preview",
    url: "http://localhost:4321",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
