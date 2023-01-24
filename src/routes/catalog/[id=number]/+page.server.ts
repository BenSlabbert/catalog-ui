import type { PageServerLoad } from './$types';

type Item = {
	id: number;
	name: string;
};

export type { Item };

export const csr = false;
export const ssr = true;
export const prerender = false;

export const load: PageServerLoad<Item> = async ({ params }) => {
	console.log(`params: ${params}`);
	console.log(`import.meta.env.VITE_API_URL ${import.meta.env.VITE_API_URL}`);
	const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/item/${params.id}`);
	const item: Item = await resp.json();
	console.log('item', item);
	return item;
};
