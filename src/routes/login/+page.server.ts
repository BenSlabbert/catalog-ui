import type { PageServerLoad } from './$types'
import { fail, redirect, type Actions } from '@sveltejs/kit'
import { zfd } from 'zod-form-data'

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const load: PageServerLoad = async ({ locals }) => {
	// redirect user if logged in
	console.log('login load,locals.user', locals.user)

	if (locals.user) {
		throw redirect(302, '/')
	}
}

export const actions: Actions = {
	default: async ({ request, cookies, locals }) => {
		// redirect user if logged in
		if (locals.user) {
			console.log('user logged in already, redirect')
			throw redirect(302, '/')
		}

		await sleep(250)

		// get the form data
		const formData = await request.formData()

		// define the validation schema
		const loginSchema = zfd.formData({
			user: zfd.text(),
			password: zfd.text(),
		})

		// parse the validation schema
		const result = loginSchema.safeParse(formData)

		// in case of an error return the data and errors
		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors,
			}
			return fail(400, data)
		}

		cookies.set('sessionId', 'session-123', {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30,
		})

		// redirect the user
		throw redirect(303, '/')
	},
}
