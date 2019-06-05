import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "../../../components/comp-basic/comps/tool/area/node_modules/src/app/component/dev/basic/basic/basic.component";
import { SettingObjComponent } from "../../../components/comp-basic/comps/tool/auxiliary/node_modules/src/app/module/setting-object.component";

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
