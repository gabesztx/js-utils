import { httpService } from 'utils/HttpService';
import { API_FLOWS_PATH, API_FLOW_DEPLOYMENTS_PATH } from 'utils/Config';
import { STATUS_AVAILABLE, STATUS_RUNNING } from 'utils/Enums';
import FlowDeploymentService from 'services/FlowDeploymentService';

/**
 * @class FlowService
 * @classdesc Service for handling requests for Flow Flows
 */
class FlowService {
  /**
   * Get Flow list from the API
   * @returns {Promise<any>}
   */
  static getFlows() {
    return httpService.getRequest(API_FLOWS_PATH);
  }

  /**
   * Post Flow to the API
   * @param {Object} flow - Flow data
   * @returns {Promise<any>}
   */
  static postFlow(flow) {
    return httpService.postRequest(API_FLOWS_PATH, flow);
  }

  /**
   * Get Flow Deployments list from the API
   * @returns {Promise<any>}
   */
  static getFlowDeployments() {
    return httpService.getRequest(API_FLOW_DEPLOYMENTS_PATH);
  }

  /**
   * Delete Flow Deployment from the API
   * @param {String} flowDeploymentName - Flow Deployment name
   * @returns {Promise<any>}
   */
  static deleteFlowDeployments(flowDeploymentName) {
    return httpService.getRequest(`${API_FLOW_DEPLOYMENTS_PATH}/${flowDeploymentName}`);
  }

  /**
   * Post Flow Deployment to the API
   * @param {Object} flowDeploy - Flow data
   * @returns {Promise<any>}
   */
  static postFlowDeployment(flowDeploy) {
    return httpService.postRequest(API_FLOW_DEPLOYMENTS_PATH, flowDeploy);
  }

  /**
   * Update flow status
   * @param {Object} flow - Flow which needs status updated
   * @return {Promise<void>}
   */
  static async updateFlowStatus(flow) {
    if (!flow) {
      return;
    }
    const { name, status } = flow;

    switch (status) {
      case STATUS_RUNNING:
        await FlowDeploymentService.deleteFlowDeployments(name);
        break;
      case STATUS_AVAILABLE:
        await FlowDeploymentService.postFlowDeployment(name);
        break;
      default:
        break;
    }
  }
}

export default FlowService;
