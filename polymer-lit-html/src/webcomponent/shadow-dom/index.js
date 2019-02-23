import { ShadowRootComponent } from './shadow-root/shadow.root.mode';
customElements.define('shadow-container', ShadowRootComponent, {extends: 'div'});
// customElements.define('shadow-container', ShadowRootComponent);
