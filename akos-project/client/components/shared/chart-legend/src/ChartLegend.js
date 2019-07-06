/**
 * Component ChartLegend is defined as
 * `<e-chart-legend>`
 *
 * Imperatively create component
 * @example
 * let component = new ChartLegend();
 *
 * Declaratively create component
 * @example
 * <e-chart-legend></e-chart-legend>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { html, LitComponent, nothing, repeat } from '@eui/lit-component';
import { MONITORING_CHART_LEGEND } from 'utils/Defaults';
import style from './chartLegend.css';

/**
 * @property {array} selection - selected versions to show on the chart
 */
@definition('e-chart-legend', {
  style,
  home: 'chart-legend',
  props: {
    model: {
      attribute: false,
      type: 'object',
      default: [],
    },
    data: {
      attribute: false,
      type: 'array',
      default: null,
    },
    selection: {
      attribute: false,
      type: 'object',
      default: {},
    },
  },
})
export default class ChartLegend extends LitComponent {
  componentDidReceiveProps(prev) {
    super.componentDidReceiveProps(prev);
    if (prev.model !== this.model) {
      if (this.data && this.model) {
        this.buildLegend();
      }
    }
  }

  getDotColor(item) {
    return item.color;
  }

  buildLegend() {
    const legendItem = {};
    legendItem.version = this.model.version;
    legendItem.min = Math.min(...this.data.map((d) => d.value)).toFixed(2);
    legendItem.max = Math.max(...this.data.map((d) => d.value)).toFixed(2);
    const avg = [...this.data.map((d) => d.value)].reduce((a, b) => a + b) / this.data.length;
    legendItem.avg = avg.toFixed(2);
    legendItem.current = this.data[this.data.length - 1].value.toFixed(2);
    legendItem.color = this.data[0].color;
    this.selection = legendItem;
  }

  /**
   * Render the <e-chart-legend> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <span class="title">Legend</span>
      <div class="legend">
        ${repeat(
          MONITORING_CHART_LEGEND,
          (col) => col.name,
          (col) => html`
            <span class="column-name">${col.name}</span>
          `
        )}
        ${repeat(
          MONITORING_CHART_LEGEND,
          (col) => col.name,
          (col) => html`
            <span class="value ${col.prop}">
              ${this.selection[col.prop]}${col.postfix}
            </span>
          `
        )}
      </div>
    `;
  }
}

/**
 * Register the component as e-chart-legend.
 * Registration can be done at a later time and with a different name
 */
ChartLegend.register();
