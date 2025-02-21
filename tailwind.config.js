/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // Watch all HTML files in src
    "./src/**/*.js", // Watch all JS files in src
  ],
  darkMode: "class", // Changed from "false" string to proper value
  theme: {
    extend: {
      colors: {
        greyNew: "#2f2e38",
        yellowNew: "#ffe600",
      },
      fontFamily: {
        custom: ["ParagraphFont", "sans-serif"],
        headerFont: ["YourCustomFontName", "sans-serif"],
      },
    },
  },
  plugins: [],
};
