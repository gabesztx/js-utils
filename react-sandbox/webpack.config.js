const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: ['react-hot-loader/patch', './src'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    hot: true,
    inline: true,
    noInfo: false,
    clientLogLevel: 'silent',
    stats: {
      modules: false
    }
  }
};
