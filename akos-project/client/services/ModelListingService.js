import ModelService from 'services/ModelService';
import ModelDeploymentService from 'services/ModelDeploymentService';
import { STATUS_DEPLOYMENT_ERROR, STATUS_MODEL_ERROR } from 'utils/Enums';

/**
 * @class ModelService
 * @classdesc MXE Model Service
 */
class ModelListingService {
  /**
   * Get models and deployments and merge them together
   * @returns {Promise<any>}
   */
  static async getModels(modelName = '') {
    return new Promise(async (resolve, reject) => {
      try {
        const [models, modelDeployments] = await Promise.all([
          ModelService.getModels(),
          ModelDeploymentService.getModelDeployments(),
        ]);

        /**
         * Merged models with deployment
         * @type {Object}
         */
        const merged = {};
        const notifications = [];
        const isModelInfo = modelName.length > 0;

        const addModel = (model) => {
          // Creating groups by name
          if (Array.isArray(merged[model.name])) {
            merged[model.name].push({ ...model });
          } else {
            merged[model.name] = [{ ...model }];
          }
        };

        // Loop through models
        for (let i = 0, modelsLength = models.length; i < modelsLength; i++) {
          if (isModelInfo && models[i].name !== modelName) {
            // eslint-disable-next-line no-continue
            continue;
          }
          const model = models[i];
          // Loop through model deployments
          for (let j = 0, deploys = modelDeployments.length; j < deploys; j++) {
            const deploy = modelDeployments[j];
            // Loop through the packages of model deployment
            for (let k = 0, packages = deploy.packages.length; k < packages; k++) {
              const currentPackage = deploy.packages[k];
              // If model and the model deployment matches by name and version
              // we append it to the original model
              if (
                currentPackage.packageName === models[i].name &&
                currentPackage.packageVersion === models[i].version
              ) {
                model.status = `${model.status}-${deploy.status}`;
                model.deployedModel = { ...deploy };
              }
            }
          }

          // If expanded model view, set display name
          if (isModelInfo) {
            model.displayName = `${model.name}\nv.${model.version}`;
          }

          addModel(model);

          // Gathering notifications
          if (model.status === STATUS_MODEL_ERROR || model.status === STATUS_DEPLOYMENT_ERROR) {
            notifications.push({
              name: model.name,
              description: model.message || '',
              date: new Date().toISOString(),
            });
          }
        }

        /**
         * Create [key, value] pair array from the merged object
         * @type {[string, any][]}
         */
        const result = Object.entries(merged);

        resolve({
          models: result,
          notifications,
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ModelListingService;
