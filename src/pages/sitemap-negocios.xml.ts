import type { APIRoute } from 'astro';
import { SIN_CACHE, negociosDelDirectorio } from '../lib/negocios';
import { urlset } from '../lib/sitemap';

/** El buscador y la ficha de cada negocio publicado en el directorio. */
export const GET: APIRoute = async ({ site }) => {
	try {
		const negocios = await negociosDelDirectorio();
		return urlset([
			new URL('/negocios', site).href,
			...negocios.map((n) => new URL(`/negocios/${n.slug}`, site).href),
		]);
	} catch (error) {
		// Un sitemap sin negocios por una falla pasajera le diría a Google que ya no existen.
		console.error(`[sitemap] No se pudo leer el directorio (${(error as Error).message}).`);
		return new Response('Servicio no disponible', { status: 503, headers: { 'Cache-Control': SIN_CACHE } });
	}
};
