<script>
	let open = $state(false);

	const links = [
		{ label: 'Características', href: '/#caracteristicas' },
		{ label: 'Casos de uso', href: '/#casos' },
		{ label: 'Planes', href: '/pricing' },
		{ label: 'FAQ', href: '/faq' },
	];

	const APP = 'https://app.vyvapos.com';
	const SIGNUP = 'https://app.vyvapos.com/plans/essential';

	function close() {
		open = false;
	}
</script>

<header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
	<nav
		class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
		aria-label="Principal"
	>
		<a href="/" class="flex items-center" onclick={close}>
			<img src="/brand/vyva_logo_black.svg" alt="Vyva" class="h-7 w-auto" />
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-brand-600"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden items-center gap-3 md:flex">
			<a
				href={APP}
				class="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-brand-600"
			>
				Entrar
			</a>
			<a
				href={SIGNUP}
				class="btn-press rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/20"
			>
				Empezar gratis
			</a>
		</div>

		<button
			class="btn-press -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
			aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			{#if open}
				<svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
					<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
				</svg>
			{:else}
				<svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
					<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
				</svg>
			{/if}
		</button>
	</nav>

	{#if open}
		<div class="border-t border-slate-200 bg-white px-5 pb-6 pt-2 md:hidden">
			{#each links as link}
				<a
					href={link.href}
					onclick={close}
					class="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
				>
					{link.label}
				</a>
			{/each}
			<div class="mt-3 grid gap-3">
				<a
					href={APP}
					class="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700"
				>
					Entrar
				</a>
				<a
					href={SIGNUP}
					class="btn-press rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
				>
					Empezar gratis
				</a>
			</div>
		</div>
	{/if}
</header>
