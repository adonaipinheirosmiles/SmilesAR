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
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@store': './src/store',
          '@storage': './src/storage',
          '@locale': './src/locale',
          '@analytics': './src/analytics',
        },
      },
    ],
  ],
};
