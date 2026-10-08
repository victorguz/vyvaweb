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
		a: 'Es la aplicación donde queda todo lo que mueve tu negocio en el día: lo que te escriben por WhatsApp, las citas, los pedidos, el cobro, la historia de cada cliente y las cuentas. En un solo lugar, para que nada dependa de acordarse.',
		temas: ['general'],
	},
	{
		q: '¿Para qué me sirve si ya me organizo con WhatsApp y una libreta?',
		a: 'Mientras atiendes a poca gente, funciona. Cuando el día se llena, empiezan a caerse cosas: un mensaje sin responder, una cita que nadie anotó, un pedido que quedó en la conversación, un cliente que no volvió y nadie notó. Vyva sostiene eso por ti y deja registro de todo sin que nadie lo copie a ningún lado.',
		temas: ['general'],
	},
	{
		q: '¿Qué tipo de negocios lo usan?',
		a: 'Negocios que atienden a mucha gente con un equipo pequeño: estética y belleza, salud y bienestar, mascotas, entrenamiento, comida por encargo y ventas por redes. Tanto los que reciben citas como los que reciben pedidos. Si atiendes dos o tres personas al día, todavía no te compensa.',
		temas: ['general'],
	},
	{
		q: '¿Tengo que instalar algo?',
		a: 'No. Vyva funciona en el navegador, desde el computador o el celular. Entras con tu correo y ya.',
		temas: ['plataforma'],
	},
	{
		q: '¿Necesito saber de tecnología?',
		a: 'No. La cuenta queda configurada contigo al empezar, y cada indicador del panel explica qué significa y qué decisión permite tomar. Si algo no se entiende, se pregunta por WhatsApp.',
		temas: ['plataforma', 'soporte'],
	},
	{
		q: '¿Qué pasa con los clientes que tengo en la libreta?',
		a: 'Se cargan contigo en la llamada de configuración, empezando por los que tienen cita próxima y los que vienen seguido. No hay que digitarlos uno por uno antes de arrancar.',
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
		a: 'Las que necesites. No cobramos por usuario, así que sumar a alguien al equipo no cambia lo que pagas al mes.',
		temas: ['precio'],
	},
	{
		q: '¿Qué entra en el precio?',
		a: 'En el plan de pago, todo: el WhatsApp del negocio, las citas y sus avisos, los pedidos, el cobro, la historia de cada cliente, los reportes y el asistente de IA. No se cobra por persona del equipo, ni comisión por los clientes que atiendes, ni módulos aparte.',
		temas: ['precio'],
	},
	{
		q: '¿Los mensajes de WhatsApp se cobran aparte?',
		a: 'Nosotros no te cobramos por mensaje: ni el chat, ni los avisos de cita, ni las campañas. Lo que sí tiene un costo es la tarifa de Meta por los mensajes de marketing, que pagas directamente a Meta como cualquiera que use WhatsApp Business: en Colombia ronda un centavo de dólar por mensaje, así que escribirle a mil clientes cuesta unos trece dólares. El plan de pago trae mucho más uso mensual que el gratis, y antes de enviar una plantilla o una campaña la pantalla te dice cuántos envíos te quedan.',
		temas: ['whatsapp', 'precio'],
	},
	{
		q: '¿Qué incluye el plan gratis y qué lo limita?',
		a: 'Agenda, clientes, ventas, reportes y el chat de WhatsApp del negocio, con todo tu equipo. Trae un uso mensual incluido de avisos de Vyva (citas, recordatorios y ventas), de plantillas por el WhatsApp de tu negocio y de campañas. El texto que escribes en el chat no tiene tope. El asistente de IA no viene en el plan gratis.',
		temas: ['precio', 'empezar'],
	},
	{
		q: '¿Cómo sé cuántos envíos me quedan?',
		a: 'Antes de enviar una plantilla o una campaña, Vyva te dice cuántos te quedan en el mes. Si una campaña tiene más contactos de los que te quedan, no se envía a medias: te avisamos antes y puedes reducir la lista o pasar al plan completo.',
		temas: ['precio', 'whatsapp'],
	},
	{
		q: '¿Qué pasa si agoto el uso mensual del plan gratis?',
		a: 'Dejas de poder enviar más avisos, plantillas o campañas hasta el mes siguiente, o hasta que pases al plan completo, que trae mucho más. Tus clientes, tu agenda, tus ventas y el texto del chat siguen funcionando igual.',
		temas: ['precio'],
	},
	{
		q: '¿Funciona con el WhatsApp de mi negocio?',
		a: 'Sí, el chat trabaja sobre el número de WhatsApp del negocio. La conexión se hace una sola vez, y es uno de los pasos de la configuración inicial que hacemos contigo.',
		temas: ['whatsapp'],
	},
	{
		q: '¿Cómo sabe Vyva quién está dejando de venir?',
		a: 'Mira cada cuánto vuelve cada cliente y marca a los que se pasaron de su propio ritmo. No es un plazo fijo igual para todos: a quien viene cada mes y a quien viene cada tres meses no se les mide con la misma vara.',
		temas: ['general', 'plataforma'],
	},
	{
		q: '¿Vyva me consigue clientes nuevos?',
		a: 'No. No somos marketplace ni agencia de pauta: lo que hacemos es ayudarte a conservar y recuperar los que ya tienes, que suele ser bastante más barato que traer gente nueva.',
		temas: ['general'],
	},
	{
		q: '¿Emite facturación electrónica ante la DIAN?',
		a: 'No, hoy no está integrada. Vyva registra tus ventas y te da los reportes, pero la facturación electrónica se sigue haciendo por fuera.',
		temas: ['plataforma'],
	},
	{
		q: '¿La información de mis clientes es mía?',
		a: 'Sí. Tu negocio es el dueño de esos datos y nosotros solo los guardamos y procesamos para prestarte el servicio. Puedes pedir una copia completa cuando quieras, incluso si decides irte.',
		temas: ['datos'],
	},
	{
		q: '¿Y si lo pruebo y no me sirve?',
		a: 'No hay permanencia: cancelas cuando quieras desde el perfil de tu negocio y no se vuelve a cobrar. Si cancelas dentro de los primeros siete días, te devolvemos el pago completo.',
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
