<script lang="ts">
	let count = 0

	function increment() {
		count += 1
	}
</script>

<div class="counter">
	<p>this is a counter component!</p>

	<button on:click={() => increment()}>click me!</button>

	<input bind:value={count} />
</div>
