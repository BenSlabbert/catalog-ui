import type { Actions } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
import routes from '../../../routes'

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		console.log('running on server create')

		const data = await request.formData()
		console.log('data', data)
		const name = data.get('name')
		console.log('name', name)

		console.log(`import.meta.env.VITE_API_URL ${import.meta.env.VITE_API_URL}`)
		const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/item`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
			}),
		})
		const item = await resp.json()
		console.log('resp from server:', item)
		console.log('redirecting:', routes.catalog)

		throw redirect(303, routes.catalog)
	},
}
