module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: ['react-native-reanimated/plugin', ['@babel/plugin-transform-private-methods', {"loose": true}]], 
    env: {
      production: {
        plugins: ['react-native-paper/babel', ['@babel/plugin-transform-private-methods', {"loose": true}]],
      },
    },
  }
}
