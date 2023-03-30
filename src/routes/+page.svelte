<script>
	import Card from '$lib/Card.svelte';
	import SearchBar from '../lib/SearchBar.svelte';
	export let data;
	let isLoading = true;
	let animes = data.animes;
	let initialData = data.animes;
	isLoading = data.loading;

	const HandleSearch = (e) => {
		const filterDataForSearch = initialData.filter((obj) => {
			return obj.title.toLowerCase().includes(e.detail.toLowerCase());
		});
		animes = filterDataForSearch;
	};
	const HandelClear = () => {
		animes = data.animes;
	};
</script>

<div>
	<SearchBar on:clear-select={HandelClear} on:search-select={HandleSearch} />
	{#if isLoading === true}
		<p>En cours de chargement...</p>
	{:else if animes.length > 0}
		<div class="my-6 flex flex-wrap justify-around py-1 flex-row">
			{#each animes as anime, index}
				<div class="my-10" key={index}>
					<Card {anime} />
				</div>
			{/each}
		</div>
	{:else}
		<p>Not Found</p>
	{/if}
</div>
