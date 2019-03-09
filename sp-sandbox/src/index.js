import './index.scss';
import { StacketBulletChart } from './d3';
new StacketBulletChart();
module.hot.accept('./d3', () => {
  new StacketBulletChart();
});
