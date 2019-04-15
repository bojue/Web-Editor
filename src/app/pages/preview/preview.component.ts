import { SettingObjComponent } from './../../module/setting-object.component';
import{ RouterLink } from '@angular/router';
import { ViewContainRefHostDirective } from './../../directive/view-contain-ref-host.directive';
import { DynamicComponentServiceService } from './../../code/provider/dynamic-component-service.service';
import { Component, OnInit, ElementRef, AfterContentInit, OnDestroy, ComponentFactoryResolver, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';   
import { CompEmitService } from 'src/app/providers/comp-emit.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  compList: any[];
  currentViewContRef:any;
  eventEmitter:any;
  components: any[];
  constructor(
    private elementRef: ElementRef,
    private dynamicService: DynamicComponentServiceService,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: Router,
    private emitSerive: CompEmitService, 
  ) { }

  ngOnInit() {
    let compString = this.activatedRoute.snapshot.paramMap.get('queryParams');
    this.compList = JSON.parse(compString);

    let parentCompList = _.cloneDeep(this.compList);
    this.eventEmitter = this.emitSerive.getEmitEvent().subscribe(res => {
      if(res && res['type'] === 'child-comp') {
        let data = res['data']
        let currentList = _.concat(parentCompList, data);
        this.initViewContRef();
        this.updateCompList(currentList);
      }
    })
  }

  ngOnDestroy() {
     if( this.currentViewContRef) {
       this.currentViewContRef.clear();
     }
  }
  
  ngAfterContentInit() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.updateCompList();
  }

  updateCompList(list?:any[]){
    this.components = this.dynamicService.getCompList( list || this.compList);
    _.map(this.components, (comp)=> {
      this.renderComponent(comp)
    })
  }

  initViewContRef(){
    let len = this.components.length;
    for(let i=0; i < len;i++){
      this.currentViewContRef.clear(i)
    }
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
      this.route.navigate([url, { queryParams: JSON.stringify(params)}]);
    }

  }

}
