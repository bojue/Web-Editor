import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../../components/comp-basic/comps/tool/area/node_modules/src/app/component/dev/basic/basic/basic.component';
import { SettingObjComponent } from '../../../components/comp-basic/comps/tool/auxiliary/node_modules/src/app/module/setting-object.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent extends BasicComponent implements OnInit, SettingObjComponent{
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