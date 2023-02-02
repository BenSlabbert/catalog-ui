<script lang="ts">
	import { catalogDetails, catalogCreate } from '../routes'
	import type { GetItemsResponse } from './+page.server'
	export let data: GetItemsResponse
</script>

<h1>Items</h1>

<section>
	<div>
		<a href={catalogCreate()}>create</a>
	</div>
</section>

<section>
	{#each data.items as { id, name }}
		<div>
			<p id={`${id}`}>id: {id} name: {name}</p>
			<a href={catalogDetails(id)}>details</a>
		</div>
	{/each}
</section>
