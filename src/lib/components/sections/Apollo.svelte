<script lang="ts">
	import Tell_Icon from '$lib/icons/Tell_Icon.svelte';
	import Telegram_Icon from '$lib/icons/Telegram_Icon.svelte';
	import Viber_Icon from '$lib/icons/Viber_Icon.svelte';
	import Instagram_Icon from '$lib/icons/Instagram_Icon.svelte';
	import TikTok_Icon from '$lib/icons/TikTok__Icon.svelte';
</script>

<!-- min-h-[760px] -->
<section id="apollo" class="">
	<div class="container mx-auto relative min-h-[400px]">
		<ul class="absolute right-[30px] top-[80px] flex flex-col gap-5">
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
	</div>
</section>
