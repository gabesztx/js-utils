/**
 * FlowCatalogue is defined as
 * `<e-flow-catalogue>`
 *
 * Imperatively create application
 * @example
 * let app = new FlowCatalogue();
 *
 * Declaratively create application
 * @example
 * <e-flow-catalogue></e-flow-catalogue>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import 'components/flow-catalogue/flow-container/src/FlowContainer';
import 'components/shared/upload-component/src/UploadComponent';
import style from './flowCatalogue.css';

@definition('e-flow-catalogue', {
  style,
})
export default class FlowCatalogue extends App {
  /**
   * Render the <e-flow-catalogue> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <e-flow-container></e-flow-container>
    `;
  }
}

/**
 * Register the component as e-flow-catalogue.
 * Registration can be done at a later time and with a different name
 * Uncomment the below line to register the App if used outside the container
 */
// FlowCatalogue.register();
