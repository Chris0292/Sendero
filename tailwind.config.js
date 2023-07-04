/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      "blue-pry": "#0045A4",
      "dark-blue-pry": "#051831",
    },
    fontFamily: {
      'readex': ['Readex Pro', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

