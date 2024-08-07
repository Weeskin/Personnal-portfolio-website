const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			keyframes: {
				"shine-pulse": {
					"0%": {
						"background-position": "0% 0%"
					},
					"50%": {
						"background-position": "100% 100%"
					},
					to: {
						"background-position": "0% 0%"
					}
				},
				loopTextLeft: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" }
				}
			},
			animation: {
				loopL: "loopTextLeft  4s linear infinite"
			},
			transitionProperty: {
				height: "height"
			},
			colors: {
				orange: "#ed7c50",
				darkOrange: "#d96d43",
				darkGrey: "#595959",
				lightGrey: "#8a8a8a",
				green: "#43ae61",
				purple: "#8566f6",
				turks: "#a6e2e3",
				red: "#e46060",
				black: "#282829",
				white: "#f5f4f5"
			}
		},
		colors: {
			...colors,
			premiere: colors.blue,
			intermediaire: colors.violet,
			secondaire: colors.fuchsia
		}
	},
	plugins: [
		require("daisyui"),
		addVariablesForColors,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-dot-thick": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="' +
								value +
								'" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>'
						)}")`
					})
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		}
	]
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars
	});
}
