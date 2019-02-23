export class ShadowRootComponent extends HTMLDivElement{
  constructor() {
    super();

    this.headerElem = this.createElement('h2');
    this.headerElem.setAttribute('class', 'shadow-header');
    this.headerElem.innerHTML = 'Shadow Header';

    this.bodyElem = this.createElement('div');
    this.bodyElem.setAttribute('class', 'shadow-body');
    this.bodyElem.innerHTML = 'Shadow Body';

    this.footerElem = this.createElement('p');
    this.footerElem.setAttribute('class', 'shadow-footer');
    this.footerElem.innerHTML = 'Shadow Footer';
    // this.appendChild(this.headerElem);
    // this.appendChild(this.bodyElem);
    // this.appendChild(this.footerElem);

    /* Shadow Open */
    const shadowStyle = this.createElement('style');
    shadowStyle.textContent =
      '.shadow-header {\n' +
      '            font-size: 30px;\n' +
      '            color: orangered;\n' +
      '        }\n' +
      '        .shadow-body {\n' +
      '            font-size: 20px;\n' +
      '            color: orange;\n' +
      '        }\n' +
      '        .shadow-footer {\n' +
      '            font-size: 12px;\n' +
      '        }';

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(shadowStyle);
    this.shadowRoot.appendChild(this.headerElem);
    this.shadowRoot.appendChild(this.bodyElem);
    this.shadowRoot.appendChild(this.footerElem);

  }

  createElement(elementName) {
    return document.createElement(elementName);
  }
}
