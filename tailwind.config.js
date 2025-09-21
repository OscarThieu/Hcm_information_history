// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'beige': '#F5F5DC',
        'brand-red': {
          'light': '#e53e3e',
          'DEFAULT': '#c8102e', // This is the main brand-red
          'dark': '#9b2c2c',  // This is brand-red-dark
        }
      }
    },
  },
  plugins: [],
}