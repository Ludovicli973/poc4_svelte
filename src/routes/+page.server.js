import { API_KEY } from '$env/static/private';
import axios from 'axios';
/** @type {import('./$types').PageLoad} */

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
		const response = await axios.get(
			'https://anime-db.p.rapidapi.com/anime?page=1&size=30',
			options
		);
		let animes = response.data.data;
		let initialData = response.data.data;
		let loading = false;
		return { animes, initialData, loading };
	} catch (error) {
		console.log(error.message);
	}
}
