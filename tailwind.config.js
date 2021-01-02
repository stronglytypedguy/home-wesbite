module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
       'gradient': '250% 250%',
    },
    extend: {
        keyframes: {
            gradient: {
              '0%, 100%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
            }
        },
        animation: {
            gradient: 'gradient 10s ease infinite',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
