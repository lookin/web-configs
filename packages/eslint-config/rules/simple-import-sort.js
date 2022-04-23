module.exports = {
  plugins: ['simple-import-sort'],

  rules: {
    /**
     * Easy autofixable import sorting.
     * @see https://github.com/lydell/eslint-plugin-simple-import-sort
     */
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
};
