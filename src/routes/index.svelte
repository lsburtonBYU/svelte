<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>SvelteKit Test</title>
</svelte:head>

<main>
	<h1>Pigeons Aren't Real</h1>
	<p class="title title-1">Pigeons</p>
	<div class="bottom">
		<p class="title title-2">Aren't Real</p>
		<p class="subtitle">Don't believe "Science"</p>
		<p class="scroll-button">
			<a href="{base}/about">Learn more <span class="arrow svelte-1w6d40x">→</span></a>
		</p>
	</div>
	<div class="background" />
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 38vh 52vh;
	}

	main > * {
		grid-column: 1 / span 1;
		padding: 0 80px;
	}

	main p {
		line-height: 1.2em;
		margin: 0;
	}

	.subtitle,
	.scroll-button {
		padding-top: 1rem;
	}

	h1 {
		display: none;
	}

	.title {
		font-size: 4rem;
		font-weight: 800;
		letter-spacing: -0.03em;
	}

	.title-1 {
		grid-row: 1 / span 1;
		align-self: end;
		padding-bottom: 6px;
	}

	.title-2 {
		font-size: 4rem;
		margin: 0;
	}

	.subtitle {
		font-size: 1.5rem;
	}

	.bottom {
		grid-row: 2 / span 1;
		margin: 0;
	}

	.background {
		grid-row: 2 / span 1;
		background-color: #adadd4;
		z-index: -1;
		min-height: 50vh;
	}

	.scroll-button {
		display: flex;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.scroll-button .arrow {
		margin-left: 0.5rem;
	}
</style>
