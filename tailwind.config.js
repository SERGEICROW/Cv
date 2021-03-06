module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#002306',
    }),
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
