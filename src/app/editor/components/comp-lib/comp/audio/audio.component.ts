import { Component, OnInit } from '@angular/core';
import { BasicComponent } from './node_modules/src/app/editor/components/comp-basic/basic/basic.component';
import { SettingObjComponent } from './node_modules/src/app/editor/module/setting-object.component';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
  

}