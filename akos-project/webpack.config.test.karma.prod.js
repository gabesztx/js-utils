const path = require('path');

module.exports = {
  mode: 'none',
  node: {
    fs: 'empty',
  },
  resolve: {
    alias: {
      apps: path.resolve(__dirname, './client/apps/'),
      components: path.resolve(__dirname, './client/components/'),
      utils: path.resolve(__dirname, './client/utils/'),
      services: path.resolve(__dirname, './client/services/'),
      test: path.resolve(__dirname, './test/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'client/apps'),
          path.resolve(__dirname, 'client/components'),
          path.resolve(__dirname, 'client/panels'),
          path.resolve(__dirname, 'client/plugins'),
          path.resolve(__dirname, 'client/utils'),
          path.resolve(__dirname, 'client/services'),
        ],
        loader: 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules|test|-test\.js$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
      },
      {
        test: /\.(html)/,
        use: {
          loader: 'raw-loader',
          options: {
            exportAsEs6Default: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader'],
      },
    ],
  },
};
