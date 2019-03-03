import { MyElement } from './components/main';
new MyElement().render();

/*
if (module.hot) {
  module.hot.accept('./components/main', () => {
    new MyElement().render()
    //TODO: templattel or shadow dom change when use hotModule
  });
}
*/


