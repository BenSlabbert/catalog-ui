import type { PageServerLoad } from "./$types";

type Result = {
	id: number
}

type SearchResult = {
	items: Result[]
}

export type { Result, SearchResult }

export const load: PageServerLoad<SearchResult> = async ({ url }) => {
	const query = url.searchParams.get('q')
	console.log('q', query)

	if (!query) {
		return {
			items: [],
		}
	}

  return {
		items: [{
      id: 1,
    }],
	}
}
