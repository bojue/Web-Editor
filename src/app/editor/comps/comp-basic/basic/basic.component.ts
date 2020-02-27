import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { SettingObject } from 'src/app/editor/model/setting-object.module';
import { SettingStyle } from 'src/app/editor/model/setting-style.model';
import { SettingDate } from 'src/app/editor/model/setting-data.model';
import { EChartOption } from 'echarts';
import { ContentPageSize } from '../../../model/setting-content-page-size.model';
import * as _ from 'loadsh';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();
  INTERVAL_TIME = 20;
  style: SettingStyle;
  data: SettingDate;
  lastTime:any;
  contentPageSize:ContentPageSize;
  chartOption: EChartOption;
  ngStyle: any = {};
  showMoreBool: boolean;
  iconUrl: string;
  ignoreParams:any[];
  eventSubObj:any;
  constructor() {
  
  }
  
  ngOnInit() {
    this.initData()
  }

  initData() {
    this.style = this.settingObj['style'];
    this.data =  this.settingObj['data'];
    this.contentPageSize = this.settingObj['contentPageSize'];
    this.ignoreParams = ['paddingTopBottom', 'paddingLeftRight']
  }
  
  // 拖拽辅助线边框
  expandUnit(param, other ?: string) {
    if(!this.style) return;
    let paramVal = !other ? this.style[param] : (this.style[param] + this.style[other]);  //无边框计算方式
    paramVal = this.hasBorderWidth(paramVal, param, other);
    return paramVal + 'px'; 
  }

  

  //有边框辅助位置计算
  hasBorderWidth(paramVal, param, other ?: string) {
    let _other = 0;
    if(other === 'height'){
      let _bordWidth = this.style['borderWidth'] * 2 || 0;
      let _padd = this.style['paddingTopBottom'] * 2 > 0 ? this.style['paddingTopBottom'] * 2 || 0 : 0;
      _other = _bordWidth + _padd;
    }else if(other === 'width') {
      let _bordWidth = this.style['borderWidth'] * 2 || 0;
      let _padd = this.style['paddingLeftRight'] > 0 ? this.style['paddingLeftRight'] * 2 || 0 : 0;
      _other = _bordWidth + _padd;
    }
    paramVal = paramVal +  _other;
    return paramVal;
  }
  
  compEvent(event, status:string = 'def') {
    let newTime = new Date().getTime();
    if(!this.lastTime || newTime - this.lastTime > this.INTERVAL_TIME) {
      this.lastTime = newTime;
      this.emitDrapFun(event, status);
    }
  }

  emitDrapFun(event, status = 'def') {
    if(!(this.eventSubObj && this.eventSubObj['clientX'] === event['clientX'] && 
      this.eventSubObj['clientY'] === event['clentY'])) {
        event['dynamicData'] = this.settingObj;
        this.onChildComponentChange.emit(event);
      } 
      event.stopPropagation();
  }

  inputVal(event) {
    let text = event.target && event.target.innerHTML && event.target.innerHTML.trim();
    this.data['text_val'] = text;
  }

  inputState(event) {
    this.settingObj['editeabled'] = true;
  }
  
  getBorderRadius(val = 0) {
    return val + '%';
  }

  
  initParentData() {
    this.showMoreBool = true; 
    this.initIcon();
  }

  showMoreFun() {
    this.showMoreBool = !this.showMoreBool;
    this.initIcon();
  }

  initIcon() {
    this.iconUrl = this.showMoreBool ? 'assets/icons/up.svg' :  'assets/icons/down.svg' ;
  }
}
