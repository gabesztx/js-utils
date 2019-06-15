const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const targetPackage = path.resolve(__dirname, 'target/package');
const clientRoot = 'client';
const majorVersion = require('./package.json').version.match(/^\d+/)[0];

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
    filename: '[name].js',
    libraryTarget: 'amd',
    path: targetPackage,
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
  plugins: [
    new FileManagerPlugin({
      onStart: {
        delete: [targetPackage],
      },
      onEnd: {
        copy: [
          /**
           * apps
           */
          {
            source: 'client/apps/**/*.json',
            destination: `${targetPackage}/apps`,
          },

          /**
           * components
           */
          {
            source: 'node_modules/@eui/container/target/package/components/**/*.json',
            destination: `${targetPackage}/components`,
          },
          {
            source: 'node_modules/@eui/container/target/package/components/**/!(src)/*.js',
            destination: `${targetPackage}/components`,
          },
          {
            source: 'client/components/**/*.json',
            destination: `${targetPackage}/components`,
          },

          /**
           * panels
           */
          {
            source: 'node_modules/@eui/container/target/package/panels/**/*.json',
            destination: `${targetPackage}/panels`,
          },
          {
            source: 'node_modules/@eui/container/target/package/panels/**/!(src)/*.js',
            destination: `${targetPackage}/panels`,
          },
          {
            source: 'client/panels/**/*.json',
            destination: `${targetPackage}/panels`,
          },

          /**
           * plugins
           */
          {
            source: 'node_modules/@eui/container/target/package/plugins/**/*.js',
            destination: `${targetPackage}/plugins`,
          },
          {
            source: 'client/plugins/**/*.js',
            destination: `${targetPackage}/plugins`,
          },

          /**
           * libs
           */
          {
            source: 'node_modules/@eui/app/target/package/**/!(*.map)',
            destination: `${targetPackage}/libs`,
          },
          {
            source: 'node_modules/@eui/component/target/package/**/!(*.map)',
            destination: `${targetPackage}/libs`,
          },
          {
            source: 'node_modules/@eui/lit-component/target/package/**/!(*.map)',
            destination: `${targetPackage}/libs`,
          },
          {
            source: 'node_modules/@eui/panel/target/package/**/!(*.map)',
            destination: `${targetPackage}/libs`,
          },
          {
            source: 'node_modules/@eui/base/target/package/**/!(*.map)',
            destination: `${targetPackage}/libs`,
          },
          {
            source: 'node_modules/@eui/container/target/package/libs/@eui/container/**/!(*.map)',
            destination: `${targetPackage}/libs/@eui/container`,
          },
          {
            source: 'node_modules/@eui/container/target/package/libs/*.js',
            destination: `${targetPackage}/libs`,
          },

          /**
           * assets
           */
          {
            source: 'node_modules/@eui/container/target/package/assets/**/!(fonts)/**',
            destination: `${targetPackage}/assets`,
          },
          {
            source: 'node_modules/@eui/theme/target/package/@eui/theme/0/fonts',
            destination: `${targetPackage}/assets/fonts`,
          },
          {
            source: 'node_modules/@eui/container/target/package/assets/**/*.ico',
            destination: `${targetPackage}/assets`,
          },
          {
            source: 'client/assets/**/*.svg',
            destination: `${targetPackage}/assets`,
          },

          /**
           * polyfills
           */
          {
            source: 'node_modules/@eui/container/target/package/polyfills/**/*.js',
            destination: `${targetPackage}/polyfills`,
          },
          {
            source: 'client/polyfills/**/*.js',
            destination: `${targetPackage}/polyfills`,
          },

          /**
           * locale
           */
          {
            source: 'client/locale/**/*.json',
            destination: `${targetPackage}/locale`,
          },

          /**
           * config
           */
          {
            source: 'client/config/**/*.{json,js}',
            destination: `${targetPackage}/config`,
          },

          /**
           * html files
           */
          {
            source: 'client/*.html',
            destination: targetPackage,
          },
        ],
      },
    }),
  ],
};

const config = {
  mode: 'production',
  resolve: {
    alias: {
      apps: path.resolve(__dirname, 'client/apps/'),
      components: path.resolve(__dirname, 'client/components/'),
      utils: path.resolve(__dirname, 'client/utils/'),
      services: path.resolve(__dirname, 'client/services/'),
      test: path.resolve(__dirname, './test/'),
      plugins: path.resolve(__dirname, './client/plugins'),
      panels: path.resolve(__dirname, './client/panels'),
    },
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
