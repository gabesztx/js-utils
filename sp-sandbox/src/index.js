import { MyElement } from './components/main-app';
// import './components/main-app';
// import './my-element.js';
// import { AutonomouseComponent } from './components/autonomous';
// console.log(AutonomouseComponent);
// customElements.define('my-app', MyApp);
// console.log(element);
// document.body.removeChild(element);
// let element = new MyElement();
customElements.define('root-app', MyElement);
/*setTimeout(() => {
}, 1000);*/
// var app = document.createElement('root-app');
const el = new MyElement();
document.body.append(el);
// console.log('el', el);
$(() => {
  // console.log('App', $('root-app'));
});

if (module.hot) {
  module.hot.accept('./components/main-app', () => {
    console.log('Hot');
    $(el).remove();
    setTimeout(
      () => {
        // const el = new MyElement();
        // const newEl = require('./components/main-app');
        // console.log('new El', new newEl());
        // var app = document.createElement('root-app');
        // document.body.append(app);
      }, 500);
    // document.body.append(app);
  });
}

