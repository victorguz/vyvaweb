import type { APIRoute } from 'astro';
import { sitemapindex } from '../lib/sitemap';

/** Índice de mapas del sitio: páginas y blog por un lado, negocios por otro. */
export const GET: APIRoute = ({ site }) =>
	sitemapindex([new URL('/sitemap-0.xml', site).href, new URL('/sitemap-negocios.xml', site).href]);
