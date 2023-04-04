module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    quotes: ['warn', 'single'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'vue/multi-word-component-names': 'off'
  }
};
