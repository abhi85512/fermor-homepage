import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1E2B", slate: "#4A5A68", line: "#DCE3E8", mist: "#F4F7F8",
        brand: { DEFAULT: "#0B6E6E", dark: "#084F52", soft: "#E3F1F0" },
        signal: "#B7791F",
      },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;
