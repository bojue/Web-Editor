import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "./node_modules/src/app/editor/components/comp-basic/basic/basic.component";
import { SettingObjComponent } from "./node_modules/src/app/editor/module/setting-object.component";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}
