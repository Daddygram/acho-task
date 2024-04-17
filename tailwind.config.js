/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#0E0D0D",
        whitePrimary: "#FFFFFF",
        beigePrimary: "#DCC6B6",
        secondary: "#F4EFEB"
      },
      screens: {
        "2xl": "1440px",
      } 
    },
  },
  plugins: [require('flowbite/plugin')],
}