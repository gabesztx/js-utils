/**
 * Integration tests for <e-flow-card>
 */
import { expect } from 'chai';
import '../FlowCard';
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
    it('should create a new <e-flow-card>', async () => {
      const customElement = await inject('<e-flow-card></e-flow-card>');
      expect(true).to.equals(true);
    });
  });
});
