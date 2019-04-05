import { TextareaComponent } from '../../component/basic/textarea/textarea.component';
import { InputComponent } from '../../component/basic/input/input.component';
import { ChartComponent } from '../../component/custom/chart/chart.component';
import { Component, OnInit,AfterViewInit, ComponentFactoryResolver, ElementRef, Input, ViewChild } from '@angular/core';
import { ComponentItem } from '../../component/module/component-item';
import { SettingObject } from '../../component/module/setting-object.module';
import { BasicInfoConfigService } from './../../providers/basic-info-config.service';
import { ImgComponent } from '../../component/basic/img/img.component';
import { TextComponent } from '../../component/basic/text/text.component';
import { AppServiceService} from './../../providers/app-service.service';
import { SettingObjComponent } from 'src/app/component/module/setting-object.component';
import { ViewContainRefHostDirective } from 'src/app/directive/view-contain-ref-host.directive';

@Component({
  selector: 'app-development-page',
  templateUrl: './development-page.component.html',
  styleUrls: ['./development-page.component.scss']
})
export class DevelopmentPageComponent implements OnInit, AfterViewInit {
  @Input() componets: Component[];
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;

  currentIndex = -1;
  settingState: string; // default or  customer
  componentsHeaders: any[];
  componentModules: any[];
  basicComponents: any[];
  testCreateComp: any[];

  components: any[];
  cmpRef: any[];
  currentViewContRef: any; //当前组件实例
  currentCompIndex: number; //当前组件的下标
  activeCurrentComp: [SettingObject, any ];//当前组件的数据
  activeCompSettingObject: SettingObject; //当前组件的设置对象
  
  dragCompStartX:any; //组件拖拽记录开始坐标X
  dragCompStartY:any; //组件拖拽记录开始坐标Y

  constructor(
    private elementRef:ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: AppServiceService,
    private infoService: BasicInfoConfigService,
  ) {
      this.activeSettingState('default');
  }

  ngOnInit() {
    this.initData();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#componentsBody')
    .addEventListener('click', this.clickListernerHandle.bind(this));
  }


  initData() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.componentModules = this.service.getComponentModeules();
    this.componentsHeaders = this.service.getComponentHeaders();
    this.testCreateComp = this.service.getTestCreateComp(); //获取json数据(组件数据)
    this.getCompList(this.testCreateComp) //json数据生成组件集合
  }

  /**
   * 默认设置选择组件 default | settings
   */
  
  activeSettingState(state = 'default') {
    this.settingState = state;
  }

  //拖拽icon图标添加组件
  dragCompStart(event) {
    let compType = event && event['compType'] || 'text'; //容错处理，默认创建text组件
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
    let settingObj = event;
    let compInstance  = this.activeCurrentComp[1];
    return (<SettingObjComponent> compInstance).settingObj = settingObj;    
  }

  //父类容器监听事件
  clickListernerHandle(e) {
    
    //1.更新文本编辑状态
    let currentComp = this.testCreateComp[this.currentIndex];
    if(currentComp && currentComp['type'] === 'text') {
      currentComp['editeabled'] = false;
    }
    this.beforeSelectComp()
    
    //2.初始化选中组件标识
    this.currentIndex = -1;
  }

  //删除组件 
  delComponent() {
    console.log(this.currentIndex)
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
      e.stopPropagation();
      let eventType = e && e.type;
      let style = currentComponent.settingObj && currentComponent.settingObj['style'];
      let changeX = e.clientX - this.dragCompStartX;
      let changeY = e.clientY - this.dragCompStartY;
      if(eventType === 'dragstart') {
        this.dragCompStartX = e.clientX;
        this.dragCompStartY = e.clientY;
      }else if(eventType === 'dragend'){
        if(!this.boundaryBool(changeX,changeY, style, 'l')) {
          style['left'] = style['left'] + changeX;
        }else{
          style['left'] = 0;
        } 
        
        if(!this.boundaryBool(changeX,changeY, style, 't')) {
          style['top'] = style['top'] + style['height'] + changeY < 800 ?  style['top'] + changeY : 800 -  style['height'];
        }else {
          style['top'] = 0;
        }
      }
      this.beforeSelectComp();
      this.selectComp(currentComponent.settingObj, compInstance, index)
    })

  }

  //拖拽边界处理
  boundaryBool(changeX,changeY, style, direction) {
    let bool = false;
    switch (direction) {
      case 'l':
        bool = changeX + style['left'] < 0;
        break;
      case 't':
        bool = changeY + style['top'] < 0
        break;
    }
   
    return bool;
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
      case 'chart':
        tempInfo = {
          comp: ChartComponent,
          data : this.getCompDefaultConfig(type)
        }  
        break;
      case 'input':
        tempInfo = {
          comp: InputComponent,
          data : this.getCompDefaultConfig(type)
        }  
        break;
      case 'textarea':
        tempInfo = {
          comp: TextareaComponent,
          data : this.getCompDefaultConfig(type)
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

}
