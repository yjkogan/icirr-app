const path = require('path');
const webpack = require('webpack');

const cwd = process.cwd();
const sharedConfig = require('./shared.config.js');

module.exports = {
  devtool: 'eval',

  entry: [
    `webpack-dev-server/client?http://${process.env.DEV_SERVER_ADDRESS || '0.0.0.0'}:3000`,
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.join(cwd, 'src/js/index.js'),
  ],

  output: {
    path: path.join(process.cwd(), 'dev'),
    filename: 'index.js',
    // Must be absolute, RE: https://github.com/webpack/css-loader/issues/29
    publicPath: `http://${process.env.DEV_SERVER_ADDRESS || '0.0.0.0'}:3000/`,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  module: {
    loaders: sharedConfig.loaders.concat([
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-0'),
            require.resolve('babel-preset-react'),
          ],
          plugins: [
            require.resolve('react-hot-loader/babel'),
            require.resolve('babel-plugin-lodash'),
          ],
        },
        include: [
          path.join(cwd, 'src/js'),
        ],
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: function() {
          //       return [
          //         sharedConfig.postcss
          //       ];
          //     }
          //   }
          // },
          'sass-loader?sourceMap'
        ],
        include: [
          path.join(cwd, 'src/css'),
        ],
      }, {
        test: /\.css$/,
        use: [
          'css-loader?sourceMap',
        ],
      },
    ]),
  },

  resolveLoader: sharedConfig.resolveLoader,
  resolve: sharedConfig.resolve,
  externals: sharedConfig.externals,
};
