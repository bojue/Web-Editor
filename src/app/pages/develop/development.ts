import { TextareaComponent } from '../../component/basic/textarea/textarea.component';
import { InputComponent } from '../../component/basic/input/input.component';
import { ChartComponent } from '../../component/custom/chart/chart.component';
import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ElementRef, Input, ViewChild, EventEmitter } from '@angular/core';
import { ComponentItem } from '../../module/component-item';
import { SettingObject } from '../../module/setting-object.module';
import { BasicInfoConfigService } from '../../providers/basic-info-config.service';
import { ImgComponent } from '../../component/basic/img/img.component';
import { TextComponent } from '../../component/basic/text/text.component';
import { AppServiceService} from '../../providers/app-service.service';
import { ViewContainRefHostDirective } from 'src/app/directive/view-contain-ref-host.directive';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { ButtonComponent } from 'src/app/component/basic/button/button.component';
import { AuxiliaryComponent } from  'src/app/component/tool/auxiliary/auxiliary.component'

@Component({
  selector: 'app-development',
  templateUrl: './development.html',
  styleUrls: ['./development.scss']
})
export class DevelopmentPageComponent implements OnInit, AfterViewInit {
  @Input() componets: Component[];
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  setingBool: boolean;
  currentIndex = -1;
  settingState: string; // default or  customer
  componentsHeaders: any[];
  componentModules: any[];
  basicComponents: any[];
  testCreateComp: any[];
  auxiComp: any = {};

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
    private auxisFactoryResolver: ComponentFactoryResolver,
    private service: AppServiceService,
    private infoService: BasicInfoConfigService,
  ) {
      this.activeSettingState('default');
  }

  ngOnInit() {
    this.initData();
  }

  settingHidle() {
    this.setingBool = !this.setingBool;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#componentsBody')
    .addEventListener('click', this.clickListernerHandle.bind(this));
  }

  initData() {
    this.setingBool = true;
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.componentModules = this.service.getComponentModeules();
    this.componentsHeaders = this.service.getComponentHeaders();
    this.testCreateComp = this.service.getTestCreateComp(); //获取json数据(组件数据)
    this.getCompList(this.testCreateComp); //json数据生成组件集合
    this.auxiComp = this.service.getAuxiComp();
  }

  /**
   * 默认设置选择组件 default | settings
   */
  
  activeSettingState(state = 'default') {
    this.settingState = state;
  }

  //拖拽icon图标添加组件
  dragCompEnd(event) {
    let compType = event && event['compType'] || 'text'; //容错处理，默认创建text组件
    this.addComponent(compType, event)
  }


  //增加组件
  addComponent(compType, event ?:any) {
    let compDefinInfo = this.createTemp(compType);
    let addCompJson = compDefinInfo && compDefinInfo['data'];
    this.getAuxiliaryComponent();
    this.testCreateComp.push(addCompJson);
    this.getCompList(this.testCreateComp);
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

    //3.处理选中辅助组件
    this.getAuxiliaryComponent();
  }

  // 初始化视图容器,这样写是为了操作安全,扩展多人同时编辑
  initViewContRef(){
    let len = this.components.length;
    for(let i=0; i < len;i++){
      this.currentViewContRef.clear(i)
    }
  }

  //删除组件 
  deleteComponent(event) {
    this.testCreateComp.splice(this.currentIndex, 1);
    this.initViewContRef();
    this.getCompList(this.testCreateComp)
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
      this.selectComp(currentComponent.settingObj, compInstance, index, eventType)
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
  selectComp(settingObj, compInstance, currentIndex, eventType) {

    this.currentIndex = currentIndex;
    this.activeCurrentComp = [settingObj, compInstance];
    this.activeCompSettingObject = settingObj;
    settingObj['active'] = !settingObj['active'];
    this.testCreateComp[this.currentIndex] = settingObj;
    this.getAuxiliaryComponent(this.activeCompSettingObject['style'], 'selectComp')

    console.log(this.activeCompSettingObject)
    if(eventType === 'click') {
      this.initViewContRef();
      this.getCompList(this.testCreateComp)
    }else {
      return (<SettingObjComponent> compInstance).settingObj = settingObj;
    }



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
      comp:null
    };
    switch(type) {
      case 'text':
        tempInfo = {
          comp: TextComponent,
        }
        break;
      case 'img':  
        tempInfo = {
          comp: ImgComponent,
        }
        break;
      case 'chart':
        tempInfo = {
          comp: ChartComponent,
        }  
        break;
      case 'input':
        tempInfo = {
          comp: InputComponent,
        }  
        break;
      case 'textarea':
        tempInfo = {
          comp: TextareaComponent,
        }  
        break;
      case 'button':
        tempInfo = {
          comp: ButtonComponent,
        }  
        break;
      case 'auxi':
        tempInfo = {
          comp : AuxiliaryComponent
        }
        break;
      default:
        return;    
    }
    tempInfo['data'] = this.getCompDefaultConfig(type);
    return tempInfo;
  }

  //获取组件默认配置
  getCompDefaultConfig(type) {
    return this.infoService.getCompDefaultConfig(type);
  }

  //辅助组件处理 
  getAuxiliaryComponent(selectStyle?: any, eventType ?: string) {
    if(eventType === 'selectComp' && !this.testCreateComp.includes(this.auxiComp)) {
      this.auxiComp['style'] = selectStyle;
      this.testCreateComp.push(this.auxiComp)
    }else if(eventType === 'selectComp' && this.testCreateComp.includes(this.auxiComp)) {
      this.auxiCompInit()
      this.auxiComp['style'] = selectStyle;
      this.testCreateComp.push(this.auxiComp)
    }else if(eventType !== 'selectComp' && this.testCreateComp.includes(this.auxiComp)) {
      this.auxiCompInit(true);

    }
  }


  //辅助组件处理
  auxiCompInit( removeBool?:any ) {
    let auxiIndex = this.testCreateComp.indexOf(this.auxiComp);
    this.testCreateComp.splice(auxiIndex, 1);
    if(removeBool) {
      this.currentViewContRef.remove(auxiIndex);
    }
  }

}
