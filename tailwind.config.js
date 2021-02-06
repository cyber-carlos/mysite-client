const colors = require('tailwindcss/colors')

const generateColor = (rootVariable, opacityVariable, opacityValue) => {
  if (opacityValue !== undefined) return `rgba(var(${rootVariable}), ${opacityValue})`
  if (opacityVariable !== undefined) return `rgba(var(${rootVariable}), var(${opacityVariable}, 1))`
  return `rgb(var(${rootVariable}))`
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      carlos: {
        body: (value) => generateColor('--app-bg', value.opacityVariable, value.opacityValue),
        box: (value) => generateColor('--box-bg', value.opacityVariable, value.opacityValue),
        'box-alt': (value) =>
          generateColor('--box-bg-alt', value.opacityVariable, value.opacityValue),
        primary: (value) =>
          generateColor('--color-primary', value.opacityVariable, value.opacityValue),
        DEFAULT: (value) =>
          generateColor('--text-regular', value.opacityVariable, value.opacityValue),
        icon: (value) => generateColor('--icon', value.opacityVariable, value.opacityValue),
      },
      // carlos: {
      //   'gray-normal': 'var(--gray-normal)',
      //   'text-primary': 'var(--text-primary)',
      //   'text-secondary': 'var(--text-secondary)',
      //   'text-tertiary': 'var(--text-tertiary)',
      //   'text-accent': 'var(--text-accent)',

      //   'link-primary': 'var(--link-primary)',
      //   'link-primary-hover': 'var(--link-primary-hover)',
      //   'link-secondary': 'var(--link-secondary)',
      //   'link-secondary-hover': 'var(--link-secondary-hover)',

      //   'bg-primary': 'var(--bg-primary)',
      //   'bg-secondary': 'var(--bg-secondary)',
      //   'bg-tertiary': 'var(--bg-tertiary)',
      //   'bg-accent': 'var(--bg-accent)',

      //   border: 'var(--border)',
      //   header: 'var(--header)',
      // },
    },
    extend: {
      fontFamily: {
        welcome: ['Luckiest Guy', 'sans-serif'],
      },
      maxWidth: {
        img: '80%',
        'main-max': '1184px',
        'main-lg': '1142px',
      },
      flex: {
        '0048': '0 0 12rem',
      },
      boxShadow: {
        header: '0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {},
      gridTemplateRows: {},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.carlos.text-primary'),
            strong: {
              color: theme('colors.carlos.text-primary'),
            },
            h1: {
              color: theme('colors.carlos.text-accent'),
            },
            h2: {
              color: theme('colors.carlos.text-accent'),
            },
            h3: {
              color: theme('colors.carlos.text-accent'),
            },
            h4: {
              color: theme('colors.carlos.text-accent'),
            },
            a: {
              color: theme('colors.carlos.link-secondary'),
              '&:hover': {
                color: theme('colors.carlos.link-secondary-hover'),
              },
              textDecoration: 'none',
            },
            blockquote: {
              color: theme('colors.carlos.text-primary'),
              'border-left-color': theme('colors.carlos.bg-tertiary'),
              'background-color': theme('colors.carlos.bg-secondary'),
              padding: '.5rem',
            },
            pre: {
              color: theme('colors.carlos.text-primary'),
              'background-color': theme('colors.carlos.bg-tertiary'),
            },
            code: {
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
              color: theme('colors.carlos.header'),
              padding: '.25rem',
              margin: '0 .25rem',
              'border-radius': '.25rem',
              'background-color': theme('colors.carlos.bg-tertiary'),
            },
            'ul > li::before': {
              'background-color': theme('colors.carlos.text-accent'),
            },
            'ol> li::before': {
              color: theme('colors.carlos.text-accent'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
    },
    typography: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
}
