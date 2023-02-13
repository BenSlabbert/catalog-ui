<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>protected</h1>

{#if $page.data.user}
	<p>Welcome {$page.data.user.name}!</p>
	<slot />
{:else}
	<!-- replace with programatic redirect to login? -->
	<a href="/login">please login</a>
{/if}
