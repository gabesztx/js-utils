/**
 * Component ModelContainer is defined as
 * `<e-model-container>`
 *
 * Imperatively create component
 * @example
 * let component = new ModelContainer();
 *
 * Declaratively create component
 * @example
 * <e-model-container></e-model-container>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import '@eui/layout';
import { html, LitComponent, repeat } from '@eui/lit-component';
import { boundMethod } from 'autobind-decorator';
import 'components/model-list/model-card/src/ModelCard';
import 'components/shared/sidebar/src/Sidebar';
import 'components/shared/model-details/src/ModelDetails';
import FilteringService from 'services/FilteringService';
import ModelListingService from 'services/ModelListingService';
import SortingService from 'services/SortingService';
import {
  DEFAULT_INTERVAL_MS,
  SORTING_OPTIONS,
  SORTING_OPTIONS_INFO_PAGE,
  loc,
} from 'utils/Defaults';
import {
  CLOSE_UPLOAD_DIALOG,
  DISPATCH_NOTIFICATIONS,
  INVOKE_UPDATE,
  OPEN_MODEL_INFO_DIALOG,
  SIDEBAR_FILTER_CHANGE,
  STATUS_MODEL_ERROR,
  STATUS_PACKAGING,
} from 'utils/Enums';
import style from './modelContainer.css';

/**
 * Model container
 */
@definition('e-model-container', {
  style,
  home: 'model-container',
  props: {
    modelName: {
      attribute: false,
      type: 'string',
      default: '',
    },
    error: {
      attribute: false,
      type: 'boolean',
      default: false,
    },
    filteredModels: {
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
    showModelInfoDialog: {
      attribute: false,
      type: 'boolean',
      default: false,
    },
  },
})
export default class ModelContainer extends LitComponent {
  constructor() {
    super();
    this.models = [];
    this.activeFilters = [];
    this.activeQuery = '';
    this.selectedModel = null;
  }

  componentDidRender() {
    window.addEventListener(SIDEBAR_FILTER_CHANGE, this.onSidebarFilterChange, false);
    window.addEventListener(INVOKE_UPDATE, this.getModels, false);
    window.addEventListener(OPEN_MODEL_INFO_DIALOG, this.toggleModelInfoDialog, false);

    if (!this.timer) {
      this.timer = setInterval(async () => {
        await this.getModels();
      }, DEFAULT_INTERVAL_MS);
    }
  }

  componentWillDisconnect() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    window.removeEventListener(SIDEBAR_FILTER_CHANGE, this.onSidebarFilterChange);
    window.removeEventListener(INVOKE_UPDATE, this.getModels);
    window.removeEventListener(OPEN_MODEL_INFO_DIALOG, this.toggleModelInfoDialog);
  }

  async componentDidConnect() {
    this.sortingOptions = this.isModelInfo ? [...SORTING_OPTIONS_INFO_PAGE] : [...SORTING_OPTIONS];
    // eslint-disable-next-line prefer-destructuring
    this.sortBy = this.sortingOptions[0];
    await this.getModels();
  }

  /**
   * Get merged models
   */
  @boundMethod
  async getModels() {
    try {
      const { models, notifications } = await ModelListingService.getModels(this.modelName);

      this.bubble(DISPATCH_NOTIFICATIONS, notifications);
      this.models = models;
      this.filteredModels = models;
      this.filterModels();
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
    this.filterModels();
  }

  /**
   * Filter and sort models
   */
  filterModels() {
    this.filteredModels = this.models;
    if (this.activeFilters && this.activeFilters.size) {
      this.filteredModels = FilteringService.filterModelsByStatus(
        this.filteredModels,
        this.activeFilters,
        this.isModelInfo
      );
    }
    if (this.activeQuery) {
      this.filteredModels = FilteringService.filterModelsByName(
        this.filteredModels,
        this.activeQuery,
        this.isModelInfo
      );
    }
    this.sortModels(this.sortBy);
  }

  /**
   * Handle model sorting
   * @param {Object} option - Selected sorting method
   */
  sortModels(option) {
    this.sortBy = option;
    const { by, order } = option;
    switch (by) {
      case 'name':
        this.filteredModels = SortingService.sortModelsByName(
          order,
          this.filteredModels,
          this.isModelInfo
        );
        break;
      case 'date':
        this.filteredModels = SortingService.sortModelsByDate(order, this.filteredModels);
        break;
      default:
        this.filteredModels = this.models;
        break;
    }
  }

  /**
   * Returns true if the current page is a selected model's
   * info page, if not then returns false
   * @returns {boolean}
   */
  get isModelInfo() {
    return this.modelName && this.modelName.length > 0;
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
    if (this.isModelInfo && this.filteredModels.length > 0) {
      return `${this.filteredModels[0][1].length} versions in the list`;
    }
    return `${this.filteredModels.length} models in the list`;
  }

  /**
   * Returns the name / displayName of the selected model
   */
  get selectedModelName() {
    if (this.selectedModel) {
      return this.selectedModel.displayName
        ? this.selectedModel.displayName
        : this.selectedModel.name;
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

  @boundMethod
  toggleModelInfoDialog(event) {
    const model = event.detail;
    if (model.status === STATUS_PACKAGING || model.status === STATUS_MODEL_ERROR) {
      return;
    }
    this.showModelInfoDialog = !this.showModelInfoDialog;
    if (this.showModelInfoDialog && model) {
      this.selectedModel = model;
      const infoDialog = this.shadowRoot.querySelector('.info-dialog');
      const dialog = infoDialog.shadowRoot.querySelector('.dialog');
      const dialogTitle = infoDialog.shadowRoot.querySelector('.dialog__title');
      dialog.setAttribute('style', 'background: #f2f2f2');
      dialogTitle.setAttribute('style', 'font-size: 28px; margin-bottom: -12px');
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
          <div class="title">${loc.MODEL_LIST_ERROR_TITLE}</div>
          <div class="subtitle">${loc.MODEL_LIST_ERROR_SUBTITLE}</div>
        </div>
      `;
    }

    return html`
      <e-sidebar></e-sidebar>
      <eui-layout-v0-tile class="tile" tile-title="${this.tileTitle}">
        <div class="content" slot="content">
          ${repeat(
            this.filteredModels,
            (item) => item[0],
            (item) => {
              // Name is needed for destructing
              const [name, models] = item;
              if (this.isModelInfo) {
                return models.map(
                  (model) => html`
                    <e-model-card
                      class="model-card"
                      .info="${true}"
                      .model="${model}"
                    ></e-model-card>
                  `
                );
              }
              return html`
                <e-model-card
                  class="model-card"
                  .stacked="${models.length > 1}"
                  .model="${models[0]}"
                ></e-model-card>
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
                  <div menu-item tabindex="0" @click="${() => this.sortModels(option)}">
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
            ${loc('ONBOARD_MODEL')}
          </eui-base-v0-button>
        </div>
      </eui-layout-v0-tile>

      <eui-base-v0-dialog
        class="upload-dialog"
        label="Upload Model"
        @eui-dialog:cancel="${this.toggleOnboardingDialog}"
        .show="${this.showOnboardingDialog}"
        fullscreen
      >
        <e-upload-component slot="content" class="content"></e-upload-component>
      </eui-base-v0-dialog>

      <eui-base-v0-dialog
        class="info-dialog"
        label="${this.selectedModelName}"
        @eui-dialog:cancel="${this.toggleModelInfoDialog}"
        .show="${this.showModelInfoDialog}"
        fullscreen
      >
        <e-model-details slot="content" .model="${this.selectedModel}"></e-model-details>
      </eui-base-v0-dialog>
    `;
  }
}

/**
 * Register the component as e-main-container.
 * Registration can be done at a later time and with a different name
 */
ModelContainer.register();
