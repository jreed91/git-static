// webpack.config.js
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')


  module.exports = {
    entry: './entry.js',

    output: {
      filename: 'bundle.js',
      path: __dirname,
      libraryTarget: 'umd'
    },

    module: {
      preloaders: [
       {
          test: /\.css$/,
          loader: 'csslint'
        },
        {
          test: /\.jsx?$/,
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        { test: /\.jsx$/, loader: 'jsx-loader' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.css/, loader: 'css-loader!cssnext-loader'}
      ]
    },
   

    plugins: [
      new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    ],

    cssnext: {
      compress: true,
      features: {
        rem: false,
        pseudoElements: false,
        colorRGBA: false
      }
    }
  }