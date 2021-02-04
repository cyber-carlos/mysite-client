const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      carlos: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-accent': 'var(--text-accent)',

        'link-primary': 'var(--link-primary)',
        'link-primary-hover': 'var(--link-primary-hover)',
        'link-secondary': 'var(--link-secondary)',
        'link-secondary-hover': 'var(--link-secondary-hover)',

        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-accent': 'var(--bg-accent)',

        border: 'var(--border)',
        header: 'var(--header)',
      },
    },
    extend: {
      fontFamily: {
        welcome: ['Luckiest Guy', 'sans-serif'],
      },
      maxWidth: {
        img: '80%',
      },
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
    extend: {},
    typography: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
}
