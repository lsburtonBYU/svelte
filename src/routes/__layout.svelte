<script>
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<ul>
			<li><a href="{base}/" title="Back to Homepage">Pigeons Aren't Real</a></li>
			<li><a href="{base}/about">About</a></li>
			<li><a href="{base}/blog">Blog</a></li>
			<li><a href="{base}/projects">Projects</a></li>
			<li><a href="{base}/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<!-- Pages will be injected below -->
<slot />

<style>
	header {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		height: 10vh;
	}

	header nav ul {
		display: flex;
		list-style-type: none;
		padding: 0;
		margin: 0 60px;
	}

	header nav li:first-child {
		flex-grow: 1;
	}

	nav a {
		font-family: 'Inter', sans-serif;
		display: block;
		padding: 1rem;
		text-decoration: none;
		font-size: 0.85rem;
		letter-spacing: 1px;
		color: black;
	}
</style>
