/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bcblue': '#234075',
        'bcgold': '#fcba19',
        'autimo-primary': '#409099'
      }
    },
  },
  plugins: [],
}

