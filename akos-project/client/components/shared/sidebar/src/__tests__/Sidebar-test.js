/**
 * Integration tests for <e-sidebar>
 */
import { expect } from 'chai';
import '../Sidebar';
import { inShadow, injectHTMLElement, simulateEvent, nextTick, stubLocales } from 'test/utils';

describe('Sidebar Component Tests', () => {
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
    it('should create a new <e-sidebar>', async () => {
      const customElement = await inject('<e-sidebar></e-sidebar>');
      // check shadow DOM
      const sidebarDiv = inShadow(customElement, 'div.sidebar-content');
      /* eslint-disable no-unused-expressions */
      expect(sidebarDiv).to.exist;
    });
  });
});
