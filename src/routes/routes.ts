import { base } from '$app/paths';

const routes = {
	home: base ? base : '/',
	catalog: `${base}/catalog`,
	counter: `${base}/counter`,
	about: `${base}/about`
};

export default routes;
