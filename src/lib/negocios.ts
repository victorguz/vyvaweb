/**
 * Directorio público de negocios: el buscador (/negocios) y la ficha de cada
 * negocio (/negocios/<slug>).
 *
 * Estas páginas se arman en el servidor en cada visita (SSR), no al publicar
 * la web: un negocio que se activa en el directorio, o que cambia su ficha en
 * "Mi negocio", aparece sin volver a publicar nada. Amplify guarda la
 * respuesta unos minutos (ver CACHE_CONTROL) para que Google y los clientes
 * reciban la página ya armada y rápida.
 *
 * Si el API falla: se reintenta una vez, luego se usa la última lectura buena
 * de este servidor y, si no hay ninguna, la página responde 503 sin caché
 * (SIN_CACHE) mientras la CDN sigue entregando su última copia buena
 * (`stale-if-error`). Nunca se publica un directorio vacío ni un "no existe"
 * por una falla pasajera.
 *
 * Fuentes, todas públicas y sin sesión (las mismas que usa la app):
 *   - Directorio: dominio `businessDirectory` del negocio de Vyva → enabledIds.
 *   - Negocio: /businesses/public/:id y /businesses/public/slug/:slug.
 *   - Ficha: dominio `businessPublicProfile` del negocio (publicProfile,
 *     onlineBooking, onlineStore). Ausente equivale a los valores por defecto.
 *   - Servicios: /products/public/business/:id con la misma regla que el
 *     agendamiento (servicio publicado y, si el negocio no muestra todos por
 *     defecto, marcado como público).
 *
 * Variables de entorno (Amplify → variables de entorno del app):
 *   VYVA_API_URL          base del API; por defecto la de producción
 *   VYVA_ID_BUSINESS      negocio de Vyva que guarda el directorio
 *   VYVA_APP_URL          app donde se agenda; por defecto app.vyvapos.com
 */

const env = (clave: string): string | undefined =>
	(import.meta.env as Record<string, string | undefined>)[clave] ?? process.env[clave];

const API = (env('VYVA_API_URL') ?? 'https://kpdlrafaa7.execute-api.us-east-1.amazonaws.com/api').replace(/\/$/, '');
const VYVA_ID_BUSINESS = env('VYVA_ID_BUSINESS') ?? 'f5173e34-fc33-451d-934a-f47ef248a541';
export const APP_URL = (env('VYVA_APP_URL') ?? 'https://app.vyvapos.com').replace(/\/$/, '');

/**
 * Cabecera de caché de las páginas del directorio: Amplify (CDN) las guarda 5
 * minutos y, pasado ese tiempo, sigue entregando la copia anterior mientras
 * arma la nueva. El navegador no guarda nada para no quedarse con datos viejos.
 */
export const CACHE_CONTROL = 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400, stale-if-error=86400';

/** Para cuando el API falla y no hay nada guardado: que nadie guarde esa respuesta. */
export const SIN_CACHE = 'no-store';

/** Cuánto guarda cada servidor en memoria lo que leyó del API. */
const TTL_MS = 60_000;

export interface Direccion {
	texto: string;
	calle: string;
	barrio: string;
	ciudad: string;
	region: string;
	codigoPostal: string;
	pais: string;
	lat?: number;
	lng?: number;
}

export interface Servicio {
	id: string;
	nombre: string;
	descripcion: string;
	precio: number;
	minutos: number;
	/** Valoración, consulta o evaluación: el servicio con el que se empieza. */
	deEntrada: boolean;
}

export interface Negocio {
	id: string;
	slug: string;
	nombre: string;
	eslogan: string;
	descripcion: string;
	rubro: string;
	/** Rubro tal como lo guarda Vyva (aesthetics, spa…), para el tipo de schema.org. */
	area: string;
	logo: string;
	fotos: string[];
	direccion: Direccion | null;
	telefono: string;
	whatsapp: string;
	email: string;
	sitioWeb: string;
	instagram: string;
	facebook: string;
	tiktok: string;
	agendaEnLinea: boolean;
	tiendaEnLinea: boolean;
	servicios: Servicio[];
}

/** Lo que el buscador necesita de cada negocio; va incrustado en la página. */
export interface NegocioResumen {
	slug: string;
	nombre: string;
	rubro: string;
	zona: string;
	ciudad: string;
	eslogan: string;
	logo: string;
	fotos: string[];
	desde: number;
	servicios: string[];
	agendaEnLinea: boolean;
}

type Cacheado<T> = { hasta: number; valor: Promise<T> };
const memoria = new Map<string, Cacheado<unknown>>();

/** Guarda en memoria el resultado de `leer` durante TTL_MS. Un error no se guarda. */
function recordar<T>(clave: string, leer: () => Promise<T>): Promise<T> {
	const ahora = Date.now();
	const guardado = memoria.get(clave) as Cacheado<T> | undefined;
	if (guardado && guardado.hasta > ahora) return guardado.valor;

	const valor = leer().then(
		(leido) => {
			ultimoBueno.set(clave, leido);
			return leido;
		},
		(error) => {
			// Si el API falla, se entrega lo último que se leyó bien y se reintenta
			// en la próxima visita. Sin nada guardado, el error sube a la página.
			memoria.delete(clave);
			if (ultimoBueno.has(clave)) {
				console.warn(`[negocios] ${clave}: se usa la última lectura buena (${(error as Error).message}).`);
				return ultimoBueno.get(clave) as T;
			}
			throw error;
		}
	);
	memoria.set(clave, { hasta: ahora + TTL_MS, valor });
	return valor;
}

/** Última lectura correcta de cada clave, sin vencimiento: el respaldo si el API falla. */
const ultimoBueno = new Map<string, unknown>();

export class ErrorApi extends Error {
	constructor(
		readonly ruta: string,
		readonly estado: number
	) {
		super(`HTTP ${estado} en ${ruta}`);
	}
}

/** GET al API con un reintento ante errores del servidor o de red. */
async function pedir<T>(ruta: string, intento = 1): Promise<T> {
	let respuesta: Response;
	try {
		respuesta = await fetch(`${API}${ruta}`, {
			headers: { accept: 'application/json' },
			signal: AbortSignal.timeout(6000),
		});
	} catch (error) {
		if (intento < 2) return pedir<T>(ruta, intento + 1);
		throw error;
	}
	if (respuesta.status >= 500 && intento < 2) return pedir<T>(ruta, intento + 1);
	if (!respuesta.ok) throw new ErrorApi(ruta, respuesta.status);
	const cuerpo = (await respuesta.json()) as { success?: boolean; data?: T };
	if (cuerpo?.success === false) throw new ErrorApi(ruta, respuesta.status);
	return cuerpo.data as T;
}

/** Como `pedir`, pero un 404 significa "no existe" y devuelve null. */
async function pedirSiExiste<T>(ruta: string): Promise<T | null> {
	try {
		return await pedir<T>(ruta);
	} catch (error) {
		if (error instanceof ErrorApi && error.estado === 404) return null;
		throw error;
	}
}

function parsearJSON<T>(valor: unknown): T | null {
	if (typeof valor !== 'string' || !valor.trim()) return null;
	try {
		return JSON.parse(valor) as T;
	} catch {
		return null;
	}
}

/** Valor del primer dominio de un grupo para un negocio, ya parseado. */
async function dominio<T>(grupo: string, idBusiness: string): Promise<T | null> {
	const datos = await pedir<Array<{ value?: string }>>(
		`/domains/public/group?group=${encodeURIComponent(grupo)}&idBusiness=${encodeURIComponent(idBusiness)}`
	);
	return parsearJSON<T>(datos?.[0]?.value);
}

/** Ids de los negocios activados en el directorio, en su orden. */
export function idsDelDirectorio(): Promise<string[]> {
	return recordar('directorio', async () => {
		const valor = await dominio<{ enabledIds?: unknown[] }>('businessDirectory', VYVA_ID_BUSINESS);
		const ids = Array.isArray(valor?.enabledIds) ? valor.enabledIds : [];
		return ids.filter((id): id is string => typeof id === 'string' && id.trim().length > 0);
	});
}

interface Ficha {
	publicProfile: boolean;
	onlineBooking: boolean;
	onlineStore: boolean;
}

/** Misma lectura que `parseBusinessPublicProfile` de la app. */
async function ficha(idBusiness: string): Promise<Ficha> {
	// Un error del API sube (no se asume "publicada": el negocio pudo haberla apagado).
	const valor = await dominio<Partial<Ficha>>('businessPublicProfile', idBusiness);
	return {
		publicProfile: valor?.publicProfile !== false,
		onlineBooking: valor?.onlineBooking !== false,
		onlineStore: valor?.onlineStore === true,
	};
}

async function muestraTodosLosServicios(idBusiness: string): Promise<boolean> {
	const datos = await pedir<{ enabled?: boolean }>(
		`/domains/public/show-public-by-default?idBusiness=${encodeURIComponent(idBusiness)}&type=service`
	);
	return datos?.enabled === true;
}

/** Servicios publicados del negocio. Un error del API sube: mejor reintentar que publicar una ficha sin servicios. */
async function servicios(idBusiness: string): Promise<Servicio[]> {
	const [productos, todos] = await Promise.all([
		pedir<any[]>(`/products/public/business/${encodeURIComponent(idBusiness)}`),
		muestraTodosLosServicios(idBusiness),
	]);
	return (productos ?? [])
		.filter(
			(p) =>
				p?.isService === true &&
				p?.status === 'published' &&
				(todos || p?.showPublic === true) &&
				Number(p?.price) > 0
		)
		.map((p) => {
			const nombre = nombrePublico(p.publicName, p.name);
			return {
				id: String(p.id),
				nombre,
				descripcion: String(p.description ?? '').trim(),
				precio: precioVigente(p.price, p.offerPrice),
				minutos: Number(p.measure) > 0 ? Number(p.measure) : 60,
				deEntrada: DE_ENTRADA.test(normalizar(nombre)),
			};
		})
		.filter((s) => s.nombre.length > 0)
		// Primero el servicio de entrada (valoración, consulta…), luego del más barato al más caro.
		.sort(
			(a, b) =>
				Number(b.deEntrada) - Number(a.deEntrada) ||
				a.precio - b.precio ||
				a.nombre.localeCompare(b.nombre, 'es')
		);
}

const DE_ENTRADA = /^(valoracion|consulta|evaluacion|diagnostico)\b/;

/**
 * La oferta solo cuenta si es un precio real y menor al de lista. Hay
 * servicios guardados con `offerPrice: 0`, que no significa "gratis".
 */
function precioVigente(precio: unknown, oferta: unknown): number {
	const lista = Number(precio);
	const rebajado = Number(oferta);
	return Number.isFinite(rebajado) && rebajado > 0 && rebajado < lista ? rebajado : lista;
}

export const normalizar = (texto: string): string =>
	texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

/**
 * Nombre que ve el cliente. El formulario de productos guardaba a veces solo
 * la primera letra del nombre como nombre público ("L"); un nombre público de
 * menos de tres letras se trata como error de carga y se usa el nombre.
 */
function nombrePublico(publico: unknown, nombre: unknown): string {
	const p = String(publico ?? '').trim();
	return p.length >= 3 ? p : String(nombre ?? '').trim();
}

function direccion(valor: unknown): Direccion | null {
	const datos = parsearJSON<Record<string, any>>(valor);
	if (!datos) {
		const texto = typeof valor === 'string' ? valor.trim() : '';
		return texto
			? { texto, calle: texto, barrio: '', ciudad: '', region: '', codigoPostal: '', pais: '' }
			: null;
	}
	const buscar = (tipo: string) =>
		(datos.addressComponents as any[] | undefined)?.find((c) => c?.types?.includes(tipo));
	const componente = (tipo: string): string => buscar(tipo)?.longText ?? '';
	const numero = datos.streetNumber ?? componente('street_number');
	// "Cra. 50" se lee mejor que "Carrera 50" en una línea corta.
	const via = buscar('route')?.shortText ?? datos.route ?? '';
	return {
		texto: String(datos.formattedAddress ?? '').trim(),
		calle: [via, numero && `#${numero}`].filter(Boolean).join(' '),
		barrio: componente('neighborhood'),
		ciudad: String(datos.city ?? datos.locality ?? componente('locality') ?? ''),
		region: String(datos.administrativeArea ?? componente('administrative_area_level_1') ?? ''),
		codigoPostal: String(datos.postalCode ?? componente('postal_code') ?? ''),
		pais: String(datos.countryCode ?? 'CO'),
		lat: datos.location?.lat,
		lng: datos.location?.lng,
	};
}

/** Los navegadores fuera de Safari no muestran HEIC; esas fotos no se publican. */
const fotoVisible = (url: unknown): url is string =>
	typeof url === 'string' && /^https?:\/\//.test(url) && !/\.hei[cf](\?|$)/i.test(url);

function enlace(valor: unknown, base: string): string {
	const crudo = String(valor ?? '').trim();
	if (!crudo) return '';
	if (/^https?:\/\//.test(crudo)) return crudo;
	if (/^[\w-]+\.[\w.-]+\//.test(crudo)) return `https://${crudo}`;
	return `${base}${crudo.replace(/^@/, '')}`;
}

function whatsapp(valor: unknown): string {
	const digitos = String(valor ?? '').replace(/\D/g, '');
	if (!digitos) return '';
	// Celular colombiano sin indicativo: 3XXXXXXXXX → 57…
	return digitos.length === 10 && digitos.startsWith('3') ? `57${digitos}` : digitos;
}

const RUBROS: Record<string, string> = {
	aesthetics: 'Centro de estética',
	spa: 'Spa',
	beauty: 'Salón de belleza',
	barbershop: 'Barbería',
	nails: 'Uñas',
	dentistry: 'Odontología',
	physiotherapy: 'Fisioterapia',
	health: 'Salud',
	restaurant: 'Restaurante',
};

/** Tipo de schema.org según el rubro; Google lo usa para la ficha local. */
const TIPOS_SCHEMA: Record<string, string> = {
	aesthetics: 'BeautySalon',
	beauty: 'BeautySalon',
	spa: 'DaySpa',
	barbershop: 'HairSalon',
	nails: 'NailSalon',
	dentistry: 'Dentist',
	physiotherapy: 'Physiotherapy',
	health: 'MedicalBusiness',
	restaurant: 'Restaurant',
};

export const tipoSchema = (area: string): string => TIPOS_SCHEMA[area] ?? 'LocalBusiness';

function armar(b: Record<string, any>, f: Ficha, lista: Servicio[]): Negocio {
	const fotos = (b.coverImages ?? []).filter(fotoVisible);
	return {
		id: String(b.id),
		slug: String(b.slug),
		nombre: String(b.name ?? '').trim(),
		eslogan: String(b.slogan ?? '').trim(),
		descripcion: String(b.description ?? '').trim(),
		rubro: RUBROS[String(b.area ?? '')] ?? '',
		area: String(b.area ?? ''),
		logo: fotoVisible(b.logo) ? b.logo : '',
		fotos: fotos.length ? fotos : fotoVisible(b.logo) ? [b.logo] : [],
		direccion: direccion(b.address),
		telefono: String(b.phone ?? '').trim(),
		whatsapp: whatsapp(b.whatsapp),
		email: String(b.email ?? '').trim(),
		sitioWeb: enlace(b.website, 'https://'),
		instagram: enlace(b.instagram, 'https://instagram.com/'),
		facebook: enlace(b.facebook, 'https://facebook.com/'),
		tiktok: enlace(b.tiktok, 'https://tiktok.com/@'),
		agendaEnLinea: f.onlineBooking,
		tiendaEnLinea: f.onlineStore,
		servicios: lista,
	};
}

/**
 * Misma regla que `isPublicProfileComplete` de la app: sin nombre ni imagen
 * la ficha saldría vacía y da peor impresión que no existir.
 */
function publicable(b: Record<string, any> | null | undefined, f: Ficha): boolean {
	if (!b || b.isActive === false || !f.publicProfile) return false;
	if (!String(b.name ?? '').trim() || !String(b.slug ?? '').trim()) return false;
	return fotoVisible(b.logo) || (b.coverImages ?? []).some(fotoVisible);
}

/** Ficha completa de un negocio del directorio, o null si no se publica. */
export function negocioPorSlug(slug: string): Promise<Negocio | null> {
	const limpio = slug.trim().toLowerCase();
	return recordar(`negocio:${limpio}`, async () => {
		const [ids, b] = await Promise.all([
			idsDelDirectorio(),
			pedirSiExiste<Record<string, any>>(`/businesses/public/slug/${encodeURIComponent(limpio)}`),
		]);
		if (!b?.id || !ids.includes(b.id)) return null;
		const [f, lista] = await Promise.all([ficha(b.id), servicios(b.id)]);
		return publicable(b, f) ? armar(b, f, lista) : null;
	});
}

/** Todos los negocios publicables del directorio, en el orden del directorio. */
export function negociosDelDirectorio(): Promise<Negocio[]> {
	return recordar('negocios', async () => {
		const ids = await idsDelDirectorio();
		const negocios = await Promise.all(
			ids.map(async (id) => {
				const b = await pedirSiExiste<Record<string, any>>(`/businesses/public/${encodeURIComponent(id)}`);
				if (!b?.id) return null;
				const [f, lista] = await Promise.all([ficha(b.id), servicios(b.id)]);
				return publicable(b, f) ? armar(b, f, lista) : null;
			})
		);
		return negocios.filter((n): n is Negocio => n !== null);
	});
}

export function resumen(n: Negocio): NegocioResumen {
	return {
		slug: n.slug,
		nombre: n.nombre,
		rubro: n.rubro,
		zona: [n.direccion?.barrio, n.direccion?.ciudad].filter(Boolean).join(', '),
		ciudad: n.direccion?.ciudad ?? '',
		eslogan: n.eslogan,
		logo: n.logo,
		fotos: n.fotos.slice(0, 4),
		desde: n.servicios.length ? Math.min(...n.servicios.map((s) => s.precio)) : 0,
		servicios: n.servicios.map((s) => s.nombre),
		agendaEnLinea: n.agendaEnLinea,
	};
}

/** Enlace al agendamiento de la app, donde se elige servicio, día y hora. */
export function enlaceAgendar(n: Negocio | NegocioResumen): string {
	return `${APP_URL}/a/${encodeURIComponent(n.slug)}`;
}

export function duracion(minutos: number): string {
	const h = Math.floor(minutos / 60);
	const m = minutos % 60;
	if (!h) return `${m} min`;
	return m ? `${h} h ${m} min` : `${h} h`;
}

/** Recorta un texto a `max` caracteres sin partir palabras. */
export function recortar(texto: string, max: number): string {
	const limpio = texto.replace(/\s+/g, ' ').trim();
	if (limpio.length <= max) return limpio;
	return limpio.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}
