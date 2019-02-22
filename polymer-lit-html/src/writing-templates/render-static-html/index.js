
import { LitElement, html } from 'lit-element';

class MyComponent extends LitElement {
    render() {
        return html`
      <p>Hello world!</p>
    `;
    }
}

customElements.define('my-component', MyComponent);
