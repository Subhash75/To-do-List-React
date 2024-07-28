/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e40404",
        secondary: "#fcd5d2",
        tertiary: "#FFC600",
      },
      screens: {
        xs: "480px"
      }
    },
    fontFamily: {
      MontserratRegular: ["Montserrat Regular", "sans-serif"],
      MontserratMedium: ["Montserrat Medium", "sans-serif"],
      MontserratSemiBold: ["Montserrat SemiBold", "sans-serif"],
    },
  },
  plugins: [],
}