/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Fredoka'],
        'tl-font': ['Rubik']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

