import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D3B66",
        sand: "#F4A261",
        mist: "#F8F9FA",
        teal: "#2A9D8F",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(13, 59, 102, .10)",
        float: "0 12px 32px rgba(13, 59, 102, .18)",
      },
    },
  },
  plugins: [],
};

export default config;
