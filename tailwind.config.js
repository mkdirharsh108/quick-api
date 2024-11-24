/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        activeNav: "#F3F0F1",
        unactiveNav: "#BBBBBB",
        main: "#9dc1ce",
      },
    },
  },
  plugins: [],
};
