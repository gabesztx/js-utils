/**
 * Component Sidebar is defined as
 * `<e-sidebar>`
 *
 * Imperatively create component
 * @example
 * let component = new Sidebar();
 *
 * Declaratively create component
 * @example
 * <e-sidebar></e-sidebar>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { html, LitComponent, repeat } from '@eui/lit-component';
import { DEFAULT_FILTERS } from 'utils/Defaults';
import {
  STATUS_CREATING,
  STATUS_RUNNING,
  STATUS_AVAILABLE,
  STATUS_PACKAGING,
  STATUS_MODEL_ERROR,
  STATUS_DEPLOYMENT_ERROR,
  SIDEBAR_FILTER_CHANGE,
} from 'utils/Enums';
import { boundMethod } from 'autobind-decorator';
import style from './sidebar.css';

@definition('e-sidebar', {
  style,
  home: 'sidebar',
  props: {
    filterList: {
      attribute: false,
      type: 'array',
      default: [...DEFAULT_FILTERS],
    },
    query: {
      attribute: false,
      type: 'string',
      default: '',
    },
  },
})
export default class Sidebar extends LitComponent {
  constructor() {
    super();
    this.selectedFilters = new Set();
  }

  /**
   * Handles query filter changes
   * @param {Object} event
   */
  @boundMethod
  filterNames(event) {
    this.query = event.currentTarget.value;
    this.sendEvent();
  }

  /**
   * Handles checkbox filter changes
   * @param {Object} event
   */
  @boundMethod
  filterStatuses(event) {
    const { detail } = event;
    if (this.selectedFilters.has(detail.name)) {
      this.selectedFilters.delete(detail.name);
    } else {
      this.selectedFilters.add(detail.name);
    }

    this.sendEvent();
  }

  /**
   * Bubbles up events to the parents
   */
  @boundMethod
  sendEvent() {
    this.bubble(SIDEBAR_FILTER_CHANGE, {
      query: this.query.toLowerCase(),
      filters: this.selectedFilters,
    });
  }

  getFilterName(filterName) {
    const { loc } = window.EUI.Localizer;
    switch (filterName) {
      case STATUS_CREATING:
        return loc.CREATING;
      case STATUS_MODEL_ERROR:
        return loc.PACKAGING_FAILED;
      case STATUS_DEPLOYMENT_ERROR:
        return loc.DEPLOYMENT_FAILED;
      case STATUS_AVAILABLE:
        return loc.AVAILABLE;
      case STATUS_RUNNING:
        return loc.RUNNING;
      case STATUS_PACKAGING:
        return loc.PACKAGING;
      default:
        return '';
    }
  }

  @boundMethod
  clearStatusFilter() {
    this.filterList = [];
    // Wouldn't re-render
    setTimeout(() => {
      this.filterList = [...DEFAULT_FILTERS];
      this.selectedFilters = new Set();
      this.sendEvent();
    });
  }

  @boundMethod
  clearQuery() {
    this.query = '';
    this.sendEvent();
  }

  /**
   * Render the <e-sidebar> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div class="sidebar-content">
        <div class="filter-name-container">
          <span class="filter-name">Search in Model List</span>
          <sup class="clear-filter" @click="${this.clearQuery}">clear</sup>
        </div>
        <eui-base-v0-text-field
          fullwidth
          class="search-field"
          name="input-search"
          placeholder="Start typing model name"
          value="${this.query}"
          @input="${this.filterNames}"
        >
          <eui-v0-icon slot="icon" name="search"></eui-v0-icon>
        </eui-base-v0-text-field>
        <div class="filters">
          <div class="filter-name-container">
            <span class="filter-name">Filter by status</span>
            <sup class="clear-filter" @click="${this.clearStatusFilter}">clear</sup>
          </div>
          ${repeat(
            this.filterList,
            (filter) => filter.name,
            (filter) => html`
              <eui-base-v0-checkbox
                .name="${filter.name}"
                ?checked="${filter.checked}"
                @change="${this.filterStatuses}"
                .forid="${filter.name}"
              >
                ${this.getFilterName(filter.name)}
              </eui-base-v0-checkbox>
            `
          )}
        </div>
      </div>
    `;
  }
}

/**
 * Register the component as e-sidebar.
 * Registration can be done at a later time and with a different name
 */
Sidebar.register();
