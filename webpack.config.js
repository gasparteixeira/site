const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, options) => {
  const mode = options.mode || "development";
  console.log(mode);
  return {
    entry: {
      app: "./src/index.js",
      vendor: ["react", "react-dom", "react-router-dom", "redux", "reactstrap"]
    },
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
      filename: "[name].[hash].bundle.js",
      chunkFilename: "[name].[hash].bundle.js"
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            enforce: true,
            chunks: "all"
          }
        }
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      new CopyPlugin([{ from: "./public/images", to: "./images" }]),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
        path: `./.env.${mode === "production" ? "prd" : "dev"}`
      })
    ],
    devServer: {
      contentBase: "./dist",
      disableHostCheck: true
    },
    devtool: mode === "development" ? "inline-source-map" : false,
    mode: mode
  };
};
