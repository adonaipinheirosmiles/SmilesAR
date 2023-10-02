module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@services': './src/services',
          '@components': './src/components',
          '@routes': './src/routes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
