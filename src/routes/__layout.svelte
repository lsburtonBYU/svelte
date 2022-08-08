<!-- src/routes/__layout.svelte -->
<nav>
	<div class="nav-container">
		<a href="./" class="nav-logo" title="Back to Homepage">Pigeons Aren't Real</a>
		<div class="nav-links">
			<a href="./about" class="link">About</a>
			<a href="./blog" class="link">Blog</a>
			<a href="./projects" class="link">Projects</a>
			<a href="./contact" class="link">Contact</a>
		</div>
	</div>
</nav>

<!-- Pages will be injected below -->
<slot />

<style>
</style>
