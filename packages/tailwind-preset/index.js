const defaultTheme = require('tailwindcss/defaultTheme');

const { variables } = require('./plugins');

/**
 * @type { import('@types/tailwindcss/tailwind-config').TailwindConfig }
 */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },

  plugins: [variables],

  theme: {
    borderRadius: {
      DEFAULT: '0.5rem',
      full: '9999px',
    },
    fontFamily: {
      body: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      body: '1rem',
      h1: '3rem',
      h2: '2rem',
      h3: '1.75rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1rem',
    },
    lineHeight: {
      none: 1,
      body: 1.625,
    },
    spacing: {
      none: '0px',
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
  },
};
