/**
 * @class FilteringService
 * @classdesc Service for filtering models
 */
class FilteringService {
  /**
   * Filtering models by status
   * @param {Array} models - Models array to filter
   * @param {Set} filters - Array of status string
   * @param {boolean} isModelInfo - Is model info page ?
   * @returns {Array} - Filtered models array
   */
  static filterModelsByStatus(models, filters, isModelInfo) {
    if (isModelInfo) {
      const result = models[0][1].filter((model) => filters.has(model.status));
      return [[models[0].name, result]];
    }
    return models.filter((model) => filters.has(model[1][0].status));
  }

  /**
   * Filtering models by name
   * @param {Array} models - Models array to filter
   * @param {String} query - Query string from the input field
   * @param {boolean} isModelInfo - Is model info page ?
   * @returns {Array} - Filtered models array
   */
  static filterModelsByName(models, query, isModelInfo) {
    if (isModelInfo) {
      const result = models[0][1].filter((model) =>
        model.displayName.toLowerCase().includes(query)
      );
      return [[models[0].name, result]];
    }
    return models.filter((model) => model[1][0].name.toLowerCase().includes(query));
  }

  /**
   * Filtering flows by status
   * @param {Array} flows - Flows array to filter
   * @param {Set} filters - Array of status string
   * @param {boolean} isFlowInfo - Is flow info page ?
   * @returns {Array} - Filtered flows array
   */
  static filterFlowsByStatus(flows, filters, isFlowInfo) {
    if (isFlowInfo) {
      const result = flows[0][1].filter((flow) => filters.has(flow.status));
      return [[flows[0].name, result]];
    }
    return flows.filter((model) => filters.has(model[1][0].status));
  }

  /**
   * Filtering models by name
   * @param {Array} flows - Flows array to filter
   * @param {String} query - Query string from the input field
   * @param {boolean} isFlowInfo - Is flow info page ?
   * @returns {Array} - Filtered flows array
   */
  static filterFlowsByName(flows, query, isFlowInfo) {
    if (isFlowInfo) {
      const result = flows[0][1].filter((model) => model.displayName.toLowerCase().includes(query));
      return [[flows[0].name, result]];
    }
    return flows.filter((model) => model[1][0].name.toLowerCase().includes(query));
  }
}

export default FilteringService;
