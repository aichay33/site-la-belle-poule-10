import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F0E2",
        "cream-soft": "#FFF8ED",
        "green-deep": "#183A22",
        "green-olive": "#2D4F2B",
        "green-light": "#6E8554",
        terracotta: "#A84B2A",
        "beige-soft": "#EFE4CF",
        "text-dark": "#1F2418",
        "text-mid": "#5D604C",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(45, 79, 43, 0.14)",
        card: "0 16px 40px rgba(31, 36, 24, 0.08)",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Avenir Next", "Inter", "system-ui", "sans-serif"],
        accent: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
