/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'diger-orange': '#FF8C00',
        'diger-dark': '#2C3E50',
      }
    },
  },
  plugins: [],
}
