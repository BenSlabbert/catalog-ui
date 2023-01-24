import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

type Item = {
	id: number;
	name: string;
};

export type { Item };

export const load: PageServerLoad = async ({ params }) => {
	console.log(`import.meta.env.VITE_API_URL ${import.meta.env.VITE_API_URL}`);
	const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/item/${params.id}`);
	const item: Item = await resp.json();
	console.log('server get item', item);
	return item;
};

export const actions: Actions = {
	default: async ({ params, request }) => {
		console.log('running on server edit');

		const data = await request.formData();
		console.log('data', data);
		const name = data.get('name');
		console.log('name', name);

		console.log(`import.meta.env.VITE_API_URL ${import.meta.env.VITE_API_URL}`);
		const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/item/${params.id}`, {
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

		throw redirect(303, '/catalog');
	}
};
