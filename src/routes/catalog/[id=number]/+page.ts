// checkout https://kit.svelte.dev/docs/load to load data async
import type { PageLoad } from './$types';

type Item = {
	id: bigint;
	name: string;
};

// https://kit.svelte.dev/docs/page-options#csr
// client-side-rendered (CSR) page
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = true;
export const ssr = false;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const load: PageLoad<Item> = async ({ fetch, params }) => {
	const resp = await fetch(`http://localhost:8080/api/item/${params.id}`);
	const item: Item = await resp.json();
	return item;
};
