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
      red: colors.red,
      slate: colors.slate,
      primary: "#007AFF",
      primaryAlt: "#0A84FF",
      mainBg: "#111315",
      darkGray: "#0C0E10",
      grey: "#191D20",
      lightGray: "#ECECEC",
      bgAtl: "#F4F7FD",
      bodyText: "#BABCBD"
    },
    extend: {},
  },
  plugins: [],
}