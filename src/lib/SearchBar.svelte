<script>
	//recuperer data depuis le parent
	//creer une valeur reactive pour l'input
	//faire remonter l'event au click sur le button search, prend en parametre la valeur de l'input
	//pour le button clear, si la valeur de l'input est plus grand que 0, on l'affiche sinon non.
	//au clic sur click, on supprime la valeur de l'input et on reaffiche le tableau de 30 animes
</script>

<div class="flex items-center mt-2 ml-4">
	<form>
		<input
			type="text"
			name="input"
			class="w-[200px] h-[30px] border border-black rounded"
			placeholder="Search"
		/>
		<button
			class="ml-[10px] w-[100px] h-[30px] border border-black rounded bg-black text-white cursor-pointer"
		>
			Search
		</button>
		<button class="ml-[10px] w-[100px] h-[30px] border rounded bg-gray-200 border-gray-200">
			Clear
		</button>
	</form>
</div>
