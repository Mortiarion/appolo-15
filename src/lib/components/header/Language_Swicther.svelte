<script lang="ts">
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';

	let isOpenLanguageSwitcher = $state(false);

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

	function handleClickOutside(event: MouseEvent) {
		const langSw = document.getElementById('language-switcher');
		const langButton = document.getElementById('lang-button');

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

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative font-audiowide">
	<button
		id="lang-button"
		class=" text-xl underline"
		type="button"
		aria-label={$locale}
		onclick={toggleOpetLanguageSwitcher}
		class:hide={isOpenLanguageSwitcher}
		title={$locale}
	>
		{$locale
			? $locale.split('-')[0].charAt(0).toUpperCase() + $locale.split('-')[0].slice(1).toLowerCase()
			: ''}
	</button>

	{#if isOpenLanguageSwitcher}
		<ul
			id="language-switcher"
			class="absolute right-[-17px] top-[-5px] flex flex-col gap-2.5 rounded-2xl border border-white px-4 py-1"
		>
			{#each languages as { code, label }}
				<li>
					<button
						type="button"
						class=" text-xl underline"
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

<style lang="postcss">
	button {
		&.hide {
			visibility: hidden;
		}
	}
</style>
