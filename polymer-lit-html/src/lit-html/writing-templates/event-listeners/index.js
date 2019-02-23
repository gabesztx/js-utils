import { html, render } from 'lit-html';
const myTemplate = () => html`<button @click=${clickHandler}>Click Me!</button>`;
const clickHandler = () => {
  console.log('Click');
};
render(myTemplate(), document.body);
