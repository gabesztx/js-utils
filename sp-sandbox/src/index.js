import './index.css';
import { D3SandBox } from './d3';

new D3SandBox();

module.hot.accept('./d3', () => {
  new D3SandBox();
});
