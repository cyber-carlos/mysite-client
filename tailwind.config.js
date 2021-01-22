module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      saoqi: {
        white: '#ffffff',
        black: '#000000',
        50: '#d2cbe4',
        text1: '#f4e0f1',
        text2: '#9479b9',
        text3: '#ffb6b3',
        text4: '#ffd3f8',
        text5: '#b886fd',
        border: '#44395d',
        link: '#4edee5',
        lighter1: '#c83b50',
        lighter2: '#ffe69d',
        lighter3: '#ff566f',
        bg1: '#2f263c',
        bg2: '#281e36',
        bg3: '#1c1428',
        bg4: '#642f45',
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
        dark: {
          css: {
            color: theme('colors.saoqi.text1'),
            strong: {
              color: theme('colors.saoqi.text1'),
            },
            h1: {
              color: theme('colors.saoqi.lighter3'),
            },
            h2: {
              color: theme('colors.saoqi.lighter3'),
            },
            h3: {
              color: theme('colors.saoqi.lighter3'),
            },
            a: {
              color: theme('colors.saoqi.link'),
              '&:hover': {
                color: theme('colors.saoqi.link'),
              },
              textDecoration: 'none',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
    typography: ['responsive', 'dark'],
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
}
