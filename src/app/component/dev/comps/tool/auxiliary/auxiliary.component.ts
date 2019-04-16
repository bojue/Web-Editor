import { Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasicComponent } from "src/app/component/basic/basic/basic.component";
import { SettingObjComponent } from "src/app/module/setting-object.component";
import * as _ from 'lodash';    

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.scss']
})
export class AuxiliaryComponent extends BasicComponent implements OnInit, OnDestroy, SettingObjComponent{
  startEvent: any;
  auxiBool = false;
  constructor() {
    super();
  }

  ngOnInit() {
    this.auxiBool = true;
    this.initData();
  }

  ngOnDestroy() {
    console.log(this.auxiBool)
    this.auxiBool = false;
  }

  compEvent(event, state?:string, eventEndBool?:boolean) {
    console.log(event, "state ---> ", state, this.startEvent)
    switch (state) {
      case 's':
        this.startEvent = _.cloneDeep(this.style);
        break;
      case 'l':
        this.style['left'] = event['clientX'];
        this.style['width'] = this.startEvent['width'] + (this.startEvent['left'] - event['clientX']);
        break;
      case 'r':
        this.style['width'] = event['clientX'] - this.startEvent['left'];
        break;
      case 't':
        this.style['top'] = event['clientY'];
        this.style['height'] = this.startEvent['height'] + (this.startEvent['top'] - event['clientY']);
        break;  
      case 'b':
        this.style['height'] = event['clientY'] - this.startEvent['top'];
        break;    
      default:
        break;    
    }

    if(eventEndBool) {
      this.startEvent = null;
    }
  }
  //辅助拉伸定位
  expandAuxiUnit(basicParam:string, basicHalfBool?:boolean, secondParam?:string, secondHalfBool?:boolean, otherNumber?: number) {
    let basicNum = (basicHalfBool && this.style[basicParam]) ? this.style[basicParam] / 2 : this.style[basicParam] || 0;
    let secondNum = (secondHalfBool && this.style[secondParam]) ? this.style[secondParam] / 2 : this.style[secondParam] || 0;
    let otherNum = otherNumber || 0;
    let paramVal = basicNum + secondNum + otherNum;
    return paramVal + 'px'; 
  }
}