import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { SettingStyle } from 'src/app/module/setting-style.module';
import { SettingDate } from 'src/app/module/setting-data.module';
import { SettingObject } from 'src/app/module/setting-object.module';
import { EChartOption } from 'echarts';

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
  chartOption: EChartOption;
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
  
  // 拖拽辅助线边框位置 -1px，因为辅助线宽度1px
  expandUnit(param, other ?: string) {
    let paramVal = (!other ? this.style[param] : (this.style[param] + this.style[other] - 1)) || 1;  //无边框计算方式
    paramVal = this.hasBorderWidth(paramVal, param, other);
    return paramVal + 'px'; 
  }

  //有边框辅助位置计算
  hasBorderWidth(paramVal, param, other ?: string) {
    if((param === 'top' && other === 'height' || param === 'left' && other === 'width' && this.style['borderWidth']) && this.style['borderWidth'] && this.style['borderStyle']) {
      paramVal += this.style['borderWidth'] * 2;
    }
    return paramVal;
  }
  
  compEvent(event) {
    event['dynamicData'] = this.settingObj;
    this.onChildComponentChange.emit(event);
  }

  inputVal(event) {
    let text = event.target && event.target.innerHTML && event.target.innerHTML.trim();
    this.data['text_val'] = text;
  }

  inputState(event) {
    this.settingObj['editeabled'] = true;
  }
  

}