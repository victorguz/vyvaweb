// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://vyvapos.com';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [
		svelte(),
		mdx(),
		sitemap(),
	],
	vite: { plugins: [tailwindcss()] },
});
