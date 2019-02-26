import { MyElement } from './components/main-app';
// import './components/main-app';
// import './my-element.js';
// import { AutonomouseComponent } from './components/autonomous';
// console.log(AutonomouseComponent);
// customElements.define('my-app', MyApp);
// var app = document.createElement('my-app');
// console.log(element);
// document.body.removeChild(element);
// let element = new MyElement();
// customElements.define('my-element', MyElement);
setTimeout(() => {
}, 1000);

// document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./components/main-app', () => {
    console.log('Hot');

    // let newElement = new MyElement();
 /*   setTimeout(() => {
      console.log('remove');
      document.body.removeChild(element);
      // document.body.appendChild(newElement);
    });
    setTimeout(() => {
      const el  = customElements.get('my-element');

      console.log('add', el);
      // document.body.removeChild(element);
      // document.body.appendChild(new MyElement());
    }, 1000);*/

  });
}
