import type { APIRoute } from 'astro';
import { evaluarTodos } from '../../lib/negocios';

/**
 * Solo en desarrollo (`astro dev`): por qué cada negocio sale o no sale en el
 * directorio. En el sitio publicado responde 404.
 */
export const GET: APIRoute = async () => {
	if (!import.meta.env.DEV) return new Response('No encontrado', { status: 404 });
	const evaluaciones = await evaluarTodos();
	const data = evaluaciones
		.map(({ negocio, ...e }) => ({ ...e, sale: negocio !== null }))
		.sort((a, b) => Number(b.sale) - Number(a.sale) || a.faltantes.length - b.faltantes.length);
	return new Response(JSON.stringify(data, null, 2), {
		headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
	});
};
