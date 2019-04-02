import { SettingObject } from './communal/component/code/setting-object.module';
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
  currentViewContRef: any; //当前组件实例
  currentCompIndex: number; //当前组件的下标
  activeCurrentComp: [SettingObject, any ];//当前组件的数据
  activeCompSettingObject: SettingObject; //当前组件的设置对象
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
    console.log("init json数据 ==> ",this.testCreateComp)
    this.getCompList(this.testCreateComp)

  }

  activeSettingState(state = 'default') {
    this.settingState = state;
  }

  dragCompStart(event, compType) {
    this.currentViewContRef.clear()
    this.addComponent(compType)
  }


  //增加组件
  addComponent(compType) {
    let compDefinInfo = this.createTemp(compType);
    let addCompJson = compDefinInfo && compDefinInfo['data'];
    this.testCreateComp.push(addCompJson);
    this.getCompList(this.testCreateComp)
  }
  
  //修改组件
  chengeComponent(event) {
    console.log("组件设置 --->  ", this.testCreateComp)
    let settingObj = event;
    let compInstance  = this.activeCurrentComp[1];
    return (<SettingObjComponent> compInstance).settingObj = settingObj;    
  }

  //删除组件 
  delComponent() {
    console.log(this.currentIndex)
    // this.currentViewContRef.remove()
  }

  //创建组件列表
  getCompList(jsonList: any[]) {
     this.components = this.createComp(jsonList); //获取组件列表
     this.updateComponent(this.components)
  }
  
  //更新组件列表渲染
  updateComponent(compList){
    compList.forEach((comp , k) => {
      this.renderComponent(k)
    })    
  }

  //组件渲染
  renderComponent(currentIndex) {
    let index = currentIndex || 0;
    let currentComponent = this.components[index];
    let compFactory  = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
    let compRef = this.currentViewContRef.createComponent(compFactory);
    let compInstance = compRef.instance;
    (<SettingObjComponent> compInstance).settingObj = currentComponent.settingObj;
    (compInstance).onChildComponentChange.subscribe((e)=> {
      this.beforeSelectComp();
      this.selectComp(currentComponent.settingObj, compInstance, index)
    })

  }

  //处理之前选择的组件
  beforeSelectComp() {
    this.activeCompSettingObject = null; //初始化
    if(this.activeCurrentComp && this.activeCurrentComp.length > 0) {
      let beforeActiveCompSettingObj = this.activeCurrentComp[0];
      beforeActiveCompSettingObj['active'] = false;
      let beforeActiveCompInstance = this.activeCurrentComp[1];
      return (<SettingObjComponent> beforeActiveCompInstance).settingObj = beforeActiveCompSettingObj;
    }
  }

  //选择组件
  selectComp(settingObj, compInstance, currentIndex) {
    this.currentIndex = currentIndex;
    this.activeCurrentComp = [settingObj, compInstance];
    this.activeCompSettingObject = settingObj;
    settingObj['active'] = !settingObj['active'];
    return (<SettingObjComponent> compInstance).settingObj = settingObj;
  }
  
  //组件映射列表
  createComp(objList:any[]){
    let compList = [];
    objList.forEach(settingItem =>{
      let _type = settingItem && settingItem['type'];
      let compInfo = this.createTemp(_type)
      let settingData = settingItem || compInfo['data']
      let createComp = new ComponentItem(compInfo['comp'], settingData);
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
          data: this.getCompDefaultConfig(type)
        }
        break;
      case 'img':  
        tempInfo = {
          comp: ImgComponent,
          data: this.getCompDefaultConfig(type)
        }
        break;
      default:
        return;    
    }
    return tempInfo;
  }

  //获取组件默认配置
  getCompDefaultConfig(type) {
    return this.infoService.getCompDefaultConfig(type);
  }

};