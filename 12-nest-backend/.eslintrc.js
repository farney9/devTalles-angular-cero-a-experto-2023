module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    'linebreak-style': 0,
    // Permite espacios en blanco al final de las líneas
    'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
    // Permite espacios en blanco irregulares
    'no-irregular-whitespace': ['error', { 'skipStrings': true, 'skipComments': true, 'skipRegExps': true, 'skipTemplates': true }],
  },
};
