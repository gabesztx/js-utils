/**
 * Integration tests for <e-model-details>
 */
import { expect } from 'chai';
import { injectHTMLElement, inShadow, simulateEvent, nextTick, stubLocales } from 'test/utils';
import '../ModelDetails';

describe('ModelDetails Component Tests', () => {
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
    it('should create a new <e-model-details>', async () => {
      const customElement = await inject('<e-model-details></e-model-details>');
      // check shadow DOM
      // eslint-disable-next-line no-unused-expressions
      expect(customElement).to.exist;
    });
  });
});
