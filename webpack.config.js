const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    ...["index.html", "booking.html"].map((filename) => {
      return new HtmlWebpackPlugin({
        template: `./src/${filename}`,
        filename,
      });
    }),
  ],
};
