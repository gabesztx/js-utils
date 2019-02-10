import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContainerComponent]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
    // console.log('viewContainerRef', this.viewContainerRef);
  }
}
