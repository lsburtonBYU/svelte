<script>
	import { base } from '$app/paths';
</script>

<nav>
	<div class="nav-container">
		<a href="{base}/" class="nav-logo" title="Back to Homepage">Pigeons Aren't Real</a>
		<div class="nav-links">
			<a href="{base}/about" class="link">About</a>
			<a href="{base}/blog" class="link">Blog</a>
			<a href="{base}/projects" class="link">Projects</a>
			<a href="{base}/contact" class="link">Contact</a>
		</div>
	</div>
</nav>

<!-- Pages will be injected below -->
<slot />

<style>
</style>
