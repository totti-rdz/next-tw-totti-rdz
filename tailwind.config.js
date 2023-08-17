/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FEFEFA",
      },
      keyframes: {
        wavesFrames: {
          "0%": { transform: "translate3d(-90px, 0, 0)" },
          "100%": { transform: "translate3d(85px, 0, 0)" },
        },
        starsFrames: {
          "0%": { transform: "scale(1) rotate(0)", filter: "grayscale(1)" },
          "30%": {
            transform: "scale(0.7) rotate(-20deg)",
            filter: "grayscale(0.8)",
          },
          "80%": {
            transform: "scale(1.2) rotate(30deg)",
            filter: "grayscale(0)",
          },
          "100%": { transform: "scale(1) rotate(0)", filter: "grayscale(0)" },
        },
      },
    },
  },
  plugins: [],
};
