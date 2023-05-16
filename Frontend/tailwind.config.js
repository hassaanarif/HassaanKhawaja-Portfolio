/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".shape-outside-circle": {
					"shape-outside": "circle()",
				},
				".rotate3d-left": {
					transform: "rotate3d(0.5, -0.866, 0, 15deg) rotate(1deg)",
				},
				".rotate3d-right": {
					transform: "rotate3d(0.5, 0.866, 0, 15deg) rotate(-1deg)",
				},
			});
		},
	],
};
