const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = path.join(__dirname, '../src/client');
const publicPath = '/';

module.exports = {
  cache: false,
  context: srcPath,
  entry: [
    '@babel/polyfill',
    path.join(__dirname, '../src/client/index'),
  ], output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/[name].[hash].js',
    publicPath,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      appconstants: `${srcPath}/appconstants/`,
      components: `${srcPath}/components/`,
      containers: `${srcPath}/containers/`,
      state: `${srcPath}/state/`,
      features: `${srcPath}/state/features/`,
      helpers: `${srcPath}/helpers/`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: srcPath,
        loader: 'babel-loader',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [

      {
        from: path.join(__dirname, '../public/'),
        to: path.join(__dirname, '../dist/'),
      },
    ]}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'REACT BOILERPLATE',
      template: path.join(__dirname, '../src/client/assets/template.html'),
    }),]

}