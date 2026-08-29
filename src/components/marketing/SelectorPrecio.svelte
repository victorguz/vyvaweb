<script>
	/**
	 * Precio del plan con selector mensual/anual.
	 *
	 * Los importes llegan resueltos desde el build (`src/lib/precio.ts`), que
	 * los lee del catálogo público de planes. Aquí solo se elige cuál se
	 * enseña, así que la isla es diminuta y la página sigue siendo estática.
	 *
	 * Si el plan no ofrece ciclo anual no se pinta el selector: se enseña el
	 * mensual y ya.
	 */
	let { precio, signupSelector = '[data-signup-plan]' } = $props();

	let ciclo = $state('mensual');

	const tieneAnual = $derived(!!precio?.ciclos?.anual);
	const activo = $derived(
		ciclo === 'anual' && tieneAnual ? precio.ciclos.anual : precio.ciclos.mensual
	);
	const sufijo = $derived(ciclo === 'anual' && tieneAnual ? '/año' : '/mes');

	/**
	 * Reapunta los CTA de registro de la página al ciclo elegido. El checkout
	 * no vuelve a preguntar la periodicidad: la lee de la URL, así que el
	 * enlace tiene que llevarla.
	 *
	 * Se toca el DOM de la página en vez de mover los CTA dentro de la isla
	 * para no alterar la jerarquía de llamadas a la acción, que es una
	 * decisión de la página y no de este componente.
	 */
	$effect(() => {
		if (typeof document === 'undefined') return;
		const anual = ciclo === 'anual' && tieneAnual;
		for (const nodo of document.querySelectorAll(signupSelector)) {
			const base = nodo.dataset.signupPlan || nodo.getAttribute('href');
			if (!base) continue;
			nodo.dataset.signupPlan = base;
			nodo.setAttribute('href', anual ? `${base}?interval=year` : base);
		}
	});
</script>

{#if tieneAnual}
	<div
		class="mx-auto mb-6 inline-flex rounded-full bg-slate-100 p-1"
		role="group"
		aria-label="Ciclo de facturación"
	>
		<button
			type="button"
			class="rounded-full px-4 py-1.5 text-sm font-semibold transition"
			class:bg-white={ciclo === 'mensual'}
			class:shadow-sm={ciclo === 'mensual'}
			class:text-slate-500={ciclo !== 'mensual'}
			aria-pressed={ciclo === 'mensual'}
			onclick={() => (ciclo = 'mensual')}
		>
			Mensual
		</button>
		<button
			type="button"
			class="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition"
			class:bg-white={ciclo === 'anual'}
			class:shadow-sm={ciclo === 'anual'}
			class:text-slate-500={ciclo !== 'anual'}
			aria-pressed={ciclo === 'anual'}
			onclick={() => (ciclo = 'anual')}
		>
			Anual
			{#if precio.ahorroAnual > 0}
				<span class="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
					−{precio.ahorroAnual}%
				</span>
			{/if}
		</button>
	</div>
{/if}

{#if precio.precioLista && ciclo === 'mensual'}
	<p class="text-base font-semibold text-slate-400">
		Precio de lista <span class="line-through">{precio.precioLista}/mes</span>
	</p>
{/if}

<p class="mt-1 text-5xl font-extrabold tracking-tight text-ink">
	{activo.texto}<span class="text-xl font-bold text-slate-400">{sufijo}</span>
</p>

{#if ciclo === 'anual' && precio.anualPorMes}
	<p class="mt-2 text-sm font-semibold text-emerald-700">
		Equivale a {precio.anualPorMes.texto}/mes
	</p>
{/if}

<p class="mt-2 text-sm text-slate-500">
	Pesos colombianos, IVA incluido. Usuarios ilimitados.
</p>
