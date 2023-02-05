<script lang="ts">
	import { API_ROUTES } from '$lib/constants'
	import { onDestroy } from 'svelte'

	let result = ''
	let cancel = false

	onDestroy(() => {
		cancel = true
	})

	async function stopStream() {
		cancel = true
	}

	async function startStream() {
		cancel = false
		const response = await fetch(API_ROUTES.stream)

		if (!response || !response.body) {
			return
		}

		// TextDecoderStream part of WEB API
		// https://kit.svelte.dev/docs/web-standards#stream-apis
		// eslint-disable-next-line no-undef
		const reader = response.body.pipeThrough(new TextDecoderStream()).getReader()

		if (!reader) {
			return
		}

		while (!cancel) {
			const { value, done } = await reader.read()

			if (done) {
				console.log('stream from server complete', done)
				break
			}

			if (cancel) {
				console.log('user cancelled stream', cancel)
				break
			}

			console.log('resp', done, value)
			result += `${value}<br>`
		}

		await reader.cancel()
	}
</script>

<button on:click={startStream}>start</button>
<button on:click={stopStream}>stop</button>

<section>
	<p>{@html result}</p>
</section>
