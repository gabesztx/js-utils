/**
 * ModelInfo is defined as
 * `<e-model-info>`
 *
 * Imperatively create application
 * @example
 * let app = new ModelInfo();
 *
 * Declaratively create application
 * @example
 * <e-model-info></e-model-info>
 *
 * @extends {App}
 */
import { App, html } from '@eui/app';
import { definition } from '@eui/component';
import 'components/model-list/model-container/src/ModelContainer';
import 'components/shared/model-details/src/ModelDetails';
import 'components/shared/upload-component/src/UploadComponent';
import style from './modelInfo.css';

@definition('e-model-info', {
  style,
  props: {
    modelName: { attribute: false, type: 'string' },
  },
})
export default class ModelInfo extends App {
  /**
   * Render the <e-model-info> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <e-model-container .modelName="${this.modelName}"></e-model-container>
    `;
  }
}
