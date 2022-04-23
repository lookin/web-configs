const plugin = require('tailwindcss/plugin');

const { hexToRgb, withOpacityValue } = require('../utils');

const variables = plugin(
  ({ addBase }) => {
    addBase({
      '.dark': {
        '--color-background-primary': hexToRgb('#000'),
        '--color-background-secondary': hexToRgb('#111'),
        '--color-border-primary': hexToRgb('#333'),
        '--color-border-secondary': hexToRgb('#444'),
        '--color-foreground-primary': hexToRgb('#fff'),
        '--color-foreground-secondary': hexToRgb('#888'),
      },
      '.light': {
        '--color-background-primary': hexToRgb('#fff'),
        '--color-background-secondary': hexToRgb('#fafafa'),
        '--color-border-primary': hexToRgb('#eaeaea'),
        '--color-border-secondary': hexToRgb('#999'),
        '--color-foreground-primary': hexToRgb('#000'),
        '--color-foreground-secondary': hexToRgb('#666'),
      },
    });
  },
  {
    theme: {
      extend: {
        backgroundColor: {
          primary: withOpacityValue('--color-background-primary'),
          secondary: withOpacityValue('--color-background-secondary'),
        },
        borderColor: {
          primary: withOpacityValue('--color-border-primary'),
          secondary: withOpacityValue('--color-border-secondary'),
        },
        textColor: {
          primary: withOpacityValue('--color-foreground-primary'),
          secondary: withOpacityValue('--color-foreground-secondary'),
        },
      },
    },
  }
);

module.exports = variables;
