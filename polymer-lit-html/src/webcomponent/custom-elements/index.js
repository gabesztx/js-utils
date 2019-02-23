/**
 * Autonóm
 * Önálló elemek és nem örökölnek a beépített HTML elemekből
 * ( custom directive dom element )
 */

import { AutonomouseComponent } from './autonomous/autonomous'
customElements.define('autonomous-element', AutonomouseComponent);


/**
 * Egyéni
 * Testre szabott elemek és örökölnek a beépített HTML elemekből és kiterjesztik őket
 * ( custom directive property )
 */

import { CustomizedComponent } from './customized/customized';
customElements.define('customized-element', CustomizedComponent, {extends: 'div'});

/**
 * Custom Component Lifecycle
 */
import { LifeCycleComponent } from './lifecycle/lifecycle';

setTimeout(
  () => {
    customElements.define('lifecycle-element', LifeCycleComponent);
  }, 3000
);
setTimeout(
  () => {
    $('lifecycle-element').attr('count', 1000)
  }, 6000
);
setTimeout(
  () => {
    $('lifecycle-element').remove();
  }, 12000
);

/* Promise that resolves when the named element is defined.
const element = customElements.whenDefined('lifecycle-element');
element.then(
  () => {
    console.log('Lifecycle custom element is defined!');
  }
);


/* Custom element get selectors */
// const Autonomous = customElements.get('autonomous-element');
