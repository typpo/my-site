var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/build/',
    filename: 'app.js',
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?experimental',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
        exclude: /node_modules/,
      },
    ]
  }
}
