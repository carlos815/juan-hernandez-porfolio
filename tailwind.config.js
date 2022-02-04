const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ".75rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "2rem",
      "2xl": "3rem",
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1C1C1C",
      white: colors.white,
      gray: {
        200: "#444444",
        300: "#7D7D7D",
        500: "#C1C1C1",
        700: "#E4E4E4",
        900: "#EDEFF1",
      },
    },
    fontFamily: {
      display: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      body: ["Work Sans", "serif", "Arial", "sans-serif"],
    },
    screens: {
      sm: "595px",
      md: "768px",
      xl: "1020px",
    },
    extend: {
      boxShadow: {
        md: "4px 4px 13px 4px #D6DEE7",
      },
      spacing: {
        18: "4.5rem",
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out forwards 2",
        "fade-in": "fade-in 1.5s ease-in-out forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(30deg)" },
          "75%": { transform: "rotate(-30deg)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
