<script>
	const categories = [
		{
			id: 'general',
			label: 'General',
			items: [
				{
					q: '¿Qué es Vyva?',
					a: 'Vyva es una plataforma integral de agendamiento y gestión para salones, estéticas, spas y barberías. Combina reservas online, clientes, punto de venta y reportes en una sola herramienta.',
				},
				{
					q: '¿Necesito conocimientos técnicos?',
					a: 'No. Vyva está diseñado para ser intuitivo: configura servicios, horarios y equipo en minutos. El soporte te acompaña en cada paso.',
				},
				{
					q: '¿Qué tipos de negocios pueden usar Vyva?',
					a: 'Salones de belleza, estéticas, spas, barberías, clínicas estéticas, centros de masajes y negocios de servicios con citas recurrentes.',
				},
			],
		},
		{
			id: 'planes',
			label: 'Planes',
			items: [
				{
					q: '¿Cuáles son los precios?',
					a: 'Planes personalizados según tu negocio. Consulta los detalles en la página de planes y precios.',
				},
				{
					q: '¿Puedo cambiar de plan?',
					a: 'Sí. Puedes subir o bajar de plan desde tu panel; los cambios aplican en el siguiente ciclo de facturación.',
				},
				{
					q: '¿Por qué se cobran comisiones?',
					a: 'Cubren el uso de la plataforma y el procesamiento de pagos. Los detalles están en la página de precios.',
				},
				{
					q: '¿Hay costos ocultos?',
					a: 'No. Solo comisiones por transacción y tarifas del procesador de pagos. Sin cargos de configuración ni cancelación.',
				},
			],
		},
		{
			id: 'funcionalidades',
			label: 'Funcionalidades',
			items: [
				{
					q: '¿Qué incluye el plan Essential?',
					a: 'Una sede, página de venta personalizada, clientes, productos, servicios, suscripciones, ventas y agendamientos ilimitados, usuarios ilimitados y resúmenes por correo para pagos online.',
				},
				{
					q: '¿Diferencia Premium vs Essential?',
					a: 'Premium: hasta 3 sedes, resúmenes para todos los tipos de pago, soporte prioritario y funciones avanzadas.',
				},
				{
					q: '¿Puedo tener múltiples sedes?',
					a: 'Essential: 1 sede. Premium: hasta 3. Enterprise: ilimitadas.',
				},
				{
					q: '¿Página tutienda.vyvapos.com?',
					a: 'Cada cuenta tiene una página pública donde tus clientes ven productos, servicios y pueden reservar o comprar.',
				},
				{
					q: '¿Dominio personalizado?',
					a: 'Solo en plan Enterprise. Essential y Premium usan el subdominio tutienda.vyvapos.com.',
				},
			],
		},
		{
			id: 'tecnico',
			label: 'Técnico',
			items: [
				{
					q: '¿Necesito equipo especial para el POS?',
					a: 'No. Funciona en cualquier dispositivo con navegador: computador, tablet o celular.',
				},
				{
					q: '¿Seguridad de datos?',
					a: 'Cumplimos estándares PCI DSS. Los datos de tarjetas están encriptados y no se almacenan en nuestros servidores.',
				},
				{
					q: '¿Procesadores de pago?',
					a: 'MercadoPago como pasarela principal (tarjetas, débito, PSE y métodos populares en Colombia).',
				},
				{
					q: '¿API disponible?',
					a: 'Sí, en plan Enterprise, para integraciones y automatizaciones personalizadas.',
				},
				{
					q: '¿Respaldos?',
					a: 'Respaldos automáticos en la nube, diarios, con copias de seguridad extendidas.',
				},
			],
		},
		{
			id: 'soporte',
			label: 'Soporte',
			items: [
				{
					q: '¿Qué soporte ofrecen?',
					a: 'Todos los planes: soporte por email. Premium: ejecutivo dedicado. Enterprise: soporte 24/7 y capacitación.',
				},
				{
					q: '¿Puedo probar antes?',
					a: 'Sí. Prueba gratuita de 1 año en el plan Essential, o agenda una demo personalizada.',
				},
				{
					q: '¿Cómo contactar soporte?',
					a: 'Email: contact@solaradev.com o agenda una demo en Calendly.',
				},
				{
					q: '¿Capacitación para el equipo?',
					a: 'Básica en todos los planes; dedicada en Enterprise.',
				},
			],
		},
	];

	let active = $state('general');
	let openIndex = $state(-1);

	function selectCategory(id) {
		active = id;
		openIndex = -1;
	}

	function toggle(index) {
		openIndex = openIndex === index ? -1 : index;
	}

	const activeItems = $derived(categories.find((c) => c.id === active)?.items ?? []);
</script>

<div class="faq-tabs flex flex-wrap gap-2" role="tablist" aria-label="Categorías de preguntas">
	{#each categories as cat}
		<button
			type="button"
			role="tab"
			aria-selected={active === cat.id}
			class="btn-press rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
			class:bg-brand-600={active === cat.id}
			class:text-white={active === cat.id}
			class:bg-slate-100={active !== cat.id}
			class:text-slate-700={active !== cat.id}
			class:hover:bg-slate-200={active !== cat.id}
			onclick={() => selectCategory(cat.id)}
		>
			{cat.label}
		</button>
	{/each}
</div>

<div class="mt-8 space-y-3" role="tabpanel">
	{#each activeItems as item, i}
		<div class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
			<button
				type="button"
				class="btn-press flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink"
				aria-expanded={openIndex === i}
				onclick={() => toggle(i)}
			>
				<span>{item.q}</span>
				<span
					class="shrink-0 text-brand-600 transition-transform duration-200"
					class:rotate-180={openIndex === i}
					aria-hidden="true"
				>
					<svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
						<path
							d="M128,184a1,1,0,0,1-.71-.29l-72-72a1,1,0,0,1,1.42-1.42L128,181.59l71.29-71.3a1,1,0,0,1,1.42,1.42l-72,72A1,1,0,0,1,128,184Z"
						/>
					</svg>
				</span>
			</button>
			{#if openIndex === i}
				<div class="border-t border-slate-100 px-5 pb-4 pt-1 text-sm leading-relaxed text-slate-600">
					{item.a}
					{#if item.q.includes('precios') || item.q.includes('comisiones')}
						<a href="/pricing" class="mt-2 inline-block font-medium text-brand-600 hover:underline">
							Ver planes y precios →
						</a>
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</div>
