/**
 * Component Test is defined as
 * `<e-test>`
 *
 * Imperatively create component
 * @example
 * let component = new Test();
 *
 * Declaratively create component
 * @example
 * <e-test></e-test>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './test.css';

/**
 * @property {boolean} propOne - show active/inactive state.
 * @property {boolean} propTwo - show active/inactive state.
 */
@definition('e-test', {
  style,
  home: 'test',
  props: {
    propOne: { attribute: false, type: 'boolean', default: true },
    propTwo: { attribute: false, type: 'string' },
  },
})
export default class Test extends LitComponent {
  /**
   * Render the <e-test> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<h1>Your component markup goes here</h1>
    <h2>props</h2>
      prop-one: ${this.propOne}
    <p>
      prop-two: ${this.propTwo}`;
  }
}

/**
 * Register the component as e-test.
 * Registration can be done at a later time and with a different name
 */
Test.register();
