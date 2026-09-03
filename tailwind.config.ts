import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        brand: {
          bg: "#090B10",
          secondary: "#0F121A",
          card: "#151923",
          elevated: "#1B202C",
        },
        obsidian: {
          bg: "#090B10",
          surface: "#0F121A",
          card: "#151923",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "#1B202C",
        },
        cyan: {
          light: "#70DEFF",
          DEFAULT: "#55D6FF",
          dark: "#38B6DF",
          glow: "rgba(85, 214, 255, 0.25)",
        },
        violet: {
          light: "#A99EFF",
          DEFAULT: "#8B7CFF",
          dark: "#6F5CFF",
          glow: "rgba(139, 124, 255, 0.20)",
        },
        copper: {
          light: "#70DEFF",
          DEFAULT: "#55D6FF",
          dark: "#38B6DF",
          glow: "rgba(85, 214, 255, 0.25)",
        },
        amber: {
          light: "#FBBF24",
          DEFAULT: "#F59E0B",
          dark: "#D97706",
        },
        emerald: {
          light: "#34D399",
          DEFAULT: "#10B981",
          dark: "#059669",
        },
        crimson: {
          DEFAULT: "#E11D48",
        },
        titanium: {
          light: "#CBD5E1",
          DEFAULT: "#A7AFBD",
          dark: "#727B8C",
          muted: "#727B8C",
        },
        ivory: {
          DEFAULT: "#F2F5F7",
          muted: "#A7AFBD",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "blueprint-flow": "blueprintFlow 20s linear infinite",
        "glow-fade": "glowFade 3s ease-in-out infinite alternate",
        "radar-sweep": "radarSweep 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blueprintFlow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100px 100px" },
        },
        glowFade: {
          "0%": { opacity: "0.3", transform: "scale(0.98)" },
          "100%": { opacity: "0.8", transform: "scale(1.02)" },
        },
        radarSweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(85, 214, 255, 0.08) 0%, rgba(139, 124, 255, 0.03) 40%, rgba(9, 11, 16, 0) 70%)",
        "radial-atmospheric": "radial-gradient(circle at 50% 30%, rgba(85, 214, 255, 0.07) 0%, rgba(139, 124, 255, 0.03) 45%, rgba(9, 11, 16, 0) 75%)",
      },
    },
  },
  plugins: [],
};

export default config;
