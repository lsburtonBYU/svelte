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
</style>
