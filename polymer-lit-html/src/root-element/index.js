import { LitElement, html } from 'lit-element';

class RootComponent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
    <style>
        .main-root{
            background-color: chocolate;
        }
     </style> 
    <div class="main-root">Root Element</div>`
  }
}

customElements.define('root-element', RootComponent);
