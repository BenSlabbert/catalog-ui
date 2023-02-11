<script lang="ts">
	import { page } from '$app/stores'
	import routes from './routes'
	import EMPTY_STRING from '../lib/constants'
	const RED = 'color: red'
</script>

<header>
	<nav>
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
			<li style={$page.url.pathname === routes.enhancedForms ? RED : EMPTY_STRING}>
				<a href={routes.enhancedForms}>enhanced-forms</a>
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
		</ul>
	</nav>
</header>

<style>
	.disableAnchor {
		pointer-events: none;
	}
</style>
