module.exports = {
  rules: {
    /**
     * Ensure consistent use of file extension within the import path.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
