module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/ban-types': ['warn', { extendDefaults: true, types: { '{}': false } }],
  'unused-imports/no-unused-imports': 'warn',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'react/prop-types': 'off',
  'react/no-unescaped-entities': 'off'
  }
};
