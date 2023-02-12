/*
calling this in the +layout.svelte loads it when required

<svelte:head>
	<script async src="http://localhost:8081/remoteEntry.js"></script>
</svelte:head>

<slot></slot>
*/
export async function app() {
	// @ts-ignore
	const module = await window.app.get('./App')
	return module().default
}
