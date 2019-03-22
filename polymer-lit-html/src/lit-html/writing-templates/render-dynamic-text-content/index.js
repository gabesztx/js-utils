import { html, render } from 'lit-html';
const myTemplate = (data) => html`<div>Render the template with some data: ${data}</div>`;
render(myTemplate('First'), document.body);
setTimeout(() => {
    render(myTemplate('Second'), document.body);
}, 3000);
