/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#0b0120",
      primarySoft: "#c084fc",
    bgDark: "#07020f",
    card: "#0f0624",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    },
  },
  plugins: [],
}