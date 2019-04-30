const path = require('path');
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            typescript: {},
            node: {
                extensions: ['.ts', '.d.ts'],
                paths: ['./src', path.resolve('node_modules'), path.resolve('node_modules/@types')]
            }
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        }
    },
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    plugins: ['babel', 'import'],
    rules: {
        'import/no-unresolved': 2,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
        'import/extensions': ['.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    overrides: {
        files: ['.ts', '.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
        },
        plugins: ['@typescript-eslint/eslint-plugin'],
    },
};
