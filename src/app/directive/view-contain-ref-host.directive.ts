import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[view-contain-ref]'
})
export class ViewContainRefHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
