import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	base: '/Ceramic_soul/',
	plugins: [
    ViteImageOptimizer(),
  ],

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				catalog: resolve(__dirname, "catalog.html"),
				blog: resolve(__dirname, "blog.html"),
				about: resolve(__dirname, "about.html"),
			},
		},
	},
});

