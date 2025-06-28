/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenmood: '#136501',
        yellowbutton: '#E9FE46',
        greenbutton: '#4DBE49',
        redbutton: '#F75252',
        orangebutton: '#F4BE50',
        orangeplaceholder: '#F9E0AD',
      }
    },
  },
  plugins: [],
}