const path = require("path");
// webpack config
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "frontEnd", "src", "Index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "frontEnd", "dist"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".jsx", ".js"],
  },
};