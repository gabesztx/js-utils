import { html, render } from 'lit-html';

const myTemplate1 = (value1, value2) => html`<div>Total: ${value1 + value2}</div>`;
render(myTemplate1(10, 20), document.body);

// const myTemplate = html`<div>Using expressions</div>`;
// const myTemplate = (subtotal, tax) => html`<div>Total: ${subtotal + tax}</div>`;
// const myTemplate2 = (name) => html`<div>${formatName(name.given, name.family, name.title)}</div>`;
