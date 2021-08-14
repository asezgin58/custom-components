// See https://eslint.org/docs/rules/ for more about eslint rules in .eslintrc.js files.
// See https://github.com/yannickcr/eslint-plugin-react for more about eslint-react rules in .eslintrc.js files.
// See https://github.com/typescript-eslint/typescript-eslint for more about typescript config in .eslintrc.js files.
// See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin for more about typescript-eslint rules in .eslintrc.js files.

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ['react', '@typescript-eslint'],
    ignorePatterns: ['/node_modules/**', '**/__tests__/*.ts', '**/__tests__/*.tsx', '/build/**'],
    rules: {
        'react/react-in-jsx-scope': 'off', // import React .... : Disable for new JSX Transform
        'react/jsx-key': 'off', //
        'react/prop-types': 'off', //
        '@typescript-eslint/no-explicit-any': 'off', // any using
        '@typescript-eslint/no-unused-vars': 'off',
        'no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-interface': 'off', // empty interface using
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react-hooks/rules-of-hooks': 'error', // Hook kurallarını kontrol eder
        'react-hooks/exhaustive-deps': 'warn', // Efekt bağımlılıklarını kontrol eder
        '@typescript-eslint/no-unsafe-assignment': 'off', // ---
        '@typescript-eslint/prefer-regexp-exec': 'off', // ---
        '@typescript-eslint/no-non-null-assertion': 'off', // ---
        '@typescript-eslint/no-unnecessary-type-assertion': 'off', // ---
        '@typescript-eslint/await-thenable': 'off', // for await using // ---
        '@typescript-eslint/require-await': 'off', // for await using  // ---
        '@typescript-eslint/no-misused-promises': 'off', // for await using  // ----
        '@typescript-eslint/no-floating-promises': 'off', // for return promise // ---
        '@typescript-eslint/no-unsafe-call': 'off', // for return promise // ---
        '@typescript-eslint/no-implied-eval': 'off', // for SetTime... functions using // ---
        '@typescript-eslint/no-unsafe-member-access': 'off', // ---
        '@typescript-eslint/no-unsafe-return': 'off', // ---
        '@typescript-eslint/restrict-template-expressions': 'off', // ---
        '@typescript-eslint/unbound-method': 'off', // ---
        '@typescript-eslint/restrict-plus-operands': 'off', // ---
        '@typescript-eslint/no-inferrable-types': 'off', // ---
        'no-debugger': 'warn',
        'no-console': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
