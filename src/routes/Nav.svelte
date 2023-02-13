<script lang="ts">
	import { page } from '$app/stores'
	import routes from './routes'
	import EMPTY_STRING from '../lib/constants'
	const RED = 'color: black'
</script>

<nav>
	{#if !$page.data.user}
		<p>not logged in</p>
		<a href="/login">login</a>
	{/if}
	{#if $page.data.user}
		<p>logged in</p>
		<ul>
			<li style={$page.url.pathname === routes.home ? RED : EMPTY_STRING}>
				<a href={routes.home}>Home</a>
			</li>
			<li style={$page.url.pathname === routes.catalog ? RED : EMPTY_STRING}>
				<a href={routes.catalog}>Catalog</a>
			</li>
			<li style={$page.url.pathname === routes.counter ? RED : EMPTY_STRING}>
				<a href={routes.counter}>Counter</a>
			</li>
			<li style={$page.url.pathname === routes.about ? RED : EMPTY_STRING}>
				<a href={routes.about}>About</a>
			</li>
			<li style={$page.url.pathname === routes.search ? RED : EMPTY_STRING}>
				<a href={routes.search}>search</a>
			</li>
			<li style={$page.url.pathname === routes.stream ? RED : EMPTY_STRING}>
				<a href={routes.stream}>stream</a>
			</li>
			<li style={$page.url.pathname === routes.fm ? RED : EMPTY_STRING}>
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
