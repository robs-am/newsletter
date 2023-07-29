/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkGrey: "hsl(234, 29%, 20%)",
      grey: "hsl(235, 18%, 26%)",
      lightGrey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
      red: "hsl(4, 100%, 67%)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
