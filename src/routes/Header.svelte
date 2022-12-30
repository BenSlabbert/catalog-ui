<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li style={$page.url.pathname === '/' ? 'color: red' : ''}>
				<a href="/">Home</a>
			</li>
			<li style={$page.url.pathname === '/counter' ? 'color: red' : ''}>
				<a href="/counter">Counter</a>
			</li>
			<li style={$page.url.pathname === '/about' ? 'color: red' : ''}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>
