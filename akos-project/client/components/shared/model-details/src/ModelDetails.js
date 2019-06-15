/**
 * Component ModelDetails is defined as
 * `<e-model-details>`
 *
 * Imperatively create component
 * @example
 * let component = new ModelDetails();
 *
 * Declaratively create component
 * @example
 * <e-model-details></e-model-details>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { html, LitComponent, nothing, repeat } from '@eui/lit-component';
import { boundMethod } from 'autobind-decorator';
import { MODEL_DETAIL_MENUS, DEFAULT_CHART_TITLES, loc, MODEL_INFO_TABLE } from 'utils/Defaults';
import 'components/shared/monitoring-line-chart/src/MonitoringLineChart';
import { preventDefaultEvent } from 'utils/Utils';
import {
  INVOKE_UPDATE,
  MODEL_INFORMATION,
  MONITORING_INFORMATION,
  REWARD,
  STATUS_AVAILABLE,
  STATUS_CREATING,
  STATUS_DEPLOYMENT_ERROR,
  STATUS_MODEL_ERROR,
  STATUS_PACKAGING,
  STATUS_RUNNING,
} from 'utils/Enums';
import ModelService from 'services/ModelService';
import style from './modelDetails.css';

@definition('e-model-details', {
  style,
  home: 'model-details',
  props: {
    model: {
      attribute: false,
      type: 'object',
      default: null,
    },
    openedAccordion: {
      attribute: false,
      type: 'string',
      default: MONITORING_INFORMATION,
    },
  },
})
export default class ModelDetails extends LitComponent {
  /**
   * Get model status
   * @returns {String} - Card status
   */
  get modelStatus() {
    return this.model ? this.model.status : '';
  }

  /**
   * Update model status
   * @param event
   */
  @boundMethod
  async updateModelStatus(event) {
    preventDefaultEvent(event);
    await ModelService.updateModelStatus(this.model);
    await this.bubble(INVOKE_UPDATE);
  }

  /**
   * Get status icon name according to the model status
   * @returns {String} - Icon name
   */
  getStatusIcon() {
    let icon = '';
    switch (this.modelStatus) {
      case STATUS_AVAILABLE:
        icon = '/assets/icons/play-icon.svg';
        break;
      case STATUS_CREATING:
        icon = '/assets/icons/creating-icon.svg';
        break;
      case STATUS_RUNNING:
        icon = '/assets/icons/stop-icon.svg';
        break;
      case STATUS_DEPLOYMENT_ERROR:
        icon = '/assets/icons/reload-icon.svg';
        break;
      case STATUS_MODEL_ERROR:
        icon = '/assets/icons/purge-icon.svg';
        break;
      case STATUS_PACKAGING:
      default:
        return nothing;
    }

    return html`
      <img
        class="icon action"
        @click="${this.updateModelStatus}"
        slot="action"
        src="${icon}"
        alt="model status"
      />
    `;
  }

  /**
   * Get status name depending on the model state
   * @returns {String} - Status name
   */
  get statusName() {
    switch (this.modelStatus) {
      case STATUS_AVAILABLE:
        return loc('AVAILABLE');
      case STATUS_RUNNING:
        return loc('RUNNING');
      case STATUS_CREATING:
        return loc('CREATING');
      case STATUS_PACKAGING:
        return loc('PACKAGING');
      case STATUS_MODEL_ERROR:
        return loc('PACKAGING_FAILED');
      case STATUS_DEPLOYMENT_ERROR:
        return loc('DEPLOYMENT_FAILED');
      default:
        return this.modelStatus;
    }
  }

  @boundMethod
  isOpenedAccordion(accordion) {
    return this.openedAccordion === accordion;
  }

  @boundMethod
  toggleAccordion(event, accordion) {
    preventDefaultEvent(event);
    if (event.path[0].className === 'accordion__item__title') {
      this.openedAccordion = this.openedAccordion === accordion ? '' : accordion;
    }
  }

  getAccordionMarkup(menu) {
    if (!this.model) {
      return;
    }
    let content = nothing;
    switch (menu.name) {
      case MODEL_INFORMATION:
        content = html`
          <div class="model-info">
            <div class="title">${loc('MODEL_DETAILS')}</div>
            <div class="info-table">
              ${repeat(
                MODEL_INFO_TABLE,
                (col) => col.name,
                (col) => {
                  if (col.name === loc('NUMBER_OF_INSTANCES')) {
                    if (!this.model.deployedModel) {
                      return nothing;
                    }
                    return html`
                      <span class="column-name instances">${col.name}:</span>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value="${this.model.deployedModel[col.prop]}"
                        class="column-value instances"
                        disabled
                      />
                    `;
                  }
                  if (col.name === loc('DATE_OF_ONBOARDING')) {
                    const formattedDate = this.model[col.prop].replace('T', ' ').split('.')[0];
                    return html`
                      <span class="column-name">${col.name}:</span>
                      <span class="column-value">${formattedDate}</span>
                    `;
                  }
                  return html`
                    <span class="column-name">${col.name}:</span>
                    <span class="column-value">${this.model[col.prop]}</span>
                  `;
                }
              )}
            </div>
          </div>
        `;
        break;
      case MONITORING_INFORMATION:
        if (this.modelStatus !== STATUS_RUNNING) {
          content = html`
            <div class="monitoring">
              <div class="no-information">${loc('NO_INFORMATION_FOR_MODEL')}</div>
            </div>
          `;
          break;
        }
        content = html`
          <div class="monitoring">
            ${DEFAULT_CHART_TITLES.map(
              (chart) => html`
                <div class="chart-container">
                  <e-monitoring-line-chart
                    class="chart"
                    .title=${chart.name}
                    .unit=${chart.unit}
                    .model="${this.model}"
                  ></e-monitoring-line-chart>
                </div>
              `
            )}
          </div>
        `;
        break;
      case REWARD:
        content = html`
          <div class="reward">
            <div class="no-reward">${loc('NO_REWARD_FOR_MODEL')}</div>
          </div>
        `;
        break;
      default:
        break;
    }

    // eslint-disable-next-line consistent-return
    return html`
      <eui-base-v0-accordion
        line
        @click=${(event) => this.toggleAccordion(event, menu.name)}
        .open=${this.isOpenedAccordion(menu.name)}
        .categoryTitle=${menu.title}
      >
        ${content}
      </eui-base-v0-accordion>
    `;
  }

  /**
   * Render the <e-model-details> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div class="model-status ${this.modelStatus}">
        <span class="name">${this.statusName}</span>
      </div>
      ${repeat(MODEL_DETAIL_MENUS, (menu) => menu.name, (menu) => this.getAccordionMarkup(menu))}
    `;
  }
}

/**
 * Register the component as e-model-details.
 * Registration can be done at a later time and with a different name
 */
ModelDetails.register();
