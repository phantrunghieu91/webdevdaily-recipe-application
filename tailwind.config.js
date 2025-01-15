/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F79F1A',
        'secondary': '#EFE7EB',
      },
      screens: {
        'mobile': '414px',
        'pc': '1440px',
      }
    },
  },
  plugins: [],
}

