import {
	Component

} from '@angular/core';

@Component({
	selector: 'loader-component',
	template: `

      <div *ngIf="visible">this default content</div>
      <button (click)="toogleDiv()">Click buttom</button>
      <!--<ng-template ad-host></ng-template>-->

	`
})

export class LoaderComponent {
	visible = true;

	toogleDiv() {
		this.visible = !this.visible;
	}
}


import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[ad-host]'
})
export class AdDirective {
	constructor(public viewContainerRef: ViewContainerRef) {
	}
}
