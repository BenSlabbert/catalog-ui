/*
calling this in the +layout.svelte loads it when required

<svelte:head>
	<script async src="http://localhost:8081/remoteEntry.js"></script>
</svelte:head>

<slot></slot>
*/
import { browser } from '$app/environment'

export async function app() {
	if (browser) {
		// @ts-ignore
		const module = await window.app.get('./App')
		return module().default
	}

	return null
}
