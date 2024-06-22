/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customGrey:'rgb(167, 158, 158)',
				customBlue: 'rgb(10, 160, 208)',
				// customBlue: 'rgb(15,115,238)',
			},
			fontFamily: {
				sans: ['raleway', ...defaultTheme.fontFamily.sans],
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
