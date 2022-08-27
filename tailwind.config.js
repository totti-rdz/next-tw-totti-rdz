/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wavesFrames: {
          "0%": { transform: "translate3d(-90px, 0, 0) " },
          "100%": { transform: "translate3d(85px, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
}
