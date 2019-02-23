class CustomizedComponent extends HTMLDivElement{
  constructor() {
    super();
    this.innerText = 'Customized element like directive'
  }
}
customElements.define('customized-element', CustomizedComponent, { extends: 'div' });

