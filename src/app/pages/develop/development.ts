
import * as _ from 'lodash';    
import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ViewContainRefHostDirective } from 'src/app/directive/view-contain-ref-host.directive';
import { SettingObject } from 'src/app/module/setting-object.module';
import { SettingPage } from 'src/app/module/setting-page.module';
import { AppServiceService } from 'src/app/providers/app-service.service';
import { BasicInfoConfigService } from 'src/app/providers/basic-info-config.service';
import { DynamicComponentServiceService } from 'src/app/code/provider/dynamic-component-service.service';
import { Router } from '@angular/router';
import { CompEmitService } from 'src/app/providers/comp-emit.service';
import { EventManager } from '@angular/platform-browser';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { AuxiliaryComponent } from 'src/app/component/dev/comps/tool/auxiliary/auxiliary.component';
import { AreaComponent } from 'src/app/component/dev/comps/tool/area/area.component';

@Component({
  selector: 'app-development',
  templateUrl: './development.html',
  styleUrls: ['./development.scss']
})
export class DevelopmentPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() componets: Component[];
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  currentIndex = -1;
  componentModules: any[];
  basicComponents: any[];
  testCreateComp: any[];
  auxiComp: any = {};
  areaComp: any = {};
  components: any[];
  cmpRef: any[];
  currentViewContRef: any; //当前组件实例
  activeCurrentComp: [SettingObject, any ];//当前组件的数据
  activeCompSettingObject: SettingObject; //当前组件的设置对象
  copyComp: any; //拷贝组件
  copyNum:number; //单个组件拷贝次数
  dragCompStartX:any; //组件拖拽记录开始坐标X
  dragCompStartY:any; //组件拖拽记录开始坐标Y
  mouseState = {
    down: false,
    move:false,
    up: false
  }; //鼠标事件记录，用于选中组件
  pageList: SettingPage[];// 页面管理 - 列表
  selectPageInfo: SettingPage; //页面管理-详情
  contentLeft:number;

  eventEmitter:any;
  constructor(
    private elementRef:ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: AppServiceService,
    private infoService: BasicInfoConfigService,
    private dynamicService: DynamicComponentServiceService,
    private router: Router ,
    private emitSerive: CompEmitService, 
    private eventManager: EventManager
  ) {
      this.pageList = this.service.getPages();
  }

  ngOnInit() {
    this.initData();
    let parentCompList = _.cloneDeep(this.testCreateComp);
    this.eventEmitter = this.emitSerive.getEmitEvent().subscribe(res => {
      if(res && res['type'] === 'child-comp') {
        let data = res['data'];
        let currentList = _.concat(parentCompList, data)
        this.initViewContRef()
        this.getCompList(currentList);
      }
    });
    this.eventManager.addGlobalEventListener('window','keydown',($event) => {
      let del_window = this.isWindows && $event && $event.code === 'Delete';
      let del_mac = this.isMac && $event && $event.code === 'Backspace' && $event.keyCode === 8;
      if(del_window || del_mac) {
        this.delCompEvet($event);
      }else if($event.ctrlKey && this.currentIndex >= 0) {
        if($event.code === 'KeyC' || $event.code === 'KeyV'){
          this.copyCompEvet($event);
        }
      }else if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp'].indexOf($event.code) > -1 && this.activeCompSettingObject ){
        this.arrowEvent($event.code);
      }
    });
  }

  ngOnDestroy() {
    this.eventEmitter.unsubscribe();
  }

  ngAfterViewInit() {
    let compBodyDom = this.elementRef.nativeElement.querySelector('#componentsBody')
    compBodyDom.addEventListener('click', this.clickListernerHandle.bind(this));
    compBodyDom.addEventListener('mousedown', this.selectArea.bind(this ));
    compBodyDom.addEventListener('mousemove', this.selectArea.bind(this ));
    compBodyDom.addEventListener('mouseup', this.selectArea.bind(this)); 
  }

  getContentLeft() {
    let compBodyDom = this.elementRef.nativeElement.querySelector('#componentsBody')
    this.contentLeft = compBodyDom.offsetLeft;
  }

  initData() {
    this.getContentLeft();
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.testCreateComp = this.service.getTestCreateComp(); //获取json数据(组件数据)
    this.getCompList(this.testCreateComp); //json数据生成组件集合
    this.auxiComp = this.service.getAuxiComp();
    this.areaComp = this.service.getAreaComp();
  }

  //拖拽icon图标添加组件
  dragCompEnd(event) {
    let compType = event && event['compType'] || 'text'; //容错处理，默认创建text组件
    this.addComponent(compType, event);
  }

  //增加组件
  addComponent(compType ?:any, event ?:any, addComp?: any) {
    let compDefinInfo = this.dynamicService.createComponent(compType, this.infoService.getCompDefaultConfig(compType));
    let addCompJson = addComp || compDefinInfo && compDefinInfo['data'];
    if(compType && event){
      this.initCopyState();
      this.getAuxiliaryComponent(null , 'addComponent');
      if(addCompJson && addCompJson['style']) {
        const _PAGE_SIZE_LEFT = this.contentLeft || 200;
        const _PAGE_SIZE_TOP = 100;
        let _top = event['y']  - _PAGE_SIZE_TOP || addCompJson['style']['top'];
        let _left = event['x']  - _PAGE_SIZE_LEFT ||  addCompJson['style']['left'];
        addCompJson['style']['top'] = _top >= 0 ? _top : 0;
        addCompJson['style']['left'] = _left >= 0 ? _left : 0;
      }
    }  

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
    this.getContentLeft();
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
    let _delComp =  this.currentIndex;
    this.getAuxiliaryComponent(null, 'deleteComponent');
    this.currentIndex = -1;
    this.testCreateComp.splice(_delComp, 1);
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
    if(e && e.stopPropagation){
        e.stopPropagation();
        let eventType = e && e.type;
        console.log(eventType)
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
        this.selectComp(currentComponent.settingObj, compInstance, index, eventType, e);
        this.initCopyState();
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
    this.auxiCompInit();
    this.router.navigate(['/preview', { queryParams: JSON.stringify(this.testCreateComp)}]);
  }

  //键盘事件-删除
  delCompEvet(event):void {
    this.deleteComponent(event);
  }

  //键盘事件-拷贝
  copyCompEvet(event):void {
    if(event['key'] === 'c') {
      this.initCopyState();
      let currComp = this.testCreateComp[this.currentIndex];
      this.copyComp = _.cloneDeep(currComp);
      this.getAuxiliaryComponent(null , 'addComponent');
    } else if(event['key'] === 'v' && this.copyComp) {
      ++this.copyNum;
      let _copyComp = _.cloneDeep( this.copyComp );
      let _top = _copyComp && _copyComp['style'] &&  _copyComp['style']['top'];
      let _height = _copyComp && _copyComp['style'] &&  _copyComp['style']['height'];
      _copyComp['style']['top'] = _top + _height * this.copyNum;
      this.addComponent(null, null, _copyComp)
    }
  }

  arrowEvent(direction) {
    let styleObj = this.activeCompSettingObject && this.activeCompSettingObject['style'];
    switch(direction) {
      case 'ArrowLeft':
        styleObj['left'] = styleObj['left'] > 0 ? styleObj['left'] - 1 : 0;
        break;
      case 'ArrowRight':
        styleObj['left'] = styleObj['left'] + 1;
        break;
      case 'ArrowDown':
        styleObj['top'] = styleObj['top'] + 1;  
        break;  
      case 'ArrowUp':
        styleObj['top'] = styleObj['top'] > 0 ? styleObj['top'] - 1 : 0;
        break;    
    }

  }

  initCopyState() {
    this.copyComp = null;
    this.copyNum = null;
  }

  selectArea(event) {
    const PAGE_SIZE = 80;
    let state = event && event['type'];
    let _left = this.areaComp['style']['left'];
    let _top = this.areaComp['style']['top'];
    switch (state) {
      case 'mousedown':
      this.mouseState['down'] = true;
      this.mouseState['up'] = false;
      this.mouseState['move'] = false;
      if(this.areaComp && this.areaComp['style']) {
        this.areaComp['style']['left'] = event.x - PAGE_SIZE;
        this.areaComp['style']['top'] = event.y - PAGE_SIZE;
      }
      break;
      case 'mousemove':
      if(this.mouseState['down'] && !this.mouseState['move'] && event.ctrlKey) {
        this.mouseState['move'] = true;
        this.mouseState['up'] = false;
        this.areaCompInit('add');
      }else if(this.mouseState['down']) {
        let _w = event.x - _left - PAGE_SIZE;
        let _h =  event.y - _top - PAGE_SIZE;

        if(_w > 1) {
          this.areaComp['style']['right'] = null;
          this.areaComp['style']['width'] = _w;
        } else {
          this.areaComp['style']['right'] = this.areaComp['style']['right'] || _left;
          this.areaComp['style']['left'] = event.x - PAGE_SIZE;
          this.areaComp['style']['width'] = this.areaComp['style']['right'] - _left;
        }

        if(_h > 1) {
          this.areaComp['style']['bottom'] = null;
          this.areaComp['style']['height'] = _h;
        } else {
          this.areaComp['style']['bottom'] = this.areaComp['style']['bottom'] || _top;
          this.areaComp['style']['top'] = event.y - PAGE_SIZE;
          this.areaComp['style']['height'] = this.areaComp['style']['bottom'] - _top;
        }

      }
      break;
      case 'mouseup':
      this.mouseState['down'] = false;
      this.mouseState['up'] = true;
      this.mouseState['move'] = false;
      this.areaCompInit();
      break;
    }
  }

  areaCompInit(state ?:string ):void {
    let areaIndex = _.findIndex(this.testCreateComp, function(item) { return item['type'] == 'area'; });
    if(areaIndex === -1 && state === 'add') {
      this.areaComp = this.service.getAreaComp();
      this.testCreateComp.push(this.areaComp)
      let compFactory  = this.componentFactoryResolver.resolveComponentFactory(AreaComponent);
      let compRef = this.currentViewContRef.createComponent(compFactory);
      let compInstance = compRef.instance;
      (<SettingObjComponent> compInstance).settingObj = this.areaComp;
    } else if(areaIndex > -1){
      this.delAreaComp();
    }
  }

  //删除区域选中辅助组件
  delAreaComp(){
    let areaIndex = _.findIndex(this.testCreateComp, function(item) { return item['type'] == 'area'; });
    if(areaIndex > -1) {
      this.testCreateComp.splice(areaIndex, 1);
      this.currentViewContRef.remove(areaIndex);
      this.initViewContRef();
      this.getCompList(this.testCreateComp)
    }
  }

  isMac = function() { 
    return /macintosh|mac os x/i.test(navigator.userAgent); 
  }();

  isWindows = function() { 
    return /windows|win32/i.test(navigator.userAgent);
  }(); 
}
