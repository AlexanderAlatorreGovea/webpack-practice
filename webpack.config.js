const path = require("path");
const WebpackHtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "public", "js", "main.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ],
  },
  plugins: [
    new WebpackHtmlPlugin({
      template: path.join(__dirname, "src", "public", "index.html"),
    }),
  ],
};
