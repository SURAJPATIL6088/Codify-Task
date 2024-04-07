/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'header-color':'rgba(51, 51, 51,0.95)'
      }
    },
  },
  plugins: [],
}