<script>
	let { tutorial } = $props();

	let video = $state(null);
	let actual = $state(0);

	/** Salta al punto del vídeo donde empieza ese paso. */
	function irAPaso(paso) {
		if (!video || paso.t === undefined) return;
		video.currentTime = paso.t;
		video.play();
	}

	// Resalta el paso que se está narrando, comparando con los tiempos.
	function alAvanzar() {
		if (!video) return;
		const t = video.currentTime;
		let i = 0;
		for (let k = 0; k < tutorial.pasos.length; k++) {
			if (tutorial.pasos[k].t !== undefined && tutorial.pasos[k].t <= t + 0.25) i = k;
		}
		actual = i;
	}
</script>

<div
	class="mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-black"
	style={tutorial.vertical ? `max-width:${Math.round(tutorial.ancho * 0.62)}px` : ""}
>
	<!-- svelte-ignore a11y_media_has_caption -->
	<video
		bind:this={video}
		ontimeupdate={alAvanzar}
		class="w-full"
		style={`aspect-ratio:${tutorial.ancho}/${tutorial.alto}`}
		src={`/tutoriales/${tutorial.slug}.mp4`}
		poster={`/tutoriales/${tutorial.slug}.jpg`}
		controls
		preload="metadata"
		playsinline
	></video>
</div>

<ol class="mt-8 space-y-3">
	{#each tutorial.pasos as paso, i}
		<li>
			<button
				type="button"
				class="flex w-full items-start gap-4 rounded-2xl border px-5 py-4 text-left transition-colors duration-200"
				class:border-brand-600={actual === i}
				class:bg-brand-50={actual === i}
				class:border-slate-200={actual !== i}
				class:bg-white={actual !== i}
				class:hover:bg-slate-50={actual !== i}
				onclick={() => irAPaso(paso)}
				disabled={paso.t === undefined}
			>
				<span
					class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold"
					class:bg-brand-600={actual === i}
					class:text-white={actual === i}
					class:bg-slate-100={actual !== i}
					class:text-slate-600={actual !== i}
				>
					{paso.n}
				</span>
				<span class="flex-1 text-ink">{paso.texto}</span>
				{#if paso.t !== undefined}
					<span class="mt-0.5 shrink-0 font-mono text-xs text-slate-500">
						{Math.floor(paso.t / 60)}:{String(Math.round(paso.t % 60)).padStart(2, '0')}
					</span>
				{/if}
			</button>
		</li>
	{/each}
</ol>
