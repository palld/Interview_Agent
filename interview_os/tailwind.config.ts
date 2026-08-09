import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        ink: "hsl(var(--ink) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-raised": "hsl(var(--surface-raised) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)",

        // Text
        "text-primary": "hsl(var(--text-primary) / <alpha-value>)",
        "text-muted": "hsl(var(--text-muted) / <alpha-value>)",
        "text-faint": "hsl(var(--text-faint) / <alpha-value>)",

        // Signature accents
        signal: {
          DEFAULT: "hsl(var(--signal) / <alpha-value>)",
          soft: "hsl(var(--signal-soft) / <alpha-value>)",
        },
        pulse: {
          DEFAULT: "hsl(var(--pulse) / <alpha-value>)",
          soft: "hsl(var(--pulse-soft) / <alpha-value>)",
        },
        mint: {
          DEFAULT: "hsl(var(--mint) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "hsl(var(--danger) / <alpha-value>)",
        },

        // shadcn-style aliases used by primitive components
        border: "hsl(var(--line) / <alpha-value>)",
        input: "hsl(var(--line) / <alpha-value>)",
        ring: "hsl(var(--signal) / <alpha-value>)",
        background: "hsl(var(--ink) / <alpha-value>)",
        foreground: "hsl(var(--text-primary) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--signal) / <alpha-value>)",
          foreground: "hsl(var(--ink) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--surface-raised) / <alpha-value>)",
          foreground: "hsl(var(--text-primary) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--surface-raised) / <alpha-value>)",
          foreground: "hsl(var(--text-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--surface-raised) / <alpha-value>)",
          foreground: "hsl(var(--text-primary) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--danger) / <alpha-value>)",
          foreground: "hsl(var(--text-primary) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--text-primary) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--surface-raised) / <alpha-value>)",
          foreground: "hsl(var(--text-primary) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 5px)",
        xl: "calc(var(--radius) + 6px)",
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--signal) / 0.25), 0 8px 32px -8px hsl(var(--signal) / 0.35)",
        panel: "0 1px 0 0 hsl(var(--line) / 1), 0 20px 50px -20px hsl(0 0% 0% / 0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "bar-bounce": {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        shimmer: "shimmer 1.6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite",
        "bar-bounce": "bar-bounce 1.1s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
