// import { LitElement, html } from 'lit-element';
import template from './template.html';
import './style.css';

export class MyElement {
  constructor() {
    this.render();
  }

  render() {
    document.body.innerHTML = template;
  }
}

/* export class MyElement extends LitElement {
  render() {
    return html`
        <p>11ddddddsss</p>
      `;
  }
}*/


// connectedCallback() {}
// let template = document.createElement('template');
// template.innerHTML = RootApp.template();
// this.appendChild(template.content.cloneNode(true));

// import './style.pcss';
// import view from './template.html';
// const html = String.raw;
