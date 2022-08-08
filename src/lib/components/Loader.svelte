<div class="center"><div class="loader" /></div>

<style>
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loader {
		border-radius: 50%;
		width: 6rem;
		height: 6rem;
		border: 10px solid rgba(0, 0, 0, 0.2);
		border-left: 10px solid #333;
		animation: load 800ms infinite linear;
	}

	@keyframes load {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
