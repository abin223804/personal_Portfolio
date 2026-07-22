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
      colors: {
        obsidian: {
          bg: "#0B0D10",
          surface: "#12151A",
          card: "#181C24",
          border: "#252B36",
          hover: "#2F3644",
        },
        copper: {
          light: "#FFA07A",
          DEFAULT: "#E06D53",
          dark: "#B84A32",
          glow: "rgba(224, 109, 83, 0.25)",
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
          DEFAULT: "#8E9BAE",
          dark: "#475569",
        },
        ivory: {
          DEFAULT: "#F3F4F6",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
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
        "grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(224, 109, 83, 0.15) 0%, rgba(11, 13, 16, 0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
