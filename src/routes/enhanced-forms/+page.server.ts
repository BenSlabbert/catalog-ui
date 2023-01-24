import { fail, redirect, type Actions } from '@sveltejs/kit';
import pkg from 'zod-form-data';
const { zfd } = pkg;

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const actions: Actions = {
	default: async ({ request }) => {
		await sleep(300);

		// get the form data
		const formData = await request.formData();

		// define the validation schema
		const loginSchema = zfd.formData({
			user: zfd.text(),
			password: zfd.text()
		});

		// parse the validation schema
		const result = loginSchema.safeParse(formData);

		// in case of an error return the data and errors
		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			return fail(400, data);
		}

		// redirect the user
		throw redirect(303, '/catalog');
	}
};
