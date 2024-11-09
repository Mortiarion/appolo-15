<script lang="ts">
	import Instagram_Icon from '$lib/icons/Instagram_Icon.svelte';
	import LogoIcon from '$lib/icons/Logo_Icon.svelte';
	import Telegram_Icon from '$lib/icons/Telegram_Icon.svelte';
	import Tell_Icon from '$lib/icons/Tell_Icon.svelte';
	import TikTok_Icon from '$lib/icons/TikTok__Icon.svelte';
	import Viber_Icon from '$lib/icons/Viber_Icon.svelte';
</script>

<footer>
	<div class="container mx-auto px-10 pb-10">
		<div class=" flex flex-col items-center xl:flex-row xl:justify-between xl:items-end">
			<LogoIcon />

			<ul class="flex mt-10 mb-5 gap-5">
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
				<li>
					<a href="/">
						<TikTok_Icon />
					</a>
				</li>
			</ul>

			<a class="truncate text-pol_conf" href="/privacy_policy">Політика конфіденційності</a>
		</div>
	</div>
</footer>
