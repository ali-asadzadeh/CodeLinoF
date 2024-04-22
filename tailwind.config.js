/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.css",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        Kalameh : ['Kalameh'],
        Yekan : ['Yekan']
      },
      colors: {
        lightgray: {
          50: '#757575',
          100: '#CBCBCB',
          200: '#F4F5FA',
          300: '#D8DFF2',
          500: '#082F49',
          600: '#FAFBFF',
          700: '#D9D9D9',
          800: '#9C9C9C',
          900: '#EAEAEB',
          950: '#F5F5F5',
        },
        primery: {
          100: '#DFECFD',
          200: '#BEDAFC',
          300: '#9EC7FA',
          400: '#5DA2F7',
          500: '#1C7DF4',
          600: '#0A5FC7',
          700: '#07448E',
          800: '#031B39',
          900: '#0385C8',
        },
        skyblue: {
          50: '#0369A1',
          100: '#D5EFF9',
          200: '#0EA5E9',
          300: '#5ACCFE',
          400: '#075985',
          500: '#1362FF',
          600: '#0C4A6E',
          700: '#32baf6',
          800: '#38BDF8',
          900: '#E6EDFF',
          950: '#1C7DF4',
        },
        charcoal: '#413838',
        primaryvioent: '#DDD6FE',
        maroon: '#c2005a',
        royalpurple: '#833AB4',
        torchred: '#FD1D1D',
        yelloworange: '#FCB045',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
