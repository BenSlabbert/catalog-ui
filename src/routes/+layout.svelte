<script>
	import Header from './Header.svelte';
	// import global styles
	import './styles.css';
</script>

<!--div containing the entire app-->
<div>
	<!--import header component here-->
	<Header />

	<main>
		<!--slot here is just loading +page.svelte-->
		<slot />
	</main>

	<footer>
		<p>this is the footer</p>
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
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
