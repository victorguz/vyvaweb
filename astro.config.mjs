// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import awsAmplify from 'astro-aws-amplify';

const SITE = 'https://vyvapos.com';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	/**
	 * Todo el sitio se arma en el servidor de Amplify en cada visita (SSR), así
	 * el precio del plan y el directorio de negocios siempre están al día sin
	 * volver a publicar. Amplify guarda cada página según el Cache-Control que
	 * pone src/middleware.ts.
	 */
	output: 'server',
	adapter: awsAmplify(),
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
	],
	vite: {
		plugins: [tailwindcss()],
		// El servidor de Amplify no recibe node_modules (pnpm usa enlaces que no
		// viajan en el paquete): todas las dependencias van dentro del bundle.
		ssr: { noExternal: true },
	},
});
