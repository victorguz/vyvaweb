import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog de Vyva. `intencion` ordena el listado: primero lo que busca alguien
 * que ya está evaluando un sistema (búsqueda activa), después el contenido
 * que envejece bien y atrae a quien todavía no lo busca (evergreen).
 */
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		intencion: z.enum(['busqueda', 'evergreen']),
		fecha: z.coerce.date(),
		orden: z.number().default(99),
	}),
});

export const collections = { blog };
