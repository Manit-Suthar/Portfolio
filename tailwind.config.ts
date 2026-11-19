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
        background: "#08090D",
        card: "#101116",
        "card-subtle": "#151720",
        border: "rgba(255, 255, 255, 0.08)",
        "border-hover": "rgba(34, 197, 94, 0.35)",
        primary: "#F5F5F5",
        secondary: "#9298A7",
        accent: {
          green: "#22C55E",
          "green-hover": "#16A34A",
          "green-glow": "rgba(34, 197, 94, 0.18)",
          emerald: "#10B981",
          purple: "#5425A6",
          blue: "#3987FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "marquee-slow": "marquee 38s linear infinite",
        "marquee-reverse-slow": "marquee-reverse 38s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
