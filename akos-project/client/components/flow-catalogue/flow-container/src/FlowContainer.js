/**
 * Component FlowContainer is defined as
 * `<e-flow-container>`
 *
 * Imperatively create component
 * @example
 * let component = new FlowContainer();
 *
 * Declaratively create component
 * @example
 * <e-flow-container></e-flow-container>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import '@eui/layout';
import { html, LitComponent, repeat } from '@eui/lit-component';
import { boundMethod } from 'autobind-decorator';
import 'components/flow-catalogue/flow-card/src/FlowCard';
import 'components/shared/sidebar/src/Sidebar';
import FilteringService from 'services/FilteringService';
import FlowListingService from 'services/FlowListingService';
import SortingService from 'services/SortingService';
import {
  DEFAULT_INTERVAL_MS,
  SORTING_OPTIONS,
  SORTING_OPTIONS_INFO_PAGE,
  loc,
  FLOW_FILTERS,
} from 'utils/Defaults';
import {
  CLOSE_UPLOAD_DIALOG,
  DISPATCH_NOTIFICATIONS,
  INVOKE_UPDATE,
  SIDEBAR_FILTER_CHANGE,
} from 'utils/Enums';
import style from './flowContainer.css';

/**
 * Main container
 */
@definition('e-flow-container', {
  style,
  home: 'flow-container',
  props: {
    flowName: {
      attribute: false,
      type: 'string',
      default: '',
    },
    error: {
      attribute: false,
      type: 'boolean',
      default: false,
    },
    filteredFlows: {
      attribute: false,
      type: 'array',
      default: [],
    },
    timer: {
      attribute: false,
      type: 'number',
      default: null,
    },
    showOnboardingDialog: {
      attribute: false,
      type: 'boolean',
      default: false,
    },
    showFlowInfoDialog: {
      attribute: false,
      type: 'boolean',
      default: false,
    },
  },
})
export default class FlowContainer extends LitComponent {
  constructor() {
    super();
    this.flows = [];
    this.activeFilters = [];
    this.activeQuery = '';
    this.selectedFlow = null;
  }

  componentDidRender() {
    window.addEventListener(SIDEBAR_FILTER_CHANGE, this.onSidebarFilterChange, false);
    window.addEventListener(INVOKE_UPDATE, this.getFlows, false);

    if (!this.timer) {
      this.timer = setInterval(async () => {
        await this.getFlows();
      }, DEFAULT_INTERVAL_MS);
    }
  }

  componentWillDisconnect() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    window.removeEventListener(SIDEBAR_FILTER_CHANGE, this.onSidebarFilterChange);
    window.removeEventListener(INVOKE_UPDATE, this.getFlows);
  }

  async componentDidConnect() {
    this.sortingOptions = [...SORTING_OPTIONS_INFO_PAGE];
    // eslint-disable-next-line prefer-destructuring
    this.sortBy = this.sortingOptions[0];
    await this.getFlows();
  }

  /**
   * Get merged flows
   */
  @boundMethod
  async getFlows() {
    try {
      const { flows, notifications } = await FlowListingService.getFlows(this.flowName);

      this.bubble(DISPATCH_NOTIFICATIONS, notifications);
      this.flows = flows;
      this.filteredFlows = flows;
      this.filterFlows();
    } catch (error) {
      console.error(error);
      this.error = true;
    }
  }

  /**
   * Handle filter events from the sidebar component
   * @param {Object} event
   */
  @boundMethod
  onSidebarFilterChange(event) {
    const { filters, query } = event.detail;
    this.activeFilters = filters;
    this.activeQuery = query;
    this.filterFlows();
  }

  /**
   * Filter and sort flows
   */
  filterFlows() {
    this.filteredFlows = this.flows;
    if (this.activeFilters && this.activeFilters.size) {
      this.filteredFlows = FilteringService.filterFlowsByStatus(
        this.filteredFlows,
        this.activeFilters,
        this.isFlowInfo
      );
    }
    if (this.activeQuery) {
      this.filteredFlows = FilteringService.filterFlowsByName(
        this.filteredFlows,
        this.activeQuery,
        this.isFlowInfo
      );
    }
    this.sortFlows(this.sortBy);
  }

  /**
   * Handle flow sorting
   * @param {Object} option - Selected sorting method
   */
  sortFlows(option) {
    this.sortBy = option;
    const { by, order } = option;
    switch (by) {
      case 'name':
        this.filteredFlows = SortingService.sortFlowsByName(
          order,
          this.filteredFlows,
          this.isFlowInfo
        );
        break;
      case 'date':
        this.filteredFlows = SortingService.sortFlowsByDate(order, this.filteredFlows);
        break;
      default:
        this.filteredFlows = this.flows;
        break;
    }
  }

  /**
   * Returns true if the current page is a selected flow's
   * info page, if not then returns false
   * @returns {boolean}
   */
  get isFlowInfo() {
    return this.flowName && this.flowName.length > 0;
  }

  /**
   * Returns selected sorting method
   */
  get currentSorting() {
    return this.sortBy;
  }

  /**
   * Returns title with number of results
   */
  get tileTitle() {
    if (this.isFlowInfo && this.filteredFlows.length > 0) {
      return `${this.filteredFlows[0][1].length} versions in the list`;
    }
    return `${this.filteredFlows.length} flows in the catalogue`;
  }

  /**
   * Returns the name / displayName of the selected flow
   */
  get selectedFlowName() {
    if (this.selectedFlow) {
      return this.selectedFlow.displayName ? this.selectedFlow.displayName : this.selectedFlow.name;
    }
    return '';
  }

  @boundMethod
  toggleOnboardingDialog() {
    this.showOnboardingDialog = !this.showOnboardingDialog;
    if (this.showOnboardingDialog) {
      const uploadDialog = this.shadowRoot.querySelector('.upload-dialog');
      const dialog = uploadDialog.shadowRoot.querySelector('.dialog');
      const dialogBody = uploadDialog.shadowRoot.querySelector('.dialog__body');
      dialog.setAttribute('style', 'max-width: 600px; max-height: 600px');
      dialogBody.setAttribute('style', 'display: flex');
    } else {
      this.bubble(CLOSE_UPLOAD_DIALOG);
    }
  }

  /**
   * Render the <e-main-container> component. This function is called each time a
   * prop changes.
   */
  render() {
    if (this.error) {
      return html`
        <div class="error">
          <eui-v0-icon name="triangle-warning" class="icon"></eui-v0-icon>
          <div class="title">${loc('MODEL_LIST_ERROR_TITLE')}</div>
          <div class="subtitle">${loc('MODEL_LIST_ERROR_SUBTITLE')}</div>
        </div>
      `;
    }

    return html`
      <e-sidebar .filterList="${FLOW_FILTERS}"></e-sidebar>
      <eui-layout-v0-tile class="tile" tile-title="${this.tileTitle}">
        <div class="content" slot="content">
          ${repeat(
            this.filteredFlows,
            (item) => item[0],
            (item) => {
              // Name is needed for destructing
              const [name, flows] = item;
              if (this.isFlowInfo) {
                return flows.map(
                  (flow) => html`
                    <e-flow-card class="flow-card" .info="${true}" .flow="${flow}"></e-flow-card>
                  `
                );
              }
              return html`
                <e-flow-card
                  class="flow-card"
                  .stacked="${flows.length > 1}"
                  .flow="${flows[0]}"
                ></e-flow-card>
              `;
            }
          )}
        </div>
        <div class="action" slot="action">
          <span class="sort-title">Sort by &nbsp;</span>
          <eui-base-v0-dropdown
            class="sorting"
            label="${this.currentSorting.name}"
            data-type="click"
          >
            ${this.sortingOptions.map(
              (option) =>
                html`
                  <div menu-item tabindex="0" @click="${() => this.sortFlows(option)}">
                    ${option.name}
                  </div>
                `
            )}
          </eui-base-v0-dropdown>
          <eui-base-v0-button
            class="onboard"
            disabled
            primary
            @click="${this.toggleOnboardingDialog}"
          >
            ${loc('CREATE_FLOW')}
          </eui-base-v0-button>
        </div>
      </eui-layout-v0-tile>

      <eui-base-v0-dialog
        class="upload-dialog"
        label="Upload Flow"
        @eui-dialog:cancel="${this.toggleOnboardingDialog}"
        .show="${this.showOnboardingDialog}"
        fullscreen
      >
        <e-upload-component slot="content" class="content"></e-upload-component>
      </eui-base-v0-dialog>
    `;
  }
}

/**
 * Register the component as e-main-container.
 * Registration can be done at a later time and with a different name
 */
FlowContainer.register();
