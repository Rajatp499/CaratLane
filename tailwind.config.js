/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#4f3268",
      },
      backgroundImage: {
        "purple-grad": "linear-gradient(to right, #d258e7 0%, #0260c0 100%)", // Gradient
      },
    },
  },
  plugins: [],
}

