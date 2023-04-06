<script>
	import Card from '../lib/Card.svelte';
	import SearchBar from '../lib/SearchBar.svelte';
	export let data;

	let animes;
	let isLoading;
	let initialData;

	animes = data.animes;
	initialData = data.animes;
	isLoading = data.loading;

	const handleSearch = (e) => {
		const filterDataForSearch = initialData.filter((obj) => {
			return obj.title.toLowerCase().includes(e.detail.toLowerCase());
		});
		animes = filterDataForSearch;
	};
	const handleClear = () => {
		animes = data.animes;
	};
</script>

<div>
	<SearchBar on:clear-select={handleClear} on:search-select={handleSearch} />
	{#if isLoading}
		<p>En cours de chargement...</p>
	{:else if animes.length > 0}
		<div class="my-6 flex flex-wrap justify-around py-1 flex-row">
			<h1>Hello world</h1>
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
