import { BasicInfoConfigService } from './communal/component/config/basic-info-config.service';
import { ComponentItem } from './communal/component/code/component-item';
import { Component, OnInit, ComponentFactoryResolver, ChangeDetectorRef, Input, ViewChild ,ViewContainerRef, Injector} from '@angular/core';
import { ImgComponent } from './communal/component/basic/img/img.component';
import { TextComponent } from './communal/component/basic/text/text.component';
import { AppServiceService} from './providers/app-service.service';
import { ViewContainRefHostDirective } from './communal/directive/view-contain-ref-host.directive'
import { SettingObjComponent } from './communal/component/code/seting-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  @Input() componets: Component[];
  currentIndex = -1;

  settingState: string; // default or  customer
  componentsHeaders: any[];
  componentModules: any[];
  basicComponents: any[];
  testCreateComp: any[];
  basicCompIconList: any[];
  components: any[];
  cmpRef: any[];
  currentViewContRef: any;

  currentCompIndex: number;
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  constructor(
    private changeDetectorRef:ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef,
    private injector:Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: AppServiceService,
    private infoService: BasicInfoConfigService,
  ) {
      this.activeSettingState('default');
  }

  ngOnInit() {
    this.initData();
  }


  initData() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.componentModules = this.service.getComponentModeules();
    this.componentsHeaders = this.service.getComponentHeaders();
    this.basicCompIconList = this.service.getBasicCompIconList();
    this.testCreateComp = this.service.getTestCreateComp();
    console.log("读取JSON数据 ==> ",this.testCreateComp)
    this.getCompList(this.testCreateComp)
  }

  activeSettingState(state = 'default') {
    this.settingState = state;
  }

  dragCompStart(event, compType) {
    console.log(compType)
    this.currentViewContRef.clear()
    this.addComponent(compType)
  }


  addComponent(compType) {
    let compDefinInfo = this.createTemp(compType);
    let addCompJson = compDefinInfo && compDefinInfo['data'];
    this.testCreateComp.push(addCompJson);
    this.getCompList(this.testCreateComp)
  }

  //创建组件列表
  getCompList(jsonList: any[]) {
     this.components = this.createComp(jsonList); //获取组件列表
     console.log("组价列表 ===> ", this.components)
     this.updateComponent(this.components)
  }
  
  //更新组件列表渲染
  updateComponent(compList){
    compList.forEach((comp , k) => {
      this.renderComponent(k)
    })    
  }

  //组件渲染
  renderComponent(index) {
    this.currentIndex = index || 0;
    let currentComponent = this.components[this.currentIndex];
    console.log(this.currentIndex, currentComponent)
    let compFactory  = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
 
    let numb = currentComponent.settingObj['compIndex'];
    console.log(numb)
    let componentRef = this.currentViewContRef.createComponent(compFactory);
    (<SettingObjComponent> componentRef.instance).settingObj = currentComponent.settingObj;
  }
  
  //组件映射列表
  createComp(objList:any[]){
    console.log(objList)
    let compList = [];
    objList.forEach(item =>{
      let _type = item && item['type'];
      let compInfo = this.createTemp(_type)
      item['data'] = item['data'] || compInfo['data']
      let createComp = new ComponentItem(compInfo['comp'],item['data']);
      compList.push(createComp)
    })
    return compList;
  }

  //组件映射
  createTemp(type) {
    let tempInfo = {
      comp:null,
      data:null
    };
    switch(type) {
      case 'text':
        tempInfo = {
          comp: TextComponent,
          data: this.infoService.getTextInfoConfig()
        }
        break;
      case 'img':  
        tempInfo = {
          comp: ImgComponent,
          data: this.infoService.getImgInfoConfig()
        }
        break;
      default:
        return;    
    }
    return tempInfo;
  }
  
  delComponent() {
    console.log("清除组件 ...")
    this.currentViewContRef.remove()
  }
};