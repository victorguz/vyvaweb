/**
 * Fuente única de las preguntas frecuentes.
 *
 * Cada página escoge por tema con `faqsPorTema`, y el componente Faq las pinta
 * y publica los datos estructurados. Para añadir una pregunta basta con
 * agregarla aquí: aparece en el blog, y en la home o en precio si le pones el
 * tema correspondiente.
 */

export type TemaFaq =
	| 'general'
	| 'precio'
	| 'plataforma'
	| 'whatsapp'
	| 'empezar'
	| 'datos'
	| 'soporte';

export interface Faq {
	q: string;
	a: string;
	temas: TemaFaq[];
}

export const FAQS: Faq[] = [
	{
		q: '¿Qué es Vyva exactamente?',
		a: 'Es el sistema con el que un negocio de belleza maneja su agenda, sus clientas, sus ventas y su equipo en un solo lugar. Lo que lo diferencia es que también te avisa qué clientas están dejando de venir y te deja escribirles por WhatsApp desde la misma pantalla.',
		temas: ['general'],
	},
	{
		q: '¿Qué hace Vyva que no haga una agenda normal?',
		a: 'Una agenda te organiza el día: reservar, atender y cobrar. Vyva hace eso y además vigila tu clientela: te dice quién se está saliendo de su ritmo de visita, quién ya dejó de venir y quiénes son tus mejores clientas, y te deja escribirles por WhatsApp desde la misma pantalla. Es la diferencia entre administrar la agenda y sostener la caja.',
		temas: ['general'],
	},
	{
		q: '¿Qué tipo de negocios lo usan?',
		a: 'Estéticas, spas, clínicas estéticas, salones, barberías y centros de masajes con equipo. Está pensado para negocios que ya facturan todos los días; si atiendes dos o tres citas al día y trabajas sola, todavía no te compensa.',
		temas: ['general'],
	},
	{
		q: '¿Tengo que instalar algo?',
		a: 'No. Vyva funciona en el navegador, desde el computador o el celular. Entras con tu correo y ya.',
		temas: ['plataforma'],
	},
	{
		q: '¿Necesito saber de tecnología?',
		a: 'No. La cuenta queda configurada en la llamada inicial, y cada indicador del panel explica qué significa y qué decisión permite tomar. Si algo no se entiende, se pregunta por WhatsApp.',
		temas: ['plataforma', 'soporte'],
	},
	{
		q: '¿Qué pasa con las clientas que tengo en la libreta?',
		a: 'Se cargan contigo en la llamada de configuración, empezando por las que tienen cita próxima y las que vienen seguido. No hay que digitarlas una por una antes de arrancar.',
		temas: ['empezar'],
	},
	{
		q: '¿Hay costos de instalación o de configuración?',
		a: 'No. La configuración inicial se hace contigo en una llamada y va incluida en el precio.',
		temas: ['precio', 'empezar'],
	},
	{
		q: '¿Cómo se paga?',
		a: 'Con tarjeta débito o crédito Visa o Mastercard, con cobro automático cada mes. Es el único medio de pago por ahora.',
		temas: ['precio'],
	},
	{
		q: '¿Hay permanencia?',
		a: 'No. Pagas mes a mes y cancelas cuando quieras desde tu cuenta: no hay penalidad, el servicio sigue hasta terminar el periodo pagado y no se cobra el mes siguiente.',
		temas: ['precio'],
	},
	{
		q: '¿El precio me sube después?',
		a: 'No mientras seas cliente. Si entras con el plan fundador, tu precio queda congelado aunque suba para quienes entren después.',
		temas: ['precio'],
	},
	{
		q: '¿Cuántas personas de mi equipo pueden usarlo?',
		a: 'Las que necesites. No cobramos por usuario, así que sumar una especialista no cambia lo que pagas al mes.',
		temas: ['precio'],
	},
	{
		q: '¿Por qué cuesta más que otras agendas?',
		a: 'Porque no cobramos por persona del equipo ni comisión por las clientas que llegan a tu negocio, y porque no es solo agenda: el chat de WhatsApp, el punto de venta, el inventario y los reportes van incluidos. Si trabajas sola hay opciones más baratas y te lo decimos de frente; si tienes equipo, conviene hacer la cuenta completa.',
		temas: ['precio'],
	},
	{
		q: '¿Los mensajes de WhatsApp se cobran aparte?',
		a: 'Los recordatorios de cita no: muchas plataformas cobran cada aviso que sale, y nosotros no. El chat con tus clientas tampoco tiene costo por mensaje. Las campañas de marketing sí tienen un cobro, pero lo hace Meta y no nosotros: en Colombia ronda un centavo de dólar por mensaje, así que una campaña a mil personas cuesta alrededor de trece dólares. Tu plan incluye campañas ilimitadas para hasta 250 clientas al mes, y a partir de ahí solo pagas lo que Meta cobre por los mensajes de más.',
		temas: ['whatsapp', 'precio'],
	},
	{
		q: '¿Funciona con el WhatsApp de mi negocio?',
		a: 'Sí, el chat trabaja sobre el número de WhatsApp del negocio. La conexión se hace una sola vez y se ve paso a paso en la demo.',
		temas: ['whatsapp'],
	},
	{
		q: '¿Cómo sabe Vyva qué clientas están dejando de venir?',
		a: 'Mira cada cuánto vuelve cada clienta y marca a las que se pasaron de su propio ritmo. No es un plazo fijo igual para todas: a la que viene cada mes y a la que viene cada tres meses no se les mide con la misma vara.',
		temas: ['general', 'plataforma'],
	},
	{
		q: '¿Vyva me consigue clientas nuevas?',
		a: 'No. No somos marketplace ni agencia de pauta: lo que hacemos es ayudarte a conservar y recuperar las que ya tienes, que suele ser bastante más barato que traer gente nueva.',
		temas: ['general'],
	},
	{
		q: '¿Emite facturación electrónica ante la DIAN?',
		a: 'No, hoy no está integrada. Vyva registra tus ventas y te da los reportes, pero la facturación electrónica se sigue haciendo por fuera.',
		temas: ['plataforma'],
	},
	{
		q: '¿La información de mis clientas es mía?',
		a: 'Sí. Tu negocio es el dueño de esos datos y nosotros solo los guardamos y procesamos para prestarte el servicio. Puedes pedir una copia completa cuando quieras, incluso si decides irte.',
		temas: ['datos'],
	},
	{
		q: '¿Puedo verlo antes de pagar?',
		a: 'Sí. En la demo de 15 minutos ves la plataforma funcionando con los datos de un negocio real y resuelves tus dudas antes de decidir.',
		temas: ['empezar'],
	},
	{
		q: '¿Cómo pido soporte?',
		a: 'Por WhatsApp, y te responde una persona. No hay que abrir un ticket ni esperar a que un robot te mande artículos de ayuda.',
		temas: ['soporte'],
	},
];

/** Devuelve las preguntas de un tema, en el orden en que están declaradas. */
export function faqsPorTema(...temas: TemaFaq[]): Faq[] {
	return FAQS.filter((faq) => faq.temas.some((tema) => temas.includes(tema)));
}
