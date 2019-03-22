import { html, render } from 'lit-html';

/*const myTemplate = (event) => html`<button @click=${event.handleEvent}>Click Me!</button>`;
const clickHandler = {
  // handleEvent method is required.
  handleEvent(e) {
    console.log('clicked!', e);
  },
  // event listener objects can also define zero or more of the event
  // listener options: capture, passive, and once.
  capture: true,
};
render(myTemplate(clickHandler), document.body);*/


const myTemplate = () => html`<button @click=${clickHandler}>Click Me!</button>`;
const clickHandler = () => {
  console.log('Click');
};
render(myTemplate(clickHandler), document.body);

