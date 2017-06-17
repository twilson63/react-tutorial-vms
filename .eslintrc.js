module.exports = {
  extends: ['standard', 'plugin:fp/recommended', 'plugin:funfp/recommended'],
  rules: {
    'no-unused-vars': 'off',
    'fp/no-nil': 'off',
    'fp/no-mutation': [
      'error',
      {
        commonjs: true,
        allowThis: true,
        exceptions: [{ object: 'foo', property: 'bar' }]
      }
    ],
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn'
  },
  plugins: ['standard', 'promise', 'fp', 'funfp']
}
