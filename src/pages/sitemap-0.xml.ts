import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import catalogo from '../lib/tutoriales.json';
import { PAGINAS_FIJAS, urlset } from '../lib/sitemap';

/** Páginas fijas, artículos del blog y tutoriales. */
export const GET: APIRoute = async ({ site }) => {
	const posts = await getCollection('blog');
	const rutas = [
		...PAGINAS_FIJAS,
		...posts.map((post) => `/blog/${post.id}`),
		...catalogo.tutoriales.map((t) => `/tutoriales/${t.slug}`),
	];
	return urlset(rutas.map((ruta) => new URL(ruta, site).href));
};
