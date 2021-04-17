const path = require('path');
const ext = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
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
        'import',
    ],
    ignorePatterns: [".eslintrc.js", "config/**/**"],
    // [FYI] –––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    // You can import your files without the relative path issues like:
    // Before: '../../../../getRandomNumber'
    // After: '@utils/getRandomNumber'
    //
    // Read more: https://github.com/benmosher/eslint-plugin-import
    // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    settings: {
        "import/resolver": {
            node: {
                extensions: ext,
                paths: [path.resolve(__dirname, './src')],
                paths: [path.resolve(__dirname, './src/scripts')],
                paths: [path.resolve(__dirname, './src/scripts/utils')],
            },
            alias: {
                extensions: ext,
                map: [
                    ["@src", './src'],
                    ["@scripts", './src/scripts'],
                    ["@utils", './src/scripts/utils'],
                ]
            },
        }
    },
    rules: {
        'no-irregular-whitespace': ["error", { "skipComments": true }],
        'no-trailing-spaces': ["error", { "ignoreComments": true }],
        'class-methods-use-this': 'off',
        'no-confusing-arrow': 'off',
        'object-curly-spacing': 'off',
        'object-curly-newline': 'off',
        'arrow-parens': 'off',
        'indent': ['error', 4],

        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': ["error", {
            "packageDir": './',
        }],
    },
};
