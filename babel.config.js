module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@store': './src/store',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@services': './src/services',
            '@routes': './src/routes',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@dtos': './src/dtos',
            '@api': './src/api',
          },
        },
      ],
      'react-native-worklets/plugin',
    ],
  };
};