const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#eef8ff',
    },
    extend: {
      colors: {
        primary: '#eef8ff',
        'alice-blue': '#eef8ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
