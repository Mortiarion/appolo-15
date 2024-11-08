<script lang="ts">
	import Hookah_Icon from '$lib/icons/Hookah_Icon.svelte';
	import Playstation_Icon from '$lib/icons/Playstation_Icon.svelte';
	import Cocktails_Icon from '$lib/icons/Cocktails_Icon.svelte';
</script>

<section id="wellcome">
	<div class="container mx-auto mb-24 px-5 lg:px-14">
		<h1 class="mb-2 text-center text-2xl lg:text-5xl lg:px-10 lg:mb-10">Ласкаво просимо до "Apollo 15"</h1>

		<p class="text-center text-sm lg:text-xl">
			Наш Lounge Bar це затишний куточок, де час сповільнюється, а фантазія розлітається у світ
			загадкового космосу. Стильний інтер'єр, м'яке світло та димні кальяни створюють неймовірну та
			неповторну атмосферу, даруючи незабутні враження та приємні емоції. Барна карта приємно вас
			здивує як класичними так і авторськими міксами. А шанувальникам чаю ми пропонуємо оцінити
			вишукані сорти чаю з усього світу.
		</p>

		<p class="text-center text-sm lg:text-xl">Також до вашої уваги настільні ігри та ігри на PlayStation.</p>

		<div class="mt-10 flex flex-col gap-14 px-5 lg:w-[335px] lg:mx-auto lg:mt-14">
			<div class="flex flex-col items-center gap-6">
				<Hookah_Icon />
				<p class="text-center lg:px-5">
					Димні та неймовірні кальяни поринуть вас в атмосферу невагомості, та перенесуть у
					таємничий космос!
				</p>
			</div>

			<div class="flex flex-col items-center gap-6">
				<Playstation_Icon />
				<p class="text-center lg:px-5">
					Перенесе вас у загадковий світ віртуальної реальності, з самими свіжими іграми для вас та
					ваших друзів!
				</p>
			</div>

			<div class="flex flex-col items-center gap-6">
				<Cocktails_Icon />
				<p class="text-center lg:px-4">
					Коктейльна карта відірве вас від реальності та подарує вишуканний світ незабутніх емоцій!
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		.container {
			> div {
			}
		}
	}
</style>
