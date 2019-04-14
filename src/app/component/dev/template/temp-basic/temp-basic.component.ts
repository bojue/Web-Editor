import { SettingDate } from '../../../../module/setting-data.module';
import { SettingStyle } from '../../../../module/setting-style.module';
import { SettingObject } from '../../../../module/setting-object.module';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-temp-basic',
  templateUrl: './temp-basic.component.html',
  styleUrls: ['./temp-basic.component.scss']
})
export class TempBasicComponent implements OnInit {

  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();

  style: SettingStyle;
  data: SettingDate;
  constructor() { }

  ngOnInit() {
    this.initBasicData()
  }

  initBasicData() {
    this.style = this.settingObj['style']
    this.data =  this.settingObj['data']
  }

  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }
  expandUnit(param, other ?: string) {
    let paramVal = (!other ? this.style[param] : (this.style[param] + this.style[other] + 1)) || 1;    
    return paramVal + 'px'; 
  }


}
