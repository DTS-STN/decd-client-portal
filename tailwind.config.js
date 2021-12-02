const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xxs: '.5rem',
      ...defaultTheme.fontSize,
    },
    screens: {
      'xs': '376px',
      ...defaultTheme.screens,
      '2xl': '1920px',
    },
    extend: {
      colors: {
        'gray': {
          lightest: '#F4F4F4',
          light: '#F9F9F9',
          solid: '#B9B9B9',
          notif: '#595959',
          dark: '#7F8C8D',
        },
        'dark': {
          light: '#333333',
          solid: '#262626',
        },
        'light': {
          solid: '#FBFBFB',
        },
        'bright-blue': {
          light: '#78B9E4',
          solid: '#3498DB',
          dark: '#245C81',
          royal: '#2b4380',
        },
        'deep-blue': {
          light: '#5E8EBD',
          solid: '#173451',
          dark: '#21303F',
        },
        'red': {
          light: '#B76565',
          solid: '#FF0000',
          dark: '#881515',
        },
        'burgundy': {
          light: '#E77A7C',
          solid: '#A24446',
          dark: '#C94447',
        },
        'orange': {
          light: '#F19E7A',
          solid: '#D96F41',
          dark: '#AC5028',
        },
        'yellow': {
          light: '#E6BF81',
          solid: '#F39C12',
          dark: '#B17921',
        },
        'green': {
          light: '#81DEA8',
          solid: '#28AE60',
          dark: '#247E49',
        },
        'purple': {
          light: '#9E81CB',
          solid: '#6D29D5',
          dark: '#40216E',
        },
        'pink': {
          light: '#C197A9',
          solid: '#DC2875',
          dark: '#9E4068',
        },
        'cpButton': {
          org: '#26374a',
          hover: '#1d2a38',
        },
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.25)',
      },
      height: {
        tiny: '1.5px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-container-break-out'),
    require('tailwindcss-children'),
  ],
}
