export class CustomTemplateComponent extends HTMLElement {
  constructor() {
    super();
    let template = document.getElementById('paragraph-template');
    let templateContent = template.content;
    const shadowRoot = this.attachShadow({mode: 'open'})
    // this.appendChild(templateContent)
    shadowRoot.appendChild(templateContent.cloneNode(true))
  }
}
customElements.define('custom-template', CustomTemplateComponent);
