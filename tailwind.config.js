/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./**/*.html"],
  darkMode: "false", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greyNew: "#2f2e38",
        yellowNew: "#ffe600",
      },
      fontFamily: {
        custom: ["ParagraphFont", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
