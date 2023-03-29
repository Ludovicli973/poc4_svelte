<script>
	import Card from '$lib/Card.svelte';

	export let data;
	let isLoading = true;
	let animes = data.animes;
	//Use initialData for search functionnality
	let initialData = data.animes;
	isLoading = data.loading;
</script>

<div>
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
