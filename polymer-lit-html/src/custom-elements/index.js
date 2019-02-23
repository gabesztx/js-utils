import { LitElement, html } from 'lit-element';

class CustomComponent extends LitElement {
    constructor(){
        super();
    }
    render() {
        return html`<div>Custom component</div>`;
    }
}
customElements.define('custom-element', CustomComponent);
