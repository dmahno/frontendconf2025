import {defineConfig} from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@tests": path.resolve(__dirname, "config/vitest"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./config/vitest/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["**/*.d.ts"],

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/index.{ts,tsx}",
        "**/*.d.ts",
        "**/*.stories.{ts,tsx}",
        "**/*.styles.ts",
      ],
    },
  },
});
