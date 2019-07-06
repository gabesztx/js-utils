const externals = {
  apps: [
    { path: 'dashboard', entry: 'Dashboard' },
    { path: 'model-list', entry: 'ModelList' },
    { path: 'model-info', entry: 'ModelInfo' },
    { path: 'flow-catalogue', entry: 'FlowCatalogue' },
    { path: 'flow-info', entry: 'FlowInfo' },
  ],
  components: {
    default: [],
    shareable: [
      { path: 'test', entry: 'Test' }, // entry js file
      { path: 'model-list/model-container', entry: 'ModelContainer' },
      { path: 'model-list/model-card', entry: 'ModelCard' },
      { path: 'flow-catalogue/flow-container', entry: 'FlowContainer' },
      { path: 'flow-catalogue/flow-card', entry: 'FlowCard' },
      { path: 'shared/sidebar', entry: 'Sidebar' },
      { path: 'shared/upload-component', entry: 'UploadComponent' },
      { path: 'shared/model-details', entry: 'ModelDetails' },
      { path: 'shared/monitoring-line-chart', entry: 'MonitoringLineChart' },
      { path: 'shared/chart-legend', entry: 'ChartLegend' },
    ],
  },
  panels: [
    { path: 'notification-panel', entry: 'NotificationPanel' },
    { path: 'left-menu-panel', entry: 'LeftMenuPanel' },
  ],
  plugins: [{ path: 'test-plugin', entry: 'index' }, { path: 'notifications', entry: 'index' }],
};

module.exports = externals;
