import {
	Component,
	AfterContentInit,
	AfterContentChecked,
	ContentChild

} from '@angular/core';


//////////////////
@Component({
	selector: 'my-child',
	template: '<input [(ngModel)]="inputValue ">'
})
export class ChildComponent {
	inputValue = 'Magneta';
}

//////////////////////
@Component({
	selector: 'my-after-content',
	template: `
      <div>-- content begins --</div>
      <ng-content></ng-content>
      <div>-- content ends --</div>`
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
	// Query for a CONTENT child of type `ChildComponent`
	@ContentChild(ChildComponent) contentChild: ChildComponent;

	ngAfterContentInit() {
		console.log('AfterContentComponent ngAfterContentInit');
	}

	ngAfterContentChecked() {
		console.log('AfterContentComponent ngAfterContentChecked');
		console.log(this.contentChild);
	}
}

@Component({
	selector: 'my-after-content-parent',
	template: `
      <div class="parent">
          <h2>AfterContent</h2>
          <div *ngIf="show">
              <my-after-content>
                  <my-child></my-child>
              </my-after-content>
          </div>
          <button (click)="start()">Start</button>
      </div>`
})

export class AfterContentParentComponent {
	show = false;
	start() {
		this.show = true;
	}
}
