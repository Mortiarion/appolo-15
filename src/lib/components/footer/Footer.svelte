<script lang="ts">
	import Instagram_Icon from '$lib/icons/Instagram_Icon.svelte';
	import LogoIcon from '$lib/icons/Logo_Icon.svelte';
	import Telegram_Icon from '$lib/icons/Telegram_Icon.svelte';
	import Tell_Icon from '$lib/icons/Tell_Icon.svelte';
	import TikTok_Icon from '$lib/icons/TikTok__Icon.svelte';
	import Viber_Icon from '$lib/icons/Viber_Icon.svelte';
	import { onMount } from 'svelte';
	import PrivacyPolicyModal from './Privacy_Policy_Modal.svelte';

	let isMobile = $state(window.innerWidth <= 1023);
	let isDesctop = $state(window.innerWidth >= 1024);

	function handleResize() {
		isMobile = window.innerWidth <= 1023;
		isDesctop = window.innerWidth >= 1024;
	}

	onMount(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<footer>
	<div class="container mx-auto px-10 pb-10">
		<div class=" flex flex-col items-center xl:flex-row xl:items-end xl:justify-between">
			{#if isMobile}
				<a href="/">
					<LogoIcon />
				</a>
			{/if}

			<ul class="mb-5 mt-10 flex gap-5 xl:hidden">
				<li>
					<a href="tel:+380936551515">
						<Tell_Icon />
					</a>
				</li>
				<li>
					<a href="https://t.me/Apollo15Odessa">
						<Telegram_Icon />
					</a>
				</li>
				<li>
					<a href="viber://chat?number=%2B380936551515">
						<Viber_Icon />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/apollo_15.bar/profilecard/?igsh=MXhuc3U1MnZieWEyeQ==">
						<Instagram_Icon />
					</a>
				</li>
				<!-- <li>
					<a href="/">
						<TikTok_Icon />
					</a>
				</li> -->
			</ul>

			<!-- <a class="truncate" href="/privacy_policy">Політика конфіденційності</a> -->
			<PrivacyPolicyModal />

			{#if isDesctop}
				<a href="/">
					<LogoIcon />
				</a>
			{/if}
			<span>© 2025 UA. Всі права захищені</span>
		</div>
	</div>
</footer>
