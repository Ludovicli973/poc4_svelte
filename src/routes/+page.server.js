import { API_KEY } from '$env/static/private';

const options = {
	method: 'GET',
	params: {
		page: '1',
		size: '30'
	},
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

export async function load() {
	try {
		const response = await fetch(
			'https://anime-db.p.rapidapi.com/anime?page=1&size=30',
			options
		).then((res) => res.json());
		let animes = response.data;
		let loading = false;
		return { animes, loading };
	} catch (error) {
		console.error(error.message);
	}
}
