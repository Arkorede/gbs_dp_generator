/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '478px',
      md: '991px',
      xl: '1100px',
      lg: '1440px',
    },
    extend: {},
  },
  plugins: [],
}

