/**
 * Sample plugin.
 * This plugin is used to demonstrate implementation of lifecycle hooks and
 * implementation of plugin functions.
 *
 * The following hook(s) are implemented:
 * 1. onBeforeContainerLoad - used here to print to the console.
 * 2. onBeforeAppLoad - marks app-3 as a "soon to be decommissioned app".
 *
 * The following function(s) are implmented:
 * 1. sampleFunction - dispatches a notification.
 */

/**
 * Lifecycle hook executed automatically on load of the
 * Container.
 * Implement this function when you want code in
 * the plugin to execute on load of the Container.
 *
 * This is a non blocking call.
 *
 * @function onBeforeContainerLoad
 * @param {Object} params - { store }
 * @public
 */
const onBeforeContainerLoad = (params) => (resolve) => {
  console.log('onBeforeContainerLoad() executed from plugin with params', params);
  params.store.initialState({
    notifications: [],
  });
  resolve();
};

/**
 * Lifecycle hook executed automatically on load of an APP.
 * Implement this function when you want code in
 * the plugin to execute before load of an APP.
 *
 * @param {Object} options - configuration of the app to load.
 */
const onBeforeAppLoad = (options) => (resolve, reject) => {
  resolve()
  if (options.appName === 'dashboard') {
    // const value = this.somevalue.somevalue1;
    const title = 'Page is under development, click to go to the model list';
    const description = 'Page will soon be  decommissioned.';
    // dispatch an App Loading Error message.
    options.store.dispatch('NOTIFICATION', {
      title,
      description,
      timeout: 5000,
      action: () => {
        window.EUI.Router.goto('/model-list');
      },
    });

    // Keep this here as an example of how to reject the loading of an app.
    const error = new Error(description);
    error.name = title;
    reject(error);
  } else {
    resolve();
  }
};

module.exports = {
  onBeforeContainerLoad,
  onBeforeAppLoad,
};
