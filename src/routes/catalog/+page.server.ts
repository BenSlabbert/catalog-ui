import type { PageServerLoad } from './$types';

type Item = {
	id: number;
	name: string;
};

type GetItemsResponse = {
	items: Item[];
};

export type { Item, GetItemsResponse };

export const csr = false;
export const ssr = true;
export const prerender = false;

export const load: PageServerLoad<GetItemsResponse> = async () => {
	console.log('get all items');
	console.log(`import.meta.env.VITE_API_URL ${import.meta.env.VITE_API_URL}`);
	const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/item/all`);
	const data: Item[] = await resp.json();
	console.log(data);
	return {
		items: data
	};
};
