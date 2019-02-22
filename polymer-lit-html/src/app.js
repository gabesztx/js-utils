/**
 * Render Static Html
 */
// import './writing-templates/render-static-html'

/**
 * Render Dynamic Dynamic Text Content
 */
// import './writing-templates/render-dynamic-text-content'

/**
 * Using expressions
 */
// import './writing-templates/using-expressions'

import { LitElement, html } from 'lit-element';

class MyComponent extends LitElement {
    render() {
        return html`
      <p>Hello world!</p>
    `;
    }
}
console.log('customElements', customElements);
// customElements.define('my-component', MyComponent);
