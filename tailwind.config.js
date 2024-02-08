/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lexend-deca": ["Lexend Deca", "sans-serif"],
        "big-shoulders": ["Big Shoulders Display", "sans-serif"],
      },
      color : {
        Bright_orange : "hsl(31, 77%, 52%)"
      },

      plugins: [],
    },
  },
};
