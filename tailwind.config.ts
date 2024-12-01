import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yuji: ['"Yuji Mai"', "serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        customBlack: "#181818",
        customDark: "#242424",
        customBg: "#1C1C1C",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
