const autoprefixer = require('autoprefixer');
const path = require('path');

const cwd = process.cwd();
const modulesDirectory = path.resolve('./node_modules');
const imgRegex = /\.(png|jpg|gif|jpeg|svg|ico)$/;

module.exports = {
  loaders: [{
    test: /\.csv$/,
    loader: 'csv-loader',
    options: {
      dynamicTyping: true,
      header: true,
      skipEmptyLines: true
    }
  }, {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loaders: ['file-loader?name=fonts/[name].[ext]'],
    include: [
      path.join(cwd, 'src/fonts'),
    ]
  }, {
    test: imgRegex,
    loaders: ['file-loader?name=[path][name].[ext]&context=./src'],
    include: path.join(cwd, 'src/images'),
  }, {
    test: /\.json$/,
    loaders: ['json-loader']
  },  {
    test: /\.md$/,
    loaders: ['html-loader', 'markdown-loader'],
  }, {
    test: /pdfkit|png-js/,
    loaders: ['transform?brfs'],
  }],

  resolveLoader: {
    modules: [modulesDirectory],
  },

  resolve: {
    alias: {
      'actions': path.join(cwd, './src/js/actions'),
      'components': path.join(cwd, './src/js/components'),
      'constants': path.join(cwd, './src/js/constants'),
      'env': path.join(cwd, './src/js/env'),
      'localization': path.join(cwd, './src/js/localization'),
      'routes': path.join(cwd, './src/js/routes'),
      'selectors': path.join(cwd, './src/js/selectors'),
      'state': path.join(cwd, './src/js/state'),
      'static': path.join(cwd, './src/static'),
      'utils': path.join(cwd, './src/js/utils'),
    },
    extensions: ['.json', '.js', '.jsx', '.md'],
    modules: [modulesDirectory],
  },

  postcss: [
    autoprefixer({
      browsers: ['last 3 versions']
    })
  ]
};
