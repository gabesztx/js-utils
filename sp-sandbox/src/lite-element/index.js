import './style.css';
import { LitElement, html } from 'lit-element';

export class RootApp extends LitElement {

  static get properties() {
    return {
      name: {type: String},
      message: {type: String},
      isShow: {type: Boolean},
      items: {type: Array}
    };
  }

  constructor() {
    super();
    // this.name = 'Ödönke';
    this.message = 'This is title';
    this.isShow = true;
    this.items = ['item1', 'item2', 'item3'];

    setTimeout(() => {
      this.items[1] = 'item new ;)'; // not change
    }, 1000);
  }

  onClick() {
    this.isShow = !this.isShow;
  }

  // Only change value when click, or other observable change detaction
  render() {
    return html`
      <h1>Name: ${this.name}</h1>
      <div>
        ${this.isShow ?
      html`<p>${this.message}</p>` :
      html`<p>Title changed </p>`
      }
      </div>
      <ul>${this.items.map(item => html`<li>${item}</li>`)}</ul>
      <button @click="${this.onClick}">Trigger</button>
    `;
  }
}

customElements.define('root-app', RootApp);

// TODO: https://lit-element.polymer-project.org/guide/properties#declare
