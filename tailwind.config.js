/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./scripts/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["'Roboto'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

