/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Space Grotesk",
			},
			colors: {
				"light-grayish-violet": "hsl(270,3%,87%)",
				"dark-grayish-violet": "hsl(279,6%,55%)",
				"very-dark-violet": "hsl(278,68%,11%)",
				error: "hsl(0,100%,66%)",
				"input-from": "hsl(249,99%,64%)",
				"input-to": "hsl(278,94%,30%)",
			},
		},
	},
	plugins: [],
};
