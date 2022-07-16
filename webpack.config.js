const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-typescript"],
          plugins: ["react-refresh/babel"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
