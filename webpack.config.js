const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./js/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundled.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [".jsx", ".js"]
  },
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },{
          loader: 'css-loader?url=false',
        }, {
          loader: 'sass-loader?url=false',
        }],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  }
};
