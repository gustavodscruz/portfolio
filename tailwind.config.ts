import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#010101",
        foreground: "#afc0c2",
      },
      fontFamily : {
        primary: "var(--primary), sans-serif",
        secondary: "var(--secondary), sans-serif"
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, transparent 1px, rgba(0, 0, 0, 0.9) 1px), linear-gradient(to bottom, transparent 1px, rgba(0, 0, 0, 0.9) 1px)",
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
    },
  },
  plugins: [],
};
export default config;
