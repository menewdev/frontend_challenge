/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'hira': ['Hiragino Kaku Gothic Pro W3'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'orange': '#FF7055',
        'red': '#FF2700',
        'gray': '#AAAAAA',
        'gray-light': '#DDDDDD',
        'gray-dark': '#777777',
        'grey': '#999999',
        'blue-dark': '#307DC8',
      }
    },
  },
  plugins: [],
}

