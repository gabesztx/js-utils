import { LitElement, html } from 'lit-element';

export class MainContainer extends LitElement {

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
    console.log('MainContainer');
  }

 /* connectedCallback() {
    console.log('main init');
  }

  disconnectedCallback() {
    console.log('main destroy');
  }*/

  firstUpdated() {
    // console.log('firstUpdated');
  }


  // Only change value when click, or other observable change detaction
  render() {
    console.log('Render: MainContainer');
    return html`
      <div class="main-container">
        Main Contanier ssaff
      </div>
    `;
  }
}


// TODO:
//  - https://lit-element.polymer-project.org/guide/properties#declare
//  - Configure observed attributes
