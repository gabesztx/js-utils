import { html, render } from 'lit-html';
import { SbComponent } from './components/sb';

// console.log('ahadsd dsds dsd');
export class AppRoot {
  constructor() {
    // console.log('Root');
  }

  render() {
    // console.log('render');
    const sb = new SbComponent();
    // const AppComponenet = html`<h1>Meg</h1>`;
    // console.log('render', AppComponenet);
    // render(AppComponenet, document.body);
    // console.log('AppComponenet', AppComponenet);

  }
}
