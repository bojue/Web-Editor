import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";
import { SettingObjComponent } from "src/app/editor/model/setting-object.interface";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  override ngOnInit() {
    this.initData();
  }
}
