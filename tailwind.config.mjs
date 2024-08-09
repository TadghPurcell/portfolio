/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#EFFAF6',
					100: '#D9F2E6',
					200: '#B6E4D2',
					300: '#85D0B6',
					400: '#52B597',
					500: '#319B7E',
					600: '#217A63',
					700: '#1A6251',
					800: '#174E42',
					900: '#144038',
					950: '#0A2420',
				},
				secondary: {
					50: '#fdfff4',
					100: '#f4fec7', 
					200: '#e8fd8a',
					300: '#e2fc4d', 
					400: '#e5fb24',
					500: '#f3f50b',
					600: '#d9c806',
					700: '#b49409',
					800: '#92720e',
					900: '#785d0f',
					950: '#453303'
				},
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				// serif: ['Roboto', ...defaultTheme.fontFamily.serif]
			},
			backgroundImage: {
				'oyb-gradient': 'linear-gradient(45deg, rgba(68,152,255,.75) 0%, rgba(0,172,255,.75) 50%, rgba(0,215,236,.75) 100%)'
				// 'oyb-gradient': 'linear-gradient(to bottom right, rgba(16, 185, 129, .9), rgba(32, 227, 178, .8), rgba(12, 235, 235, .8))'
			},
			height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
		},
	},
	plugins: [],
}
