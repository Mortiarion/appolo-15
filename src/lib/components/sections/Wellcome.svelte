<script lang="ts">
	import Hookah_Icon from '$lib/icons/Hookah_Icon.svelte';
	import Playstation_Icon from '$lib/icons/Playstation_Icon.svelte';
	import Cocktails_Icon from '$lib/icons/Cocktails_Icon.svelte';
</script>

<section>
	<div class="container mx-auto px-10 py-5">
		<div class="">
			<h1 class="mb-10 text-5xl text-center">Ласкаво просимо до "Apollo 15"</h1>
			<p class="text-center text-xl">
				Наш Lounge Bar це затишний куточок, де час сповільнюється, а фантазія розлітається у світ
				загадкового космосу. Стильний інтер'єр, м'яке світло та димні кальяни створюють неймовірну
				та неповторну атмосферу, даруючи незабутні враження та приємні емоції. Барна карта приємно
				вас здивує як класичними так і авторськими міксами. А шанувальникам чаю ми пропонуємо
				оцінити вишукані сорти чаю з усього світу.
			</p>

			<span class="mb-16 text-xl"
				>Також до вашої уваги настільні ігри та ігри на PlayStation.
			</span>
<!-- grid grid-cols-3 items-center gap-12 text-xl -->
			<div class="flex flex-col gap-14 px-10 my-10">
				<div class="flex flex-col items-center">
					<Hookah_Icon />
					<p class="text-center">
						Димні та неймовірні кальяни поринуть вас в атмосферу невагомості, та перенесуть у
						таємничий космос!
					</p>
				</div>

				<div class="flex flex-col items-center">
					<Playstation_Icon />
					<p class="text-center">
						Перенесе вас у загадковий світ віртуальної реальності, з самими свіжими іграми для вас
						та ваших друзів!
					</p>
				</div>

				<div class="flex flex-col items-center">
					<Cocktails_Icon />
					<p class="text-center">
						Коктейльна карта відірве вас від реальності та подарує вишуканний світ незабутніх
						емоцій!
					</p>
				</div>
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