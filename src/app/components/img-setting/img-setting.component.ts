import { SettingObject } from './../../../../.history/src/app/communal/modules/setting-object_20190327170043';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-setting',
  templateUrl: './img-setting.component.html',
  styleUrls: ['./img-setting.component.scss']
})
export class ImgSettingComponent implements OnInit {
  
  settingObj: SettingObject = {
    height: 400,
    width: 200
  }

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.settingObj)
  }

}
