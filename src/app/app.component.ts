import { ComponentItem } from './communal/component/code/component-item';
import { Component, OnInit, ElementRef, ComponentFactoryResolver, OnChanges, Input, ViewChild } from '@angular/core';
import { ImgComponent } from './communal/component/basic/img/img.component';
import { TextComponent } from './communal/component/basic/text/text.component';
import { AppServiceService} from './providers/app-service.service';
import { ViewContainRefHostDirective } from './communal/directive/view-contain-ref-host.directive'
import { SetttingObjComponent } from './communal/component/code/seting-component.component';

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

  currentCompIndex: number;
  @ViewChild(ViewContainRefHostDirective) viewContRef: ViewContainRefHostDirective;
  constructor(
    private elRef:ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: AppServiceService
  ) {
  
  }

  ngOnInit() {
    this.initData();
    this.activeSettingState();
  }


  initData() {
    this.componentModules = this.service.getComponentModeules();
    this.componentsHeaders = this.service.getComponentHeaders();
    this.basicCompIconList = this.service.getBasicCompIconList();
    this.testCreateComp = this.service.getTestCreateComp();
    this.createComponents(this.testCreateComp)
  }

  activeSettingState(state = 'default') {
    this.settingState = state;
  }

  dragCompStart(event, comp) {
    console.log("拖拽 。。。 ")
    console.log(this.components)
  }


  addComponent(compData) {
    this.testCreateComp.push(compData)
  }

  //创建组件列表
  createComponents(jsonList: any[]) {
     this.components = this.createComp(jsonList); //获取组件列表
     this.components.forEach((comp , k) => {
       this.renderComponent(comp)
     })    
  }

  //组件渲染
  renderComponent(currentComponent) {
    // this.currentIndex = (this.currentCompIndex + 1) % this.components.length;
    // let currentComponent = this.components[this.currentIndex];
    console.log(currentComponent)
    let compFactory  = this.componentFactoryResolver.resolveComponentFactory(currentComponent.component);
    let viewContRef = this.viewContRef.viewContainerRef;
    let componentRef = viewContRef.createComponent(compFactory);
    (<SetttingObjComponent> componentRef.instance).settingObj = currentComponent.settingObj;
  }
  
  //组件映射列表
  createComp(objList:any[]){
    console.log(objList)
    let compList = [];
    objList.forEach(item =>{
      let _type = item && item['type'];
      let compItem:any = _type ? this.createTemp(_type) : TextComponent; //组件映射
      let createComp = new ComponentItem(compItem, item['data']);
      compList.push(createComp)
    })
    return compList;
  }

  //组件映射
  createTemp(type) {
    let comp = type === 'text'? TextComponent : ImgComponent;
    return comp;
  }

}
;