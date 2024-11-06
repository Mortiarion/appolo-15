<script lang="ts">
	import Logo_Icon from '$lib/icons/Logo_Icon.svelte';
	import { onMount } from 'svelte';
	import MainNav from './Main_Nav.svelte';
	import LanguageSwicther from './Language_Swicther.svelte';

	let isMobile = $state(window.innerWidth <= 767);
	let isDesctop = $state(window.innerWidth > 767);

	function handleResize() {
		isMobile = window.innerWidth <= 767;
		isDesctop = window.innerWidth > 767;
	}

	onMount(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<header>
	<div class="container mx-auto flex items-center justify-around p-10 lg:justify-between">
		{#if isDesctop}
			<a href="/">
				<Logo_Icon />
			</a>
		{/if}

		<MainNav />

		{#if isMobile}
			<a href="/">
				<Logo_Icon />
			</a>
		{/if}

		<LanguageSwicther />
	</div>
</header>

<style lang="postcss"></style>
