import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";
import { SettingObjComponent } from "src/app/editor/model/setting-object.model";

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
