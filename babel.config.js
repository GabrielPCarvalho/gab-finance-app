module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@stores': './src/stores',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@services': './src/services',
            '@routes': './src/routes',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@dtos': './src/dtos',
            '@api': './src/api',
          },
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
      ],
      'react-native-worklets/plugin',
    ],
  };
};