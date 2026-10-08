/**
 * Lo que incluye cada plan, para las páginas de precio.
 *
 * Las cifras del plan gratis son las mismas que aplica la app al enviar
 * (`PLAN_LIMITS` en vyva-whatsapp-api y vyva-platform-api, y `FREE_PLAN_LIMITS`
 * en vyva-frontend-core): si cambia una, hay que cambiarla en todos. Aquí solo
 * se muestran.
 *
 * El precio del plan de pago NO está aquí: sale del catálogo de planes en el
 * build (`src/lib/precio.ts`).
 */
export const LIMITES_GRATIS = {
	/** Avisos que Vyva manda por su número en nombre del negocio, al mes. */
	avisos: 200,
	/** Plantillas que salen por el WhatsApp del propio negocio, al mes. */
	plantillas: 1000,
	/** Campañas distintas, al mes. */
	campanas: 5,
} as const;

const miles = (valor: number): string => valor.toLocaleString('es-CO');

/** Qué trae el plan gratis, una frase por línea. */
export const incluidoGratis: string[] = [
	'Agenda, clientes, ventas y reportes',
	'El chat de WhatsApp del negocio: el texto que escribas no tiene tope',
	`Hasta ${miles(LIMITES_GRATIS.avisos)} avisos de Vyva al mes: citas, recordatorios y ventas`,
	`Hasta ${miles(LIMITES_GRATIS.plantillas)} plantillas al mes por el WhatsApp de tu negocio`,
	`Hasta ${LIMITES_GRATIS.campanas} campañas al mes`,
	'Todo tu equipo, sin cobro por persona',
];

/** Lo que no trae el plan gratis y sí el de pago. */
export const soloEnPlanDePago: string[] = [
	'El asistente de IA que contesta por WhatsApp',
	'Avisos, plantillas y campañas sin tope',
];

/** Qué trae el plan de pago. */
export const incluidoDePago: string[] = [
	'Todo lo del plan gratis',
	'El asistente de IA que contesta por WhatsApp',
	'Avisos, plantillas y campañas sin tope',
	'Configuración inicial hecha contigo',
	'Precio congelado mientras seas cliente',
	'Sin contrato ni permanencia: cancelas cuando quieras',
];

/** La cuenta del plan gratis: entra a la app sin pasar por el pago. */
export const ENTRADA_GRATIS = 'https://app.vyvapos.com/auth/login';
