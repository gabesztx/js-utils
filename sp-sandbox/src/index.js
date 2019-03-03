import './index.css'
import { RootApp } from './gridlayout';

new RootApp().render();

if (module.hot) {
  module.hot.accept('./gridlayout', () => {
    new RootApp().render()
  });
}
//TODO: templattel or shadow dom change when use hotModule
