const plugin = require('tailwindcss/plugin');

const { hexToRgb, withOpacityValue } = require('../utils');

const variables = plugin(
  ({ addBase }) => {
    addBase({
      '.dark': {
        '--color-bg-primary': hexToRgb('#000'),
        '--color-bg-secondary': hexToRgb('#111'),
        '--color-border-primary': hexToRgb('#333'),
        '--color-border-secondary': hexToRgb('#444'),
        '--color-fg-primary': hexToRgb('#fff'),
        '--color-fg-secondary': hexToRgb('#888'),
      },
      '.light': {
        '--color-bg-primary': hexToRgb('#fff'),
        '--color-bg-secondary': hexToRgb('#fafafa'),
        '--color-border-primary': hexToRgb('#eaeaea'),
        '--color-border-secondary': hexToRgb('#999'),
        '--color-fg-primary': hexToRgb('#000'),
        '--color-fg-secondary': hexToRgb('#666'),
      },
    });
  },
  {
    theme: {
      extend: {
        backgroundColor: {
          primary: withOpacityValue('--color-bg-primary'),
          secondary: withOpacityValue('--color-bg-secondary'),
          invert: withOpacityValue('--color-fg-primary'),
        },
        borderColor: {
          primary: withOpacityValue('--color-border-primary'),
          secondary: withOpacityValue('--color-border-secondary'),
          invert: withOpacityValue('--color-fg-primary'),
        },
        textColor: {
          primary: withOpacityValue('--color-fg-primary'),
          secondary: withOpacityValue('--color-fg-secondary'),
          invert: withOpacityValue('--color-bg-primary'),
        },
      },
    },
  }
);

module.exports = variables;
