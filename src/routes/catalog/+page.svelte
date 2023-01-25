<script lang="ts">
	import { catalogDetails, catalogCreate } from '../routes'
	import type { GetItemsResponse } from './+page.server'
	export let data: GetItemsResponse
</script>

<h1>Items</h1>

<a href={catalogCreate()}>create</a>

<div>
	{#each data.items as { id, name }}
		<p id={`${id}`}>id: {id} name: {name}</p>
		<a href={catalogDetails(id)}>details</a>
	{/each}
</div>
