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


/**
 * Custom elements
 */
// import './custom-elements'

import './index.scss';
import { LitElement, html } from 'lit-element';
class AppComponent extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html`<div>App Root</div>`;
    }
}

customElements.define('app-root', AppComponent);

