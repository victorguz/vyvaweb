/**
 * Lo que incluye cada plan, para las páginas de precio.
 *
 * Sin cifras a propósito: los topes de uso existen (viven en el propio plan, en
 * el catálogo, y los aplica la app al enviar), pero cambian a medida que el
 * negocio tiene más información y por eso nunca se publican. Aquí solo se compara
 * en relativo: «uso mensual incluido» frente a «mucho más uso mensual».
 *
 * El precio del plan de pago NO está aquí: sale del catálogo de planes en el
 * build (`src/lib/precio.ts`).
 */

/** Qué trae el plan gratis, una frase por línea. */
export const incluidoGratis: string[] = [
	'Agenda, clientes, ventas y reportes',
	'El chat de WhatsApp del negocio: el texto que escribas no tiene tope',
	'Uso mensual incluido de avisos, plantillas y campañas',
	'Todo tu equipo, sin cobro por persona',
];

/** Lo que no trae el plan gratis y sí el de pago. */
export const soloEnPlanDePago: string[] = [
	'El asistente de IA que contesta por WhatsApp',
	'Mucho más uso mensual de avisos, plantillas y campañas',
];

/** Qué trae el plan de pago. */
export const incluidoDePago: string[] = [
	'Todo lo del plan gratis',
	'El asistente de IA que contesta por WhatsApp',
	'Mucho más uso mensual de avisos, plantillas y campañas',
	'Configuración inicial hecha contigo',
	'Precio congelado mientras seas cliente',
	'Sin contrato ni permanencia: cancelas cuando quieras',
];

/** La cuenta del plan gratis: entra a la app sin pasar por el pago. */
export const ENTRADA_GRATIS = 'https://app.vyvapos.com/auth/login';
