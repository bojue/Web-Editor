import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SettingObject } from "src/app/editor/module/setting-object.module";

import { SettingStyle } from "src/app/editor/module/setting-style.module";

@Component({
  selector: 'app-comp-setting',
  templateUrl: './comp-setting.component.html',
  styleUrls: ['./comp-setting.component.scss']
})
export class CompSettingComponent implements OnInit{
  @Input() activeSettingObj: SettingObject;
  @Input() pageGridSetting;
  @Output() settingObjChange = new EventEmitter<any>();
  @Output() deleteComponent = new EventEmitter<any>();
  styles: SettingStyle;
  showObj = {	
    style:true,	
    event:true,	
    value:true	
  }

  constructor() { 
    this.initData()
  }

  ngOnInit() {

  }

  initData() {
   this.styles = this.activeSettingObj && this.activeSettingObj['style'];
  }

  deleteComp(event){
    this.deleteComponent.emit(event)
  }

  paramsChange(key: string) {
    this.settingObjChange.emit(this.activeSettingObj)
  }

  changeShowBool() {
    this.pageGridSetting['showRight'] = !this.pageGridSetting['showRight'];
  }
}
