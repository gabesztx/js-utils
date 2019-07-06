/**
 * ModelInfo is defined as
 * `<e-flow-info>`
 *
 * Imperatively create application
 * @example
 * let app = new ModelInfo();
 *
 * Declaratively create application
 * @example
 * <e-flow-info></e-flow-info>
 *
 * @extends {App}
 */
import { App, html } from '@eui/app';
import { definition } from '@eui/component';
import 'components/flow-catalogue/flow-container/src/FlowContainer';
import 'components/shared/upload-component/src/UploadComponent';
import style from './flowlInfo.css';

@definition('e-flow-info', {
  style,
  props: {
    flowName: { attribute: false, type: 'string' },
  },
})
export default class FlowInfo extends App {
  /**
   * Render the <e-flow-info> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <e-flow-container .flowName="${this.flowName}"></e-flow-container>
    `;
  }
}
