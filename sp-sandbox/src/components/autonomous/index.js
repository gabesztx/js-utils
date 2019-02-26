export class AutonomouseComponent extends HTMLElement {
  constructor() {
    super();

    const title = this.createElement('div');
    const image = this.createElement('img');

    title.setAttribute('class', 'title');
    image.setAttribute('class', 'image');

    title.innerHTML = this.hasAttribute('title') ?
      this.getAttribute('title') : 'Autonomouse Div element';

    this.appendChild(title);
    this.appendChild(image)
  }

  createElement(elementName) {
    return document.createElement(elementName);
  }
}
