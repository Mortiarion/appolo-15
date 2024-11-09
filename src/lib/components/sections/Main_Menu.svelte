<script lang="ts">
	let list_one = [
		{ text_one: 'Krusovice Svetle', text_two: '80₴' },
		{ text_one: 'Krusovice Cerne', text_two: '80₴' },
		{ text_one: 'Hoegaarden', text_two: '90₴' },
		{ text_one: 'Stella Artois', text_two: '90₴' },
		{ text_one: 'Budweiser', text_two: '90₴' },
		{ text_one: 'Corona (330мл)', text_two: '110₴' },
		{ text_one: 'Guinness', text_two: '130₴' }
	];

	let list_two = [
		{ text_one: 'В’ялене м’ясо', text_two: '80₴' },
		{ text_one: 'Горішки', text_two: '80₴' },
		{ text_one: 'Сухарики з часником', text_two: '80₴' },
		{ text_one: 'Сухе морозиво “Астронавт”', text_two: '140₴' }
	];

	let list_three = [
		{ text_one: 'Закрутка (90мл)', text_two: '100₴', text_three: 'Горілка, апельсиновий сік' },
		{ text_one: 'Мертвий рашист (90мл)', text_two: '120₴', text_three: 'Горілка, кофейний лікер' },
		{
			text_one: 'Космополітан (150мл)',
			text_two: '180₴',
			text_three: 'Горілка, тріпл сек, журавлинний сік, лаймовий сік'
		},
		{
			text_one: 'Блакитна лагуна (210мл)',
			text_two: '190₴',
			text_three: 'Горілка, блакитний кюросау, содова'
		}
	];

	let list_four = [
		{
			text_one: 'Мохіто (160мл)',
			text_two: '160₴',
			text_three: 'Білий ром, сироп, содова, лайм, м’ята'
		},
		{
			text_one: 'Куба лібре (140мл)',
			text_two: '180₴',
			text_three: 'Золотий ром, лаймовий сік, кока-кола, лайм'
		},
		{
			text_one: 'Піна коллада (150мл)',
			text_two: '180₴',
			text_three: 'Білий ром, темний ром, кокосовий сироп, лаймовий сік, ананасовий сік'
		},
		{ text_one: 'Дайкірі (120мл)', text_two: '195₴', text_three: 'Білий ром, сироп, лаймовий сік' }
	];

	let list_five = [
		{ text_one: 'Іржавий цвях (75мл)', text_two: '170₴', text_three: 'Віскі, драмбуи ликер' },
		{ text_one: 'Хрещенний батько (90мл)', text_two: '180₴', text_three: 'Віскі, лікер амаретто' },
		{
			text_one: 'Олд фешен (90мл)',
			text_two: '190₴',
			text_three: 'Бурбон, биттер, тростніковий цукор'
		},
		{
			text_one: 'Пеніциллін (140мл)',
			text_two: '190₴',
			text_three: 'Віскі, медовий сироп, лимонний сік'
		}
	];

	let list_six = [
		{
			text_one: 'Негроні (120мл)',
			text_two: '180₴',
			text_three: 'Джин, червоний вермут, червоний біттер'
		},
		{
			text_one: 'Біла леді (120мл)',
			text_two: '180₴',
			text_three: 'Джин, тріпл сек, лимонний сік'
		},
		{ text_one: 'Том коллінз', text_two: '190₴', text_three: 'Джин, сироп, лимонний сік, содова' },
		{
			text_one: 'Френч 75 (160мл)',
			text_two: '200₴',
			text_three: 'Джин, просекко, сироп, лимонний сік'
		}
	];

	let list_seven = [
		{
			text_one: 'Сміливий казак (120мл)',
			text_two: '140₴',
			text_three: 'Текіла срібна, кофейний лікер'
		},
		{
			text_one: 'Заздрість (140мл)',
			text_two: '150₴',
			text_three: 'Текіла срібна, блакитний кюрасао, ананасовий сік'
		},
		{
			text_one: 'Текіла санрайз (200мл)',
			text_two: '180₴',
			text_three: 'Текіла срібна, гренадін, апельсиновий сік'
		},
		{
			text_one: 'Маргарита (120мл)',
			text_two: '190₴',
			text_three: 'Текіла срібна, тріпл сік, сироп, лаймовий сік'
		}
	];

	let list_eight = [
		{ text_one: 'Мімоза (140мл)', text_two: '170₴', text_three: 'Просекко, апельсиновий сік' },
		{
			text_one: 'Белліні (200мл)',
			text_two: '190₴',
			text_three: 'Просекко, сироп, лимонний сік, персикове пюре'
		},
		{
			text_one: 'Апероль шприц (290мл)',
			text_two: '200₴',
			text_three: 'Просекко, апероль, содова'
		},
		{
			text_one: 'Небесне сяйво (200мл)',
			text_two: '220₴',
			text_three: 'Текіла, джин, горілка, білий ром, тріпл сік, просекко'
		}
	];

	let list_nine = [
		{
			text_one: 'Космічний Еліксир',
			text_two: '160₴',
			text_three: 'Джин, лимонний сік, цукровий сироп, базилік '
		},
		{
			text_one: 'Супернова',
			text_two: '160₴',
			text_three: 'Горілка, гренадин, содова'
		},
		{
			text_one: 'Марсіанський Захід',
			text_two: '160₴',
			text_three: 'Джин, цукровий сироп, гранатовий сік, лаймовий сік'
		},
		{
			text_one: 'Кровавий місяць',
			text_two: '180₴',
			text_three: 'Віскі, гранатовий сік '
		},
		{
			text_one: 'Рожева планета',
			text_two: '200₴',
			text_three: 'Текіла, кампарі, грейпфрутовий сік, грейпфрутовий сироп, лаймовий сік, содова'
		},
		{
			text_one: 'Темна матерія',
			text_two: '200₴',
			text_three: 'Текіла, єгермейстер, вишневий сік, лимонний сік'
		},
		{
			text_one: 'Сонце',
			text_two: '200₴',
			text_three: 'Бурбон, ананасовий сік, лимонний сік, '
		},
		{
			text_one: 'Зоряний Жаб’як',
			text_two: '220₴',
			text_three: 'Абсент, просекко'
		},
		{
			text_one: 'Зелена комета',
			text_two: '240₴',
			text_three: 'Джин, текіла, ром, абсент '
		},
		{
			text_one: 'Астероїдний поцілунок',
			text_two: '240₴',
			text_three: 'Бурбон, апероль, цукровий сироп, просекко '
		}
	];

	let list_ten = [
		{
			text_one: 'Б-52',
			text_two: '120₴',
			text_three: 'Кавовий лікер, айріш крім, тріпл сек'
		},
		{
			text_one: 'Хіросіма',
			text_two: '120₴',
			text_three: 'Самбука, абсент, айриш крім, гренадін'
		},
		{
			text_one: 'Зелений мексиканець',
			text_two: '120₴',
			text_three: 'Текіла, лікер, лимонний сік'
		}
	];

	let list_eleven = [
		{
			text_one: 'Мінеральна вода газована/негазована (500мл)',
			text_two: '40₴'
		},
		{
			text_one: 'Сік в асортименті (200мл)',
			text_two: '45₴'
		},
		{
			text_one: 'Кола/Фанта/Спрайт (330мл)',
			text_two: '50₴'
		},
		{
			text_one: 'Швепс мандарин/гранат/тонік (330мл)',
			text_two: '55₴'
		},
		{
			text_one: 'Мохіто',
			text_two: '130₴'
		},
		{
			text_one: 'Лимонад (500мл/1000мл)',
			text_two: '90₴/140₴'
		}
	];

	let list_twelve = [
		{ text_one: 'Зелений', text_two: '80₴' },
		{ text_one: 'Чорний', text_two: '80₴' },
		{ text_one: 'Трав’яний', text_two: '80₴' }
	];

	let list_thersteen = [
		{ text_one: 'Улун', text_two: '140₴' },
		{ text_one: 'Шу Пуер', text_two: '140₴' },
		{ text_one: 'Шен Пуер ', text_two: '140₴' },
		{ text_one: 'Ті Гуань Інь', text_two: '140₴' },
		{ text_one: 'Да Хун Пао', text_two: '140₴' },
		{ text_one: 'Бай Му Дань', text_two: '140₴' }
	];

	let list_fourteen = [
		{ text_one: 'Малина-Апельсин', text_two: '120₴' },
		{ text_one: 'Вишня-Смородина', text_two: '120₴' },
		{ text_one: 'Імбир-Журавлина', text_two: '120₴' },
		{ text_one: 'Обліпиха-Мед-Імбир', text_two: '120₴' },
		{ text_one: 'Апельсин-М’ята', text_two: '120₴' },
		{ text_one: 'Липа-М’ята', text_two: '120₴' },
		{ text_one: 'Мараканський', text_two: '120₴' },
		{ text_one: 'Саусеп', text_two: '120₴' },
		{ text_one: 'Каркаде', text_two: '120₴' },
		{ text_one: 'Лісові ягоди', text_two: '120₴' }
	];

	let list_fiveteen = [
		{ text_one: 'Сироп', text_two: '15₴' },
		{ text_one: 'Еспрессо', text_two: '50₴' },
		{ text_one: 'Американо', text_two: '50₴' },
		{ text_one: 'Американо з молоком', text_two: '60₴' },
		{ text_one: 'Латте', text_two: '60₴' },
		{ text_one: 'Капучино', text_two: '60₴' },
		{ text_one: 'Флет Уайт', text_two: '60₴' }
	];
</script>

<section id="main-menu">
	<div class="container mx-auto mb-14 px-10 2xl:px-14">
		<div class="font-audiowide">
			<h2 class="mb-10 text-center text-3xl font-bold underline lg:mb-14 lg:text-5xl">МЕНЮ</h2>

			<div class="xl:grid xl:grid-cols-2 xl:gap-x-5 2xl:gap-x-20">
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Пиво</p>
						<div class="separator"></div>
						<span class="lg:text-2xl">330мл/500мл</span>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl">
						{#each list_one as list}
							<li class="flex justify-between">
								{list.text_one} <span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Закуски</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl">
						{#each list_two as list}
							<li class="flex justify-between">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl text-d font-bold">Коктейлі з горілкою</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 gap-5 flex flex-col lg:mb-14 lg:text-2xl">
						{#each list_three as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p class="">
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm  lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Коктейлі з ромом</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 gap-5 flex flex-col lg:mb-14 lg:text-2xl">
						{#each list_four as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p>
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Коктейлі з віскі</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 gap-5 flex flex-col lg:mb-14 lg:text-2xl">
						{#each list_five as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p>
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Коктейлі з джином</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 gap-5 flex flex-col lg:mb-14 lg:text-2xl">
						{#each list_six as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p>
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Коктейлі з текілою</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 lg:mb-14 gap-5 flex flex-col lg:text-2xl">
						{#each list_seven as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p>
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Коктейлі з просекко</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 lg:mb-14 gap-5 flex flex-col lg:text-2xl">
						{#each list_eight as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p>
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Зіркові коктейлі</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl gap-5 flex flex-col">
						{#each list_nine as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p>
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Шоти</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl gap-5 flex flex-col">
						{#each list_ten as list}
							<li>
								<div class="flex justify-between border-b border-white">
									<p>
										{list.text_one}
									</p>
									<span>
										{list.text_two}
									</span>
								</div>
								<span class="text-sm lg:text-base">{list.text_three}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Безалкогольні</p>
						<div class="separator"></div>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl">
						{#each list_eleven as list}
							<li class="flex justify-between">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Класичні чаї</p>
						<div class="separator"></div>
						<span class="lg:text-2xl">400мл</span>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl">
						{#each list_twelve as list}
							<li class="flex justify-between">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Органічні чаї</p>
						<div class="separator"></div>
						<span class="lg:text-2xl">600мл</span>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl">
						{#each list_fourteen as list}
							<li class="flex justify-between">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Китайські чаї</p>
						<div class="separator"></div>
						<span class="lg:text-2xl">800мл</span>
					</div>
					<ul class="mb-10 lg:mb-14 lg:text-2xl">
						{#each list_thersteen as list}
							<li class="flex justify-between">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-5 flex items-center">
						<p class="whitespace-nowrap text-xl lg:text-4xl">Кава</p>
						<div class="separator"></div>
					</div>
					<ul class="lg:text-2xl">
						{#each list_fiveteen as list}
							<li class="flex justify-between">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.separator {
		border: 1px dashed white;
		width: 100%;
		height: 1px;
		margin: 0px 10px;
	}
</style>
