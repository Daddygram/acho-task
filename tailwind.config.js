/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./build/index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#0E0D0D",
        whitePrimary: "#F5F5F5",
        beigePrimary: "#DCC6B6",
        secondary: "#F4EFEB",
        greyish: "#212121",
        lightPink:"#DADADA",
        alert: "#F7DAD9",
        alertText: "#B91C1C",
        splitter: "#D9D9D9",
      },
      screens: {
        "2xl": "1440px",
        "xs": "400px",
      } 
    },
  },
  plugins: [require('flowbite/plugin')],
}