
import { Component, OnInit , ElementRef, ViewChild, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { ImgComponent } from './../app/communal/component/basic/img/img.component';
import { TextComponent } from './../app/communal/component/basic/text/text.component';
import { AppServiceService} from './providers/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  @ViewChild('compBody', {read: ViewContainerRef}) compBody: ViewContainerRef; 
  settingState: string; // default or  customer
  componentsHeaders: any[];
  componentModules: any[];
  basicComponents: any[];
  testCreateComp: any[];

  constructor(
    private elRef:ElementRef,
    private cfr: ComponentFactoryResolver,
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
    this.basicComponents = this.service.getBasicComponent();
    this.testCreateComp = this.service.getTestCreateComp();
    this.testCreateComp.forEach( (item) =>{
      this.addComponent(item)
    })
  }

  
  activeSettingState(state = 'default') {
    this.settingState = state;
  }

  dragCompStart(event, comp) {
    this.addComponent(comp);
    console.log(event, comp)
  }

  dragCompOver(event) {
    event.preventDefault();
  }

  dragCompEnd(event) {

  }

  addComponent(item ?: {}, type?: null) {
    let _type = item && item['type'] || type ;
    console.log(_type, type)
    let crateComp:any = _type ? this.createTemp(_type) : TextComponent;
    let comp = this.cfr.resolveComponentFactory(crateComp);
    this.compBody.createComponent(comp);
  }

  createTemp(type) {
    let comp = type === 'text'? TextComponent : ImgComponent;
    console.log("type --> ", type , comp)
    return comp;
  }

}
