<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let slide = [
		[
			'/slider_gallery/galery_one.jpg',
			'/slider_gallery/galery_two.jpg',
			'/slider_gallery/galery_three.jpg',
			'/slider_gallery/galery_four.jpg'
		],
		[
			'/slider_gallery/galery_one.jpg',
			'/slider_gallery/galery_two.jpg',
			'/slider_gallery/galery_three.jpg',
			'/slider_gallery/galery_four.jpg'
		],
		[
			'/slider_gallery/galery_one.jpg',
			'/slider_gallery/galery_two.jpg',
			'/slider_gallery/galery_three.jpg',
			'/slider_gallery/galery_four.jpg'
		]
	];

	const getClassImg = (index: number) => `img-${index}`;

	let sliderTrack: HTMLDivElement;
	let width = 0;
	let slides: NodeListOf<HTMLDivElement>;

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
		if (sliderTrack) {
			// width = sliderTrack.clientWidth;
			width = sliderTrack.getBoundingClientRect().width;
			slides = sliderTrack.querySelectorAll('.slide');
			positionSlide();
		}
	});

	function movePrev() {
		throttleNavigation(() => {
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
		});
	}

	function moveNext() {
		throttleNavigation(() => {
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
		});
	}

	const activeIndex = writable<number>(-1);
	const activeImageIndex = writable<number>(-1);

	function openModal(slideIndex: number, imageIndex: number) {
		activeIndex.set(slideIndex);
		activeImageIndex.set(imageIndex);
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		activeIndex.set(-1);
		activeImageIndex.set(-1);
		document.body.style.overflow = 'visible';
	}

	function modalPrev() {
		throttleNavigation(() => {
			activeImageIndex.update((imgIndex) => {
				if ($activeIndex !== -1 && imgIndex !== -1) {
					const slideImages = slide[$activeIndex];
					return imgIndex > 0 ? imgIndex - 1 : slideImages.length - 1;
				}

				return imgIndex;
			});
		});
	}

	function modalNext() {
		throttleNavigation(() => {
			activeImageIndex.update((imgIndex) => {
				if ($activeIndex !== -1 && imgIndex !== -1) {
					const slideImages = slide[$activeIndex];
					return imgIndex < slideImages.length - 1 ? imgIndex + 1 : 0;
				}

				return imgIndex;
			});
		});
	}

	let touchStartX = 0;
	let touchEndX = 0;

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchMove(event: TouchEvent) {
		touchEndX = event.touches[0].clientX;
	}

	function handleTouchEnd() {
		if (touchEndX < touchStartX - 50) {
			modalNext();
			moveNext();
		} else if (touchEndX > touchStartX + 50) {
			modalPrev();
			movePrev();
		}
	}

	let isThrottled = false;

	function throttleNavigation(callback: () => void) {
		if (!isThrottled) {
			isThrottled = true;
			callback();
			setTimeout(() => {
				isThrottled = false;
			}, 1000);
		}
	}
</script>

<section id="slider-gallery">
	<div class="container mx-auto mb-14">
		<div class="slider-container">
			<button class="prev" type="button" on:click={movePrev}>&#10094</button>
			<div
				class="slider-track"
				on:touchstart={handleTouchStart}
				on:touchmove={handleTouchMove}
				on:touchend={handleTouchEnd}
				bind:this={sliderTrack}
			>
				{#each slide as img, slideIndex}
					<!-- svelte-ignore a11y-click-events-have-key-events
					a11y-no-noninteractive-element-interactions -->
					<div class="slide">
						{#each img as imgSrc, imgIndex}
							<img
								on:click={() => openModal(slideIndex, imgIndex)}
								class={getClassImg(imgIndex)}
								src={imgSrc}
								alt={`Зображення ${imgIndex + 1}`}
							/>
						{/each}
					</div>
				{/each}
			</div>
			<button class="next" type="button" on:click={moveNext}>&#10095</button>
		</div>

		{#if $activeIndex !== -1 && $activeImageIndex !== -1}
			<div
				class="modal"
				on:touchstart={handleTouchStart}
				on:touchmove={handleTouchMove}
				on:touchend={handleTouchEnd}
			>
				<button type="button" on:click={modalPrev} class="modal-prev">&#10094</button>
				<img
					class="modal-img"
					src={slide[$activeIndex][$activeImageIndex]}
					alt={`Картинка галереї ${$activeImageIndex + 1}`}
				/>
				<button type="button" on:click={modalNext} class="modal-next">&#10095</button>
				<button type="button" on:click={closeModal} class="close">&times</button>
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	.slider-container {
		position: relative;
		overflow: hidden;
		/* max-width: 100%; */
		padding: 20px 0;

		& .prev,
		.next {
			position: absolute;
			top: 50%;
			z-index: 2;
			top: 0;
			bottom: 0;
			padding: 0 10px;
			font-size: 40px;
			transition: transform 0.3s ease;
		}

		& .prev {
			left: 0;
		}

		& .next {
			right: 0;
		}

		& .slider-track {
			height: 166.25px;
			/* padding: 20px 0; */

			& .slide {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 10px;
				padding: 0 40px;
				position: absolute;
				transition:
					transform 1s ease,
					visibility 1s ease;
				visibility: hidden;
				/* aspect-ratio: 2/1; */
					/* height: 100%; */

				
				&.active {
					visibility: visible;
				}

				/* & [data-x='0'] {
					visibility: visible;
				} */

				& img {
					transition: transform 0.4s ease;
					border-radius: 12px;
					cursor: pointer;
					height: 100%;
					aspect-ratio: 1/1;

					&:hover {
						transform: scale(1.05);
					}
				}

				& .img-0 {
					grid-area: 1 / 1 / 2 / 2;
				}
				& .img-1 {
					grid-area: 1 / 2 / 2 / 3;
				}
				& .img-2 {
					grid-area: 2 / 1 / 3 / 3;
				}
				& .img-3 {
					grid-area: 1 / 3 / 3 / 5;
				}
			}
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
			transition:
				background-color 0.3s ease,
				color 0.3s ease,
				transform 0.3s ease;
			border-radius: 8px;

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
			transition:
				background-color 0.3s ease,
				transform 0.3s ease,
				color 0.3s ease;
			border-radius: 8px;
		}
	}

	/* @media (min-width: 375px) {
		.slider-container {
			.slider-track {
				height: 205.2px;
			}
		}
	}

	@media (min-width: 425px) {
		.slider-container {
			.slider-track {
				height: 240.63px;
			}
		}
	}

	@media (min-width: 768px) {
		.slider-container {
			.slider-track {
				height: 483.58px;
			}
		}
	} */
</style>
