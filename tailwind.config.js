/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-content": "#404040",
        green: "#027E5F",
        brown: "#f3c23c",
      },
      fontSize: {
        clampH1: "clamp(2.25rem, 5vw, 4.5rem)",
        clampH2: "clamp(1.5rem, 6vw, 3rem)",
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(250px, 335px))",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
