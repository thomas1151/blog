module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'display': ['Poppins', "sans-serif"],
      'body': ["Roboto Slab", "serif"],
      'sans-serif': ['Poppins', "sans-serif"],
      'serif': ["Roboto Slab", "serif"]
    },
    backgroundColor: theme => ({
       ...theme('colors'),
      'primary': '#03A9F4',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'amazon-orange': '#FF9900',
      'sheffield-purple': '#211551',
      'transparentish': "rgba(50,50,50,0.3)"
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#03A9F4',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    
    extend: {
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
      },
      fontSize: {
        '7xl': '5rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
