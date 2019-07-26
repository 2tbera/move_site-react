'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process() {
    return 'module.exports = {' +
        'module: {\n' +
        '    loaders: [\n' +
        '      {exclude: [\'node_modules\'], loader: \'babel\', test: /\\.jsx?$/},\n' +
        '      {loader: \'style-loader!css-loader\', test: /\\.css$/},\n' +
        '      {loader: \'url-loader\', test: /\\.gif$/},\n' +
        '      {loader: \'file-loader\', test: /\\.(ttf|eot|svg)$/},\n' +
        '    ],\n' +
        '  },\n' +
        '  resolve: {\n' +
        '    alias: {\n' +
        '      config$: \'./configs/app-config.js\',\n' +
        '      react: \'./vendor/react-master\',\n' +
        '     },\n' +
        '    extensions: [\'\', \'js\', \'jsx\'],\n' +
        '    modules: [\n' +
        '      \'node_modules\',\n' +
        '      \'bower_components\',\n' +
        '      \'shared\',\n' +
        '      \'/shared/vendor/modules\',\n' +
        '    ],\n' +
        '  },};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
