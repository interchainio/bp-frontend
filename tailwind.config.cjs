/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'sm-side': '32px',
				'lg-side': '100px',
				'lg-top': '72px'
			}
		},
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			'white': '#F5F5F5',
			'grey': '#EFEFEF',
			'black': '#0F0F0F',
			'blue': '#0072F7'
		},
		fontFamily: {
			sans: ['"Helvetica Neue"', 'sans-serif'],
		},
		fontSize: {
			sm: ['16px', '16px'], // Apply buttons				H6
			md: ['24px','24px'], // Top header					H5
			base: ['24px','28.8px'], // Normal text				P
			lg: ['40px', '40px'], // Support category headers	H4
			xl: ['40px', '48px'], // Big supporting text		H3
			'2xl': ['64px', '64px'], // Big headers				H2
			'3xl': ['128px', '112px'] // Title					H1
		  }
	},
	plugins: [
		/*plugin(function({ addBase, theme }) {
			addBase({
			  'h1': { fontSize: theme('fontSize.3xl') },
			  'h2': { fontSize: theme('fontSize.2xl') },
			  'h3': { fontSize: theme('fontSize.xl') },
			  'h4': { fontSize: theme('fontSize.md') },
			  'h5': { fontSize: theme('fontSize.sm') },
			  'p': { fontSize: theme('fontSize.base') },
			})
		  })*/
	],
}
