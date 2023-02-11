<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import routes from '../../routes'

	type App = {
		$destroy(): void
		baseUrl: string
		name: string
	}

	type AppProps = {
		target: HTMLElement | null
		props: {
			name: string
			baseURL: string
		}
	}

	interface AppInt {
		new (props: AppProps): App
	}

	const id = 'app'
	let app: App
	let loading = true

	onDestroy(() => {
		app?.$destroy()
	})

	onMount(async () => {
		setTimeout(async () => {
			const App = await import('$lib/federatedModuleLoader')
			const remoteClass: AppInt = await App.app()
			console.log('remoteClass', remoteClass)
			app = new remoteClass({
				target: document.getElementById(id),
				props: { name: 'data', baseURL: routes.fm },
			})
			console.log('app', app)
			loading = false
		}, 1000)
	})
</script>

<div {id} class="whiteBoarder">
	{loading ? 'loading federated module' : ''}
</div>

<style>
	.whiteBoarder {
		border: white solid;
	}
</style>
