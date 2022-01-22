const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public/index.html"),
    }),
  ],

  entry: {
    app: path.join(__dirname, "src/index.tsx"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: ["babel-loader"],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
};
