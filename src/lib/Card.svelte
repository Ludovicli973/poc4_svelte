<script>
	export let anime;
	import { base } from '$app/paths';
</script>

<a href={`${base}/details/${anime._id}`}>
	<div class="w-[200px] h-[270px] my-1">
		<img src={anime.image} alt="poster" class="w-full h-full object-cover" />
		<p>{anime.title}</p>
		<p>{anime.type}</p>
	</div>
</a>
