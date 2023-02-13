<script lang="ts">
	import { page } from '$app/stores'
	import routes from './routes'
</script>

<nav>
	{#if !$page.data.user}
		<p>not logged in</p>
		<a href="/login">login</a>
	{/if}
	{#if $page.data.user}
		<p>logged in</p>
		<ul>
			<li>
				<a href={routes.home}>Home</a>
			</li>
			<li>
				<a href={routes.catalog}>Catalog</a>
			</li>
			<li>
				<a href={routes.counter}>Counter</a>
			</li>
			<li>
				<a href={routes.about}>About</a>
			</li>
			<li>
				<a href={routes.search}>search</a>
			</li>
			<li>
				<a href={routes.stream}>stream</a>
			</li>
			<li>
				<a
					class={$page.url.pathname.startsWith(routes.fm) ? 'disableAnchor' : null}
					href={routes.fm}>fm</a
				>
			</li>
			<li>
				<form action="/logout" method="POST">
					<button type="submit">Log out</button>
				</form>
			</li>
		</ul>
	{/if}
</nav>

<style>
	.disableAnchor {
		pointer-events: none;
	}
</style>
