<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//VARIABLE INPUT
	let searchInput = '';
	//SUBMIT
	const handleSubmit = () => {
		dispatch('search-select', searchInput);
	};
	//CLEAR
	const handleClear = () => {
		searchInput = '';
		dispatch('clear-select');
	};
</script>

<div class="flex items-center mt-2 ml-4">
	<form on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			name="input"
			bind:value={searchInput}
			class="w-[200px] h-[30px] border border-black rounded"
			placeholder="Search"
		/>
		<button
			class="ml-[10px] w-[100px] h-[30px] border border-black rounded bg-black text-white cursor-pointer"
			type="submit"
		>
			Search
		</button>
		{#if searchInput.trim().length > 0}
			<button
				class="ml-[10px] w-[100px] h-[30px] border rounded bg-gray-200 border-gray-200"
				on:click={handleClear}
			>
				Clear
			</button>
		{/if}
	</form>
</div>
