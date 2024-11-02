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
			// parallax: "url('/paralax.jpg')",
			apollo: "url('/apollo.jpg')",
			union: "url('/union.svg')",
			section: "url('/bg_two_section.gif')",
			'parallax-1920-1080': "url('/paralax_two-1920-1080.webp')",
			'parallax-800-450': "url('/paralax_two-800-450.webp')"
		},
		colors: {
			app: '#06014066',
			white: '#FFFFFF',
			'faq-unswer': ' #9F9F9F'
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
