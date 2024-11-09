import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
			audiowide: ['Audiowide', 'sans-serif']
		},
		backgroundImage: {
			header: "url('/header.png')",
			apollo: "url('/apollo.jpg')",
			hookah_mobile: "url('/hookah_mobile_icon.svg')",
			hookah_desctop: "url('/hookah_desctop_icon.svg')",
			section: "url('/bg_two_section.gif')",
			'parallax-1920-1080': "url('/paralax_two-1920-1080.webp')",
			'parallax-800-450': "url('/paralax_two-800-450.webp')"
		},
		colors: {
			app: '#06014066',
			white: '#FFFFFF',
			black: '#000000',
			'faq-unswer': ' #9F9F9F',
			pol_conf: '#747474',
			hookah_subtitle: '#9E9E9E',
			coctail_subtitle: '#6D6D6D',
			d: '#00FF99'
		},
		screens: {
			bs: '320px',

			sm: '375px',

			md: '425px',

			lg: '768px',

			xl: '1024px',

			'2xl': '1440px'
		},
		extend: {}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
