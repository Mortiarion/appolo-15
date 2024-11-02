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
			text: 'Так, в нашому барі є окрема кімната (відкриття 01.12.24) для проведення заходів, та діє знижка іменниникам 20% + можливо принести свій алкоголь, за домовленностю з адміністрацією.'
		},
		{
			text: 'Ні, мінімальний заказ для гри у Playstation - 1 кальян.'
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

<section>
	<div class="container px-5 mx-auto">
		<div class="faq-container">
			<h2 class=" text-center font-audiowide text-2xl font-bold">Часті питання:</h2>
			<ul class="question-list">
				{#each questions as { question }, index}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
					<li class="question-item" on:click={() => toggle(index)}>
						<div class="question-text text-lg">
							<div class="flex justify-between">
								{question}
								<span class="icon">&#8250;</span>
							</div>
							{#if openIndex === index}
								<div class="answer text-base text-faq-unswer">
									<p>{respond[index].text}</p>
								</div>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.faq-container {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.question-item {
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

	.question-text {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 15px 10px 30px;
		border-bottom: 1px solid #2e2e2e;
	}

	.icon {
		font-size: 1.5rem;
		transition: transform 0.3s;
	}

	.question-item:hover .icon {
		transform: rotate(90deg);
	}

	.answer {
		padding: 15px 10px;
	}
</style>
