<script>

	import welcome_fallback from '$lib/images/svelte-welcome.png';


	
</script>

<svelte:head>
	<title>Petrichor</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="welcome">
			Petrichor
	</h1>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		width: 100%;
		font-size: 15vw;
		margin: 0;
		text-align: center;
		font-weight: 900;
	}
</style>
