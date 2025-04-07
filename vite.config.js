import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [reactPlugin, tailwindcss()],
  assetsInclude: ["**/*.md"],
  build: {
    assetsInlineLimit: 100000,
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
});
