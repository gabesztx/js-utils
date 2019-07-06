import { httpService } from 'utils/HttpService';
import { API_PROMETHEUS_PATH } from 'utils/Config';

/**
 * @class ChartService
 * @classdesc HTTP service for handling Prometheus API requests
 */
class ChartService {
  /**
   * Get Chart data from Prometheus
   * https://prometheus.io/docs/prometheus/latest/querying/api/
   * @returns {Promise<any>}
   */
  static getChartData() {
    return httpService.getRequest(API_PROMETHEUS_PATH);
  }

  /**
   * Post Flow to the API
   * https://prometheus.io/docs/prometheus/latest/querying/api/
   * @param {Object} query - Chart query
   * @returns {Promise<any>}
   */
  static postChartData(query) {
    return httpService.postURLEncodedRequest(`${API_PROMETHEUS_PATH}/query_range`, query);
  }
}

export default ChartService;
