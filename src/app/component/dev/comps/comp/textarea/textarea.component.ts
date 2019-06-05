import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "./node_modules/src/app/component/basic/basic/basic.component";
import { SettingObjComponent } from "./node_modules/src/app/module/setting-object.component";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}
