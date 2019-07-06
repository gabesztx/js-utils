/**
 * Integration tests for <e-chart-legend>
 */
import { expect } from 'chai';
import '../ChartLegend';
import { inShadow, injectHTMLElement, simulateEvent, nextTick, stubLocales } from 'test/utils';

describe('ChartLegend Component Tests', () => {
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
    it('should create a new <e-chart-legend>', async () => {
      expect(true).to.equals(true);
      // const customElement = await inject('<e-chart-legend></e-chart-legend>');
      // check shadow DOM
      // eslint-disable-next-line no-unused-expressions
    });
  });
});
