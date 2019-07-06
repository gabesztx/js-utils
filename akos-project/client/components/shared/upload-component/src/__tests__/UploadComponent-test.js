/**
 * Integration tests for <e-upload-component>
 */
import { expect } from 'chai';
import '../UploadComponent';
import { inShadow, injectHTMLElement, simulateEvent, nextTick, stubLocales } from 'test/utils';

describe('UploadComponent Component Tests', () => {
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
    it('should create a new <e-upload-component>', async () => {
      const customElement = await inject('<e-upload-component></e-upload-component>');
      // check shadow DOM
      // eslint-disable-next-line no-unused-expressions
      expect(customElement).to.exist;
    });
  });
});
