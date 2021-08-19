// tailwind.config.js
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'bookmark-purple': '#5267DF',
				'bookmark-red': '#FA5959',
				'bookmark-blue': '#242A45',
				'bookmark-grey': '#9194A2',
				'bookmark-white': '#f7f7f7',
			},
		},
		fontFamily: {
			Poppins: ['Poppins, sans-serif'],
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
			// screens: {
			// 	sm: '640',
			// 	md: '768',
			// 	lg: '1124px',
			// 	xl: '1124px',
			// 	'2xl': '1124px',
			// },

			// screens: {
			// 	sm: { min: '640px', max: '767px' },
			// 	md: { min: '768px', max: '1023px' },
			// 	lg: { min: '1024px', max: '1279px' },
			// 	xl: { min: '1280px', max: '1535px' },
			// 	'2xl': { min: '1536px' },
			// },

			// screens: {
			// 	'2xl': { max: '1535px' },
			// 	// => @media (max-width: 1535px) { ... }

			// 	xl: { max: '1279px' },
			// 	// => @media (max-width: 1279px) { ... }

			// 	lg: { max: '1023px' },
			// 	// => @media (max-width: 1023px) { ... }

			// 	md: { max: '767px' },
			// 	// => @media (max-width: 767px) { ... }

			// 	sm: { max: '639px' },
			// 	// => @media (max-width: 639px) { ... }
			// },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
