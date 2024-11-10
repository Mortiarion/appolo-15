<script lang="ts">
	import Instagram_Icon from '$lib/icons/Instagram_Icon.svelte';
	import Telegram_Icon from '$lib/icons/Telegram_Icon.svelte';
	import Tell_Icon from '$lib/icons/Tell_Icon.svelte';
	import TikTok_Icon from '$lib/icons/TikTok__Icon.svelte';
	import Viber_Icon from '$lib/icons/Viber_Icon.svelte';
</script>

<section id="contacts">
	<div class="container mx-auto mb-24 px-5 xl:px-10">
		<div class="flex flex-col items-center gap-5 lg:gap-9 xl:flex-row xl:justify-between xl:gap-14 xl:items-start">
			<div class="flex flex-col items-center gap-2.5">
				<p class="border-b font-audiowide text-2xl lg:text-4xl">Графік роботи:</p>
				<span class="lg:text-2xl">ПН-НД 14:00 - 23:00</span>
			</div>
			<div class="flex flex-col items-center gap-2.5">
				<p class="border-b font-audiowide text-2xl lg:text-4xl">Місцезнаходження:</p>
				<span class="lg:text-2xl">Райдужний массив 15/2</span>
			</div>
			<div class="flex flex-col items-center gap-2.5">
				<p class="border-b font-audiowide text-2xl lg:text-4xl">Контакти:</p>
				<a class="lg:text-2xl" href="tel:+380936551515">+38 (093) 655-15-15</a>
				<ul class="flex gap-5 bs:hidden xl:mt-5 xl:flex">
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
						<a
							href="https://www.instagram.com/apollo_15.bar/profilecard/?igsh=MXhuc3U1MnZieWEyeQ=="
						>
							<Instagram_Icon />
						</a>
					</li>
					<li>
						<a href="/">
							<TikTok_Icon />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
