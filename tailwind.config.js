const plugin = require('tailwindcss/plugin')

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.extrabold'),
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.extrabold'),
        },
        h3: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.extrabold'),
        },
      })
    }),
  ],
}
