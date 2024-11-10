<script lang="ts">
	import { onMount } from 'svelte';

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
</script>

<section id="slider-gallery">
	<div class="container mx-auto mb-24">
		<div class="slider-container" bind:this={slidesContainer}>
			<button id="left-btn" onclick={movePrev}>&#10094;</button>
			<div class="slider-wrapper relative mx-10 aspect-1 overflow-hidden lg:aspect-[2/1]">
				{#each slide as imgSrc, imgIndex}
					<div class="slide">
						<img src={imgSrc} class={getClassImg(imgIndex)} alt={`Зображення ${imgIndex + 1}`} />
					</div>
				{/each}
			</div>
			<button id="right-btn" onclick={moveNext}>&#10095;</button>
		</div>
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
</style>
