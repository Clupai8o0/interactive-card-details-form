/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontSize: {
				base: "18px",
			},
			fontFamily: {
				sans: "Space Grotesk",
			},
			backgroundImage: {
				"hero-mob": "url(public/bg-main-mobile.png)",
				"hero-desk": "url(public/bg-main-desktop.png)"
			}
		},
	},
	plugins: [],
};
