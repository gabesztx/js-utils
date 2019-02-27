import { MyElement } from './components/main-app';
// import { AutonomouseComponent } from './components/autonomous';
const el = new MyElement();
if (module.hot) {
  module.hot.accept('./components/main-app', () => {
    new MyElement();
  });
}
