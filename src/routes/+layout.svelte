<script>
    import { onMount } from 'svelte';
	import CaPage from './CAPage.svelte';
import Header from './Header.svelte';
	import './styles.css';
	onMount(()=> {

	})
	
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<object title="ca_page_btn">
		<CaPage/>
	</object>

	<footer>
		<p>visit petrichor <a href="https://petrichor.events/home"> Petrichor-24</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width:100vw;

		overflow-y: hidden;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		overflow-y: hidden;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {

		footer {
			padding: 12px 0;
		}
	}
</style>
