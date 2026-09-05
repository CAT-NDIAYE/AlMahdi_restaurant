import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:    "var(--color-background)",
        surface:       "var(--color-surface)",
        foreground:    "var(--color-foreground)",
        accent:        "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        gold:          "var(--color-gold)",
        "gold-soft":   "var(--color-gold-soft)",
        neutral:       "var(--color-neutral)",
        border:        "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
      },
      spacing: {
        xs:  "6px",
        sm:  "10px",
        md:  "18px",
        lg:  "32px",
        xl:  "64px",
        "2xl": "96px",
      },
      scale: {
        "108": "1.08",
      },
    },
  },
  plugins: [],
};

export default config;
