/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fff4f1",
        danger: "#f47068",
        primary: "#ffb3ae",
        secondary: "#1697a6",
        dark: "#0e606b",
        warning: "#ffc24b",
      },
    },
  },
  plugins: [],
};
