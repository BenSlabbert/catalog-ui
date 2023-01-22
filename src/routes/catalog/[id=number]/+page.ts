import type { PageLoad } from './$types';

type Item = {
	id: number;
	name: string;
};

export type { Item };

export const csr = true;
export const ssr = false;
export const prerender = false;

export const load: PageLoad<Item> = async ({ fetch, params }) => {
	const resp = await fetch(`http://localhost:8080/api/item/${params.id}`);
	const item: Item = await resp.json();
	console.log('item', item);
	return item;
};
