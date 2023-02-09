import type { PageLoad } from './$types'

export const csr = true
export const ssr = false
export const prerender = false

type Path = {
	path: string
	searchParams: URLSearchParams
}

export type { Path }

export const load: PageLoad<Path> = async ({ params, url }) => {
	return {
		path: params.path,
		searchParams: url.searchParams,
	}
}
