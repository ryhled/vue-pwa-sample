// https://cli.vuejs.org/core-plugins/pwa.html#configuration
module.exports = {
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    sourceMap: true,
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/,
      ],
    },
    themeColor: '#1da025',
  },
};
