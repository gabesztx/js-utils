import { MyElement } from './components/main-app';
// import { AutonomouseComponent } from './components/autonomous';
new MyElement().render();

if (module.hot) {
  module.hot.accept('./components/main-app', () => {
    new MyElement().render()
  });
}
