import { httpService } from 'utils/HttpService';
import { xmlHttpService } from 'utils/XMLHttpService';
import {
  STATUS_AVAILABLE,
  STATUS_DEPLOYMENT_ERROR,
  STATUS_MODEL_ERROR,
  STATUS_RUNNING,
} from 'utils/Enums';
import ModelDeploymentService from 'services/ModelDeploymentService';

/**
 * @class ModelService
 * @classdesc MXE Model Service
 */
class ModelService {
  /**
   * Get model list from the API
   * @returns {Promise<any>}
   */
  static getModels() {
    return httpService.getRequest('/models');
  }

  /**
   * Post model to the API
   * @param {Blob} file - Model file to upload
   * @returns {Promise<any>}
   */
  static postModel(file) {
    return xmlHttpService.uploadFile('/models', file);
  }

  /**
   * Delete model from the API
   * @param {String} modelName - Model name
   * @param {String} modelVersion - Model version
   * @returns {Promise<any>}
   */
  static deleteModel(modelName, modelVersion) {
    return httpService.deleteRequest(`/models/${modelName}/${modelVersion}`);
  }

  /**
   * Update model status
   * @param {Object} model - Model which needs status updated
   * @return {Promise<void>}
   */
  static async updateModelStatus(model) {
    if (!model) {
      return;
    }
    const { status, version, name } = model;
    const deploymentName = model.deployedModel ? model.deployedModel.name : '';

    switch (status) {
      case STATUS_RUNNING:
      case STATUS_DEPLOYMENT_ERROR:
        await ModelDeploymentService.deleteModelDeployments(deploymentName);
        break;
      case STATUS_AVAILABLE:
        await ModelDeploymentService.postModelDeployment(model);
        break;
      case STATUS_MODEL_ERROR:
        await ModelService.deleteModel(name, version);
        break;
      default:
        break;
    }
  }
}

export default ModelService;
