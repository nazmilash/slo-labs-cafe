import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000", // Pure Black
                foreground: "#FFFFFF", // Pure White
                subtle: "#333333", // Dark Gray for subtle elements
                accent: "#FFFFFF", // White as accent in minimal theme
                charcoal: "#0A0A0A",
                sunset: {
                    yellow: "#FFD700",
                    orange: "#FF8C00",
                    red: "#8B0000",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-syne)", "sans-serif"],
                mono: ["var(--font-roboto-mono)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
