import { httpService } from 'utils/HttpService';
import { API_MODEL_DEPLOYMENTS_PATH } from 'utils/Config';
/**
 * @class ModelDeploymentService
 * @classdesc MXE Model Service
 */
class ModelDeploymentService {
  /**
   * Get model list from the API
   * @returns {Promise<any>}
   */
  static getModelDeployments() {
    return httpService.getRequest(API_MODEL_DEPLOYMENTS_PATH);
  }

  /**
   * Delete model list from the API
   * @param {String} modelDeploymentName - Model Deployment name
   * @returns {Promise<any>}
   */
  static deleteModelDeployments(modelDeploymentName) {
    return httpService.deleteRequest(
      `${API_MODEL_DEPLOYMENTS_PATH}/${encodeURI(modelDeploymentName)}`
    );
  }

  /**
   * Patch model deployment to the API
   * @param {String} modelDeploymentName - Model Deployment name
   * @param {Object} modelDeployment - Model data
   * @returns {Promise<any>}
   */
  static patchModelDeployment(modelDeploymentName, modelDeployment) {
    return httpService.patchRequest(
      `${API_MODEL_DEPLOYMENTS_PATH}/${modelDeploymentName}`,
      modelDeployment
    );
  }

  /**
   * Post modelDeployment to the API
   * @param {Object} model - Model object
   * @returns {Promise<any>}
   */
  static postModelDeployment(model) {
    // @TODO: extend type, replicas, when the backend is ready
    const modelDeployment = {
      replicas: 1,
      type: 'model',
      packages: [
        {
          packageName: model.name,
          packageVersion: model.version,
        },
      ],
    };
    return httpService.postRequest(API_MODEL_DEPLOYMENTS_PATH, modelDeployment);
  }
}

export default ModelDeploymentService;
