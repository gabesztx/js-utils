class AutonomouseComponent extends HTMLElement {
  constructor() {
    super();

    const title = this.createElement('div');
    const image = this.createElement('img');

    title.setAttribute('class', 'title');
    image.setAttribute('class', 'image');
    title.innerHTML = 'Autonomous Element';
    image.src = 'assets/images/g.jpg';

    this.appendChild(title);
    this.appendChild(image)
  }

  createElement(elementName) {
    return document.createElement(elementName);
  }
}

customElements.define('autonomous-element', AutonomouseComponent);

