
import { Component, OnInit , ElementRef, ViewChild, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { ImgComponent } from './../app/communal/component/basic/img/img.component';
import { TextComponent } from './../app/communal/component/basic/text/text.component';
import { AppServiceService} from './providers/app-service.service';
import { forEach } from '../../node_modules/@angular/router/src/utils/collection';

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

  dragCompStart(event) {
    this.addComponent();
  }

  dragCompOver(event) {
    event.preventDefault();
    // event.stopPropagation();
  }

  dragCompEnd(event) {
    // this.addComponent()
  }

  addComponent(item ?: null) {
    let crateComp = item ? this.createTemp(item) : TextComponent;
    let comp = this.cfr.resolveComponentFactory(crateComp);
    this.compBody.createComponent(comp);

  }

  createTemp(item) {
    let comp = item['type'] === 'text'? TextComponent : ImgComponent;
    console.log(item , comp, item['type'])
    return comp;
  }

}
