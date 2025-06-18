import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			// fontFamily: {
			//   body
			// },
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "#18254F",
				secondary: "#D2B56B",
			},
		},
	},
	plugins: [typography],
} satisfies Config;
