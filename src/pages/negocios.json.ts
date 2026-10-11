import type { APIRoute } from 'astro';
import { CACHE_CONTROL, SIN_CACHE, negociosDelDirectorio } from '../lib/negocios';

/**
 * El directorio en JSON para la app (Mis negocios del cliente). Es la misma
 * lista y la misma regla que /negocios, así web y app nunca se contradicen.
 * Devuelve los campos que la app ya leía del directorio: id, slug, name,
 * logo, slogan, description.
 */
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS' };

export const GET: APIRoute = async () => {
	try {
		const negocios = await negociosDelDirectorio();
		const data = negocios.map((n) => ({
			id: n.id,
			slug: n.slug,
			name: n.nombre,
			logo: n.logo,
			slogan: n.eslogan,
			description: n.descripcion,
			area: n.area,
		}));
		return new Response(JSON.stringify({ success: true, data }), {
			headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': CACHE_CONTROL, ...CORS },
		});
	} catch (error) {
		console.error(`[negocios.json] No se pudo leer el directorio (${(error as Error).message}).`);
		return new Response(JSON.stringify({ success: false, data: [] }), {
			status: 503,
			headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': SIN_CACHE, ...CORS },
		});
	}
};

export const OPTIONS: APIRoute = () => new Response(null, { status: 204, headers: CORS });
