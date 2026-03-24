import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinSlowReverse: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        "fade-up-1": "fadeUp 1s ease 0.1s both",
        "fade-up-2": "fadeUp 1s ease 0.2s both",
        "fade-up-3": "fadeUp 1s ease 0.3s both",
        "fade-up-4": "fadeUp 1s ease 0.4s both",
        "fade-up-5": "fadeUp 1s ease 0.5s both",
        "fade-up-6": "fadeUp 1s ease 0.6s both",
        "fade-up-7": "fadeUp 1s ease 0.7s both",
        "fade-up-8": "fadeUp 1s ease 0.8s both",
        "fade-up-9": "fadeUp 1s ease 0.9s both",
        "fade-up-10": "fadeUp 1s ease 1.0s both",
        "fade-up-11": "fadeUp 1s ease 1.1s both",
        "fade-up-12": "fadeUp 1s ease 1.2s both",
        float: "float 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease forwards",
        "pulse-gold": "pulseGold 1.5s ease-in-out infinite",
        "spin-slow": "spinSlow 20s linear infinite",
        "spin-slow-reverse": "spinSlowReverse 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
