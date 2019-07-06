const path = require('path');
const majorVersion = require('./package.json').version.match(/^\d+/)[0];

const clientRoot = 'client';

const getExternalsEntries = () => {
  const obj = {};
  const externals = require('./externals.config.prod');
  Object.keys(externals).forEach((category) => {
    const items = externals[category];
    if (category === 'components') {
      Object.keys(items).forEach((categoryItem) => {
        if (categoryItem === 'default') {
          items[categoryItem].forEach((item) => {
            const { path: itemPath, entry } = item;
            const ip = path.join(category, itemPath, 'Main');
            const op = path.resolve(
              __dirname,
              clientRoot,
              category,
              itemPath,
              'src',
              `${entry}.js`
            );
            console.log(`[${ip}]: ${op}`);
            obj[ip] = op;
          });
          return;
        }

        if (categoryItem === 'shareable') {
          items[categoryItem].forEach((item) => {
            const { path: itemPath, entry } = item;
            const ip = path.join(category, itemPath, majorVersion, 'Main');
            const op = path.resolve(
              __dirname,
              clientRoot,
              category,
              itemPath,
              'src',
              `${entry}.js`
            );
            console.log(`[${ip}]: ${op}`);
            obj[ip] = op;
          });
        }
      });
    } else {
      items.forEach((item) => {
        const { path: itemPath, entry } = item;
        const ip = path.join(category, itemPath, entry);
        const op = path.resolve(__dirname, clientRoot, category, itemPath, 'src', `${entry}.js`);
        console.log(`[${ip}]: ${op}`);
        obj[ip] = op;
      });
    }
  });

  return obj;
};

const externalsConfig = {
  entry: getExternalsEntries(),
  output: {
    path: path.resolve(__dirname, clientRoot),
    filename: '[name].js',
    libraryTarget: 'amd',
  },
  externals: {
    '@eui/component': 'amd @eui/component',
    '@eui/lit-component': 'amd @eui/lit-component',
    '@eui/panel': 'amd @eui/panel',
    '@eui/app': 'amd @eui/app',
    '@eui/base': 'amd @eui/base',
    'model-container': 'amd model-container',
    'flow-container': 'amd flow-container',
    'model-card': 'amd model-card',
    'flow-card': 'amd flow-card',
    sidebar: 'amd sidebar',
    'upload-component': 'amd upload-component',
    'model-details': 'amd model-details',
    'monitoring-line-chart': 'amd monitoring-line-chart',
    'chart-legend': 'amd chart-legend',
    'test': 'amd test',
  },
};

const config = {
  mode: 'development',
  resolve: {
    alias: {
      apps: path.resolve(__dirname, './client/apps/'),
      components: path.resolve(__dirname, './client/components/'),
      utils: path.resolve(__dirname, './client/utils/'),
      services: path.resolve(__dirname, './client/services/'),
      test: path.resolve(__dirname, './test/'),
      plugins: path.resolve(__dirname, './client/plugins'),
      panels: path.resolve(__dirname, './client/panels'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.resolve(__dirname, 'client')],
    compress: true,
    before: require('./dev/mock-server-dev'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'client/components'),
          path.resolve(__dirname, 'client/panels'),
          path.resolve(__dirname, 'client/plugins'),
          path.resolve(__dirname, 'client/apps'),
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = () =>
  new Promise((resolve) => {
    const _externalsConfig = Object.assign({}, config, externalsConfig);
    resolve(_externalsConfig);
  });
