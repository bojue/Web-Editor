import { SettingObjComponent } from '../model/setting-object.interface';
import{ RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterContentInit, OnDestroy, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { ViewContainRefHostDirective } from '../directive/view-contain-ref-host.directive';
import { EmitSubService } from 'src/app/providers/emit-sub.service';
import { CompDynamicCreateService } from '../provider/comp-dynamic-create.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class PreviewComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild(ViewContainRefHostDirective, { static: true}) viewContRef: ViewContainRefHostDirective;
  compList: any[];
  currentViewContRef:any;
  eventEmitter:any;
  components: any[];
  constructor(
    public emitSerive: EmitSubService, 
    private elementRef: ElementRef,
    private dynamicService: CompDynamicCreateService,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: Router,

  ) { }

  ngOnInit() {
    let compString = this.activatedRoute.snapshot.paramMap.get('queryParams');
    this.compList = JSON.parse(compString);

    let parentCompList = _.cloneDeep(this.compList);
    this.eventEmitter = this.emitSerive.getEmitEventSub().subscribe(res => {
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
