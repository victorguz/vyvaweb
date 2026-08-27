<script>
	import catalogo from '../lib/tutoriales.json';

	const { grupos, tutoriales } = catalogo;

	let activo = $state(grupos[0].id);

	const items = $derived(tutoriales.filter((t) => t.grupo === activo));
</script>

<div class="flex flex-wrap gap-2" role="tablist" aria-label="Categorías de tutoriales">
	{#each grupos as grupo}
		<button
			type="button"
			role="tab"
			aria-selected={activo === grupo.id}
			class="btn-press rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
			class:bg-brand-600={activo === grupo.id}
			class:text-white={activo === grupo.id}
			class:bg-slate-100={activo !== grupo.id}
			class:text-slate-700={activo !== grupo.id}
			class:hover:bg-slate-200={activo !== grupo.id}
			onclick={() => (activo = grupo.id)}
		>
			{grupo.label}
		</button>
	{/each}
</div>

<div class="mt-8 grid gap-6 sm:grid-cols-2" role="tabpanel">
	{#each items as item (item.slug)}
		<a
			href={`/tutoriales/${item.slug}`}
			class="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-lg"
		>
			<div class="relative aspect-video overflow-hidden bg-slate-100">
				<img
					src={`/tutoriales/${item.slug}.jpg`}
					alt=""
					loading="lazy"
					decoding="async"
					class="h-full w-full"
					class:object-cover={!item.vertical}
					class:object-contain={item.vertical}
				/>
				<span
					class="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-200 group-hover:bg-ink/10"
				>
					<span
						class="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-200 group-hover:scale-110"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="ml-1 text-brand-600"
							aria-hidden="true"
						>
							<path d="M8 5v14l11-7z" />
						</svg>
					</span>
				</span>
				<span
					class="absolute bottom-2 right-2 rounded-md bg-ink/75 px-2 py-1 text-xs font-medium text-white"
				>
					{item.duracion}
				</span>
			</div>
			<div class="px-5 py-4">
				<h3 class="font-semibold text-ink">{item.titulo}</h3>
				<p class="mt-1 text-sm leading-relaxed text-slate-600">{item.descripcion}</p>
				<p class="mt-3 text-sm font-medium text-brand-600">
					Ver los {item.pasos.length} pasos →
				</p>
			</div>
		</a>
	{/each}
</div>
