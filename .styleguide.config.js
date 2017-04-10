const loaders = require('loaders');

module.exports = {
  components: 'packages/react-*/src/index.jsx',
  webpackConfig: {
    module: {
      loaders: loaders.all,
    },
  },
};
