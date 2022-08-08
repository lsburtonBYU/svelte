<script>
	import Loader from '$lib/components/Loader.svelte';
	const fetchImage = (async () => {
		const response = await fetch('https://dog.ceo/api/breeds/image/random/9');
		return await response.json();
	})();
</script>

<!-- src/routes/blog.svelte -->
<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="container">
	<h1>Random dog images</h1>
	<div class="blogposts">
		{#await fetchImage}
			<Loader />
		{:then data}
			{#each data.message as post}
				<div class="post">
					<img src={post} alt="random dog" />

					<p class="readmore">read more</p>
				</div>
			{/each}
		{:catch error}
			<p>An error occurred!</p>
		{/await}
	</div>
</div>

<style>
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

	.blogposts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.post {
		display: flex;
		flex-direction: column;
	}
	.post img {
		flex: 1 1 80%;
		max-height: 300px;
		aspect-ratio: 4/3;
	}

	.post p {
		flex: 1 1 20%;
	}
</style>
