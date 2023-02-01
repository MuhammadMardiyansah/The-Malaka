/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
      extend: {
        fontFamily:{
          Patua : ['Patua One'],
          Source : ['Source Sans Pro'],
          plex : ['IBM Plex Mono'],
          DM : ['DM Sans, sans-serif'],
        },
  
        colors: {
          'regal-blue': '#272D3E',
          'regal-gray': '#6F6F6F',
          'regal-red': '#FE5E44',
          'regal-black': '#0C0E2B',
          'primary': '#00BAC7',
          'regal-primary': '#EDFCFD',
          'regal-primary-second': '#C6F4F8',
          'regal-primary-thrid': '#C4C4C4',
        },

      },
    },
    plugins: [],
  }
  