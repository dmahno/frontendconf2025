import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import {visualizer} from "rollup-plugin-visualizer";
import path from "node:path";

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), "");

  const isProd = mode === "production";
  const isAnalyze = env.VITE_ANALYZE === "true";

  return {
    plugins: [
      react({
        babel: {plugins: [["styled-components", {displayName: !isProd}]]},
      }),
      svgr({svgrOptions: {exportType: "default", icon: true}}),
      isAnalyze && visualizer({open: true, gzipSize: true}),
    ].filter(Boolean),

    define: {
      __API__: JSON.stringify(env.API_URL || "http://localhost:8000"),
      __IS_DEV__: JSON.stringify(!isProd),
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@tests": path.resolve(__dirname, "config/vitest"),
      },
    },

    build: {
      outDir: "build",
      assetsDir: "assets",
      sourcemap: !isProd,
      cssCodeSplit: true,
      minify: isProd ? "esbuild" : false,
      chunkSizeWarningLimit: 1000,
    },

    server: {port: Number(env.PORT) || 3000},
  };
});
