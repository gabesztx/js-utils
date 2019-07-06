const API_BASE_URL = '/v1';
const flowDeployments = [
  {
    name: 'flow1',
    flowName: 'flow1',
    creationTime: 1551451822000,
    externalPort: 30998,
  },
  {
    name: 'flow2',
    flowName: 'flow2',
    creationTime: 1551451822010,
    externalPort: 30881,
  },
  {
    name: 'flow3',
    flowName: 'flow3',
    creationTime: 1551451822010,
    externalPort: 30881,
  },
  {
    name: 'flow3',
    flowName: 'flow3',
    creationTime: 1551451822010,
    externalPort: 30881,
  },
];

module.exports = (app) => {
  /**
   * Flow deployments
   */
  app.get(`${API_BASE_URL}/flow-deployments`, (req, res) => {
    res.send(flowDeployments);
  });

  app.post(`${API_BASE_URL}/flow-deployments`, (req, res) => {
    const flowToAdd = req.body;

    flowDeployments.push(flowToAdd);

    res.send(flowDeployments);
  });

  app.delete(`${API_BASE_URL}/flow-deployments/:name`, (req, res) => {
    const { name } = req.params;

    for (let i = 0; i < flowDeployments.length; i++) {
      if (flowDeployments[i].name === name) {
        flowDeployments.splice(i, 1);
        break;
      }
    }

    res.send(flowDeployments);
  });
};
