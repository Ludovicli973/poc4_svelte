import { API_KEY } from '$env/static/private';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

export const load = async ({ params }) => {
	const id = params.id;
	let anime = {};
	try {
		anime = await fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`, options).then((res) =>
			res.json()
		);
	} catch (error) {
		console.log(error);
	}
	return { anime };
};
