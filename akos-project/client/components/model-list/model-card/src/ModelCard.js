/**
 * Component ModelCard is defined as
 * `<e-model-card>`
 *
 * Imperatively create component
 * @example
 * let component = new ModelCard();
 *
 * Declaratively create component
 * @example
 * <e-model-card></e-model-card>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { html, LitComponent, nothing } from '@eui/lit-component';
import { boundMethod } from 'autobind-decorator';
import ModelDeploymentService from 'services/ModelDeploymentService';
import ModelService from 'services/ModelService';
import { preventDefaultEvent } from 'utils/Utils';
import {
  INVOKE_UPDATE,
  OPEN_MODEL_INFO_DIALOG,
  STATUS_AVAILABLE,
  STATUS_CREATING,
  STATUS_DEPLOYMENT_ERROR,
  STATUS_MODEL_ERROR,
  STATUS_PACKAGING,
  STATUS_RUNNING,
} from 'utils/Enums';
import style from './modelCard.css';

/**
 * Modal card component
 * @property {Object} model - Model data
 */
@definition('e-model-card', {
  style,
  home: 'model-card',
  props: {
    info: {
      attribute: false,
      type: 'boolean',
      default: false,
    },
    stacked: {
      attribute: false,
      type: 'boolean',
      default: false,
    },
    model: {
      attribute: false,
      type: 'object',
      default: null,
    },
  },
})
/**
 * @class ModelCard
 */
export default class ModelCard extends LitComponent {
  // componentDidReceiveProps() {
  //   if (this.modelStatus === STATUS_MODEL_ERROR ||
  //   this.modelStatus === STATUS_DEPLOYMENT_ERROR) {
  //     NotificationService.addNotification(this.modelName, 'asd', 'red');
  //   }
  // }

  /**
   * Get status icon name according to the model status
   * @returns {String} - Icon name
   */
  get statusIcon() {
    if (this.isStacked) {
      return '/assets/icons/folder-icon.svg';
    }
    switch (this.modelStatus) {
      case STATUS_AVAILABLE:
        return '/assets/icons/play-icon.svg';
      case STATUS_CREATING:
        return '/assets/icons/creating-icon.svg';
      case STATUS_RUNNING:
        return '/assets/icons/stop-icon.svg';
      case STATUS_DEPLOYMENT_ERROR:
        return '/assets/icons/reload-icon.svg';
      case STATUS_MODEL_ERROR:
      default:
        return '/assets/icons/purge-icon.svg';
    }
  }

  /**
   * Get icon size depending on the model state
   * @returns {String} - Icon size
   */
  get iconSize() {
    switch (this.modelStatus) {
      case STATUS_PACKAGING:
        return '55px';
      case STATUS_MODEL_ERROR:
      case STATUS_DEPLOYMENT_ERROR:
        return '36px';
      default:
        return '80px';
    }
  }

  /**
   * Get icon name depending on the model state
   * @returns {String} - Icon name
   */
  get iconName() {
    switch (this.modelStatus) {
      case STATUS_PACKAGING:
        return 'dial';
      case STATUS_MODEL_ERROR:
      case STATUS_DEPLOYMENT_ERROR:
        return 'info';
      default:
        return 'dashboard';
    }
  }

  /**
   * Get model icon, it's either plain img, or eui sdk icon
   * @return {*}
   */
  get modelIcon() {
    let iconName = '';
    if (this.model.icon !== null) {
      return html`
        <img class="model-icon" src="${this.model.icon}" alt="model icon" />
      `;
    }
    if (this.isStacked) {
      return html`
        <img class="model-icon" src="/assets/icons/standard-icon.svg" alt="model icon" />
      `;
    }
    switch (this.modelStatus) {
      case STATUS_PACKAGING:
        iconName = 'dial';
        break;
      case STATUS_MODEL_ERROR:
      case STATUS_DEPLOYMENT_ERROR:
        iconName = 'triangle-warning';
        break;
      default:
        return html`
          <img class="model-icon" src="/assets/icons/standard-icon.svg" alt="model icon" />
        `;
    }
    return html`
      <eui-v0-icon class="model-icon" size="${this.iconSize}" name="${iconName}"></eui-v0-icon>
    `;
  }

  /**
   * Get model status
   * @returns {String} - Card status
   */
  get modelStatus() {
    return this.model.status;
  }

  /**
   * Get model name
   * @returns {String} - Model name
   */
  get modelName() {
    return this.model.displayName || this.model.name;
  }

  /**
   * Get model name
   * @returns {String} - Model name
   */
  get modelDeploymentName() {
    return this.model.deployedModel.name;
  }

  /**
   * Get model version
   * @returns {String} - Model version
   */
  get modelVersion() {
    return this.model.version;
  }

  /**
   * Get subtitle depending on the model state
   * @returns {String} - Card subtitle
   */
  get subtitle() {
    if (this.isStacked) {
      return '';
    }
    const { loc } = window.EUI.Localizer;
    switch (this.modelStatus) {
      case STATUS_AVAILABLE:
        return loc.AVAILABLE;
      case STATUS_RUNNING:
        return loc.RUNNING;
      case STATUS_CREATING:
        return loc.CREATING;
      case STATUS_PACKAGING:
      case STATUS_MODEL_ERROR:
      case STATUS_DEPLOYMENT_ERROR:
        return '';
      default:
        return this.modelStatus;
    }
  }

  /**
   * Get model description
   * @returns {String|null}
   */
  get description() {
    if (this.isStacked) {
      return nothing;
    }
    const { loc } = window.EUI.Localizer;
    let description = '';

    switch (this.modelStatus) {
      case STATUS_PACKAGING:
        description = loc.PACKAGING_IN_PROGRESS;
        break;
      case STATUS_DEPLOYMENT_ERROR:
        description = loc.DEPLOYMENT_FAILED;
        break;
      case STATUS_MODEL_ERROR:
        description = loc.PACKAGING_FAILED;
        break;
      default:
        description = this.model.message;
        break;
    }

    return html`
      <div class="text">${description}</div>
    `;
  }

  /**
   * Card should be stacked
   * @returns {props.stacked|{default, attribute, type}}
   */
  get isStacked() {
    return this.stacked;
  }

  /**
   * Get Card class
   * @return {String}
   */
  get cardClass() {
    if (this.isStacked) {
      return 'model-card stacked available';
    }
    return `model-card ${this.modelStatus}`;
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

  @boundMethod
  handleCardClick(event) {
    preventDefaultEvent(event);
    if (this.isStacked) {
      window.EUI.Router.goto(`/model-info/?modelName=${this.modelName}`);
      return;
    }
    this.bubble(OPEN_MODEL_INFO_DIALOG, this.model);
  }

  /**
   * Render the <e-model-card> component. This function is called each time a
   * prop changes.
   */
  render() {
    if (!this.model) {
      return nothing;
    }
    return html`
      <div class="${this.cardClass}" @click="${this.handleCardClick}">
        <div class="header">
          <div class="left title">${this.modelName}</div>
          <div class="right">
            <img
              class="action"
              slot="action"
              src="${this.statusIcon}"
              @click="${this.updateModelStatus}"
              alt="model status"
            />
          </div>
        </div>
        <div class="subtitle">${this.subtitle}</div>
        <div class="content">
          ${this.modelIcon} ${this.description}
        </div>
      </div>
    `;
  }
}

/**
 * Register the component as e-model-card.
 * Registration can be done at a later time and with a different name
 */
ModelCard.register();
