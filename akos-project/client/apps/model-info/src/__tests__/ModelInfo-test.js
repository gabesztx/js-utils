/**
 * Integration tests for <e-model-info>
 */
import { expect } from 'chai';
import { inShadow, injectHTMLElement, stubLocales } from 'test/utils';
import ModelInfo from '../ModelInfo';

describe('ModelInfo Application Tests', () => {
  let container;
  let inject;
  before(() => {
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
    window.EUI = undefined; // stub out the locale
    stubLocales();
    ModelInfo.register();
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic application setup', () => {
    it('should create a new <e-model-info>', async () => {
      const appUnderTest = await inject('<e-model-info></e-model-info>');
      // check shadow DOM
      // eslint-disable-next-line no-unused-expressions
      expect(appUnderTest).to.exist;
    });
  });
});
