const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/public/assets/js/main.js",
  devServer: {
    static: path.resolve(__dirname, "src"),
  },
  entry: "./src/public/assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./public/assets/js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "> 30%, not dead" }],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false, //サイズファイルが重くなるため本番は、falseに設定する
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.png|\.jpg|\.jpeg/,
        type: "asset/resource",
        generator: {
          filename: "./public/assets/images/[name][ext]",
        },
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     esModule: false,
          //     name: 'images/[name].[ext]',
          //   },
          // },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./public/assets/css/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/public/index.pug",
      filename: "public/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/public/access.pug",
      filename: "public/access.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/public/about/about.pug",
      filename: "public/about/about.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
