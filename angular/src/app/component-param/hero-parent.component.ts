import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
	selector: 'my-component-param',
	template: `
        <h2>{{master}} controls {{heroes.length}} heroes</h2>
        <my-hero-child *ngFor="let hero of heroes"
                    [hero]="hero"
                    [master]="master"
		>
        </my-hero-child>
	`
})
export class HeroParentComponent {
	heroes = HEROES;
	master = 'Master';
}
