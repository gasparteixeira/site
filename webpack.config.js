const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const robotsOptions = {
  policy: [
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow: ["/search"],
      crawlDelay: 2
    },
    {
      userAgent: "*",
      allow: "/",
      disallow: "/search",
      crawlDelay: 10
    }
  ],
  host: "https://gasparteixeira.com"
};

module.exports = (env, options) => {
  const mode = options.mode || "development";
  const devMode = mode !== "production";
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
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
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
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      new WebpackPwaManifest({
        name: "Gaspar Teixeira",
        short_name: "Gaspar",
        description: "Manifest for Gaspar Teixeira",
        background_color: "#ffffff"
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      }),
      new CopyPlugin([{ from: "./public/images", to: "./images" }]),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
        path: `./.env.${mode === "production" ? "prd" : "dev"}`
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
      }),
      new RobotstxtPlugin(robotsOptions)
    ],
    devServer: {
      contentBase: "./dist",
      disableHostCheck: true
    },
    devtool: mode === "development" ? "inline-source-map" : false,
    mode: mode,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  };
};
