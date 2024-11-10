<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import { page } from '$app/stores'; 

	let isOpenMainDropdown = $state(false);

	function toggleMainDropdown() {
		isOpenMainDropdown = !isOpenMainDropdown;
	}

	function handleClickOutside(event: MouseEvent) {
		const nav = document.getElementById('nav');
		const mainDropdownButton = document.getElementById('main-dropdown-button');

		if (
			nav &&
			mainDropdownButton &&
			!nav.contains(event.target as Node) &&
			!mainDropdownButton.contains(event.target as Node)
		) {
			isOpenMainDropdown = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav id="main-dropdown" class="relative { $page.url.pathname === '/privacy_policy' ? 'hidden' : '' }">
	<button
		id="main-dropdown-button"
		class="flex h-[24px] w-[30px] flex-col justify-around lg:hidden"
		onclick={toggleMainDropdown}
		aria-label="Toggle Menu"
		type="button"
	>
		<span class="h-[3px] w-full rounded-[2px] bg-white duration-300" class:open={isOpenMainDropdown}
		></span>
		<span class="h-[3px] w-full rounded-[2px] bg-white duration-300" class:open={isOpenMainDropdown}
		></span>
		<span class="h-[3px] w-full rounded-[2px] bg-white duration-300" class:open={isOpenMainDropdown}
		></span>
	</button>

	<ul id="nav" class="hidden lg:static lg:flex lg:gap-8" class:open={isOpenMainDropdown}>
		<li>
			<a
				onclick={() => {
					if (window.innerWidth <= 767) {
						toggleMainDropdown();
					}
				}}
				href="#wellcome">{$t('nav-menu-about-us')}</a
			>
		</li>
		<li>
			<a
				onclick={() => {
					if (window.innerWidth <= 767) {
						toggleMainDropdown();
					}
				}}
				href="#hookah">{$t('nav-menu-hookah')}</a
			>
		</li>
		<li>
			<a
				onclick={() => {
					if (window.innerWidth <= 767) {
						toggleMainDropdown();
					}
				}}
				href="#main-menu">{$t('nav-menu-menu')}</a
			>
		</li>
		<li>
			<a
				onclick={() => {
					if (window.innerWidth <= 767) {
						toggleMainDropdown();
					}
				}}
				href="#slider-gallery">{$t('nav-menu-gallery')}</a
			>
		</li>
		<li>
			<a
				onclick={() => {
					if (window.innerWidth <= 767) {
						toggleMainDropdown();
					}
				}}
				href="#faq">{$t('nav-menu-faq')}</a
			>
		</li>
		<li>
			<a
				onclick={() => {
					if (window.innerWidth <= 767) {
						toggleMainDropdown();
					}
				}}
				href="#contacts">{$t('nav-menu-contacts')}</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	span {
		&.open:nth-child(1) {
			transform: translateY(8px) rotate(45deg);
		}
		&.open:nth-child(2) {
			opacity: 0;
		}
		&.open:nth-child(3) {
			transform: translateY(-8px) rotate(-45deg);
		}
	}

	ul {
		&.open {
			display: flex;
			position: absolute;
			flex-direction: column;
			white-space: nowrap;
			gap: 20px;
			top: 80px;
			z-index: 10;
		}
	}
</style>
