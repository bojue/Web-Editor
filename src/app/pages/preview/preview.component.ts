import { SettingObjComponent } from './../../module/setting-object.component';
import { ViewContainRefHostDirective } from './../../directive/view-contain-ref-host.directive';
import { DynamicComponentServiceService } from './../../code/provider/dynamic-component-service.service';
import { Component, OnInit,AfterContentInit, ComponentFactoryResolver, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';   

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, AfterContentInit {
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  compList: any[];
  currentViewContRef:any;
  constructor(
    private dynamicService: DynamicComponentServiceService,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: Router
  ) { }

  ngOnInit() {

    let compString = this.activatedRoute.snapshot.paramMap.get('queryParams');
    this.compList = JSON.parse(compString);

  }

  ngAfterContentInit() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.updateCompList();
  }

  updateCompList(){
    let jsonList = this.dynamicService.getCompList(this.compList);
    _.map(jsonList, (comp)=> {
      this.renderComponent(comp)
    })
  }

  renderComponent(currentComponent) {
    let compFactory  = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
    let compRef = this.currentViewContRef.createComponent(compFactory);
    let compInstance = compRef.instance;
    (<SettingObjComponent> compInstance).settingObj = currentComponent.settingObj;
  }
}
