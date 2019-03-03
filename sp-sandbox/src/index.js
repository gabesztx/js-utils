import './index.css'
// import { App, AppComponent } from './lite-element';
// import { MainContainer } from "./lite-element/components/main-container";

// customElements.define('app-root', AppComponent);
// customElements.define('main-container', MainContainer);
// new App();
module.hot.accept('./lite-element', (obj) => {
  // console.log('Hot');
  // $('app-root').remove();
  // new App();
});
// TODO: templattel or shadow dom change when use hotModule
