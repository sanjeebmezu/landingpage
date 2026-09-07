import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        panel: "#0c111d",
        panelSoft: "#111827",
        brand: "#22d3ee",
        brandDeep: "#0891b2",
        accent: "#a3e635",
        line: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
