class AutonomouseComponent extends HTMLElement {
  constructor() {
    super();

    const title = this.createElement('div');
    const image = this.createElement('img');

    title.setAttribute('class', 'title');
    image.setAttribute('class', 'image');

    title.innerHTML = this.hasAttribute('title') ?
      this.getAttribute('title') :
      'Autonomus element';

    image.src = this.hasAttribute('imgUrl') ?
      this.getAttribute('imgUrl') :
      'assets/images/pic2.jpg';

    this.appendChild(title);
    this.appendChild(image)
  }

  createElement(elementName) {
    return document.createElement(elementName);
  }
}

customElements.define('autonomous-element', AutonomouseComponent);

