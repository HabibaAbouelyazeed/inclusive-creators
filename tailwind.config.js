/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dirtyPink: "#F7CBCA",
      pinkGrey: "#DDD3D2",
      subtle: "#8C8CA1",
      tealGrey: "#BDD7D8",
      olive: "#5D6B6B",
      "secondary-300": "#F1F6F8",
      "secondary-500": "#D5E5E5",
      "neutral-800": "#19213D",
      "neutral-700": "#353E5C",
      "neutral-600": "#6D758F",
      "neutral-500": "#B4B9C9",
      "neutral-400": "#E1E4ED",
      "neutral-300": "#F1F3F7",
      "neutral-200": "#F8FAFF",
      "neutral-100": "#FFFFFF",
      red: "red",
    },
    plugins: [],
  },
});
