/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'hira': ['Hiragino Kaku Gothic Pro W3'],
      },
      colors: {
        'orange': '#FF7055',
        'red': '#FF2700',
        'gray': '#DDDDDD',
        'gray-dark': '#777777',
        'gray-light': '#999999'
      }
    },
  },
  plugins: [],
}

