/**
 * Integration tests for <e-model-card>
 */
import { expect } from 'chai';
import '../ModelCard';
import { inShadow, injectHTMLElement, simulateEvent, nextTick, stubLocales } from 'test/utils';

describe('ModelCard Component Tests', () => {
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
    it('should create a new <e-model-card>', async () => {
      const customElement = await inject('<e-model-card></e-model-card>');
      customElement.model = {
        name: 'Image Recognition VGG16',
        version: '0.0.1',
        description: 'This is the VGG16 image recognition model',
        image: 'vmx-eea171:5000/img_vgg16:v0.0.1',
        created: '2019-04-23T15:12:24.110Z',
        icon: 42,
        status: 'ok',
        message: null,
      };
      await customElement.executeComponentRender();
      // check shadow DOM
      const card = inShadow(customElement, '.model-card');
      /* eslint-disable no-unused-expressions */
      expect(card).to.exist;
    });
  });
});
