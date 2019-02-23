/**
 * Autonóm
 * Önálló elemek és nem örökölnek a beépített HTML elemekből
 * ( custom directive dom element )
 */

import { AutonomouseComponent } from './autonomous/autonomous'

/**
 * Egyéni
 * Testre szabott elemek és örökölnek a beépített HTML elemekből és kiterjesztik őket
 * ( custom directive property )
 */

import { CustomizedComponent } from './customized/customized'

/**
 * Custom Component Lifecycle
 */
import { LifeCycleComponent } from './lifecycle/lifecycle';


/* Define Elements */
customElements.define('autonomous-element', AutonomouseComponent);
customElements.define('customized-element', CustomizedComponent, {extends: 'div'});

setTimeout(
  () => {
    customElements.define('lifecycle-element', LifeCycleComponent);
  }, 1000
);
setTimeout(
  () => {
    $('lifecycle-element').attr('count', -1000)
  }, 3000
);
setTimeout(
  () => {
    $('lifecycle-element').remove();
  }, 6000
);

/* Custom element get selectors */
// const Autonomous = customElements.get('autonomous-element');
