/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans':['"Open Sans"'],
      },
      backgroundImage: {
        'hero-pattern': "url('@/assets/hero.jpg')",
      },
      boxShadow:{
        '3xl': '0 0 5px 5px rgba(0,0,0,0.1)',
      },
      margin:{
        'ml-1/2': 'margin-left:-50%'
      },
      screens: {
        'md': '840px',
      }
    },
  },
  plugins: [],
}
