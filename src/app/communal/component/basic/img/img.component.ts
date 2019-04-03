import { SettingStyle } from './../../../module/setting-style.module';
import { SettingDate } from './../../../module/setting-data.module';
import { SettingObjComponent } from '../../../code/setting-object.component';
import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { SettingObject } from '../../../module/setting-object.module';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit, SettingObjComponent{
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();
  style: SettingStyle;
  data: SettingDate;
  constructor() {

  }

  ngOnInit() {
    this.style = this.settingObj['style']
    this.data =  this.settingObj['data']
  }

  expandUnit(param) {
    let paramVal = this.style[param] || 1;    
    return paramVal + 'px'; 
  }
  
  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }


}
