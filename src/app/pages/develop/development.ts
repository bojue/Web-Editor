import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ElementRef, Input, ViewChild, Renderer, EventEmitter, OnChanges } from '@angular/core';
import { ComponentItem } from '../../module/component-item';
import { SettingObject } from '../../module/setting-object.module';
import { BasicInfoConfigService } from '../../providers/basic-info-config.service';
import { AppServiceService} from '../../providers/app-service.service';
import { ViewContainRefHostDirective } from './../../directive/view-contain-ref-host.directive';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { Router, Routes } from '@angular/router';
import * as _ from 'lodash';    
import { DynamicComponentServiceService } from 'src/app/code/provider/dynamic-component-service.service';
import { AuxiliaryComponent } from 'src/app/component/dev/tool/auxiliary/auxiliary.component';

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
    private service: AppServiceService,
    private infoService: BasicInfoConfigService,
    private dynamicService: DynamicComponentServiceService,
    private router: Router  
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
    .addEventListener('click', this.clickListernerHandle.bind(this))

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
    let compDefinInfo = this.dynamicService.createComponent(compType, this.infoService.getCompDefaultConfig(compType));
    let addCompJson = compDefinInfo && compDefinInfo['data'];
    this.getAuxiliaryComponent(null , 'addComponent');
    this.testCreateComp.push(addCompJson);
    this.initViewContRef()
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
    this.dynamicService.beforeSelectComp(this.activeCompSettingObject, this.activeCurrentComp);
    //2.初始化选中组件标识
    this.currentIndex = -1;

    //3.处理选中辅助组件
    this.getAuxiliaryComponent(null, 'parentListerner');
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
    this.getAuxiliaryComponent(null, 'deleteComponent');
    this.testCreateComp.splice(this.currentIndex, 1);
    this.initViewContRef();
    this.getCompList(this.testCreateComp)
  }

  //创建组件列表
  getCompList(jsonList: any[]) {
    this.components = this.dynamicService.getCompList(jsonList); //获取组件列表
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
      console.log(e)

    if(e && e.stopPropagation){
        e.stopPropagation();
        let eventType = e && e.type;
        let style = currentComponent.settingObj && currentComponent.settingObj['style'];
        let changeX = e.clientX - this.dragCompStartX;
        let changeY = e.clientY - this.dragCompStartY;
        if(eventType === 'dragstart') {
          this.dragCompStartX = e.clientX;
          this.dragCompStartY = e.clientY;
        }else if(eventType === 'dragend'){
          if(!this.dynamicService.getboundaryBool(changeX, changeY, style, 'l')) {
            style['left'] = style['left'] + changeX;
          }else{
            style['left'] = 0;
          } 
          
          if(!this.dynamicService.getboundaryBool(changeX, changeY, style, 't')) {
            style['top'] = style['top'] + style['height'] + changeY < 800 ?  style['top'] + changeY : 800 -  style['height'];
          }else {
            style['top'] = 0;
          }
        }
        this.dynamicService.beforeSelectComp(this.activeCompSettingObject, this.activeCurrentComp);
        this.selectComp(currentComponent.settingObj, compInstance, index, eventType, e)
      }
    })
  }

  //选择组件
  selectComp(settingObj, compInstance, currentIndex, eventType, event) {
    this.currentIndex = currentIndex;
    this.activeCurrentComp = [settingObj, compInstance];
    this.activeCompSettingObject = settingObj;
    settingObj['active'] = !settingObj['active'];
    this.testCreateComp[this.currentIndex] = settingObj;
    if(eventType === 'click') {
      this.getAuxiliaryComponent(this.activeCompSettingObject['style'], 'selectComponent');
    }else {
      return (<SettingObjComponent> compInstance).settingObj = settingObj;
    }

  }

  //辅助组件处理 
  getAuxiliaryComponent( selectStyle?: any, eventType ?: string) {
    /**
     * 1.parentListerner 监听父类容器 
     * 2.selectComponent 选择动态组件 
     * 3.addComponent 添加组件
     * 4.deleteComponent 删除组件
     */
    this.auxiCompInit() 

    if(eventType === 'selectComponent') {
      this.testCreateComp.push(this.auxiComp)
      let compFactory  = this.componentFactoryResolver.resolveComponentFactory(AuxiliaryComponent);
      let compRef = this.currentViewContRef.createComponent(compFactory);
      let compInstance = compRef.instance;
      (<SettingObjComponent> compInstance).settingObj = this.activeCompSettingObject;
    }
  }


  //辅助组件处理
  auxiCompInit() {
    //计算辅助组件下标
    let auxiIndex =  _.findIndex(this.testCreateComp, function(item) { return item['type'] == 'auxi'; });
    if(auxiIndex > -1) {
      this.testCreateComp.splice(auxiIndex, 1);
      this.currentViewContRef.remove(auxiIndex);
    }
  }

  //运行
  preView() {
    let auxiIndex =  _.findIndex(this.testCreateComp, function(item) { return item['type'] == 'auxi'; });
    let compList = auxiIndex > -1 ?  this.testCreateComp.slice(0, auxiIndex) : this.testCreateComp;
    this.router.navigate(['/preview', { queryParams: JSON.stringify(compList)}]);
  }

}
