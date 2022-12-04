/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {},
    colors:{
      'white-500': '#FFFFFF',
      'dark-700' : '#121212',
      'white-600':' #EDEDED' ,
      'gray-500': '#27272A',
      'red-400 ' : '#990100'

    },
    fontFamily: {
    sans:['Inter', 'sans-serif'],
     serif:['Merriweather', 'serif'],
      
    }
  },
  plugins: [],
}
