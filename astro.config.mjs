// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { CLARITY_SCRIPT } from './src/lib/clarity.mjs';

const SITE = 'https://vyvapos.com';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [
		starlight({
			head: [
				{
					tag: 'script',
					attrs: { type: 'text/javascript' },
					content: CLARITY_SCRIPT,
				},
			],
			title: 'Vyva',
			description:
				'Documentación y recursos de Vyva, el sistema de agendamiento y gestión para servicios de belleza y bienestar.',
			logo: {
				light: './src/assets/vyva_logo_black.svg',
				dark: './src/assets/vyva_logo_white.svg',
				replacesTitle: true,
			},
			favicon: '/brand/Vyva_favicon.svg',
			defaultLocale: 'es',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			social: [
				{ icon: 'external', label: 'App', href: 'https://app.vyvapos.com' },
			],
			customCss: ['./src/styles/global.css', './src/styles/docs.css'],
			sidebar: [
				{
					label: 'Empezar',
					items: [{ label: 'Introducción', slug: 'intro' }],
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Política de privacidad', slug: 'privacy' },
						{ label: 'Términos de servicio', slug: 'terms' },
					],
				},
			],
		}),
		svelte(),
		mdx(),
		sitemap(),
	],
	vite: { plugins: [tailwindcss()] },
});
