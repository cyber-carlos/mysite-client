const colors = require('tailwindcss/colors')
// const generateColor = (rootVariable, opacityVariable, opacityValue) => {
//   if (opacityValue !== undefined) return `rgba(var(${rootVariable}), ${opacityValue})`
//   if (opacityVariable !== undefined) return `rgba(var(${rootVariable}), var(${opacityVariable}, 1))`
//   return `rgb(var(${rootVariable}))`
// }
// body: (value) => generateColor('--app-bg', value.bgOpacityVariable, value.bgOpacityValue),

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      carlos: {
        'header-button': 'var(--header-button)',
        'header-button-light': 'var(--header-button-light)',
        'nav-button': 'var(--nav-button)',
        'nav-button-light': 'var(--nav-button-light)',

        bg1: 'var(--bg1)',
        bg2: 'var(--bg2)',
        'bg2-hover': 'var(--bg2-hover)',
        'bg2-active': 'var(--bg2-active)',
        bg3: 'var(--bg3)',
        'bg3-hover': 'var(--bg3-hover)',
        'bg3-active': 'var(--bg3-active)',
        bg4: 'var(--bg4)',

        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-active': 'var(--primary-active)',

        secondary: 'var(--secondary)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',

        icon: 'var(--icon)',

        border: 'var(--border)',
        divider: 'var(--divider)',
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
      spacing: {
        22: '5.5rem',
      },
      maxWidth: {
        img: '80%',
        20: '5rem',
        48: '12rem',
        'main-max': '1184px',
        'main-lg': '1142px',
      },
      flex: {},
      boxShadow: {
        header: '0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.2)',
      },
      transitionProperty: {
        carlos:
          'width, height, margin, padding, background-color, border-color, color, fill, stroke, transform',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        2000: '2000ms',
      },
      transitionDelay: {
        400: '400ms',
      },
      gridTemplateColumns: {},
      gridTemplateRows: {},
      backgroundImage: (theme) => ({
        'texture-xv': "url('/images/texture-xv.png')",
        'texture-skulls': "url('/images/texture-skulls.png')",
        'texture-food': "url('/images/texture-food.png')",
      }),
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
      backgroundColor: ['active'],
      // backgroundOpacity: ['dark'],
    },
    typography: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
}
