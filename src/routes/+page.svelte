<script lang="ts">
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if $page.data.user}
	<h1>welcome: {$page.data.user.name}</h1>
{:else}
	<h1>welcome!</h1>
{/if}
