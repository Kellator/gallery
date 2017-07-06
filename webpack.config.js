var path = require('path');

var webpack = require('webpack');

// process.traceDeprecation = true;
// process.noDeprecation = true;

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'index.js',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
            }
          }
      ]
    },
    devServer: {
      historyApiFallback: true
    }
};
