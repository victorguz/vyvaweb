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
	/**
	 * La pauta ya no lleva a agendar una demo, lleva a suscribirse. Los
	 * anuncios que siguen apuntando a /demo caen en la página nueva.
	 */
	redirects: {
		'/demo': '/suscripcion',
	},
	integrations: [
		svelte(),
		mdx(),
		sitemap(),
	],
	vite: { plugins: [tailwindcss()] },
});
