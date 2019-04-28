import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "src/app/component/basic/basic/basic.component";
import { SettingObjComponent } from "src/app/module/setting-object.component";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}
