const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: './src/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        type: 'asset/inline'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.bundle.js',
    clean: true
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`
    },
    hot: true,
    watchFiles: ['src/**/*.ts', 'dist/**/*']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  target: 'web'
};
