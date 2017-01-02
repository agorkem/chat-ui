const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel!eslint',
      }, {
        test: /\.scss$/,
        loader: 'style!css?sourceMap&localIdentName=[path][name]---[local]---[hash:base64:5]!sass?sourceMap',
      }, {
        test: /\.css$/,
        loader: 'style!css?sourceMap',
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      root: `${__dirname}/src/`,
      components: `${__dirname}/src/components`,
      containers: `${__dirname}/src/containers`,
      actions: `${__dirname}/src/actions`,
      constants: `${__dirname}/src/constants`,
      reducers: `${__dirname}/src/reducers`,
      styles: `${__dirname}/src/styles`,
    },
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
  },
};
