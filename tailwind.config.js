/** @type {import('tailwindcss').Config} */
const defaultTheme =require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ["*"],
   theme: {
    screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
   
  }
  ,
  letterSpacing: {
    tightest: '-.075em',
    tighter: '-.05em',
    tight: '-.025em',
    normal: '0',
    wide: '.025em',
    wider: '.05em',
    widest: '.1em',
    widest: '.25em',
  },
  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    DEFAULT: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },
  // colors: {
  //   'blue': '#1fb6ff',
  //   'purple': '#7e5bef',
  //   'pink': '#ff49db',
  //   'orange': '#ff7849',
  //   'green': '#13ce66',
  //   'yellow': '#ffc82c',
  //   'gray-dark': '#273444',
  //   'gray': '#8492a6',
  //   'gray-light': '#d3dce6',
  // },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
    extend: {spacing: {
      '128': '32rem',
      '144': '36rem',
      'py':"100px"
    },
    borderRadius: {
      '4xl': '2rem',

    },
    screens: {
      '3xl': '1600px',
    },
 
  },
  opacity: {
    '0': '0',
    '20': '0.2',
    '40': '0.4',
    '60': '0.6',
    '80': '0.8',
    '100': '1',
  },
    // spacing: {
    //   px: '1px',
    //   0: '0',
    //   0.5: '0.125rem',
    //   1: '0.25rem',
    //   1.5: '0.375rem',
    //   2: '0.5rem',
    //   2.5: '0.625rem',
    //   3: '0.75rem',
    //   3.5: '0.875rem',
    //   4: '1rem',
    //   5: '1.25rem',
    //   6: '1.5rem',
    //   7: '1.75rem',
    //   8: '2rem',
    //   9: '2.25rem',
    //   10: '2.5rem',
    //   11: '2.75rem',
    //   12: '3rem',
    //   14: '3.5rem',
    //   16: '4rem',
    //   20: '5rem',
    //   24: '6rem',
    //   28: '7rem',
    //   32: '8rem',
    //   36: '9rem',
    //   40: '10rem',
    //   44: '11rem',
    //   48: '12rem',
    //   52: '13rem',
    //   56: '14rem',
    //   60: '15rem',
    //   64: '16rem',
    //   72: '18rem',
    //   80: '20rem',
    //   96: '24rem',
    // },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing')
    })
  },
  plugins: [
    require('./named-colors')
  ],
}
