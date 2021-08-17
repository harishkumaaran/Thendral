module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/bg.jpg')",
      }),
      colors: {
        'primary': '#5E6A02',
        'secondary': '#B0C039',
        'bg-primary': '#E8F3EC',
      },
      },
  },
  variants: {
    extend: {
      display:['group-hover'],
    },
  },
  plugins: [],
}
