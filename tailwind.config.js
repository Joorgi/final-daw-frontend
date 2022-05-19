module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				shake: {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' },
				},
			},
			animation: {
				shake: 'shake 0.3s linear both',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
