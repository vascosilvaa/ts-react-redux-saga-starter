module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'react-app',
      'airbnb',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'import', 'jsx-a11y', 'react-hooks'],
    rules: {
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.tsx'],
        },
      ],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "react-hooks/rules-of-hooks": 'error',
      "react-hooks/exhaustive-deps": 'warn'
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
  };