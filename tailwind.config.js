/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      dm: ["DM Sans"],
    },
    fontSize: {
      39: "39px",
      49: "49px",
    },
    colors: {
      ...colors,
      offwhite: "#f0f0f0",
      ash: "#F5F5F3",
      lightash: "#6D6D6D",
      dark: "#262626",
      para: "#767676",
    },
    maxWidth: {
      container: "1604px",
      644: "644px",
    },
    width: {
      48: "48%",
      100: "100%",
    },
  },
  plugins: [],
};
