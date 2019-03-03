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
