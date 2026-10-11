/**
 * Mapas del sitio. Con todo el sitio en SSR ya no hay un paso de publicación
 * que los genere, así que se arman en cada visita (con la misma caché de la
 * CDN que las páginas). Se conservan las direcciones que generaba
 * @astrojs/sitemap (`sitemap-index.xml` y `sitemap-0.xml`) para que Search
 * Console siga leyéndolas sin cambios.
 */

/** Páginas fijas del sitio, sin las que salen de colecciones o del API. */
export const PAGINAS_FIJAS = [
	'/',
	'/pricing',
	'/prueba',
	'/suscripcion',
	'/blog',
	'/blog/preguntas-frecuentes',
	'/tutoriales',
	'/privacy',
	'/terms',
];

export const CACHE_SITEMAP = 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400';

const escapar = (texto: string) =>
	texto.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!);

export function urlset(urls: string[]): Response {
	const xml =
		'<?xml version="1.0" encoding="UTF-8"?>\n' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
		urls.map((loc) => `  <url><loc>${escapar(loc)}</loc></url>`).join('\n') +
		'\n</urlset>\n';
	return xmlResponse(xml);
}

export function sitemapindex(urls: string[]): Response {
	const xml =
		'<?xml version="1.0" encoding="UTF-8"?>\n' +
		'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
		urls.map((loc) => `  <sitemap><loc>${escapar(loc)}</loc></sitemap>`).join('\n') +
		'\n</sitemapindex>\n';
	return xmlResponse(xml);
}

function xmlResponse(xml: string): Response {
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': CACHE_SITEMAP },
	});
}
