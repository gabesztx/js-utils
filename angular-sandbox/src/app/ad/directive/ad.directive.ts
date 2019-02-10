import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[component-container]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
