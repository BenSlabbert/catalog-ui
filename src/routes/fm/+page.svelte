<script lang="ts">
	import { onDestroy, onMount } from 'svelte'

	let app

	onDestroy(() => {
      console.log('on destroy', app)
		app?.$destroy()
	})

	onMount(async () => {
    console.log('on mount', app)
		const App = await import('$lib/federatedModuleLoader')
		const remoteClass = await App.app()

		// set the class on the below div
		app = new remoteClass({
			target: document.getElementById('app'),
			props: { name: 'data', path: '/', searchParams: '' },
		})
	})
</script>

<a href="/fm/123">link</a>

<div id="app" class="whiteBoarder" />

<style>
	.whiteBoarder {
		border: white solid;
	}
</style>
