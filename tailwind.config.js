const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: "#007AFF",
      primaryAlt: "#0A84FF",
      mainBg: "#1C1C1E",
      darkGray: "#2F2F30",
      gray: "#3F3F3F",
      lightGray: "#ECECEC",
      bgAtl: "#F4F7FD",
    },
    extend: {},
  },
  plugins: [],
}