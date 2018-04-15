import {
	Component,
	AfterViewInit,
	AfterViewChecked,
	ViewChild

} from '@angular/core';


//////////////////
@Component({
	selector: 'my-view-child',
	template: '<input [(ngModel)]="inputValue ">'
})
export class ChildViewComponent {
	inputValue = 'Magneta';
}

//////////////////////
@Component({
	selector: 'my-after-view',
	template: `
      <div>-- child view begins --</div>
      <my-view-child *ngIf="isChild"></my-view-child>
      <div>-- child view ends --</div>`
})

export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
	isChild = false;
	// Query for a CONTENT child of type `ChildComponent`
	@ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

	constructor() {
		console.log('CONSTUCTOR');
		setTimeout(() => {
			this.isChild = true;
		}, 2000);
	}

	ngAfterViewInit() {
		console.log('AfterViewComponent ngAfterViewInit', this.viewChild);
	}

	ngAfterViewChecked() {
		console.log('AfterViewComponent ngAfterViewChecked', this.viewChild);
	}
}

@Component({
	selector: 'my-after-view-parent',
	template: `
      <div class="parent">
          <h2>AfterView</h2>
          <my-after-view *ngIf="show"></my-after-view>
          <button (click)="start()">Start</button>
      </div>`
})

export class AfterViewParentComponent {
	show = false;
	start() {
		this.show = true;
	}
}
