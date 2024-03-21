/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky':'#478AC9',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),]
}