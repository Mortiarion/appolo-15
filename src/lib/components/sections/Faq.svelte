<script lang="ts">
	const questions = [
		{ question: 'Чи можна у Вас замовити кальян та яка вартість?' },
		{ question: 'Чи можливо у Вас замовити їжу?' },
		{ question: 'Ви працюєте при відключенні світла?' },
		{ question: 'Чи можливо провести у Вас святкові заходи?' },
		{ question: 'Чи можливо прийти просто пограти в Playstation?' }
	];

	let respond = [
		{
			text: 'Так, можно. Звичайні табаки які підходять для слабких та середніх - 300 грн, Преміум лінійка, яка підходить для середніх та міцних - 350 грн.'
		},
		{
			text: 'Так, це можливо. У нас ви можете замовити смачні солодкі та солоні закуски, а також організувати доставку безпосередньо до нашого закладу.'
		},
		{
			text: 'Так, працюємо. В нас завжди є електропостачання завдяки генератору та оптоволоконному інтернету.'
		},
		{
			text: 'Так, в нашому барі будується окрема кімната (скоро відкриття) для проведення заходів, та діє знижка іменниникам 20% + можливо принести свій алкоголь, за домовленностю з адміністрацією.'
		},
		{
			text: 'Ні, мінімальний заказ для гри у Playstation - 1 кальян що еквівалентно двум годинам гри.'
		}
	];

	let openIndex: number | null = null;

	function toggle(index: number) {
		if (openIndex === index) {
			openIndex = null;
		} else {
			openIndex = index;
		}
	}
</script>

<section id="faq">
	<div class="container mx-auto mb-24 px-5 lg:px-10">
		<div class="flex flex-col gap-8 lg:gap-14">
			<h2 class=" text-center font-audiowide text-2xl font-bold lg:text-5xl">ЧАСТІ ПИТАННЯ</h2>

			<ul class="question-list">
				{#each questions as { question }, index}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
					<li class="question-item" on:click={() => toggle(index)}>
						<div class="question-text text-xl">
							<button type="button" class="flex justify-between text-left lg:text-2xl">
								{question}
								<span class="icon {openIndex === index ? 'rotate' : ''}">&#8250;</span>
							</button>

							<div class="answer text-base text-white lg:text-xl {openIndex === index ? 'open' : ''}">
								<p>{respond[index].text}</p>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="postcss">
	.question-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.question-item {
		display: flex;
		flex-direction: column;
		cursor: pointer;
		border-bottom: 1px solid #2e2e2e;
		padding-bottom: 20px;
	}

	.question-text {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	.icon {
		font-size: 1.5rem;
		transition: transform 0.3s;
	}

	.rotate {
		transform: rotate(90deg);
	}

	.answer {
		padding: 15px 10px 0;
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.5s ease;

		&.open {
			max-height: 200px;
		}
	}
</style>
