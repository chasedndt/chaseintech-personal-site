// Smoke-test config. Serves the built site with `astro preview` — the tests
// run against exactly what production will serve.
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 1,
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
