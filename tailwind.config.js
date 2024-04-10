/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center:true,
        padding: {
          DEFAULT: '2rem',
          sm: '1.5rem'
        }
      },
      colors:{
        "primary-color":"#2b2a29",
        "red-color":"#d1363a",
        "black1":"#111"
      },
    },
  },
  plugins: [],
}

