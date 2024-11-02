<script lang="ts">
	import Tell_Icon from '$lib/icons/Tell_Icon.svelte';
	import Telegram_Icon from '$lib/icons/Telegram_Icon.svelte';
	import Viber_Icon from '$lib/icons/Viber_Icon.svelte';
	import Instagram_Icon from '$lib/icons/Instagram_Icon.svelte';
	import TikTok_Icon from '$lib/icons/TikTok__Icon.svelte';
</script>

<!-- min-h-[760px] -->
<section class=" min-h-[460px]">
	<div class="relative">
		<ul class="absolute right-[60px] top-[100px] flex flex-col gap-5">
			<li>
				<a href="/">
					<Tell_Icon />
				</a>
			</li>
			<li>
				<a href="/">
					<Telegram_Icon />
				</a>
			</li>
			<li>
				<a href="/">
					<Viber_Icon />
				</a>
			</li>
			<li>
				<a href="/">
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
</section>
