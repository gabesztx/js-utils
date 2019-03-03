import './style.css'
import template from './gridlayout.html';

export class RootApp {
  constructor() {
    this.render();
  }

  render() {
    document.body.innerHTML = template;
  }
}
