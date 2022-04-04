import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[view-child-contain-ref]'
})
export class ViewChildContainRefHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
