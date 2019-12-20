import * as _ from 'lodash';    
import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ViewContainRefHostDirective } from 'src/app/editor/directive/view-contain-ref-host.directive';
import { SettingObject } from 'src/app/editor/model/setting-object.module';
import { SettingPage } from 'src/app/editor/model/setting-page.model';
import { CompConfigService } from 'src/app/editor/provider/comp-config.service';
import { CompDynamicCreateService } from 'src/app/editor/provider/comp-dynamic-create.service';
import { Router } from '@angular/router';
import { EmitSubService } from 'src/app/providers/emit-sub.service';
import { EventManager } from '@angular/platform-browser';
import { SettingObjComponent } from 'src/app/editor/model/setting-object.interface';
import { AuxiliaryComponent } from 'src/app/editor/comps/comp-lib/tool/auxiliary/auxiliary.component';
import { AreaComponent } from 'src/app/editor/comps/comp-lib/tool/area/area.component';
import { AppService } from 'src/app/providers/app.service';
import { UserAgentService } from 'src/app/core/tool/user-agent.service';
import { ContentPageSize } from '../model/setting-content-page-size.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-development',
  templateUrl: './development.html',
  styleUrls: ['./development.scss']
})
export class DevelopmentPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() componets: Component[];
  @ViewChild(ViewContainRefHostDirective, { static: true}) viewContRef: ViewContainRefHostDirective;

  componentModules: any[];
  basicComponents: any[];
  auxiComp: any = {};
  areaComp: any = {};
  cmpRef: any[];
  currentViewContRef: any; //当前组件实例

  currnetPageComps: any[]; //页面实例化前的组态列表，保存数据的json
  components: any[]; //页面实例化后的组态列表

  currentIndex = -1; //激活组件的下标
  activeCurrentComp: SettingObject; //当前组件的数据
  activeCompSettingObject: SettingObject; //当前组态设置对象


  copyComp: any; //拷贝组件
  copyNum:number; //单个组件拷贝次数

  dragCompStartX:any; //组件拖拽记录开始坐标X
  dragCompStartY:any; //组件拖拽记录开始坐标Y
  PAGE_SIZE:number;
  mouseState = {
    down: false,
    move:false,
    up: false
  }; //鼠标事件记录，用于选中组件
  compBodyDom:any;
  pageList: SettingPage[];// 页面管理 - 列表
  selectPageInfo: SettingPage; //页面管理-详情
  contentPageSize:ContentPageSize;
  pageGridSetting = {
    showLeft: true,
    showRight: true
  }
  eventEmitter:any;
  constructor(
    public emitSerice: EmitSubService, 
    private elementRef:ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: AppService,
    private infoService: CompConfigService,
    private dynamicService: CompDynamicCreateService,
    private router: Router ,
    private userAgentService: UserAgentService,
    private eventManager: EventManager
  ) {

  }

  ngOnInit() {
    this.initData();
    let parentCompList = _.cloneDeep(this.currnetPageComps);
    this.eventEmitter = this.emitSerice.getEmitEventSub().subscribe(res => {
      if(res && res['type'] === 'child-comp') {
        let data = res['data'];
        let currentList = _.concat(parentCompList, data)
        this.initViewContRef()
        this.getCompList(currentList);
      }
    });
    this.eventManager.addGlobalEventListener('window','keydown',($event) => {
      if(!this.activeCompSettingObject) {
        return;
      }
      let del_window = this.userAgentService.isWindows && $event && $event.code === 'Delete';
      let del_mac = this.userAgentService.isMac && $event && $event.code === 'Backspace' && $event.keyCode === 8 ;
 
      let activeEleBool = document.activeElement && document.activeElement['selectionStart'] !== undefined; //mac Delete删除组件焦点输入框的内容
      let _doc = document.activeElement as unknown as NodeListOf<HTMLElement>; //添加类型断言，TS类型检查导致的异常抛出
      if((del_window || del_mac && (!activeEleBool || activeEleBool && !_doc['value'])|| (del_mac && $event.ctrlKey && this.activeCompSettingObject)) || ( (del_window || del_mac) && $event.ctrlKey  )){
        this.delCompEvet($event);
      }else if($event.ctrlKey && this.currentIndex >= 0) {
        if($event.code === 'KeyC' || $event.code === 'KeyV'){
          this.copyCompEvet($event);
        }
      }else if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp'].indexOf($event.code) > -1 && this.activeCompSettingObject ){
        this.arrowEvent($event.code, $event);
      }
    });
  }

  ngOnDestroy() {
    this.eventEmitter.unsubscribe();
  }

  ngAfterViewInit() {
    this.compBodyDom = this.elementRef.nativeElement.querySelector('#componentsBody');
    this.compBodyDom.addEventListener('click', this.clickListernerHandle.bind(this));
    this.compBodyDom.addEventListener('mousedown', this.selectArea.bind(this ));
    this.compBodyDom.addEventListener('mousemove', this.selectArea.bind(this ));
    this.compBodyDom.addEventListener('mouseup', this.selectArea.bind(this)); 
    this.getPageSize();
  }

  getPageSize() {
    let contetDom = this.elementRef.nativeElement.querySelector('#componentsBody');
    this.contentPageSize['left'] = contetDom.offsetLeft;
    this.contentPageSize['top'] = contetDom.offsetTop;
  }

  initData() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.currnetPageComps = null;
    this.auxiComp = this.infoService.getAuxiComp();
    this.areaComp = this.infoService.getAreaComp();
    this.contentPageSize = {
      top:0,
      left:0,
      rigth:0,
      bottom:0
    }
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
    this.initCompsState();
    if(compType && event){
      this.initCopyState();
      this.getAuxiliaryComponent(null , 'addComponent');
      if(addCompJson && addCompJson['style']) {
        let _top = event['y']  - this.contentPageSize.top || addCompJson['style']['top'];
        let _left = event['x']  - this.contentPageSize.left||  addCompJson['style']['left'];
        addCompJson['style']['top'] = _top >= 0 ? _top : 0;
        addCompJson['style']['left'] = _left >= 0 ? _left : 0;
        addCompJson['contentPageSize'] = this.contentPageSize;
        addCompJson['active'] = true;
      } 
    }  
    this.currnetPageComps.push(addCompJson);
    this.currentIndex = this.currnetPageComps.length-1 ;
    let currentComp = this.dynamicService.getComp(addCompJson);
    this.activeCompSettingObject = addCompJson;
    this.components.push(currentComp);
    this.renderComponent(this.currentIndex);
  }

  initCompsState() {
    this.currentIndex = -1;
    this.activeCurrentComp = null;
    this.activeCompSettingObject = null;
    _.map(this.currnetPageComps, (item,k) => {
      item['active'] = false;
    });
  }
  
  //修改组件
  chengeComponent(event) {
    let settingObj = event;
    let compInstance  = this.components[this.currentIndex];
    return (<SettingObjComponent> compInstance).settingObj = settingObj;    
  }

  //父类容器监听事件
  clickListernerHandle(e) {
    if(!this.currnetPageComps) return;
    this.initCompsState();
    this.getPageSize();
    //1.更新文本编辑状态
    let currentComp = this.currnetPageComps[this.currentIndex];
    if(currentComp && currentComp['type'] === 'text') {
      currentComp['editeabled'] = false;
    }

    //2.处理选中辅助组件
    this.getAuxiliaryComponent(null, 'parentListerner');
  }

  // 初始化视图容器,这样写是为了操作安全,扩展多人同时编辑,多页面操作切换
  initViewContRef(){
    if(!this.components) return;
    let len = this.components.length;
    for(let i=0; i < len;i++){
      this.currentViewContRef.clear(i)
    }
  }

  //删除组件 
  deleteComponent(event) {
    let _delComp =  this.currentIndex;
    this.getAuxiliaryComponent(null, 'deleteComponent');
    if(_delComp > -1) {
      this.initViewContRef();
      this.currnetPageComps.splice(_delComp, 1);
      this.getCompList(this.currnetPageComps);
    }
    this.initCompsState();
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
    let currentComponent = this.components[currentIndex];
    let compFactory  = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
    let compRef = this.currentViewContRef.createComponent(compFactory);
    let compInstance = compRef.instance;
    let changeX = 0;
    let changeY = 0;
    (<SettingObjComponent> compInstance).settingObj = currentComponent.settingObj;
    (compInstance).onChildComponentChange.subscribe((e)=> {
    if(e && e.stopPropagation){
        e.stopPropagation();
        let eventType = e && e.type;
        let style = currentComponent.settingObj && currentComponent.settingObj['style'];
        if(eventType === 'dragstart') {
          this.dragCompStartX = e.clientX;
          this.dragCompStartY = e.clientY;
          changeX = this.dragCompStartX -  style['left'];
          changeY = this.dragCompStartY - style['top'];
        }else if(eventType === 'drag') {
          if(e.clientY  === 0 && e.clientY === 0) return;
          style['left'] = (e.clientX - changeX) >= 0 ? (e.clientX - changeX): 0;
          style['top'] = (e.clientY - changeY) >= 0 ? (e.clientY - changeY ): 0;
        } if(eventType === 'dragend'){
          style['left'] = style['left'] >= 0 ? style['left'] : 0;
          style['top'] = style['top'] >= 0 ? style['top'] : 0;
        }
        this.selectComp(currentComponent.settingObj, eventType)
        this.initCopyState();
      }
    })
  }

  //选择组件
  selectComp(settingObj, eventType) {
    this.activeCompSettingObject = settingObj;
    this.getActiveComponent(settingObj);
    if(eventType === 'click') {
      this.getAuxiliaryComponent(settingObj['style'], 'selectComponent');
    }
  }

  //选择组件，获取激活状态组件
  getActiveComponent(settingObj) {
    this.initCompsState();
    _.map(this.currnetPageComps, (comp, k) => {
      if(comp === settingObj) {
        this.currentIndex = k;
        comp['active'] = true;
        this.activeCompSettingObject = settingObj;
        this.activeCurrentComp = comp;
      }
    });

  }

  //选择当前页面组件列表
  getCurrentPage(page) {
    this.initViewContRef();
    let comps = page && page['componentList'] || [];
    this.currnetPageComps = comps;
    this.initPageCompState();
    this.getCompList(comps);
    this.activeCompSettingObject = null;
    this.getAuxiliaryComponent(null, 'deleteComponent');
  }

  //通过元素列表选择组态
  activeComp(comp) {
    this.initPageCompState();
    this.clickListernerHandle(null);
    comp['active'] = true;
    this.activeCompSettingObject = comp;
    _.map(this.currnetPageComps, (item, k) => {
      if(item['active']) {
        this.currentIndex = k;
      }
    })
    this.getAuxiliaryComponent(this.activeCompSettingObject['style'], 'selectComponent');
  }

  initPageCompState() {
    _.map(this.currnetPageComps, item => {
      if(['area', 'auxi'].indexOf(item['type']) === -1) {
        item['active'] = false;
      }
    })
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
      this.auxiComp = this.infoService.getAuxiComp();
      this.auxiComp['style'] = selectStyle;
      this.auxiComp['contentPageSize'] = this.contentPageSize;
      this.currnetPageComps.push(this.auxiComp)
      let compFactory  = this.componentFactoryResolver.resolveComponentFactory(AuxiliaryComponent);
      let compRef = this.currentViewContRef.createComponent(compFactory);
      let compInstance = compRef.instance;
      (<SettingObjComponent> compInstance).settingObj = this.auxiComp;
    }
  }


  //辅助组件处理
  auxiCompInit() {
    //计算辅助组件下标
    let auxiIndex =  _.findIndex(this.currnetPageComps, function(item) { return item['type'] == 'auxi'; });
    if(auxiIndex > -1) {
      this.components.splice(auxiIndex,1)
      this.currnetPageComps.splice(auxiIndex, 1);
      this.currentViewContRef.remove(auxiIndex);
    }
  }

  //运行
  preView() {
    this.auxiCompInit();
    this.router.navigate(['/preview', { queryParams: JSON.stringify(this.currnetPageComps)}]);
  }

  //键盘事件-删除
  delCompEvet(event):void {
    this.deleteComponent(event);
  }

  //键盘事件-拷贝
  copyCompEvet(event):void {
    if(event['key'] === 'c') {
      this.initCopyState();
      let currComp = this.currnetPageComps[this.currentIndex];
      this.copyComp = _.cloneDeep(currComp);
      this.copyComp['active'] = false;
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

  arrowEvent(direction, event) {
    let styleObj = this.activeCompSettingObject && this.activeCompSettingObject['style'];
    switch(direction) {
      case 'ArrowLeft':
        styleObj['left'] = styleObj['left'] > 0 ? styleObj['left'] - 1 : 0;
        this.stopWindowScroll(event);
        break;
      case 'ArrowRight':
        styleObj['left'] = styleObj['left'] + 1;
        this.stopWindowScroll(event);
        break;
      case 'ArrowDown':
        if(!$('input:focus')['length']) {
          styleObj['top'] = styleObj['top'] >= 0 ? styleObj['top']+ 1 :0;   
          this.stopWindowScroll(event);
        } else if($('input:focus') && $('input:focus')['length'] > 0 && $('input:focus')[0]['id'] === 'setTopVal') {  
          styleObj['top'] = styleObj['top'] >= 0 ? styleObj['top'] - 1 : 0;  
        }
  
        break;  
      case 'ArrowUp':
        if(!$('input:focus')['length']) {
          styleObj['top'] = styleObj['top'] >= 1 ? styleObj['top'] - 1 :0;   
          this.stopWindowScroll(event);
        } else if($('input:focus') && $('input:focus')['length'] > 0 && $('input:focus')[0]['id'] === 'setTopVal') {  
          styleObj['top'] = styleObj['top'] >= 1 ? styleObj['top'] + 1 : 0;  
        }
        break;    
    }
  }

  //阻止页面滚蛋  
  stopWindowScroll(event) {
    event.preventDefault();  
  }
  //初始化当前激活组态数据
  initCopyState() {
    this.copyComp = null;
    this.copyNum = null;
  }

  selectArea(event) {
    let state = event && event['type'];
    let _left = this.areaComp['style']['left'];
    let _top = this.areaComp['style']['top'];
    switch (state) {
      case 'mousedown':
        this.mouseState['down'] = true;
        this.mouseState['up'] = false;
        this.mouseState['move'] = false;
        if(this.areaComp && this.areaComp['style']) {
          this.areaComp['style']['left'] = event.x - this.contentPageSize.left;
          this.areaComp['style']['top'] = event.y - this.contentPageSize.top;
        }
        break;
      case 'mousemove':
      if(this.mouseState['down'] && !this.mouseState['move'] && event.ctrlKey) {
        this.mouseState['move'] = true;
        this.mouseState['up'] = false;
        this.areaCompInit('add');
      }else if(this.mouseState['down']) {
        let _w = event.x - _left - this.contentPageSize.left;
        let _h =  event.y - _top - this.contentPageSize.top;
        if(_w > 1) {
          this.areaComp['style']['right'] = null;
          this.areaComp['style']['width'] = _w;
        } else {
          this.areaComp['style']['right'] = this.areaComp['style']['right'] || _left;
          this.areaComp['style']['left'] = event.x - this.contentPageSize.left;
          this.areaComp['style']['width'] = this.areaComp['style']['right'] - _left;
        }

        if(_h > 1) {
          this.areaComp['style']['bottom'] = null;
          this.areaComp['style']['height'] = _h;
        } else {
          this.areaComp['style']['bottom'] = this.areaComp['style']['bottom'] || _top;
          this.areaComp['style']['top'] = event.y - this.contentPageSize.top;
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
    let areaIndex = _.findIndex(this.currnetPageComps, function(item) { return item['type'] == 'area'; });
    if(areaIndex === -1 && state === 'add') {
      this.areaComp = this.infoService.getAreaComp();
      this.currnetPageComps.push(this.areaComp)
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
    let areaIndex = _.findIndex(this.currnetPageComps, function(item) { return item['type'] == 'area'; });
    if(areaIndex > -1) {
      this.currnetPageComps.splice(areaIndex, 1);
      this.currentViewContRef.remove(areaIndex);
      this.initViewContRef();
      this.getCompList(this.currnetPageComps)
    }
  }


}
