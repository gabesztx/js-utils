/**
 * Get new notifications
 * @param {Object} store - App store instance
 * @param {Array} prevNotifications - Previous notifications
 * @param {Array} notifications - New notifications
 * @return {Array} - Diffed notifications
 * @private
 */
const _getNewNotifications = (store, prevNotifications, notifications) => {
  const newNotifications = [];

  for (let i = 0, newLength = notifications.length; i < newLength; i++) {
    for (let j = 0, prevLength = prevNotifications.length; j < prevLength; j++) {
      if (
        prevNotifications[j].name !== notifications[i].name &&
        prevNotifications[j].version !== notifications[i].version
      ) {
        newNotifications.push(notifications[i]);
      }
    }
  }
  return newNotifications;
};

/**
 * Add notification
 * @param {Object} options
 */
const addNotification = async (options) => {
  const { store, notifications, title, description, timeout } = options;
  const prevNotifications = store.getState('notifications');
  let newNotifications = _getNewNotifications(store, prevNotifications, notifications);

  if (prevNotifications.length === 0) {
    newNotifications = [...notifications];
  }

  const mergedNotifications = [...prevNotifications, ...newNotifications];
  store.setState('notifications', mergedNotifications);

  if (newNotifications.length > 0) {
    const notification = document.createElement('eui-base-v0-notification');
    notification.textContent = `${mergedNotifications.length} ${title}`;
    notification.description = description;
    notification.timeout = timeout;
    notification.style.border = '0';
    notification.style.borderLeft = '2px solid var(--red)';

    notification.addEventListener('click', () => {
      store.dispatch('LOAD_SYSTEM_PANEL', {
        id: 'notification',
        packageName: 'notification-panel',
      });
    });
    await notification.showNotification();
  }
};

/**
 * Remove notifications
 * @param {Object} data - Object containing App store instance, and item position
 */
const removeNotification = (data) => {
  const { store, position } = data;
  const notifications = store.getState('notifications');
  notifications.splice(position, 1);
  store.setState('notifications', notifications);
};

/**
 * Clear all notification
 * @param {Object} data - Object containing App store instance
 */
const clearAllNotification = (data) => {
  const { store } = data;
  store.setState('notifications', []);
};

module.exports = {
  addNotification,
  removeNotification,
  clearAllNotification,
};
