import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				c_black: "#1E2832",
				primary: "#FF6F61",
			},
			fontFamily: {
				OpenSans: ["var(--font-open-sans)"],
				Roboto: ["var(--font-roboto)"],
			},
		},
	},
	plugins: [],
};
export default config;
