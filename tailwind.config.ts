/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D52A0",
        secondary: "#7091E6",
        accent: "#8697C4",
        background: "#ADBBDA",
        text: "#EDEBF5",
      },
    },
  },
  plugins: [],
};
