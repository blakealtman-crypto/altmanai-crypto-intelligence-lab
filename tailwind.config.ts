import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7ff",
          100: "#e6ecff",
          500: "#3b5bfd",
          600: "#2f47d1",
          900: "#10163a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
