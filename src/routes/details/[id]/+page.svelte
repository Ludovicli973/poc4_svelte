<script>
	export let data;
	let anime = data.anime;

	const isEmpty = (obj) => {
		return Object.keys(obj).length === 0;
	};

	$: animeSynopsis = anime?.synopsis ? anime.synopsis : 'Pas de synopsis disponible';
</script>

<div>
	{#if !isEmpty(anime)}
		<div class="h-screen">
			<div class="w-full flex space-x-4 p-4">
				<img src={anime.image} alt={anime.title} class="h-full aspect-auto" />
				<div class="flex-col">
					<h1 class="font-bold text-xl">{anime.title}</h1>
					<p class="my-4 text-justify">{animeSynopsis}</p>
				</div>
			</div>
		</div>
	{:else}
		<h1>Anime introuvable</h1>
	{/if}
</div>
