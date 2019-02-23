import { html, render } from 'lit-html';

const myTemplate = (data) => html`<div class=${data.cssClass}>Stylish text.</div>`;
render(myTemplate({cssClass: 'dynamic-class'}), document.body);
setTimeout(() => {
  // remove class
  render(myTemplate({cssClass: ''}), document.body);
}, 3000);


/*const myTemplate = (data) => html`<button ?disabled=${data.isDisabled}>style button</button>`;
render(myTemplate({isDisabled: false}), document.body);
setTimeout(() => {
  // disabled button
  render(myTemplate({isDisabled: true}), document.body);
}, 3000);*/

