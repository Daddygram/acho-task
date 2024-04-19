/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/index.html",
  ],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#0E0D0D",
        whitePrimary: "#FFFFFF",
        beigePrimary: "#DCC6B6",
        secondary: "#F4EFEB",
        greyish: "#212121",
        lightPink:"#DADADA",
      },
      screens: {
        "2xl": "1440px",
      } 
    },
  },
  plugins: [],
}