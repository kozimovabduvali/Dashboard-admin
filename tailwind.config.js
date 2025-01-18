/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': "Inter",
        'space-grotesk': "Space Grotesk",
      },
      colors: {
        'dark': '#22183D',
        'dark-200': '#403d4c',
        'dark-300': '#322F3D',
        'gray-2': '#F0F2F7',
        'red-4': '#FA5482',
        'blue': '#0063D1',
      },
      maxWidth: {
        base: '114.375rem'
      }
    },
  },
  plugins: [],
}