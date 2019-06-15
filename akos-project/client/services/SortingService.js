/**
 * @class SortingService
 * @classdesc Model list sorting functions
 */
class SortingService {
  /**
   * Sorting models by name and order
   * @param {String} order - ascending | descending
   * @param {Array} models - Models array
   * @param {boolean} isModelInfo - Is model info page ?
   * @returns {Array} - Sorted array of models
   */
  static sortModelsByName(order, models, isModelInfo) {
    const reverse = order === 'asc' ? -1 : 1;
    let result = [...models];
    if (isModelInfo) {
      result = result[0][1].sort((a, b) => reverse * a.displayName.localeCompare(b.displayName));
      return [[models[0].name, result]];
    }
    return result.sort((a, b) => reverse * a[1][0].name.localeCompare(b[1][0].name));
  }

  /**
   * Sorting models by creation date and order
   * @param {String} order - ascending | descending
   * @param {Array} models - Models array
   * @returns {Array} - Sorted array of models
   */
  static sortModelsByDate(order, models) {
    const reverse = order === 'asc' ? -1 : 1;
    return [...models].sort(
      (a, b) => reverse * (new Date(b[1][0].created) - new Date(a[1][0].created))
    );
  }

  /**
   * Sorting flows by name and order
   * @param {String} order - ascending | descending
   * @param {Array} flows - Flows array
   * @param {boolean} isFlowInfo - Is flow info page ?
   * @returns {Array} - Sorted array of flows
   */
  static sortFlowsByName(order, flows, isFlowInfo) {
    const reverse = order === 'asc' ? -1 : 1;
    let result = [...flows];
    if (isFlowInfo) {
      result = result[0][1].sort((a, b) => reverse * a.displayName.localeCompare(b.displayName));
      return [[flows[0].name, result]];
    }
    return result.sort((a, b) => reverse * a[1][0].name.localeCompare(b[1][0].name));
  }

  /**
   * Sorting flows by creation date and order
   * @param {String} order - ascending | descending
   * @param {Array} flows - Flows array
   * @returns {Array} - Sorted array of flows
   */
  static sortFlowsByDate(order, flows) {
    const reverse = order === 'asc' ? -1 : 1;
    return [...flows].sort(
      (a, b) => reverse * (new Date(b[1][0].created) - new Date(a[1][0].created))
    );
  }
}

export default SortingService;
