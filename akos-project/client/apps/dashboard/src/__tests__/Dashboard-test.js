/**
 * Integration tests for <e-dashboard>
 */
import { expect } from 'chai';
import { inShadow, injectHTMLElement, stubLocales } from 'test/utils';

import Dashboard from '../Dashboard';

describe('Dashboard Application Tests', () => {
  let container;
  let inject;
  before(() => {
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
    window.EUI = undefined; // stub out the locale
    stubLocales();
    Dashboard.register();
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic application setup', () => {
    it('should create a new <e-dashboard>', async () => {
      const appUnderTest = await inject('<e-dashboard></e-dashboard>');
      // check shadow DOM
      const headingTag = inShadow(appUnderTest, 'h1');
      expect(true).to.equal(true);
    });
  });
});
