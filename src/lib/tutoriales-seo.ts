/**
 * Cada tutorial es también contenido de búsqueda activa: alguien que ya usa
 * Vyva —o que la está probando— busca "cómo agendar una cita en Vyva", no
 * "agendar una cita". Aquí viven el título con el que se busca, la meta
 * descripción y los pasos escritos, que explican con más detalle que las
 * etiquetas del video pero sin alargarse.
 *
 * El catálogo con los videos y sus tiempos sigue en tutoriales.json; esto solo
 * lo acompaña, así que regenerar ese archivo no borra este contenido.
 */

export interface TutorialTexto {
	/** Titular en forma de búsqueda. Es el H1 y el <title> de la página. */
	titulo: string;
	/** Meta descripción, orientada a la búsqueda. */
	descripcion: string;
	/** Una o dos frases: qué se logra y cuándo hace falta. */
	intro: string;
	/** Los pasos escritos, en el orden en que se hacen. */
	pasos: string[];
	/** Detalle que evita el error más común. Opcional. */
	nota?: string;
}

export const TUTORIALES_TEXTO: Record<string, TutorialTexto> = {
	'vyva-login': {
		titulo: 'Cómo iniciar sesión en Vyva',
		descripcion:
			'Entrar a tu cuenta de Vyva desde el navegador del computador o del celular, con Google o con tu correo.',
		intro:
			'Vyva funciona en el navegador, así que no hay nada que instalar. Estos son los pasos para entrar desde cualquier dispositivo.',
		pasos: [
			'Abre app.vyvapos.com en el navegador del computador o del celular.',
			'Si tu correo es de Google, pulsa "Continuar con Google" y elige la cuenta: es el camino más rápido y no tienes que recordar otra contraseña.',
			'Si prefieres el correo, escríbelo en el campo y pulsa Continuar.',
			'Escribe tu contraseña cuando te la pida y entras directo al panel.',
		],
		nota: 'Si entras siempre desde el mismo celular, guarda la página en la pantalla de inicio: se abre como una aplicación y no tienes que volver a escribir la dirección.',
	},
	'vyva-registro-cliente': {
		titulo: 'Cómo crear una cuenta en Vyva',
		descripcion:
			'Registrarte en Vyva con tu correo o con Google para reservar citas en los negocios que usan la plataforma.',
		intro:
			'La cuenta de cliente es la que usan las personas que reservan. Se crea en menos de un minuto y sirve para todos los negocios que trabajan con Vyva.',
		pasos: [
			'Entra a Vyva y elige crear cuenta.',
			'Pulsa "Continuar con Google" si quieres saltarte el formulario, o escribe tu correo electrónico.',
			'Vyva revisa si ese correo ya tiene cuenta; si es nuevo, te pide los datos.',
			'Escribe tu nombre completo y tu número de teléfono, que es donde llegan las confirmaciones de cita.',
			'Elige una contraseña, acepta la política de privacidad y pulsa Continuar.',
		],
		nota: 'El teléfono conviene ponerlo bien desde el principio, porque es por ahí donde llegan el recordatorio y cualquier cambio de la cita.',
	},
	'vyva-registrar-negocio': {
		titulo: 'Cómo registrar tu negocio en Vyva',
		descripcion:
			'Los cinco pasos del asistente para crear tu negocio en Vyva: nombre, qué ofreces, área, punto físico y logo.',
		intro:
			'Es lo primero que haces al llegar a Vyva. El asistente son cinco pantallas y deja el negocio creado y listo para configurar.',
		pasos: [
			'Escribe el nombre que verán tus clientas. Si el campo trae uno puesto por defecto, cámbialo: es el que aparece en tu página de reservas.',
			'Elige si vendes productos, servicios con cita, o las dos cosas.',
			'Selecciona el área de tu negocio; con eso Vyva ajusta los módulos a tu tipo de operación.',
			'Si atiendes en un local, escribe la dirección. Si atiendes en línea o a domicilio, indícalo en ese mismo paso.',
			'Sube el logo y las fotos de portada, o déjalo para después y termina el asistente.',
		],
		nota: 'El logo y las fotos se pueden cambiar en cualquier momento, así que no vale la pena frenar el registro por conseguirlos.',
	},
	'vyva-configurar-negocio': {
		titulo: 'Cómo configurar tu negocio y obtener el enlace de reservas',
		descripcion:
			'Dónde se ajustan el logo, el nombre, el eslogan y la ficha pública de tu negocio en Vyva, y de dónde sale el enlace que compartes para que te reserven.',
		intro:
			'Esta es la configuración que ven tus clientas. Al final de la pantalla está el enlace de reservas, que es lo que pones en la bio de Instagram y en el estado de WhatsApp.',
		pasos: [
			'Abre el menú y pulsa el nombre de tu negocio para entrar en su configuración.',
			'Sube el logo y ajusta el encuadre. Es lo primero que ve una clienta que llega a tu página.',
			'En Información principal escribe el nombre y el identificador, y añade un eslogan corto: también lo leen tus clientas.',
			'Guarda esa sección. Cada bloque tiene su propio botón y se guarda por separado, así que no esperes un guardado general al final.',
			'En Perfil público activa "Agendamiento en línea" para que puedan reservarte, y "Ficha pública" para publicar la página de tu negocio.',
			'Copia el enlace que aparece debajo: ese es el que compartes con tus clientas.',
		],
		nota: 'Si el enlace no abre nada, casi siempre es porque la ficha pública quedó sin activar o porque los servicios todavía no están publicados.',
	},
	'vyva-crear-servicio': {
		titulo: 'Cómo crear un servicio en Vyva',
		descripcion:
			'Añadir un servicio con precio y duración en Vyva, y por qué la duración es lo que define los huecos de tu agenda.',
		intro:
			'El servicio es la unidad con la que trabaja la agenda. Su duración es lo que determina qué horarios se le ofrecen a una clienta cuando va a reservar.',
		pasos: [
			'Entra en tu catálogo y pulsa "Añadir servicio", luego "Crear servicio".',
			'Escribe el nombre tal como quieres que lo lea tu clienta.',
			'Pon el precio.',
			'Define la duración con realismo: si el servicio toma una hora y media, ponla completa, porque de ahí salen los huecos que ofrece tu agenda.',
			'Si necesitas descripción, categoría o insumos asociados, entra en Registro avanzado.',
			'Guarda y el servicio queda en tu catálogo.',
		],
		nota: 'Duraciones demasiado cortas son la causa más común de agendas apretadas: la cita entra, pero el equipo no alcanza.',
	},
	'vyva-crear-producto': {
		titulo: 'Cómo crear un producto con inventario en Vyva',
		descripcion:
			'Añadir un producto a tu tienda en Vyva y llevar el control de unidades disponibles.',
		intro:
			'Un producto se crea igual que un servicio, con una diferencia: lleva stock, y ese stock baja solo cuando vendes.',
		pasos: [
			'Abre el menú, entra en Tienda y pulsa "Nuevo producto" → "Crear producto".',
			'Escribe el nombre y el precio de venta.',
			'Entra en Registro avanzado para la descripción y el inventario.',
			'Despliega Opciones adicionales y escribe cuántas unidades tienes hoy.',
			'Guarda: el producto queda a la venta en tu tienda.',
		],
		nota: 'Conviene cargar el inventario real desde el primer día, aunque sean pocas unidades, porque después es difícil saber qué se vendió y qué se descuadró.',
	},
	'vyva-publicar-servicios': {
		titulo: 'Cómo publicar tus servicios en la página de reservas',
		descripcion:
			'Hacer que tu catálogo se vea en la página pública de Vyva para que tus clientas puedan reservar en línea.',
		intro:
			'Crear un servicio no lo hace visible. Este es el paso que falta para que aparezca en tu página de reservas.',
		pasos: [
			'Entra en tu catálogo. El interruptor de arriba publica todos los servicios de una vez.',
			'Si prefieres ir uno por uno, abre el servicio y entra en Opciones adicionales.',
			'Cambia el estado a "Publicado": eso es lo que lo hace visible.',
			'Revisa el nombre público, que es el que leerá tu clienta y puede ser distinto del interno.',
			'Guarda los cambios y el servicio ya se puede reservar en línea.',
		],
	},
	'vyva-crear-cliente': {
		titulo: 'Cómo añadir una clienta en Vyva',
		descripcion:
			'Crear la ficha de una clienta en Vyva con su teléfono y sus etiquetas, para agendarle y para segmentar campañas.',
		intro:
			'La ficha es lo que después permite agendarle, ver su historial y escribirle. Son cuatro campos y toma menos de un minuto.',
		pasos: [
			'Entra en Clientes y pulsa "Nuevo cliente".',
			'Escribe nombre y apellido.',
			'Añade el correo, que es donde llegan las confirmaciones de cita.',
			'Añade el teléfono: sin él no se le puede avisar por WhatsApp ni incluirla en una campaña.',
			'Ponle etiquetas si quieres segmentarla después, y guarda.',
		],
		nota: 'El teléfono es el campo que más se olvida y el que más falta hace: una clienta sin número queda fuera de los recordatorios y de las campañas.',
	},
	'vyva-agendar-cita': {
		titulo: 'Cómo agendar una cita en Vyva',
		descripcion:
			'Crear una cita desde el calendario de Vyva: elegir el hueco, el servicio, la especialista y la clienta.',
		intro:
			'Es la operación que más se repite en el día. Desde el calendario toma menos de diez segundos.',
		pasos: [
			'Abre el menú y entra en Calendario. Cada especialista tiene su propia columna.',
			'Pulsa el hueco libre que quieras ocupar, en la columna de quien va a atender.',
			'Elige "Agendar cita".',
			'Escoge el servicio: su duración fija automáticamente la hora de fin.',
			'Continúa al resumen y elige la clienta.',
			'Apunta en la nota lo que haga falta recordar y finaliza. La cita queda en la agenda.',
		],
		nota: 'Si la clienta todavía no existe, créala desde ahí mismo antes de finalizar, para que la cita quede asociada a su historial.',
	},
	'vyva-agenda-negocio': {
		titulo: 'Cómo ver las citas del día en Vyva',
		descripcion:
			'Dónde se consultan las reservas de tu negocio en Vyva, cómo se filtran y cómo se ven por especialista.',
		intro:
			'Hay dos vistas y sirven para cosas distintas: el listado para buscar, y el calendario para ver cómo va el día.',
		pasos: [
			'Abre el menú y entra en Citas.',
			'Cierra el menú para ver la agenda completa.',
			'En el listado aparecen las reservas con su clienta, su hora y su estado.',
			'Filtra por fechas o busca por clienta o servicio cuando necesites algo puntual.',
			'Cambia al calendario para verlas por especialista y franja horaria, que es la vista útil durante el día.',
		],
	},
	'vyva-carrito-venta': {
		titulo: 'Cómo cobrar una venta en Vyva',
		descripcion:
			'Cobrar servicios y productos desde la tienda de Vyva: carrito, cliente, método de pago y recibo.',
		intro:
			'Sirve tanto para el producto que se lleva una clienta como para cerrar el servicio que acaba de tomar. Todo queda en la misma orden.',
		pasos: [
			'Abre el menú y entra en Tienda.',
			'Toca un producto para añadirlo al carrito, y tócalo otra vez para sumar unidades. El total se recalcula solo.',
			'Asigna la venta a una clienta: al elegirla vuelves solo al carrito.',
			'Cuando esté completo, pulsa recibir el pago.',
			'Elige el método: efectivo, transferencia, datáfono o link de pago. El monto ya viene con el total.',
			'Confirma el cobro. La venta queda registrada con su número de orden, y puedes imprimir el recibo o compartirlo.',
		],
		nota: 'Asignar la venta a una clienta es lo que alimenta su historial de compras y su ticket promedio. Una venta sin clienta cuenta en la caja, pero no dice nada del negocio.',
	},
	'vyva-crear-formulario': {
		titulo: 'Cómo crear un formulario para captar clientas',
		descripcion:
			'Armar un formulario en Vyva desde una plantilla y compartir su enlace público para recoger datos de clientas nuevas.',
		intro:
			'Sirve para recoger datos desde una historia de Instagram, un anuncio o un código QR en el local, sin escribir cada persona a mano.',
		pasos: [
			'Entra en Formularios y pulsa "Nuevo formulario".',
			'Parte de una plantilla para no empezar de cero, y continúa al editor.',
			'Ponle un nombre que reconozcas después, porque es el que verás en el listado de respuestas.',
			'Revisa los campos: la plantilla ya trae nombre, correo y teléfono.',
			'En cada campo elige su tipo y si es obligatorio. El teléfono conviene dejarlo obligatorio.',
			'Guarda y comparte el enlace público.',
		],
	},
	'vyva-agendamiento-publico': {
		titulo: 'Cómo reserva una clienta desde tu enlace de Vyva',
		descripcion:
			'El recorrido completo que hace una clienta al reservar desde el enlace público de tu negocio en Vyva.',
		intro:
			'Vale la pena hacerlo una vez como si fueras tu clienta: es la mejor forma de detectar servicios sin publicar, precios viejos o duraciones mal puestas.',
		pasos: [
			'Abre el enlace de reserva que compartes con tus clientas.',
			'Verás tu catálogo con precio y duración, tal como lo ve ella.',
			'Elige un servicio, y suma los que quieras a la misma cita.',
			'Vyva calcula los huecos libres sumando la duración de todo lo elegido.',
			'Elige día y hora entre los disponibles.',
			'Revisa el resumen con los servicios y el total, y confirma. La reserva queda registrada sin llamadas ni mensajes.',
		],
	},
	'vyva-cliente-reservar': {
		titulo: 'Cómo reserva una clienta que ya tiene cuenta en Vyva',
		descripcion:
			'Cómo agenda una cita desde Vyva una clienta registrada, y dónde encuentra después sus reservas.',
		intro:
			'Cuando la clienta ya tiene cuenta, no vuelve a escribir sus datos: entra, elige y reserva. Así se ve del otro lado.',
		pasos: [
			'Al entrar, la clienta ve los negocios donde puede reservar.',
			'Elige tu negocio y entra en "Agendamiento online" desde su perfil.',
			'Escoge el servicio que necesita.',
			'Vyva le muestra solo los huecos libres del negocio; elige día y hora.',
			'Revisa el resumen con el servicio, la fecha y el precio, y confirma.',
			'La reserva le queda guardada en "Mis Citas".',
		],
	},
};
