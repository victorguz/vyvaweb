/**
 * Fuente única del precio para toda la web.
 *
 * El precio real vive en el plan de la app (vyva-subscriptions-api,
 * `GET /api/subscriptions/plans/app`). Ese endpoint hoy exige autenticación,
 * así que aquí se resuelve en tiempo de compilación: si `PLANS_URL` apunta a
 * una ruta pública de planes, el sitio la consulta al construirse y toma el
 * precio del plan indicado en `PLAN_ID`; si no está configurada, si la
 * petición falla o si el plan no trae precio, se usa el respaldo de abajo.
 *
 * Como Amplify reconstruye el sitio en cada push, cambiar el precio del plan
 * y relanzar el build es suficiente para que cambie en todas las páginas.
 *
 * Variables de entorno (Amplify → variables de entorno del app):
 *   PLANS_URL  ruta pública que devuelve los planes de la app
 *   PLAN_ID    identificador del plan que se muestra en la web
 */

export interface Precio {
	/** Precio vigente, el que se cobra hoy. */
	precio: string;
	/** Precio de lista, tachado junto al vigente. Vacío si no aplica. */
	precioLista: string;
	/** Valores numéricos, por si alguna página necesita calcular. */
	valores: { precio: number; precioLista: number };
	/** true cuando el precio vino del plan y no del respaldo. */
	desdeElPlan: boolean;
}

/** Respaldo: plan fundador vigente. Se usa si no hay endpoint configurado. */
const RESPALDO = {
	precio: 69900,
	precioLista: 99000,
};

const PLANS_URL = import.meta.env.PLANS_URL ?? process.env.PLANS_URL ?? '';
const PLAN_ID = import.meta.env.PLAN_ID ?? process.env.PLAN_ID ?? '';

/** Formatea a pesos colombianos sin decimales: 69900 → "$69.900". */
export function formatoCOP(valor: number): string {
	return '$' + Math.round(valor).toLocaleString('es-CO');
}

function construir(precio: number, precioLista: number, desdeElPlan: boolean): Precio {
	return {
		precio: formatoCOP(precio),
		precioLista: precioLista > precio ? formatoCOP(precioLista) : '',
		valores: { precio, precioLista },
		desdeElPlan,
	};
}

/**
 * Busca el plan en la respuesta de la fachada, que puede venir como arreglo
 * o envuelta en `data`/`items`. Si hay `PLAN_ID` se toma ese plan; si no, el
 * primero activo.
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

let cache: Promise<Precio> | undefined;

/**
 * Devuelve el precio que debe mostrar la web. Se resuelve una sola vez por
 * build: todas las páginas comparten el mismo resultado.
 */
export function getPrecio(): Promise<Precio> {
	if (cache) return cache;

	cache = (async (): Promise<Precio> => {
		if (!PLANS_URL) {
			return construir(RESPALDO.precio, RESPALDO.precioLista, false);
		}

		try {
			const respuesta = await fetch(PLANS_URL, {
				headers: { accept: 'application/json' },
				signal: AbortSignal.timeout(6000),
			});
			if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

			const plan = elegirPlan(await respuesta.json());
			const precio = Number(plan?.price ?? plan?.precio);
			if (!plan || !Number.isFinite(precio) || precio <= 0) {
				throw new Error('el plan no trae un precio utilizable');
			}

			const lista = Number(plan?.listPrice ?? plan?.fullPrice ?? RESPALDO.precioLista);
			return construir(precio, Number.isFinite(lista) ? lista : 0, true);
		} catch (error) {
			console.warn(
				`[precio] No se pudo leer el plan (${(error as Error).message}). ` +
					`Se usa el respaldo ${formatoCOP(RESPALDO.precio)}.`
			);
			return construir(RESPALDO.precio, RESPALDO.precioLista, false);
		}
	})();

	return cache;
}
