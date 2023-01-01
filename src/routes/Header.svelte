<script>
	import { page } from '$app/stores';
	import routes from './routes';
</script>

<header>
	<nav>
		<ul>
			<li style={$page.url.pathname === routes.home ? 'color: red' : ''}>
				<a href={routes.home}>Home</a>
			</li>
			<li style={$page.url.pathname === routes.counter ? 'color: red' : ''}>
				<a href={routes.counter}>Counter</a>
			</li>
			<li style={$page.url.pathname === routes.about ? 'color: red' : ''}>
				<a href={routes.about}>About</a>
			</li>
		</ul>
	</nav>
</header>
