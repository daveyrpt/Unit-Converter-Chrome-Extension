/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#6943FF",
        "custom-dark" :" #1F2937",
        "custom-not-so-dark" : "#273549",
        "white-purple" : "#5A537B",
        "dark-purple" : "#CCC1FF"
      }
    },
  },
  plugins: [],
}
