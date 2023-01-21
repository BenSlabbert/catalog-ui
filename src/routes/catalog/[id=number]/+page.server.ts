import type { Actions } from './$types';
import type { RequestEvent } from "@sveltejs/kit";

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		console.log('running on server');

    const params = event.params;
		console.log('params', params);

		const resp = await fetch(`http://localhost:8080/api/item/${params.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: `updating ${params.id}`
			})
		});
		const item = await resp.json();
		console.log('resp from server:', item);
	}
};
