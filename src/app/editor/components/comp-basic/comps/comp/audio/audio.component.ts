import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/component/dev/basic/basic/basic.component';
import { SettingObjComponent } from 'src/app/module/setting-object.component';

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