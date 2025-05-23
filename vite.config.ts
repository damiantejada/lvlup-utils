import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // ./src/index.ts,
      name: "lvlup-utils",
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
      types: resolve(__dirname, "src/types/"),
    },
  },
  plugins: [dts({ outDir: "dist", exclude: ['**/*.test.ts', 'test/'] }), viteConfigPaths()], // para generar archivos de types (.d.ts)
});
