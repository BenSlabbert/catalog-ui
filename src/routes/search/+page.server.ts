import type { PageServerLoad } from './$types'

type Result = {
	id: number
	name: string
}

type SearchResult = {
	items: Result[]
}

export type { Result, SearchResult }

export const load: PageServerLoad<SearchResult> = async ({ url, fetch }) => {
	const query = url.searchParams.get('q')

	if (!query) {
		return {
			items: [],
		}
	}

	const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/item/search?s=${query}&limit=10`)

	const data: Result[] = await resp.json()

	return {
		items: data,
	}
}
