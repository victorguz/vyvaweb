import { defineMiddleware } from 'astro:middleware';

/**
 * Caché de las páginas armadas en el servidor.
 *
 * Amplify (la CDN) guarda cada respuesta según su Cache-Control: Google y los
 * clientes reciben la página ya armada desde la CDN, y el servidor solo vuelve
 * a armarla cuando la copia vence. Con `stale-while-revalidate` la copia vieja
 * se sigue entregando mientras se arma la nueva, así nadie espera.
 *
 * El navegador no guarda HTML (`max-age=0`) para no quedarse con precios o
 * fichas viejas. Una página puede poner su propio Cache-Control (el directorio
 * de negocios usa 5 minutos) y este middleware lo respeta.
 */
const PAGINAS = 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400';
const NO_ENCONTRADA = 'public, max-age=0, s-maxage=60';

export const onRequest = defineMiddleware(async (_context, next) => {
	const respuesta = await next();
	try {
		const cabeceras = respuesta.headers;
		if (!cabeceras.has('Cache-Control')) {
			if (respuesta.status === 404) cabeceras.set('Cache-Control', NO_ENCONTRADA);
			else if (respuesta.status === 200) cabeceras.set('Cache-Control', PAGINAS);
		}
		cabeceras.set('X-Content-Type-Options', 'nosniff');
		cabeceras.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	} catch {
		// Las redirecciones traen cabeceras de solo lectura; se entregan tal cual.
	}
	return respuesta;
});
