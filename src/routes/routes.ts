import { base } from '$app/paths'

const routes = {
	home: base ? base : '/',
	catalog: `${base}/catalog`,
	counter: `${base}/counter`,
	about: `${base}/about`,
	enhancedForms: `${base}/enhanced-forms`,
	search: `${base}/search`,
	stream: `${base}/stream`,
}

export default routes

export function catalogEdit(id: number): string {
	return `${routes.catalog}/${id}/edit`
}

export function catalogDetails(id: number): string {
	return `${routes.catalog}/${id}`
}

export function catalogCreate(): string {
	return `${routes.catalog}/create`
}
