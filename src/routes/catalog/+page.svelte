<script lang="ts">
	import routes from '../routes';
	import type GetItemsResponse from './+page';

	export let data: GetItemsResponse;
</script>

<h1>Items</h1>

<div>
	{#each data.items as { id, name }}
		<p {id}>id: {id} name: {name}</p>
		<a href="{routes.catalog}/{id}">more</a>
	{/each}
</div>
