module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ['**/node_modules/*', 'reportWebVitals.js'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'func-names': ['error', 'never'],
    'react/require-default-props': 'off',
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
