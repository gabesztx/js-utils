/**
 * Component UploadComponent is defined as
 * `<e-upload-component>`
 *
 * Imperatively create component
 * @example
 * let component = new UploadComponent();
 *
 * Declaratively create component
 * @example
 * <e-upload-component></e-upload-component>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { html, LitComponent } from '@eui/lit-component';
import { boundMethod } from 'autobind-decorator';
import ModelService from 'services/ModelService';
import { preventDefaultEvent } from 'utils/Utils';
import { DRAG_DROP_EVENTS } from 'utils/Defaults';
import { ProgressBar } from '@eui/base';
import { CLOSE_UPLOAD_DIALOG, INVOKE_UPDATE, UPLOAD_PROGRESS } from 'utils/Enums';
import style from './uploadComponent.css';

/**
 * @property {Number} progress - Upload progress
 */
@definition('e-upload-component', {
  style,
  home: 'upload-component',
  props: {
    progress: { attribute: false, type: 'number' },
  },
})
export default class UploadComponent extends LitComponent {
  componentDidRender() {
    window.addEventListener(CLOSE_UPLOAD_DIALOG, this.clearData, false);
    this.fileInput = this.shadowRoot.getElementById('file-input');
    DRAG_DROP_EVENTS.forEach((eventType) => {
      this.fileInput.addEventListener(eventType, preventDefaultEvent, false);
    });
  }

  componentWillDisconnect() {
    window.removeEventListener(CLOSE_UPLOAD_DIALOG, this.clearData, false);
    DRAG_DROP_EVENTS.forEach((eventType) => {
      this.fileInput.removeEventListener(eventType, preventDefaultEvent, false);
    });
  }

  dragEnter(event) {
    preventDefaultEvent(event);
    this.parentNode.classList.add('dragover');
  }

  dragLeave(event) {
    preventDefaultEvent(event);
    this.parentNode.classList.remove('dragover');
  }

  /**
   * Start uploading and listen to upload progress
   * @param {Blob} file - Zip file to be uploaded
   */
  @boundMethod
  uploadFile(file) {
    window.addEventListener(UPLOAD_PROGRESS, this.uploadProgress, false);
    ModelService.postModel(file)
      .then(() => {
        window.removeEventListener(UPLOAD_PROGRESS, this.uploadProgress, false);
        this.bubble(INVOKE_UPDATE);
      })
      .catch((e) => {
        console.error(e);
        this.clearData();
      });
  }

  /**
   * Handles upload progress update
   * @param {Object} event
   */
  @boundMethod
  uploadProgress(event) {
    this.progress = event.detail;
  }

  /**
   * Clears data from last upload when the conainer dialog is closed
   */
  @boundMethod
  clearData() {
    this.file = null;
    this.progress = null;
    this.fileInput.value = '';
  }

  /**
   * Handles onChange and onDrop event
   * Looks for selected or dropped files
   * @param {Object} event
   */
  @boundMethod
  handleFileChange(event) {
    preventDefaultEvent(event);

    if (event.dataTransfer && event.dataTransfer.files) {
      // eslint-disable-next-line prefer-destructuring
      this.file = event.dataTransfer.files[0];
    } else if (event.currentTarget && event.currentTarget.files) {
      // eslint-disable-next-line prefer-destructuring
      this.file = event.currentTarget.files[0];
    }
    if (this.file && this.file.type === 'application/zip') {
      this.uploadFile(this.file);
    }
  }

  get footerDescription() {
    const { loc } = window.EUI.Localizer;

    if (this.progress === 100) {
      return loc.UPLOAD_READY;
    }
    if (this.file && this.file.name) {
      return `${this.file.name} ${loc.UPLOAD_IN_PROGRESS} ...`;
    }
    return '';
  }

  /**
   * Render the <e-upload-component> component. This function is called each time a
   * prop changes.
   */
  render() {
    const { loc } = window.EUI.Localizer;

    return html`
      <div class="drop-zone" id="dropzone">
        <eui-v0-icon name="upload" class="icon" size="40px"></eui-v0-icon>
        <span class="description">${loc.DRAG_AND_DROP}</span>
        <eui-base-v0-button primary>${loc.BROWSE}</eui-base-v0-button>
        <input
          id="file-input"
          type="file"
          accept="application/zip"
          @drop="${this.handleFileChange}"
          @change="${this.handleFileChange}"
          @dragenter="${this.dragEnter}"
          @dragleave="${this.dragLeave}"
        />
      </div>
      <div id="footer">
        <div class="progress-container ${this.progress ? 'show' : ''}">
          <eui-base-v0-progress-bar
            class="progress-bar"
            color="blue"
            .value="${this.progress}"
          ></eui-base-v0-progress-bar>
          <div class="upload-details ${this.progress === 100 ? 'done' : ''}">
            <img class="success-icon" src="/assets/icons/success-icon.svg" alt="upload success" />
            <span class="description">${this.footerDescription}</span>
          </div>
        </div>
        <eui-base-v0-button class="onboard-btn" primary .disabled="${this.progress !== 100}"
          >${loc.ONBOARD}</eui-base-v0-button
        >
      </div>
    `;
  }
}

/**
 * Register the component as e-upload-component.
 * Registration can be done at a later time and with a different name
 */
UploadComponent.register();
