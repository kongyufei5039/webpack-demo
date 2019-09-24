'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index/index.js',
    search: './src/search/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.js|.jsx$/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint/lib/cli-engine/formatters/stylish')
            }
          }
        ]
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      template: path.join(__dirname, 'src/index/index.html'),
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'search',
      template: path.join(__dirname, 'src/search/index.html'),
      filename: 'search.html',
      chunks: ['search']
    }),
    new HtmlWebpackPlugin({
      title: 'screen',
      template: path.join(__dirname, 'client/index.html'),
      filename: 'screen.html',
      chunks: ['']
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
          global: 'ReactDOM',
        },
      ]
    })
  ],
  devServer: {
    contentBase: './dest',
    hot: true
  }
}
