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
        test: /\.svg$/i,
        type: 'asset/resource',
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
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
