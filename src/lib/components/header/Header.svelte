<script lang="ts">
	import Logo_Icon from '$lib/icons/Logo_Icon.svelte';
	import { onMount } from 'svelte';
	import { locale, t } from 'svelte-i18n';

	let isOpenMainDropdown = $state(false);
	let isOpenLanguageSwitcher = $state(false);

	function toggleMainDropdown() {
		isOpenMainDropdown = !isOpenMainDropdown;
	}

	function toggleOpetLanguageSwitcher() {
		isOpenLanguageSwitcher = !isOpenLanguageSwitcher;
	}

	function switchLanguage(code: string) {
		locale.set(code);
		isOpenLanguageSwitcher = false;
	}

	const languages = [
		{ code: 'uk', label: 'Українська' },
		{ code: 'en', label: 'English' },
		{ code: 'ru', label: 'Русский' }
	];

	let isMobile = $state(window.innerWidth <= 767);
	let isDesctop = $state(window.innerWidth > 767);

	function handleResize() {
		isMobile = window.innerWidth <= 767;
		isDesctop = window.innerWidth > 767;
	}

	function handleClickOutside(event: MouseEvent) {
		const nav = document.getElementById('nav');
		const mainDropdownButton = document.querySelector('.main-dropdown-button');
		const langSw = document.getElementById('language-switcher');
		const langButton = document.getElementById('lang-button');

		if (
			nav &&
			mainDropdownButton &&
			!nav.contains(event.target as Node) &&
			!mainDropdownButton.contains(event.target as Node)
		) {
			isOpenMainDropdown = false;
		}

		if (
			langSw &&
			langButton &&
			!langSw.contains(event.target as Node) &&
			!langButton.contains(event.target as Node)
		) {
			isOpenLanguageSwitcher = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		window.addEventListener('resize', handleResize);

		return () => {
			document.removeEventListener('click', handleClickOutside);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<header>
	<div class="container mx-auto p-10">
		{#if isDesctop}
			<a href="/">
				<Logo_Icon />
			</a>
		{/if}

		<div class="main-dropdown">
			<button
				class="main-dropdown-button"
				onclick={toggleMainDropdown}
				aria-label="Toggle Menu"
				type="button"
			>
				<span class:open={isOpenMainDropdown}></span>
				<span class:open={isOpenMainDropdown}></span>
				<span class:open={isOpenMainDropdown}></span>
			</button>

			<ul id="nav" class:open={isOpenMainDropdown}>
				<li>
					<a onclick={() => toggleMainDropdown()} href="/">{$t('nav-menu-main')}</a>
				</li>
				<li>
					<a onclick={() => toggleMainDropdown()} href="#wellcome">{$t('nav-menu-about-us')}</a>
				</li>
				<li>
					<a onclick={() => toggleMainDropdown()} href="#hookah">{$t('nav-menu-hookah')}</a>
				</li>
				<li>
					<a onclick={() => toggleMainDropdown()} href="#main-menu">{$t('nav-menu-menu')}</a>
				</li>
				<li>
					<a onclick={() => toggleMainDropdown()} href="#slider-gallery">{$t('nav-menu-gallery')}</a
					>
				</li>
				<li>
					<a onclick={() => toggleMainDropdown()} href="#faq">{$t('nav-menu-faq')}</a>
				</li>
				<li>
					<a onclick={() => toggleMainDropdown()} href="#contacts">{$t('nav-menu-contacts')}</a>
				</li>
			</ul>
		</div>

		{#if isMobile}
			<a href="/">
				<Logo_Icon />
			</a>
		{/if}

		<div class="language-swicther">
			<button
				id="lang-button"
				type="button"
				aria-label={$locale}
				onclick={toggleOpetLanguageSwitcher}
				class:hide={isOpenLanguageSwitcher}
				title={$locale}
			>
				{$locale
					? $locale.split('-')[0].charAt(0).toUpperCase() +
						$locale.split('-')[0].slice(1).toLowerCase()
					: ''}
			</button>

			{#if isOpenLanguageSwitcher}
				<ul id="language-switcher">
					{#each languages as { code, label }}
						<li>
							<button
								type="button"
								aria-label={label}
								onclick={() => switchLanguage(code)}
								title={label}
								>{code
									? code.split('-')[0].charAt(0).toUpperCase() +
										code.split('-')[0].slice(1).toLowerCase()
									: ''}</button
							>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		.container {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.main-dropdown {
				position: relative;

				button {
					width: 30px;
					height: 24px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					span {
						border-radius: 2px;
						width: 100%;
						height: 3px;
						background-color: white;
						transition: all 0.3s ease;

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
				}

				ul {
					display: none;

					&.open {
						position: absolute;
						display: flex;
						flex-direction: column;
						/* background-color: gold; */
						white-space: nowrap;
						top: 80px;
					}
				}
			}

			.language-swicther {
				position: relative;
				color: white;

				button {
					font-size: 1.5rem;
					line-height: 2rem;
					text-decoration: underline;

					&.hide {
						visibility: hidden;
					}
				}

				ul {
					position: absolute;
					display: flex;
					right: -17px;
					top: -5px;
					flex-direction: column;
					gap: 10px;
					border-radius: 16px;
					border: 1px solid black;
					padding: 4px 16px;
					background-color: transparent;
					z-index: 22;
				}
			}
		}
	}

	@media (min-width: 768px) {
		header {
			.container {
				.main-dropdown {
					button {
						display: none;
					}

					ul {
						position: static;
						display: flex;
						gap: 30px;
					}
				}
			}
		}
	}
</style>
