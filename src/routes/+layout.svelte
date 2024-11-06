<script lang="ts">
	import '../lib/i18n';
	import '../app.css';

	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';

	import { getLocaleFromNavigator } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { locale, init } from 'svelte-i18n';

	let { children } = $props();

	let isInitialized = $state(false);

	onMount(async () => {
		if (!$locale) {
			await init({
				fallbackLocale: 'en',
				initialLocale: getLocaleFromNavigator()
			});
		}
		isInitialized = true;
	});
</script>

{#if isInitialized}
	<div class=" flex min-h-screen flex-col scroll-smooth font-lato text-white">
		<div>
			<img
				class=" fixed z-[-1] min-h-screen w-full lg:hidden"
				src="/paralax_two-mobile-320-767.webp"
				alt="paralax"
			/>

			<img
				class=" fixed z-[-1] min-h-screen w-full bs:hidden lg:block"
				src="/paralax_two-desctop-768-1440.webp"
				alt="paralax"
			/>
			<div class="overlay-img"></div>
		</div>

		<Header />

		<main class=" flex-auto">
			{@render children()}
		</main>

		<Footer />
	</div>
{/if}

<style lang="postcss">
	.overlay-img {
		content: '';
		position: fixed;
		inset: 0;
		z-index: -1;
		background-color: #06014066;
	}
</style>
