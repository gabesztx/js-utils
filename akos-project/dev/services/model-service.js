const API_BASE_URL = '/v1';
const models = [
  {
    name: 'Image Recognition VGG16',
    version: '0.0.1',
    description: 'This is the VGG16 image recognition model',
    image: 'vmx-eea171:5000/img_vgg16:v0.0.1',
    created: '2019-04-23T15:12:24.110Z',
    icon: null,
    status: 'available',
    message: null,
  },
  {
    name: 'Image Recognition Inception3',
    version: '0.0.1',
    description: 'This is the Inception3 image recognition model',
    image: 'vmx-eea171:5000/img_inception3:v0.0.1',
    created: '2019-04-23T15:12:34.065Z',
    icon: null,
    status: 'available',
    message: null,
  },
  {
    name: 'Image Recognition Inception4',
    version: '0.0.1',
    description: 'This is the Inception3 image recognition model',
    image: 'vmx-eea171:5000/img_inception3:v0.0.1',
    created: '2019-04-23T15:12:34.065Z',
    icon: null,
    status: 'packaging',
    message: null,
  },
  {
    name: 'Image Recognition Inception6',
    version: '0.0.1',
    description: 'This is the Inception3 image recognition model',
    image: 'vmx-eea171:5000/img_inception3:v0.0.1',
    created: '2019-04-23T15:12:34.065Z',
    icon: null,
    status: 'error',
    message: null,
  },
  {
    name: 'Image Recognition Inception 7',
    version: '0.0.1',
    description: 'This is the Inception3 image recognition model',
    image: 'vmx-eea171:5000/img_inception3:v0.0.1',
    created: '2019-04-23T15:12:34.065Z',
    icon: null,
    status: 'available',
    message: null,
  },
  {
    name: 'Image Recognition Inception 7',
    version: '0.0.2',
    description: 'This is the Inception3 image recognition model',
    image: 'vmx-eea171:5000/img_inception3:v0.0.1',
    created: '2019-04-23T15:12:34.065Z',
    icon: null,
    status: 'available',
    message: null,
  },
];

module.exports = (app) => {
  app.get(`${API_BASE_URL}/models`, (req, res) => {
    // res.status(404).send('Not found');
    res.send(models);
  });

  app.delete(`${API_BASE_URL}/models/:name/:version`, (req, res) => {
    const { name, version } = req.params;
    for (let i = 0, { length } = models; i < length; i++) {
      if (models[i].name === name && models[i].version === version) {
        models.splice(i, 1);
        break;
      }
    }
    res.send();
  });

  app.post(`${API_BASE_URL}/models`, (req, res) => {
    const modelToAdd = {
      name: 'Image Recognition Inception4',
      version: '0.0.1',
      description: 'This is the Inception3 image recognition model',
      image: 'vmx-eea171:5000/img_inception3:v0.0.1',
      created: '2019-04-23T15:12:34.065Z',
      icon: null,
      status: 'packaging',
      message: null,
    };

    models.push(modelToAdd);

    res.send(models);
  });
};
