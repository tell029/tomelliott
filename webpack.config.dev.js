const path = require('path');

module.exports = {
  entry: './assets/js/main.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  mode: 'development',
  optimization: {
      minimize: false
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map'
};
