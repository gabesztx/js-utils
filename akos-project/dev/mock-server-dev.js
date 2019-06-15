const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const modelService = require('./services/model-service');
const flowService = require('./services/flow-service');
const flowDeploymentService = require('./services/flow-deployment-service');
const modelDeploymentService = require('./services/model-deployment-service');
const chartService = require('./services/chart-service');

module.exports = (app) => {
  app.use(
    bodyParser.raw({
      type: 'application/octet-stream',
      limit: '100mb',
    })
  );
  app.use(bodyParser.json());
  app.use(fileUpload());

  modelService(app);
  flowService(app);
  flowDeploymentService(app);
  modelDeploymentService(app);
  chartService(app);
  /**
   * components
   */
  app.use(
    '/components/logo',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/components/logo')
    )
  );

  app.use(
    '/components/user-display',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/components/user-display')
    )
  );

  /**
   * panels
   */
  app.use(
    '/panels/sample-system-panel',
    express.static(
      path.join(
        __dirname,
        '../node_modules/@eui/container/target/package/panels/sample-system-panel'
      )
    )
  );
  app.use(
    '/panels/notification-panel',
    express.static(path.join(__dirname, '../client/panels/sample-system-panel'))
  );
  app.use(
    '/panels/left-menu-panel',
    express.static(path.join(__dirname, '../client/panels/left-menu-panel'))
  );
  app.use(
    '/panels/user-settings-panel',
    express.static(
      path.join(
        __dirname,
        '../node_modules/@eui/container/target/package/panels/user-settings-panel'
      )
    )
  );

  /**
   * plugins
   */
  app.use(
    '/plugins/authentication',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/plugins/authentication')
    )
  );
  app.use(
    '/plugins/test-plugin',
    express.static(path.join(__dirname, '../client/plugins/test-plugin'))
  );
  app.use(
    '/plugins/notifications',
    express.static(path.join(__dirname, '../client/plugins/notifications'))
  );

  /**
   * libs
   */
  app.use(
    '/libs/system.js',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/libs/system.js')
    )
  );
  app.use(
    '/libs/@eui',
    express.static(path.join(__dirname, '../node_modules/@eui/container/target/package/libs/@eui'))
  );

  /**
   * assets
   */
  app.use(
    '/assets/fonts',
    express.static(
      path.join(__dirname, '../node_modules/@eui/theme/target/package/@eui/theme/0/fonts')
    )
  );
  app.use(
    '/assets/css',
    express.static(path.join(__dirname, '../node_modules/@eui/container/target/package/assets/css'))
  );
  app.use(
    '/assets/icons',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/assets/icons')
    )
  );
  app.use(
    '/assets/img',
    express.static(path.join(__dirname, '../node_modules/@eui/container/target/package/assets/img'))
  );
  app.use(
    '/assets/favicon.ico',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/assets/favicon.ico')
    )
  );
  app.use(
    '/assets/warning_icon.svg',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/assets/warning_icon.svg')
    )
  );

  /**
   * polyfills
   */
  app.use(
    '/polyfills/webcomponents-lite.js',
    express.static(
      path.join(
        __dirname,
        '../node_modules/@eui/container/target/package/polyfills/webcomponents-lite.js'
      )
    )
  );

  app.use(
    '/components/model-list/model-container/0/config.json',
    express.static(
      path.join(__dirname, '../client/components/model-list/model-container/config.json')
    )
  );
  app.use(
    '/components/model-list/model-card/0/config.json',
    express.static(path.join(__dirname, '../client/components/model-list/model-card/config.json'))
  );
  app.use(
    '/components/flow-catalogue/flow-container/0/config.json',
    express.static(
      path.join(__dirname, '../client/components/flow-catalogue/flow-container/config.json')
    )
  );
  app.use(
    '/components/flow-catalogue/flow-card/0/config.json',
    express.static(
      path.join(__dirname, '../client/components/flow-catalogue/flow-card/config.json')
    )
  );
  app.use(
    '/components/shared/sidebar/0/config.json',
    express.static(path.join(__dirname, '../client/components/shared/sidebar/config.json'))
  );

  app.use(
    '/components/shared/upload-component/0/config.json',
    express.static(path.join(__dirname, '../client/components/shared/upload-component/config.json'))
  );

  app.use(
    '/components/shared/model-details/0/config.json',
    express.static(path.join(__dirname, '../client/components/shared/model-details/config.json'))
  );

  app.use(
    '/components/shared/monitoring-line-chart/0/config.json',
    express.static(
      path.join(__dirname, '../client/components/shared/monitoring-line-chart/config.json')
    )
  );

  app.use(
    '/components/shared/chart-legend/0/config.json',
    express.static(path.join(__dirname, '../client/components/shared/chart-legend/config.json'))
  );
  app.use(
    '/components/test/0/config.json',
    express.static(path.join(__dirname, '../client/components/test/config.json'))
  );
};
