import { html, render } from 'lit-html';
// Define a template function
const myTemplate = (data) => html`<div>Render the template with some data: ${data}</div>`;
// Render the template with some data
render(myTemplate('First'), document.body);
// Render the template with different data
setTimeout(() => {
    render(myTemplate('Second'), document.body);
}, 3000);
