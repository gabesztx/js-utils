import { NOTIFICATION_TIMEOUT } from 'utils/Defaults';

let notificationContainer;

class NotificationService {
  static addNotification(title, description, color = 'green') {
    if (!document.querySelector('.notification-container')) {
      notificationContainer = document.createElement('div');
      notificationContainer.classList.add('notification-container');
      document.body.appendChild(notificationContainer);
    }
    if (title && description) {
      const notification = document.createElement('eui-base-v0-notification');
      notification.description = description;
      notification.textContent = title;
      notification.timeout = NOTIFICATION_TIMEOUT;
      notification.style.border = '0';
      notification.style.marginTop = '8px';
      notification.style.position = 'initial';
      notification.style.borderLeft = `2px solid var(--${color})`;
      notificationContainer.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('fade-in');
      });
    }
  }
}

export default NotificationService;
