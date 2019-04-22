const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?![module\-a|module\-b])/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ]
}