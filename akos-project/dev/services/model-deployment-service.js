const API_BASE_URL = '/v1';
const modelDeployments = [
  {
    packages: [
      {
        packageName: 'Image Recognition VGG16',
        packageVersion: '0.0.1',
      },
    ],
    created: '2018-12-07T14:52:56Z',
    replicas: 1,
    name: 'production-model-img',
    type: 'model',
    status: 'running',
  },
  {
    packages: [
      {
        packageName: 'Image Recognition Inception3',
        packageVersion: '0.0.1',
      },
    ],
    created: '2018-12-07T14:52:56Z',
    replicas: 1,
    name: 'production-model-img-2',
    type: 'model',
    status: 'error',
  },
];
let creating = true;

module.exports = (app) => {
  app.get(`${API_BASE_URL}/modeldeployments`, (req, res) => {
    // res.status(404).send('Not found');
    res.send(modelDeployments);
  });

  app.post(`${API_BASE_URL}/modeldeployments`, (req, res) => {
    const modelDeploymentToAdd = req.body;
    modelDeploymentToAdd.status = creating ? 'creating' : 'running';
    creating = !creating;
    modelDeployments.push(modelDeploymentToAdd);

    res.send(modelDeployments);
  });

  app.delete(`${API_BASE_URL}/modeldeployments/:name`, (req, res) => {
    const name = decodeURI(req.params.name);
    for (let i = 0, { length } = modelDeployments; i < length; i++) {
      if (modelDeployments[i].name === name) {
        modelDeployments.splice(i, 1);
        break;
      }
    }
    res.send();
  });

  app.patch(`${API_BASE_URL}/modeldeployments/:name`, (req, res) => {
    const { name } = req.params;
    // @Todo
    res.send(modelDeployments);
  });
};
