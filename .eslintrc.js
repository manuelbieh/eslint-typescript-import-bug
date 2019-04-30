module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: ['plugin:import/errors', 'plugin:import/warnings'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
    plugins: ['import', '@typescript-eslint/eslint-plugin'],
    rules: {
        'import/no-unresolved': 2,
    },
};
