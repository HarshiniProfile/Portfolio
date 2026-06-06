/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#080b12",
        surface: "#0d1117",
        card: "#111827",
        border: "#1f2937",
        accent: "#22d3ee",
        accentDim: "#0891b2",
        accentGlow: "rgba(34,211,238,0.15)",
        muted: "#6b7280",
        subtle: "#374151",
        text: "#f1f5f9",
        textDim: "#94a3b8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(34,211,238,0.12)",
        glowSm: "0 0 20px rgba(34,211,238,0.08)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
