import { Component, OnInit,AfterViewInit, ComponentFactoryResolver, ElementRef, Input, ViewChild } from '@angular/core';
import { ViewContainRefHostDirective } from '../../../directive/view-contain-ref-host.directive';
@Component({
  selector: 'app-comp-view',
  templateUrl: './comp-view.component.html',
  styleUrls: ['./comp-view.component.scss']
})
export class CompViewComponent implements OnInit {
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  currentViewContRef: any; //当前组件实例
  
  constructor() { }s

  ngOnInit() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
  }

}
