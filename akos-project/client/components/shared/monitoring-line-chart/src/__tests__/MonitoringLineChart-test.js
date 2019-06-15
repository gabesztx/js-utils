/**
 * Integration tests for <e-monitoring-line-chart>
 */
import { expect } from 'chai';
import '../MonitoringLineChart';
import { inShadow, injectHTMLElement, simulateEvent, nextTick, stubLocales } from 'test/utils';

describe('MonitoringLineChart Component Tests', () => {
  let container;
  let inject;
  before(() => {
    stubLocales();
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic component setup', () => {
    it('should create a new <e-monitoring-line-chart>', async () => {
      const customElement = await inject('<e-monitoring-line-chart></e-monitoring-line-chart>');
      customElement.model = {
        name: 'Image Recognition VGG16',
        version: '0.0.1',
        description: 'This is the VGG16 image recognition model',
        image: 'vmx-eea171:5000/img_vgg16:v0.0.1',
        created: '2019-04-23T15:12:24.110Z',
        icon: 42,
        status: 'ok',
        message: null,
        deployedModel: {
          name: 'ASD',
        },
      };
      await customElement.executeComponentRender();

      // check shadow DOM
      // eslint-disable-next-line no-unused-expressions
      expect(customElement).to.exist;
    });
  });
});
