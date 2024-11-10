<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let slide = [
		'/slider_gallery/galery_one.jpg',
		'/slider_gallery/galery_two.jpg',
		'/slider_gallery/galery_three.jpg',
		'/slider_gallery/galery_four.jpg',
		'/slider_gallery/galery_five.jpg',
		'/slider_gallery/galery_six.jpg'
	];

	let slides: NodeListOf<HTMLDivElement>;
	let slidesContainer: HTMLDivElement;
	let width = 0;
	let lastClickTime = 0;

	const getClassImg = (index: number) => `img-${index}`;

	function positionSlide() {
		slides.forEach((slide, index) => {
			let x = index * width;
			if (index === slides.length - 1) {
				x = -width;
			}

			slide.setAttribute('data-x', x.toString());
			slide.style.transform = `translateX(${x}px)`;
			// console.log(`Slide ${index} data-x: ${x}`);

			if (x === 0) {
				slide.classList.add('active');
			} else {
				slide.classList.remove('active');
			}
		});
	}

	onMount(() => {
		slides = slidesContainer.querySelectorAll('.slide');
		if (slides.length > 0) {
			width = slides[0].getBoundingClientRect().width;
			positionSlide();
		}
	});

	function movePrev() {
		if (!canClick()) return;

		slides.forEach((slide) => {
			const x = Number(slide.getAttribute('data-x'));

			let newX = x - width;

			if (newX < -(width * (slides.length - 2))) {
				newX = width;
				slide.style.zIndex = '-1';
			} else {
				slide.style.zIndex = '1';
			}

			slide.setAttribute('data-x', newX.toString());
			slide.style.transform = `translateX(${newX}px)`;

			if (newX === 0) {
				slide.classList.add('active');
			} else {
				slide.classList.remove('active');
			}
		});
	}

	function moveNext() {
		if (!canClick()) return;

		slides.forEach((slide) => {
			const x = Number(slide.getAttribute('data-x'));
			let newX = x + width;

			if (newX > width * (slides.length - 2)) {
				newX = -width;
				slide.style.zIndex = '-1';
			} else {
				slide.style.zIndex = '1';
			}

			slide.setAttribute('data-x', newX.toString());
			slide.style.transform = `translateX(${newX}px)`;

			if (newX === 0) {
				slide.classList.add('active');
			} else {
				slide.classList.remove('active');
			}
		});
	}

	function canClick() {
		const currentTime = Date.now();
		if (currentTime - lastClickTime < 1000) {
			return false;
		}
		lastClickTime = currentTime;
		return true;
	}

	const activeIndex = writable<number>(-1);
	const activeImageIndex = writable<number>(-1);
	let isOpenModal = $state(false);

	function openModal(index: number) {
		activeIndex.set(index);
		isOpenModal = !isOpenModal;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isOpenModal = false;
		document.body.style.overflow = 'visible';
	}

	function leftModal() {
		activeIndex.update((n) => (n > 0 ? n - 1 : slide.length - 1));
	}

	function rightModal() {
		activeIndex.update((n) => (n < slide.length - 1 ? n + 1 : 0));
	}
</script>

<section id="slider-gallery">
	<div class="container mx-auto mb-24">
		<div class="slider-container" bind:this={slidesContainer}>
			<button id="left-btn" onclick={movePrev}>&#10094;</button>
			<div class="slider-wrapper relative mx-10 aspect-1 overflow-hidden lg:aspect-[2/1]">
				{#each slide as imgSrc, imgIndex}
					<div class="slide">
						<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
						<img
							src={imgSrc}
							onclick={() => openModal(imgIndex)}
							class={getClassImg(imgIndex)}
							alt={`Зображення ${imgIndex + 1}`}
						/>
					</div>
				{/each}
			</div>
			<button id="right-btn" onclick={moveNext}>&#10095;</button>
		</div>

		{#if isOpenModal}
			<div class="modal">
				<button type="button" onclick={leftModal} class="modal-prev">&#10094</button>
				<img
					class="modal-img"
					src={slide[$activeIndex]}
					alt={`Картинка галереї ${$activeIndex + 1}`}
				/>
				<button type="button" onclick={rightModal} class="modal-next">&#10095</button>
				<button type="button" onclick={closeModal} class="close">&times</button>
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	.slider-container {
		overflow: hidden;
		position: relative;

		& .slider-wrapper {
			& .slide {
				position: absolute;
				transition:
					transform 1s ease-in-out,
					opacity 1s ease-in-out,
					visibility 1s ease-in-out;
				visibility: hidden;
				opacity: 0;
				inset: 0;

				img {
					height: 100%;
					margin: 0 auto;
					border-radius: 28px;
					cursor: pointer;
				}

				&.active {
					visibility: visible;
					opacity: 1;
				}
			}
		}

		#left-btn,
		#right-btn {
			font-size: 44px;
			cursor: pointer;
			position: absolute;
			top: 0;
			padding: 30px 15px;
			bottom: 0;
			display: flex;
			align-items: center;
			z-index: 2;
		}

		#right-btn {
			right: 0;
		}
	}

	.modal {
		position: fixed;
		inset: 0;
		background-color: #000000cc;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;

		& img {
			border-radius: 18px;
		}

		& .modal-prev,
		.modal-next {
			font-size: 45px;
			position: absolute;
			padding: 20px;

			&.modal-prev {
				left: 0;
			}

			&.modal-next {
				right: 0;
			}
		}

		& .close {
			font-size: 60px;
			padding: 0 30px;
			top: 20px;
			right: 20px;
			position: absolute;
		}
	}
</style>
