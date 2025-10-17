/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        noto: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};