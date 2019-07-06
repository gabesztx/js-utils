/**
 * Component ModelCard is defined as
 * `<e-flow-card>`
 *
 * Imperatively create component
 * @example
 * let component = new ModelCard();
 *
 * Declaratively create component
 * @example
 * <e-flow-card></e-flow-card>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { html, LitComponent, nothing } from '@eui/lit-component';
import { boundMethod } from 'autobind-decorator';
import { openCenteredWindow, preventDefaultEvent } from 'utils/Utils';
import { INVOKE_UPDATE, STATUS_AVAILABLE, STATUS_RUNNING } from 'utils/Enums';
import { loc, PLACEHOLDER_IMAGE } from 'utils/Defaults';
import FlowService from 'services/FlowService';
import style from './flowlCard.css';

/**
 * Modal card component
 * @property {Object} flow - Model data
 */
@definition('e-flow-card', {
  style,
  home: 'flow-card',
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
    flow: {
      attribute: false,
      type: 'object',
      default: null,
    },
  },
})
/**
 * @class ModelCard
 */
export default class FlowCard extends LitComponent {
  /**
   * Get status icon name according to the flow status
   * @returns {String} - Icon name
   */
  get statusIcon() {
    if (this.isStacked) {
      return '/assets/icons/folder-icon.svg';
    }
    switch (this.flowStatus) {
      case STATUS_AVAILABLE:
        return '/assets/icons/play-icon.svg';
      case STATUS_RUNNING:
        return '/assets/icons/stop-icon.svg';
      default:
        return PLACEHOLDER_IMAGE;
    }
  }

  /**
   * Get flow status
   * @returns {String} - Card status
   */
  get flowStatus() {
    return this.flow.status;
  }

  /**
   * Get flow name
   * @returns {String} - Model name
   */
  get flowName() {
    return this.flow.displayName || this.flow.name;
  }

  /**
   * Get flow name
   * @returns {String} - Model name
   */
  get flowDeploymentName() {
    return this.flow.deployedModel.name;
  }

  /**
   * Get flow version
   * @returns {String} - Model version
   */
  get flowVersion() {
    return this.flow.version;
  }

  /**
   * Get subtitle depending on the flow state
   * @returns {String} - Card subtitle
   */
  get subtitle() {
    if (this.isStacked) {
      return '';
    }
    switch (this.flowStatus) {
      case STATUS_AVAILABLE:
        return loc('AVAILABLE');
      case STATUS_RUNNING:
        return loc('RUNNING');
      default:
        return this.flowStatus;
    }
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
      return 'flow-card stacked available';
    }
    return `flow-card ${this.flowStatus}`;
  }

  /**
   * Update flow status
   * @param event
   */
  @boundMethod
  async updateFlowStatus(event) {
    preventDefaultEvent(event);

    await FlowService.updateFlowStatus(this.flow);
    await this.bubble(INVOKE_UPDATE);
  }

  @boundMethod
  handleCardClick(event) {
    preventDefaultEvent(event);
    if (this.isStacked) {
      window.EUI.Router.goto(`/flow-info/?flowName=${this.flowName}`);
      return;
    }
    // @TODO : url
    openCenteredWindow(this.flow.url);
  }

  /**
   * Render the <e-flow-card> component. This function is called each time a
   * prop changes.
   */
  render() {
    if (!this.flow) {
      return nothing;
    }
    return html`
      <div class="${this.cardClass}" @click="${this.handleCardClick}">
        <div class="header">
          <div class="left title">${this.flowName}</div>
          <div class="right">
            <img
              class="action"
              slot="action"
              src="${this.statusIcon}"
              @click="${this.updateFlowStatus}"
              alt="flow status"
            />
          </div>
        </div>
        <div class="subtitle">${this.subtitle}</div>
      </div>
    `;
  }
}

/**
 * Register the component as e-flow-card.
 * Registration can be done at a later time and with a different name
 */
FlowCard.register();
