export class LifeCycleComponent extends HTMLElement {

  constructor() {
    super();
    this.titleEl = this.createElement('div');
    this.countEl = this.createElement('div');
    this.appendChild(this.titleEl);
    this.appendChild(this.countEl);
  }

  static get observedAttributes() {
    return ['count'];
  }

  render() {
    this.countEl.innerHTML = this.count;
    this.titleEl.innerHTML = this.title;
  }


  createElement(elementName) {
    return document.createElement(elementName);
  }

  get title() {
    return this.getAttribute('title')
  }

  set title(srt) {
    this.setAttribute('title', srt);
  }

  get count() {
    return this.getAttribute('count')
  }

  set count(num) {
    this.setAttribute('count', num);
  }

  // component init
  connectedCallback() {
    this.render();
    console.log('Add lifecycle');
  }
  // component change value
  attributeChangedCallback(name, oldVal, newVal) {
    if (newVal) {
      console.log('Change lifecycle', newVal);
      this.render(newVal)
    }
  }
  // component destroy
  disconnectedCallback() {
    console.log('Remove lifecycle');
  }
  // component adobt node
  // adoptedCallback() {}
}
