export class LifeCycleComponent extends HTMLElement {

  constructor() {
    super();
    console.log('constructor');
    this.titleEl = this.createElement('span');
    this.countEl = this.createElement('span');
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
      console.log('Change lifecycle: ', newVal);
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
