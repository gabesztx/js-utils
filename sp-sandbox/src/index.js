// import { AppRoot } from './components/sb-app';
import { AppRoot } from './app';
// console.log('App', AppRoot);
// const app = new AppRoot();
// app.render();
// if (PRODUCTION) {
//   require('offline-plugin/runtime').install();
// }
// new AppRoot()
new AppRoot().render();
if (module.hot) {
  module.hot.accept('./app.js', () => {
    // console.log('Hot');
    new AppRoot().render();
    // new AppRoot().render()
  });
}
// const app = new AppRoot();
// console.log('hot');
// console.log('app', app);
// console.log('val', val);

// const app1 = new AppRoot();
// const Root = customElements.get('root-app');
// const newRoot = new Root();
// console.log('newRoot', newRoot);
// render(html`${newRoot}`, document.body);
// render(html`${new rootApp()}`, document.body);
// render(html`${new AppRoot()}`, document.body);
// render(AppRoot, document.body);
