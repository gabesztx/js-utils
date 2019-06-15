import FlowService from 'services/FlowService';
import FlowDeploymentService from 'services/FlowDeploymentService';
import { STATUS_AVAILABLE, STATUS_RUNNING } from 'utils/Enums';

/**
 * @class FlowListingService
 * @classdesc MXE Flow listing Service
 */
class FlowListingService {
  /**
   * Get flows and deployments and merge them together
   * @returns {Promise<any>}
   */
  static async getFlows(flowName = '') {
    return new Promise(async (resolve, reject) => {
      try {
        const [flows, flowDeployments] = await Promise.all([
          FlowService.getFlows(),
          FlowDeploymentService.getFlowDeployments(),
        ]);

        /**
         * Merged flows with deployment
         * @type {Object}
         */
        const merged = {};
        const notifications = [];
        const isFlowInfo = flowName.length > 0;

        const addFlow = (flow) => {
          // Creating groups by name
          if (Array.isArray(merged[flow.name])) {
            merged[flow.name].push({ ...flow });
          } else {
            merged[flow.name] = [{ ...flow }];
          }
        };

        // Loop through flows
        for (let i = 0, flowsLength = flows.length; i < flowsLength; i++) {
          if (isFlowInfo && flows[i] !== flowName) {
            // eslint-disable-next-line no-continue
            continue;
          }
          let displayName = '';

          // Loop through flow deployments
          for (let j = 0, deploys = flowDeployments.length; j < deploys; j++) {
            const deploy = flowDeployments[j];

            // If flow and the flow deployment matches by name and version
            // we append it to the original flow

            // If expanded flow view, set display name
            if (isFlowInfo) {
              displayName = `${flows[i]}\nv.${deploy.version || ''}`;
            }
            if (deploy.name === flows[i]) {
              addFlow({ ...deploy, status: STATUS_RUNNING, displayName });
            }
          }

          if (!merged[flows[i]]) {
            addFlow({ name: flows[i], status: STATUS_AVAILABLE, displayName });
          }
          // Gathering notifications
          // if (flow.status === STATUS_MODEL_ERROR || flow.status === STATUS_DEPLOYMENT_ERROR) {
          //   notifications.push({
          //     name: flow.name,
          //     description: flow.message || '',
          //     date: new Date().toISOString(),
          //   });
          // }
        }

        /**
         * Create [key, value] pair array from the merged object
         * @type {[string, any][]}
         */
        const result = Object.entries(merged);

        resolve({
          flows: result,
          notifications,
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default FlowListingService;
