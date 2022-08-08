<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('https://dog.ceo/api/breeds/image/random/6');
		const blogposts = await res.json();

		console.log(blogposts);
		return {
			props: {
				blogposts
			}
		};
	};
</script>

<script>
	export let blogposts;
</script>

<!-- src/routes/blog.svelte -->
<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="container">
	<h1>Random dog images</h1>
	<div class="blogposts">
		{#each blogposts.message as post}
			<div class="post">
				<img src={post} alt="random dog" />

				<p class="readmore">
					read more
					<!-- <a style=" color: rgb(10, 10, 139);" href={`/blog/${post.id}`}> Read More </a> -->
				</p>
			</div>
		{/each}
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
