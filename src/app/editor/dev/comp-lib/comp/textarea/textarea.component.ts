import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "./node_modules/src/app/editor/dev/comp-basic/basic/basic.component";
import { SettingObjComponent } from "./node_modules/src/app/editor/module/setting-object.component";

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
