import type { Actions, PageServerLoad } from './$types';
import type { RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import routes from '../../../routes';

type Item = {
	id: number;
	name: string;
};

export type { Item };

export const load = (async (event: RequestEvent) => {
	const resp = await fetch(`http://localhost:8080/api/item/${event.params.id}`);
	const item: Item = await resp.json();
	console.log('server get item', item);
	return item;
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		console.log('running on server');

		const params = event.params;
		const data = await event.request.formData();
		console.log('data', data);
		const name = data.get('name');
		console.log('name', name);

		const resp = await fetch(`http://localhost:8080/api/item/${params.id}`, {
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
