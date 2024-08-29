/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "logo-name": "clamp(2rem, 2.5vw + 1rem, 2.5rem)",
        "body-text": "clamp(0.875rem, 1vw + 0.75rem, 1rem)",
        "small-text": "clamp(0.75rem, 1vw + 0.5rem, 0.875rem)",
      },
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
        "black-b1": "#121212",
        "black-b2": "#1E1E1E",
        "black-t1": "#E5E5E5",
        "black-t2": "#B0B0B0",
      },
    },
  },
  darkMode: "media", // Automatically switch based on the user's system preference
  plugins: [],
};
// clamp(minimum, preferred, maximum)
