/**
 * Component MonitoringLineChart is defined as
 * `<e-monitoring-line-chart>`
 *
 * Imperatively create component
 * @example
 * let component = new MonitoringLineChart();
 *
 * Declaratively create component
 * @example
 * <e-monitoring-line-chart></e-monitoring-line-chart>
 *
 * @extends {LitComponent}
 */
import { VegaChart } from '@eui/chart';
import { definition } from '@eui/component';
import { html, LitComponent, nothing } from '@eui/lit-component';
import 'components/shared/chart-legend/src/ChartLegend';
import ChartService from 'services/ChartService';
import { chartColors, lineChartSpec } from 'utils/LineChartSpec';
import {
  DEFAULT_CHART_UPDATE_INTERVAL_MS,
  DEFAULT_CHART_TITLES,
  MONITORING_INTERVALS,
} from 'utils/Defaults';
import { boundMethod } from 'autobind-decorator';
import style from './monitoringLineChart.css';

@definition('e-monitoring-line-chart', {
  style,
  home: 'monitoring-line-chart',
  props: {
    model: {
      attribute: false,
      type: 'object',
      default: null,
    },
    title: {
      attribute: false,
      type: 'string',
      default: '',
    },
    unit: {
      attribute: false,
      type: 'string',
      default: '',
    },
    chartSpec: {
      attribute: false,
      type: 'object',
      default: { ...lineChartSpec },
    },
    chartData: {
      attribute: false,
      type: 'array',
      default: [],
    },
    currentInterval: {
      attribute: false,
      type: 'object',
      default: { ...MONITORING_INTERVALS[0] },
    },
    timer: {
      attribute: false,
      type: 'number',
    },
  },
})
export default class MonitoringLineChart extends LitComponent {
  async componentDidReceiveProps(prev) {
    super.componentDidReceiveProps(prev);
    if (!this.model) {
      return;
    }
    if (prev.model !== this.model) {
      await this.getChartData();
      if (!this.timer) {
        this.timer = setInterval(async () => {
          await this.getChartData();
        }, DEFAULT_CHART_UPDATE_INTERVAL_MS);
      }
    }
  }

  /**
   * Get real interval value
   * @return {number}
   */
  get calculatedInterval() {
    return this.currentInterval.value ? this.currentInterval.value * 60000 : 0;
  }

  /**
   * Force chart responsibility, by deleting the height, width attributes
   */
  @boundMethod
  forceChartResponsibility() {
    const chartSVG = this.shadowRoot
      .querySelector('eui-chart-v0-vega')
      .shadowRoot.querySelector('.marks');
    chartSVG.removeAttribute('width');
    chartSVG.removeAttribute('height');
    chartSVG.style.width = '100%';
    chartSVG.style.height = '100%';
  }

  /**
   * Get chart data
   * @return {Promise<void>}
   */
  async getChartData() {
    const { name } = this.model.deployedModel;

    const response = await ChartService.postChartData({
      start: Math.floor((Date.now() - this.calculatedInterval) / 1000),
      end: Math.floor(Date.now() / 1000),
      step: this.chartStep,
      query: this.getQuery(name),
    });

    if (response.status === 'success') {
      this.rawData = response.data.result[0].values;
    }

    const result = [];
    await this.rawData.forEach((data) => {
      result.push({
        date: new Date(data[0] * 1000).toLocaleTimeString(),
        value: parseFloat(data[1] * 1000),
        color: chartColors[0],
      });
    });

    this.chartData = result;
  }

  /**
   * Create Prometheus query
   * @param {String} modelName - Model name
   * @return {string}
   */
  getQuery(modelName) {
    switch (this.title) {
      case DEFAULT_CHART_TITLES[0].name:
        return `avg(rate(seldon_api_engine_client_requests_seconds_bucket{model_name="${modelName}"}[20s])) by (model_name)`;
      case DEFAULT_CHART_TITLES[1].name:
      default:
        return `sum(rate(seldon_api_engine_client_requests_seconds_bucket{model_name="${modelName}"}[1m]))`;
    }
  }

  /**
   * Get chart steps
   * @return {string}
   */
  get chartStep() {
    switch (this.currentInterval.value) {
      default:
      case 5:
        return '5s';
      case 60:
        return '1m';
      case 1440:
        return '30m';
      case 10080:
        return '1h';
      case 43200:
        return '1d';
      case 525600:
        return '5d';
    }
  }

  /**
   * Handle interval selection
   * @param {Object} interval - Interval object
   * @return {Promise<void>}
   */
  async handleIntervalSelect(interval) {
    this.currentInterval = interval;
    await this.getChartData();
  }

  /**
   * Render the <e-monitoring-line-chart> component. This function is called each time a
   * prop changes.
   */
  render() {
    if (!this.chartData.length || !this.chartSpec) {
      return nothing;
    }
    return html`
      <div class="left-side">
        <e-chart-legend .model=${this.model} .data=${this.chartData}></e-chart-legend>
        <eui-base-v0-dropdown
          class="interval"
          width="100%"
          label="${this.currentInterval.name}"
          data-type="click"
        >
          ${MONITORING_INTERVALS.map(
            (option) =>
              html`
                <div menu-item tabindex="0" @click="${() => this.handleIntervalSelect(option)}">
                  ${option.name}
                </div>
              `
          )}
        </eui-base-v0-dropdown>
      </div>
      <div class="chart">
        <span class="title">${this.title} [${this.unit}]</span>
        <eui-chart-v0-vega .spec=${this.chartSpec} .data="${this.chartData}"></eui-chart-v0-vega>
      </div>
    `;
  }
}

/**
 * Register the component as e-monitoring-line-chart.
 * Registration can be done at a later time and with a different name
 */
MonitoringLineChart.register();
