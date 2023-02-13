import type { Handle, HandleFetch } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	// https://kit.svelte.dev/docs/hooks#server-hooks-handle
	// This function runs every time the SvelteKit server receives a request — whether that happens while the app is running, or during prerendering — and determines the response

	const sessionId = event.cookies.get('sessionId')
	console.log('sessionId', sessionId)

	// should be redirected to login page
	if (!sessionId) {
		console.log('no session')

		if (!event.route) {
			// no idea why this happens
			// console.log('event.route is null, resolve event', event.url, event.route)
			return await resolve(event)
		}

		if ('/login' === event.route.id) {
			console.log('login route, resolve event')
			return await resolve(event)
		}

		// console.log(
		// 	'no session and requesting some other resource, redirect to login page',
		// 	event.url,
		// 	event.route
		// )

		// no session and not loggin in, redirect to login page
		return Response.redirect('http://localhost:5173/login')
	}

	// if there is a session set the user.locals here
	// login handler will set the session on the cookie
	// we can set this from the cookie or get data from another service
	event.locals.user = {
		name: 'name',
		role: 'ROLE',
	}

	return await resolve(event)
}

export const handleFetch: HandleFetch = ({ request, fetch }) => {
	// https://kit.svelte.dev/docs/hooks#server-hooks-handlefetch
	// This function allows you to modify (or replace) a fetch request that happens inside a load or action function that runs on the server (or during pre-rendering).

	console.log('incoming fetch', request)
	return fetch(request)
}
