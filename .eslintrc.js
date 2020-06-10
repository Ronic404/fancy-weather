module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    "import/extensions": ['error', 'always', { ignorePackages: true }],
    "no-use-before-define": ["error", { "functions": false, "classes": false }],
  },
};
