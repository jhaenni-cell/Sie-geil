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
        "brainhance-blue": "#39B5FE",
        "brainhance-blue-dark": "#2A8FD4",
        "brainhance-dark": "#1A1A2E",
        "brainhance-gray": "#F5F7FA",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 20s linear infinite",
        "scroll-left-slow": "scroll-left 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
