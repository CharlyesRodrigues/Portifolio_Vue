/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {},
    colors:{
      'white': '#FFFFFF',
      'dark-700' : '#121212',
      'white':' #EDEDED' ,
      'Rectangle-4234': '#27272A',
      'red ' : '#990100'

    },
    fontFamily: {
    sans:['Inter', 'sans-serif'],
     serif:['Merriweather', 'serif'],
      
    }
  },
  plugins: [],
}
