/**
 * ModelList is defined as
 * `<e-model-list>`
 *
 * Imperatively create application
 * @example
 * let app = new ModelList();
 *
 * Declaratively create application
 * @example
 * <e-model-list></e-model-list>
 *
 * @extends {App}
 */
import { App, html } from '@eui/app';
import { definition } from '@eui/component';
import 'components/model-list/model-container/src/ModelContainer';
import 'components/shared/model-details/src/ModelDetails';
import 'components/shared/upload-component/src/UploadComponent';
import { boundMethod } from 'autobind-decorator';
import { DISPATCH_NOTIFICATIONS } from 'utils/Enums';
import { DEFAULT_ERROR_NOTIFICATION } from 'utils/Defaults';
import style from './modelList.css';

@definition('e-model-list', {
  style,
})
export default class ModelList extends App {
  @boundMethod
  dispatchNotifications(event) {
    this.plugin('notifications', 'addNotification', {
      store: this.provider ? this.provider.store : null,
      notifications: event.detail,
      ...DEFAULT_ERROR_NOTIFICATION,
    });
  }

  componentDidConnect() {
    window.addEventListener(DISPATCH_NOTIFICATIONS, this.dispatchNotifications, false);
  }

  componentWillDisconnect() {
    window.removeEventListener(DISPATCH_NOTIFICATIONS, this.dispatchNotifications, false);
  }

  /**
   * Render the <e-model-list> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <e-model-container></e-model-container>
    `;
  }
}
