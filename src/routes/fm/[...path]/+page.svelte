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
		// simulates some latency and handles the case when the component is unmounted before we can mount it
		setTimeout(async () => {
			const App = await import('$lib/federatedModuleLoader')
			const remoteClass: AppInt = await App.app()
			console.log('remoteClass', remoteClass)

			const element = document.getElementById(id)

			if (!element) {
				console.warn('cannot find element')
				return
			}

			app = new remoteClass({
				target: element,
				props: { name: 'data', baseURL: routes.fm },
			})
			console.log('app', app)
			loading = false
		}, 250)
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
