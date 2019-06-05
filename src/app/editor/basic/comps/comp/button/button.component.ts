import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "./node_modules/src/app/component/dev/basic/basic/basic.component";
import { SettingObjComponent } from "./node_modules/src/app/module/setting-object.component";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
  
  inputState(event) {
    this.settingObj['editeabled'] = true;
  }

}
