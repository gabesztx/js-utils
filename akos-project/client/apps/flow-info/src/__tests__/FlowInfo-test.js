/**
 * Integration tests for <e-flow-info>
 */
import { expect } from 'chai';
import { inShadow, injectHTMLElement, stubLocales } from 'test/utils';
import FlowInfo from '../FlowInfo';

describe('FlowInfo Application Tests', () => {
  let container;
  let inject;
  before(() => {
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
    window.EUI = undefined; // stub out the locale
    stubLocales();
    FlowInfo.register();
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic application setup', () => {
    it('should create a new <e-flow-info>', async () => {
      const appUnderTest = await inject('<e-flow-info></e-flow-info>');
      // check shadow DOM
      // eslint-disable-next-line no-unused-expressions
      expect(appUnderTest).to.exist;
    });
  });
});
