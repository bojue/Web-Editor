import { Component, OnInit } from "@angular/core";
import { SettingObjComponent } from "../../../../model/setting-object.interface";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  override ngOnInit() {
    this.initData();
  }
  
  override inputState(event: any) {
    this.settingObj['editeabled'] = true;
  }

}
