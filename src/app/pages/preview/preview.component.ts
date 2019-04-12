import { SettingObjComponent } from './../../module/setting-object.component';
import{ RouterLink } from '@angular/router';
import { ViewContainRefHostDirective } from './../../directive/view-contain-ref-host.directive';
import { DynamicComponentServiceService } from './../../code/provider/dynamic-component-service.service';
import { Component, OnInit, ElementRef, AfterContentInit, OnDestroy, ComponentFactoryResolver, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';   

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  compList: any[];
  currentViewContRef:any;
  constructor(
    private elementRef: ElementRef,
    private dynamicService: DynamicComponentServiceService,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: Router
  ) { }

  ngOnInit() {
    let compString = this.activatedRoute.snapshot.paramMap.get('queryParams');
    this.compList = JSON.parse(compString);
  }

  ngOnDestroy() {
     if( this.currentViewContRef) {
       console.log( this.currentViewContRef)
       this.currentViewContRef.clear();
       console.log( this.currentViewContRef)
     }
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
    (compInstance).onChildComponentChange.subscribe((e)=> {
      let type = e && e['type'];
      let eventSettingObj = e && e['dynamicData'] && e['dynamicData']['event'];
      if(eventSettingObj) {
        this.eventHandle(type, eventSettingObj)
      }
    })
  }

  eventHandle(type, eventObj) {

    switch (type) {
      case 'click':
        if(eventObj['routeBool']) {
          let params = eventObj['route'];
          let link = params['route_link'];
          this.routerLink(link, params);
        }else if (eventObj[type +'Bool']) {
          console.log("点击事件处理，目前只做了路由处理")
        }
        break;
      default:
        return ;  
    }
  }

  routerLink(url?:string, params?:any) {
    if(url !== undefined && url !== null)  {
      this.route.navigate([url], { queryParams: params});
    }

  }

}
