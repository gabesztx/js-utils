/**
 * Autonóm
 * Önálló elemek és nem örökölnek a beépített HTML elemekből
 * ( custom directive dom element )
 */

import { AutonomouseComponent } from './autonomous/autonomous';


/**
 * Egyéni
 * Testre szabott elemek és örökölnek a beépített HTML elemekből és kiterjesztik őket
 * ( custom directive property )
 */

import { CustomizedComponent } from './customized/customized';

/**
 * Custom Component Lifecycle
 */
import { LifeCycleComponent } from './lifecycle/lifecycle';

customElements.define('autonomous-element', AutonomouseComponent);
customElements.define('customized-element', CustomizedComponent, {extends: 'div'});

setTimeout(
  () => {
    customElements.define('lifecycle-element', LifeCycleComponent);
  }, 3000,
);
setTimeout(
  () => {
    $('lifecycle-element').attr('count', 1000);
  }, 6000,
);
setTimeout(
  () => {
    $('lifecycle-element').remove();
  }, 12000,
);
window.hello = 'hee';

const element = customElements.whenDefined('lifecycle-element');
element.then(
  () => {
    console.log('Lifecycle custom element is defined!')
  }
);


/* Custom element get selectors
// const Autonomous = customElements.get('autonomous-element');
