/**
 * Integration tests for <e-model-list>
 */
import { expect } from 'chai';

import { inShadow, injectHTMLElement, stubLocales, nextTick } from 'test/utils';
import ModelList from '../ModelList';

describe('ModelList Application Tests', () => {
  let container;
  let inject;
  before(() => {
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
    window.EUI = undefined; // stub out the locale
    stubLocales();
    ModelList.register();
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic application setup', () => {
    it('should create a new <e-model-list>', async () => {
      const appUnderTest = await inject('<e-model-list></e-model-list>');
      // check shadow DOM
      const modelContainer = inShadow(appUnderTest, 'e-model-container');
      /* eslint-disable no-unused-expressions */
      expect(modelContainer).to.exist;
    });
  });
});
