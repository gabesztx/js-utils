/**
 * Integration tests for <e-flow-container>
 */
import { expect } from 'chai';
import '../FlowContainer';
import { inShadow, injectHTMLElement, stubLocales } from 'test/utils';

describe('FlowContainer Component Tests', () => {
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

  describe('Basic component setup', async () => {
    it('should create a new <e-flow-container>', async () => {
      const customElement = await inject('<e-flow-container></e-flow-container>');
      // check shadow DOM
      /* eslint-disable no-unused-expressions */
      expect(customElement).to.exist;
    });
    describe('Create components', () => {
      it('should create new <e-sidebar>', async () => {
        const customElement = await inject('<e-flow-container></e-flow-container>');
        const sidebar = inShadow(customElement, 'e-sidebar');
        // check shadow DOM
        /* eslint-disable no-unused-expressions */
        expect(sidebar).to.exist;
      });
      it('should create new <eui-layout-v0-tile>', async () => {
        const customElement = await inject('<e-flow-container></e-flow-container>');
        const tile = inShadow(customElement, 'eui-layout-v0-tile');
        // check shadow DOM
        /* eslint-disable no-unused-expressions */
        expect(tile).to.exist;
      });
    });
  });
});
