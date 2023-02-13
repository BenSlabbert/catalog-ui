<script lang="ts">
	import type { Item } from './+page.server'
	export let data: Item
</script>

<form method="POST">
	<label>
		id: {data.id}
		<input name="name" bind:value={data.name} />
	</label>
	<button>Submit</button>
</form>
