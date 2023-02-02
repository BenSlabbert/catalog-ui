<script lang="ts">
	import { page } from '$app/stores'
	import type { SearchResult } from './+page.server'
	export let data: SearchResult
</script>

<h1>hello from search!</h1>

<pre>
  {JSON.stringify(data)}
</pre>

<form>
	<label>
		Search
		<input name="q" value={$page.url.searchParams?.get('q') ?? ''} />
	</label>
</form>

<div>
	{#each data.items as item}
		<div id={String(item.id)}>{item.id}</div>
	{/each}
</div>
