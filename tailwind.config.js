/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,s}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

