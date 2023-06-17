/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        titlebottom: "5rem",
      },
    },
    colors: {
      app_black: "#212428",
      app_primary: "#ed5f38",
      app_gray: "#e2e8f0",
      app_white: "#ffffff",
      app_green: "#48cda0",
      app_blue: "#007eff",
      app_yellow: "#e6bc12",
      app_purple: "#ec38d0",
      app_purple2: "#a347cc",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
