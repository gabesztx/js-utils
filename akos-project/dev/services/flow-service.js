const API_BASE_URL = '/v1';
const flows = ['flow1', 'flow2', 'flow3', 'flow4'];

module.exports = (app) => {
  /**
   * Flows
   */
  app.get(`${API_BASE_URL}/flows`, (req, res) => {
    res.send(flows);
  });

  app.post(`${API_BASE_URL}/flows`, (req, res) => {
    const flowToAdd = `flow${flows.length + 1}`;

    flows.push(flowToAdd);

    res.send(flows);
  });
};
