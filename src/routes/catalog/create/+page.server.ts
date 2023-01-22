import type { Actions, RequestEvent} from './$types';
import { redirect } from '@sveltejs/kit';
import routes from '../../routes';

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		console.log('running on server');

		const data = await event.request.formData();
		console.log('data', data);
		const name = data.get('name');
		console.log('name', name);

		const resp = await fetch(`http://localhost:8080/api/item`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name
			})
		});
		const item = await resp.json();
		console.log('resp from server:', item);

		throw redirect(307, routes.catalog);
	}
};
