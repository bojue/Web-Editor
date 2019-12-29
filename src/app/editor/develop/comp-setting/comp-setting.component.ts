import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SettingObject } from "src/app/editor/model/setting-object.module";
import * as _ from "loadsh";
import { SettingStyle } from "src/app/editor/model/setting-style.model";

@Component({
  selector: 'app-comp-setting',
  templateUrl: './comp-setting.component.html',
  styleUrls: ['./comp-setting.component.scss']
})
export class CompSettingComponent implements OnInit{
  @Input() activeSettingObj: SettingObject;
  @Input() pageGridSetting;
  @Input() hasPageBool;
  @Output() settingObjChange = new EventEmitter<any>();
  @Output() deleteComponent = new EventEmitter<any>();
  @Output() preViewComp = new EventEmitter<any>();
  @Output() changeBackground = new EventEmitter<any>();

  styles: SettingStyle;
  showBool:boolean = true;
  states = [
    {
      state:'style',
      name:"样式",
      active:true
    },
    {
      state:"data",
      name:'数据',
      active:false
    },{
      state:"event",
      name:"事件",
      active:false
    }
  ];
  stateObj:string;

  constructor() { 
    this.initData()
  }

  ngOnInit() {
  
  }

  initData() {
    this.stateObj = 'style';
    this.styles = this.activeSettingObj && this.activeSettingObj['style'];
  }

  deleteComp(event){
    this.deleteComponent.emit(event)
  }

  paramsChange(key: string) {
    this.settingObjChange.emit(this.activeSettingObj)
  }

  showGrigFun() {
    this.pageGridSetting['showRight'] = !this.pageGridSetting['showRight'];
  }

  preView(event) {
    this.preViewComp.emit(event);
  }

  changeBg(event) {
    this.changeBackground.emit(event);
  }

  activeState(tab) {
    if(!tab || tab && tab['active']) return ;
    _.map(this.states, item => {
      item['active'] = false;
    });
    tab['active'] = true;
    this.stateObj = tab['state'];
  }

}
