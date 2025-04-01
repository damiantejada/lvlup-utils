import path from "path";
import { mergeConfig, defineConfig } from "vite";

import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            globals: true,
            setupFiles: './test/setup',
            alias: {
                "src": path.resolve(__dirname,'src')
            }
        }
    })
)