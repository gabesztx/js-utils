import { LitElement, html } from 'lit-element';

class AppComponent extends LitElement {
    constructor(){
        super();
    }
    render() {
        return html`<div>App Root</div>`;
    }
}
customElements.define('app-root', AppComponent);
