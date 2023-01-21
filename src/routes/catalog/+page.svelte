<script>
	import routes from '../routes';

	/** @type {import("./$types").GetItemsResponse} */
	export let data;
</script>

<h1>Items</h1>

<div>
	{#each data.items as { id, name }}
		<p {id}>id: {id} name: {name}</p>
		<a href="{routes.catalog}/{id}">more</a>
	{/each}
</div>
