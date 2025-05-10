import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#004020",
        secondary: "#00A652",
        tertiary: "var(--background)",
        success: "#267135",
        danger: "#DC3545",
        whatsapp: "#25D366",
        info: "#9EEAF9",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
