// would be nice if the server could do this?
export async function app() {
	// @ts-ignore
	const module = await window.app.get('./App')
	return module().default
}
