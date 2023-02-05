import type { RequestHandler } from './$types'

export {}

export const GET: RequestHandler = async ({ fetch }) => {
	// todo need some wha to evaluate if the current session has expired or not?
	//  maybe do on the source
	let count = 0

	const observerTransformStream = new TransformStream<Uint8Array, Uint8Array>({
		transform(chunk, controller) {
			console.log('transform')
			count++

			if (count > 4) {
				controller.terminate()
				return
			}

			const decode: string = new TextDecoder().decode(chunk)
			console.log('decode', decode)
			console.log('[transform]', chunk)
			controller.enqueue(chunk)
		},
		flush(controller) {
			// stream has completed
			console.log('[flush]')
			controller.terminate()
		},
	})

	const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/item/sse`)
	const pipeThrough = resp?.body?.pipeThrough(observerTransformStream)

	return new Response(pipeThrough, {
		headers: {
			'content-type': 'text/event-stream',
		},
	})
}
