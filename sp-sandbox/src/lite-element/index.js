import { LitElement, html, property, customElement } from 'lit-element';
// import './components/main-container'



export class AppComponent extends LitElement {
  static get properties() {
    return {
      title: {type: String},
      num: {type: Number},
    };
  }

  constructor() {
    super();
  }

  onClick() {

  }

  render() {
    console.log('Render: AppComponent');
    return html`
      <div>
        <!--<h2>Root dsdsdsss s</h2>-->
        <div>${this.title + this.num}</div>
        <main-container></main-container>
        <button @click="${this.onClick}">Trigger</button>
      </div>`;
  }
}
