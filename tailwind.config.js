/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "big-header": "clamp(2rem, 2.5vw + 1rem, 2.5rem)",
        "mid-header": "clamp(1.5rem, 2vw + 0.5rem, 1.75rem)",
        "body-text": "1rem",
        "small-text": "0.925rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        bree: ["Bree Serif", "serif"],
      },
      colors: {
        "white-b1": "#F0F8FF",
        "white-b2": "#FFF0F5",
        "white-t1": "#4A4A4A",
        "white-t2": "#6D6D6D",
        "black-b1": "#121212",
        "black-b2": "#1E1E1E",
        "black-t1": "#E5E5E5",
        "black-t2": "#B0B0B0",
        "blue-light": "#bfdbfe",
        "blue-dark": "#1e3a8a",
      },
    },
  },
  darkMode: "media", // Automatically switch based on the user's system preference
  plugins: [],
};
// clamp(minimum, preferred, maximum)
