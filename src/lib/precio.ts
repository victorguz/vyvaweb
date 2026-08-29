/**
 * Fuente única del precio para toda la web.
 *
 * El precio real vive en el plan de la app y se lee del catálogo público de
 * planes (`GET /api/subscriptions/public/plans`), que no pide sesión. Se
 * resuelve una vez al construir el sitio: como Amplify reconstruye en cada
 * push, cambiar el precio del plan y relanzar el build lo actualiza en todas
 * las páginas a la vez.
 *
 * Si el endpoint no responde o el plan no trae precio se usa el respaldo de
 * abajo, para que un fallo de red nunca deje la web sin precio.
 *
 * Variables de entorno (Amplify → variables de entorno del app):
 *   PLANS_URL  catálogo público de planes; por defecto el de producción
 *   PLAN_ID    plan que se muestra; por defecto el primero activo
 */

/** Ciclos que la web sabe pintar. */
export type Ciclo = 'mensual' | 'anual';

export interface PrecioCiclo {
	/** Importe formateado, p. ej. "$45.000". */
	texto: string;
	/** Importe numérico, por si alguna página necesita calcular. */
	valor: number;
}

export interface Precio {
	/** Precio vigente del ciclo mensual. */
	precio: string;
	/** Precio de lista, tachado junto al vigente. Vacío si no aplica. */
	precioLista: string;
	/** Valores numéricos, por si alguna página necesita calcular. */
	valores: { precio: number; precioLista: number };
	/** Mensual y, si el plan lo ofrece, anual. */
	ciclos: { mensual: PrecioCiclo; anual?: PrecioCiclo };
	/**
	 * Lo que ahorra el anual frente a doce meses sueltos, redondeado. 0 si no
	 * hay ciclo anual o si no ahorra nada.
	 */
	ahorroAnual: number;
	/** Equivalente mensual del plan anual, para poder compararlos de tú a tú. */
	anualPorMes?: PrecioCiclo;
	/** true cuando el precio vino del plan y no del respaldo. */
	desdeElPlan: boolean;
}

/** Respaldo: plan fundador vigente. Se usa si el catálogo no responde. */
const RESPALDO = {
	precio: 69900,
	precioLista: 99000,
};

const PLANS_URL =
	import.meta.env.PLANS_URL ??
	process.env.PLANS_URL ??
	'https://kpdlrafaa7.execute-api.us-east-1.amazonaws.com/api/subscriptions/public/plans';
const PLAN_ID = import.meta.env.PLAN_ID ?? process.env.PLAN_ID ?? '';

/** Formatea a pesos colombianos sin decimales: 69900 → "$69.900". */
export function formatoCOP(valor: number): string {
	return '$' + Math.round(valor).toLocaleString('es-CO');
}

function ciclo(valor: number): PrecioCiclo {
	return { texto: formatoCOP(valor), valor };
}

function construir(
	mensual: number,
	precioLista: number,
	anual: number | undefined,
	desdeElPlan: boolean
): Precio {
	const doceMeses = mensual * 12;
	const ahorroAnual =
		anual && doceMeses && anual < doceMeses
			? Math.round((1 - anual / doceMeses) * 100)
			: 0;

	return {
		precio: formatoCOP(mensual),
		precioLista: precioLista > mensual ? formatoCOP(precioLista) : '',
		valores: { precio: mensual, precioLista },
		ciclos: {
			mensual: ciclo(mensual),
			...(anual ? { anual: ciclo(anual) } : {}),
		},
		ahorroAnual,
		...(anual ? { anualPorMes: ciclo(Math.round(anual / 12)) } : {}),
		desdeElPlan,
	};
}

/**
 * Busca el plan en la respuesta de la fachada, que puede venir como arreglo
 * o envuelta en `data`/`items`. Si hay `PLAN_ID` se toma ese plan; si no, el
 * primero.
 */
function elegirPlan(payload: unknown): Record<string, any> | undefined {
	const raiz = payload as any;
	const lista: any[] = Array.isArray(raiz)
		? raiz
		: (raiz?.data ?? raiz?.items ?? raiz?.plans ?? []);
	if (!Array.isArray(lista) || lista.length === 0) return undefined;
	if (PLAN_ID) {
		return lista.find((p) => p?.id === PLAN_ID || p?._id === PLAN_ID);
	}
	return lista.find((p) => p?.active !== false) ?? lista[0];
}

/** Importe de un ciclo, aceptando tanto `prices.month.amount` como el plano. */
function importe(plan: Record<string, any>, ciclo: 'month' | 'year'): number {
	const anidado = Number(plan?.prices?.[ciclo]?.amount);
	if (Number.isFinite(anidado) && anidado > 0) return anidado;
	const plano = Number(ciclo === 'month' ? plan?.price : plan?.annualPrice);
	return Number.isFinite(plano) && plano > 0 ? plano : 0;
}

let cache: Promise<Precio> | undefined;

/**
 * Devuelve el precio que debe mostrar la web. Se resuelve una sola vez por
 * build: todas las páginas comparten el mismo resultado.
 */
export function getPrecio(): Promise<Precio> {
	if (cache) return cache;

	cache = (async (): Promise<Precio> => {
		if (!PLANS_URL) {
			return construir(RESPALDO.precio, RESPALDO.precioLista, undefined, false);
		}

		try {
			const respuesta = await fetch(PLANS_URL, {
				headers: { accept: 'application/json' },
				signal: AbortSignal.timeout(6000),
			});
			if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

			const plan = elegirPlan(await respuesta.json());
			const mensual = plan ? importe(plan, 'month') : 0;
			if (!mensual) {
				throw new Error('el plan no trae un precio mensual utilizable');
			}

			const anual = importe(plan!, 'year') || undefined;
			const lista = Number(plan?.listPrice ?? plan?.fullPrice ?? RESPALDO.precioLista);
			return construir(
				mensual,
				Number.isFinite(lista) ? lista : 0,
				anual,
				true
			);
		} catch (error) {
			console.warn(
				`[precio] No se pudo leer el plan (${(error as Error).message}). ` +
					`Se usa el respaldo ${formatoCOP(RESPALDO.precio)}.`
			);
			return construir(RESPALDO.precio, RESPALDO.precioLista, undefined, false);
		}
	})();

	return cache;
}
