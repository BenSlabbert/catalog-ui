<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>protected</h1>

{#if $page.data.user}
<p>name {$page.data.user.name}</p>
<p>role {$page.data.user.role}</p>
	<slot />
{:else}
	<!-- replace with programatic redirect to login? -->
	<a href="/login">please login</a>
{/if}
