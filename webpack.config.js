const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin([{ from: "./public/images", to: "./images" }]),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: `./.env.${env === "production" ? "prd" : "dev"}`
    })
  ],
  devServer: {
    contentBase: "./dist",
    compress: true,
    inline: true,
    port: "8080",
    allowedHosts: [".gasparteixeira.com"]
  }
};
