import { definition } from '@eui/component';
import { Panel } from '@eui/panel';
import { html } from '@eui/lit-component';
import '@eui/base';
import { boundMethod } from 'autobind-decorator';
import { APPLICATIONS } from 'utils/Defaults';
import style from './leftMenuPanel.css';

@definition('eui-menu-panel', {
  style,
  props: {
    currentApp: {
      attribute: false,
      type: 'object',
      default: APPLICATIONS[0],
    },
  },
})
export default class LeftMenuPanel extends Panel {
  /**
   * @private
   * @function componentDidConnect
   * @description Component did connect callback
   */
  componentDidConnect() {
    this.setCurrentApp();
    window.addEventListener('hashchange', this.setCurrentApp, false);
  }

  @boundMethod
  setCurrentApp() {
    if (window.location.hash) {
      this.currentApp = APPLICATIONS.find((app) => window.location.hash.includes(app.route));
    }
  }

  @boundMethod
  appSelect(app) {
    this.currentApp = app;
    window.EUI.Router.goto(`/${app.route}`);
  }

  componentWillDisconnect() {
    window.removeEventListener('hashchange', this.setCurrentApp, false);
  }

  render() {
    return html`
      <div class="left-menu-panel">
        <eui-base-v0-tree navigation>
          ${APPLICATIONS.map(
            (app) =>
              html`
                <eui-base-v0-tree-item
                  .active="${this.currentApp.name === app.name}"
                  @click="${() => this.appSelect(app)}"
                  >${app.name}</eui-base-v0-tree-item
                >
              `
          )}
        </eui-base-v0-tree>
      </div>
    `;
  }
}
