import { SettingStyle } from '../../../module/setting-style.module';
import { SettingDate } from '../../../module/setting-data.module';
import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { SettingObject } from 'src/app/module/setting-object.module';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();
  style: SettingStyle;
  data: SettingDate;
  ngStyle: any = {};
  constructor() {
  }

  ngOnInit() {
    this.initData()
  }

  initData() {
    this.style = this.settingObj['style']
    this.data =  this.settingObj['data']
  }
  
  expandUnit(param, other ?: string) {
    let paramVal = (!other ? this.style[param] : (this.style[param] + this.style[other] + 1)) || 1;    
    return paramVal + 'px'; 
  }
  
  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }

  inputVal(event) {
    let text = event.target && event.target.innerHTML && event.target.innerHTML.trim();
    this.data['value'] = text;
  }

  inputState(event) {
    this.settingObj['editeabled'] = true;
  }

}
