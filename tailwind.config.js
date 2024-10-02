/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add other custom fonts if needed
        domine: ["Domine", "serif"],
      },
      colors: {
        customPurple: "#734060", // You can name this color as you like
      },
    },
  },
  plugins: [],
};
