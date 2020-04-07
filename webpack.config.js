const path = require('path'); //para declarar la ruta raiz
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = { 
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'main.js' 
  },
  resolve: { 
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin([
      {
        inject: true,
        template: path.resolve(__dirname, './public/index.html'),
        filename: path.resolve(__dirname, './index.html'),
      }
    ])
  ]
}
