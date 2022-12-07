/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-logo': "url('/src/assets/Logo/image.png')"
       
      }


    },
    colors:{
      'white-500': '#FFFFFF',
      'dark-700' : '#121212',
      'white-600':' #EDEDED' ,
      'gray-500': '#27272A',
      'red-400 ' : '#990100',
      'white-33%' : '#DADADA'
      

    },
    fontFamily: {
    sans:['Inter', 'sans-serif'],
     serif:['Merriweather', 'serif'],
      
    }
  },
  plugins: [],
}
