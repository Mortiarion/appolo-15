<script lang="ts">
	let block_one = [
		{
			heading: 'ЗЕМЛЯ LITE',
			text: 'Використання для не міцних сортів табаку',
			paragraph: '300₴'
		},
		{
			heading: 'САТУРН PREMIUM',
			text: 'Використання міцних сортів табаку',
			paragraph: '350₴'
		},
		{
			heading: 'ЗАГАДКОВИЙ КОСМОС',
			text: 'Авторський мікс для подорожі у глибь космосу',
			paragraph: '390₴'
		},
		{
			heading: 'НЕВАГОМІСТЬ',
			text: 'Авторський мікс для подорожі по просторам галактик',
			paragraph: '390₴'
		}
	];
</script>

<section id="hookah">
	<div
		class="container mx-auto bg-hookah_mobile bg-[length:290px_810px] bg-[top_100px_center] bg-no-repeat px-10 xl:bg-hookah_desctop xl:bg-[length:162px_422px]"
	>
		<div class="mb-24 flex flex-col items-center">
			<h2 class="mb-10 font-audiowide font-bold text-3xl underline lg:mb-14 lg:text-5xl">КАЛЬЯН</h2>

			<div class="mb-10 flex flex-col gap-14 xl:grid xl:grid-cols-2 xl:gap-x-60 xl:gap-y-20">
				{#each block_one as block}
					<div class="flex flex-col items-center gap-2.5 font-audiowide">
						<h4 class="text-center text-xl lg:text-4xl">{block.heading}</h4>
						<div class="separator"></div>
						<span class="text-center text-sm lg:text-xl">{block.text}</span>
						<p class="text-xl lg:text-4xl">{block.paragraph}</p>
					</div>
				{/each}
			</div>
			<div class="flex flex-col items-center gap-2.5 font-audiowide">
				<h4 class="text-center text-xl lg:text-4xl">АПОЛЛОН 15</h4>
				<div class="separator"></div>
				<span class="text-center text-sm lg:text-xl"
					>Авторський мікс для справжніх мандривників</span
				>
				<p class="text-xl lg:text-4xl">390₴</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.separator {
		border: 1px dashed white;
		width: 58%;
	}
</style>
