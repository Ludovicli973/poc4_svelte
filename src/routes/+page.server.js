import { API_KEY } from '$env/static/private';
import axios from 'axios';

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
	let animes;
	let loading;
	try {
		const response = await axios.get(
			'https://anime-db.p.rapidapi.com/anime?page=1&size=30',
			options
		);
		animes = response.data.data;
		loading = false;
		return { animes, loading };
	} catch (error) {
		console.error(error.message);
	}
}
