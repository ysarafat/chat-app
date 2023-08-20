module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['prettier', 'react', 'react-hooks'],
    rules: {
        'global-require': 0,
        'new-cap': 0,
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/button-has-type': 'off',
        'react-hooks/rules-of-hooks': 0,
        'no-console': 0,
        'react/state-in-constructor': 0,
        indent: 0,
        'import/no-unresolved': 0,
        'linebreak-style': 0,
        'react/prop-types': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'no-shadow': 'off',
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'consistent-return': 0,
        'react/no-unescaped-entities': 0,
        'import/prefer-default-export': 0,
        'jsx-a11y/autocomplete-valid': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 100,
                tabWidth: 4,
                semi: true,
                endOfLine: 'auto',
            },
        ],
    },
};
