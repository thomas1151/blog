const customColors = {
  'primary': '#03A9F4',
  'secondary': '#ecbe45',
  'danger': '#e3342f',
  'amazon-orange': '#FF9900',
  'sheffield-purple': '#211551',
  'transparentish': "rgba(50,50,50,0.3)",
  'mustard-yellow': '#FF6F1D',
  'dark-primary': '#000030'
}

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: 'class',
  purge: [],
  theme: {
    extend: {
      colors: customColors,
      maxHeight:{
        '3/4': '75%',
        '25vh': '25vh',
      },
      height:{
        'xxs': '10rem',
      },
      maxWidth:{
        'xxs': '10rem',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '3/3': '100%',
      },
      opacity:{
        '85': '.85',
        '90': '.95',
      },
      fontSize: {
        '7xl': '5rem',
      }
    },
    fontFamily: {
      'display': ['Poppins', "sans-serif"],
      'body': ["Roboto Slab", "serif"],
      'sans-serif': ['Poppins', "sans-serif"],
      'serif': ["Roboto Slab", "serif"]
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      ...customColors,
    }),
    borderColor: theme => ({
      ...theme('colors'),
      ...customColors,
    }),
  },
  variants: {},
  plugins: [],
}
