<script>
	import { page } from '$app/stores';
	import routes from './routes';
</script>

<header>
	<nav>
		<ul>
			<li style={$page.url.pathname === routes.Home ? 'color: red' : ''}>
				<a href={routes.Home}>Home</a>
			</li>
			<li style={$page.url.pathname === routes.Counter ? 'color: red' : ''}>
				<a href={routes.Counter}>Counter</a>
			</li>
			<li style={$page.url.pathname === routes.About ? 'color: red' : ''}>
				<a href={routes.About}>About</a>
			</li>
		</ul>
	</nav>
</header>
