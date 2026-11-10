/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
			colors: {
				accent: "var(--accent)",
				"accent-hover": "var(--accent-hover)",
				"accent-secondary": "var(--accent-secondary)",
				"accent-contrast": "var(--accent-contrast)",
			},
			animation: {
				"spin-slow": "spin 12s linear infinite",
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				float: "float 6s ease-in-out infinite",
				shimmer: "shimmer 2.5s linear infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-8px)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
			},
		},
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
