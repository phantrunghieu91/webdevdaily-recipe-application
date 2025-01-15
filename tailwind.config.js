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
        'sm': '414px',
        'md': '768px',
        'lg': '1440px',
      }
    },
  },
  plugins: [],
}

