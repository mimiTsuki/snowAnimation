module.exports = {
  mode: 'development',

  entry: './src/main.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
      static: {
          directory: `${__dirname}/dist`
      }
  }
};
