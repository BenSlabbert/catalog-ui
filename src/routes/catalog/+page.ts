import type { PageLoad } from './$types';

type Item = {
	id: number;
	name: string;
};

type GetItemsResponse = {
	items: Item[];
};

export type { Item, GetItemsResponse };

export const csr = true;
export const prerender = false;

export const load: PageLoad<GetItemsResponse> = async ({ fetch }) => {
	const resp = await fetch('http://localhost:8080/api/item/all');
	const data: Item[] = await resp.json();
	console.log(data);
	return {
		items: data
	};
};
