import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carvao: "#1C1712",
        "carvao-claro": "#2A231C",
        brasa: "#E8630A",
        "brasa-escura": "#C2500A",
        vinho: "#A6272E",
        "vinho-escuro": "#7C1D22",
        manteiga: "#F4B942",
        creme: "#FAF6EF",
        "creme-escuro": "#F0E8D8",
        texto: "#1F1A15",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grao-madeira":
          "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 6px)",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        selo: "0 6px 20px -6px rgba(28, 23, 18, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
