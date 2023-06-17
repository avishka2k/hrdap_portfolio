/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        titlebottom: "5rem",
      },
    },
    colors: {
      black: "#212428",
      primary: "#ed5f38",
      gray: "#e2e8f0",
      white: "#ffffff",
      green: "#48cda0",
      blue: "#007eff",
      yellow: "#e6bc12",
      purple: "#ec38d0",
      purple2: "#a347cc",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
