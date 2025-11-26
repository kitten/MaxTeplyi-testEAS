const { getDefaultConfig: getExpoConfig } = require('expo/metro-config');

const expoConfig = getExpoConfig(__dirname);

const uniq = (arr) => Array.from(new Set(arr));

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro

 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  ...expoConfig,
  resolver: {
    ...expoConfig.resolver,
    assetExts: (expoConfig.resolver?.assetExts ?? []).filter(
      (e) => e !== 'svg'
    ),
    sourceExts: uniq([
      ...(expoConfig.resolver?.sourceExts ?? []),
      'svg',
    ]),
  },
  transformer: {
    ...expoConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  },
};

module.exports = customConfig;
