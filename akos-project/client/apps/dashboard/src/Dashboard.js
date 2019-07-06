/**
 * Dashboard is defined as
 * `<e-dashboard>`
 *
 * Imperatively create application
 * @example
 * let app = new Dashboard();
 *
 * Declaratively create application
 * @example
 * <e-dashboard></e-dashboard>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import 'components/test/src/Test';
import style from './dashboard.css';

@definition('e-dashboard', {
  style,
})
export default class Dashboard extends App {
  handleEvent(e){
    console.log(e);
  }


  /**
   * Render the <e-dashboard> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <e-test
      @click="${this}"
      .propTwo="${'hello'}"
      ></e-test> 
    `;
  }
}
