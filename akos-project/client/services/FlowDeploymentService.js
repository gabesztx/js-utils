import { httpService } from 'utils/HttpService';
import { API_FLOW_DEPLOYMENTS_PATH } from 'utils/Config';
/**
 * @class FlowDeploymentService
 * @classdesc MXE Flow Service
 */
class FlowDeploymentService {
  /**
   * Get flow list from the API
   * @returns {Promise<any>}
   */
  static getFlowDeployments() {
    return httpService.getRequest(API_FLOW_DEPLOYMENTS_PATH);
  }

  /**
   * Delete flow list from the API
   * @param {String} flowDeploymentName - Flow Deployment name
   * @returns {Promise<any>}
   */
  static deleteFlowDeployments(flowDeploymentName) {
    return httpService.deleteRequest(`${API_FLOW_DEPLOYMENTS_PATH}/${flowDeploymentName}`);
  }

  /**
   * Patch flow deployment to the API
   * @param {String} flowDeploymentName - Flow Deployment name
   * @param {Object} flowDeployment - Flow data
   * @returns {Promise<any>}
   */
  static patchFlowDeployment(flowDeploymentName, flowDeployment) {
    return httpService.patchRequest(
      `${API_FLOW_DEPLOYMENTS_PATH}/${flowDeploymentName}`,
      flowDeployment
    );
  }

  /**
   * Post flow deployment to the API
   * @param {Object} flow - Flow object
   * @returns {Promise<any>}
   */
  static postFlowDeployment(flow) {
    const flowDeployment = {
      name: flow,
    };
    return httpService.postRequest(API_FLOW_DEPLOYMENTS_PATH, flowDeployment);
  }
}

export default FlowDeploymentService;
