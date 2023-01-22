<script lang="ts">
	import { catalogEdit } from '../../routes';
	import type Item from './+page';
	export let data: Item;
</script>

<h1>Item: {data.id}</h1>

<div>id: {data.id} name: {data.name}</div>

<a href={catalogEdit(data.id)}>edit</a>
