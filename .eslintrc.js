module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
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
    plugins: [
    ],
    rules: {
        'no-irregular-whitespace': ["error", { "skipComments": true }],
        'no-trailing-spaces': ["error", { "ignoreComments": true }],
        'class-methods-use-this': 'off',
        'no-confusing-arrow': 'off',
        'object-curly-spacing': 'off',
        'object-curly-newline': 'off',
        'arrow-parens': 'off',
        'indent': ['error', 4],
    },
    "ignorePatterns": ["webpack/**/**"],
};
