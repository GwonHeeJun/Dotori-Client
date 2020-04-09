module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    extends: ['airbnb', 'prettier'],
};