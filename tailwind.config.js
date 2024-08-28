/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        bree: ["Bree Serif", "serif"],
      },
      colors: {
        "white-b1": "#F5F5F5",
        "white-b2": "#FFF0F5",
        "white-t1": "#4A4A4A",
        "white-t2": "#6D6D6D",
        "black-b1": "#010B13",
        "black-b2": "#353839",
        "black-t1": "#E5E5E5",
        "black-t2": "#B0B0B0",
      },
    },
  },
  darkMode: "media", // Automatically switch based on the user's system preference
  plugins: [],
};
