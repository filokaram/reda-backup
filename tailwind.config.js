/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdfaee',
          100: '#f8f0c3',
          200: '#f0de80',
          300: '#e8cb44',
          400: '#d4af37', // Golden base
          500: '#c49b2a', // Golden vibrant
          600: '#a67d1e', // Darker gold
          700: '#875f14',
          800: '#6b4a0d',
          900: '#4e3508',
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'Cairo', 'sans-serif'],
        accent: ['Tajawal', 'Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
