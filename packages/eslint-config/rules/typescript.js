module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],

      extends: [
        /**
         * Recommended rules for ESLint Plugin TypeScript.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs
         */
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',

        /**
         * TypeScript rules for `eslint-plugin-import`.
         * @see https://github.com/import-js/eslint-plugin-import#typescript
         */
        'plugin:import/typescript',
      ],

      /**
       * This setting is required to use rules which require type information.
       * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject
       */
      parserOptions: {
        project: './tsconfig.json',
      },

      rules: {
        /**
         * We must disable the base rule as it can report incorrect errors.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
         */
        'no-shadow': 'off',
      },

      /**
       * TypeScript resolver for `eslint-plugin-import`.
       * @see https://github.com/alexgorbatchev/eslint-import-resolver-typescript
       */
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
