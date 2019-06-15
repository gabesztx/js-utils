import { definition } from '@eui/component';
import { Panel } from '@eui/panel';
import { html, nothing } from '@eui/lit-component';
import '@eui/base';
import { preventDefaultEvent } from 'utils/Utils';
import { boundMethod } from 'autobind-decorator';
import style from './notificationPanel.css';

@definition('eui-notification-panel', { style })
export default class NotificationPanel extends Panel {
  /**
   * @private
   * @function componentDidConnect
   * @description Component did connect callback
   */
  componentDidConnect() {
    this.state = this.storeConnect('notifications');
    this.loc = window.EUI.Localizer.loc;
  }

  @boundMethod
  removeNotification(event, position) {
    preventDefaultEvent(event);
    console.log(this.provider);
    this.plugin('notifications', 'removeNotification', {
      store: this.provider.store,
      position,
    });
  }

  @boundMethod
  clearNotifications() {
    this.plugin('notifications', 'clearAllNotification', {
      store: this.provider.store,
    });
  }

  @boundMethod
  navigateToModel(event, item, i) {
    preventDefaultEvent(event);
    window.EUI.Router.goto(`/model-info/?modelName=${item.name}`);
    this.removeNotification(event, i);
    this.provider.store.dispatch('TOGGLE_SYSTEM_PANEL', false);
  }

  render() {
    if (this.state.notifications.length === 0) {
      return nothing;
    }
    return html`
      <div class="notification-panel">
        <div class="clear" @click="${this.clearNotifications}">${this.loc.CLEAR_ALL}</div>
        ${this.state.notifications.map(
          (item, i) => html`
            <div
              class="notification-log-item new"
              @click="${(event) => {
                this.navigateToModel(event, item, i);
              }}"
            >
              <div class="title">${item.name}</div>
              <div class="description">${item.description}</div>
              <div class="date">${item.date}</div>
              <eui-v0-icon
                class="close"
                name="cross-small"
                @click="${(event) => {
                  this.removeNotification(event, i);
                }}"
              ></eui-v0-icon>
            </div>
          `
        )}
      </div>
    `;
  }
}
