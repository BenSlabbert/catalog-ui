import { base } from '$app/paths';

const routes = {
	home: base ? base : '/',
	counter: `${base}/counter`,
	about: `${base}/about`
};

export default routes;
