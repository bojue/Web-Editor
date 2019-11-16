import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';    
import { BasicComponent } from '../../../comp-basic/basic/basic.component';
import { SettingObjComponent } from 'src/app/editor/model/setting-object.interface';

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.scss']
})
export class AuxiliaryComponent extends BasicComponent implements OnInit, OnDestroy, SettingObjComponent{
  startEvent: any;
  constructor() {
    super();
  }

  ngOnInit() {

    this.initData();
  }

  ngOnDestroy() {

  }

  compEvent(event, state?:string, eventEndBool?:boolean) {
    this.setSettingParam(event, state, eventEndBool);
    if(eventEndBool) {
      this.startEvent = null;
    }
    event.stopPropagation();
  }

  setSettingParam(event, state?:string, eventEndBool?:boolean) {
    let _clientX = 0;
    let _clientY = 0;
    if(event) {
      _clientX = event['clientX'] - this.contentPageSize['left'];
      _clientY = event['clientY'] - this.contentPageSize['top'];
    }
    switch (state) {
      case 's':
        this.startEvent = _.cloneDeep(this.style);
        break;
      case 'l':
        this.style['left'] = _clientX;
        let _w =  this.startEvent['width'] + (this.startEvent['left'] - _clientX);
        this.style['width'] = _w > 20 ? _w : 20;
        break;
      case 'r':
        let _width = _clientX - this.startEvent['left'];
        _width = _width > 20 ? _width : 20;
        this.style['width'] = _width - 2* this.style['paddingTopBottom'];
        break;
      case 't':
        let _h =  this.startEvent['height'] + (this.startEvent['top'] - _clientY);
        this.style['top'] = _clientY ;
        this.style['height'] = _h > 20 ? _h : 20;
        break;  
      case 'b':
        let _height = _clientY - this.startEvent['top'];
        _height = _height > 20 ? _height : 20;
        this.style['height'] = _height - 2* this.style['paddingTopBottom'];
        break;    
      default:
        break;    
    }
  }

  //辅助拉伸定位
  expandAuxiUnit(basicParam:string, direction: string, basicHalfBool?:boolean, secondParam?:string, secondHalfBool?:boolean, otherNumber?: number) {
    let basicNum = (basicHalfBool && this.style[basicParam]) ? this.style[basicParam] / 2 : this.style[basicParam] || 0;
    let secondNum = (secondHalfBool && this.style[secondParam]) ? this.style[secondParam] / 2 : this.style[secondParam] || 0;
    let otherNum = otherNumber || 0;
    let borerNum = this.style['borderWidth'] ? this.getBorerNumber(direction) : 0;
    let paramVal = basicNum + secondNum + otherNum + borerNum;
    paramVal = this.hasStretchBorderWidth(paramVal, direction)
    return paramVal + 'px'; 
  }

  getBorerNumber(direction ?:string){
    let border = this.style['borderWidth'];
    let borerNum = 0;
    if(['r_l', 'b_t'].indexOf(direction) > -1  ) {
      borerNum = border * 2 - 2;
    } else if(['l_l', 't_l', 'b_l', 't_t', 'r_t', 'l_t'].indexOf(direction) > -1) {
      borerNum = 0;
    } 
    return borerNum;
  }

  //拉伸辅助计算
  hasStretchBorderWidth(paramVal, direction:string) {
    if(this.style['borderWidth'] && this.style['borderStyle']) {
      if(['b_l'].indexOf(direction) > -1) {
        paramVal += this.style['borderWidth'];
      }else if(['r_l', 'b_t'].indexOf(direction) > -1){
        paramVal += this.style['borderWidth'] * 2;
      }
    }

    switch(direction) {
      case 'l_t':
        paramVal = paramVal + 1 * this.style['paddingTopBottom'];
        break;
      case 'r_t':
        paramVal = paramVal + 1 * this.style['paddingTopBottom'];
        break;
      case 'b_t':
        paramVal = paramVal + 2 * this.style['paddingTopBottom'];
        break;
      case 'r_l':
        paramVal = paramVal + 2 * this.style['paddingLeftRight'];
        break;
      case 't_l':  
        paramVal = paramVal + 1 * this.style['paddingLeftRight'];
        break;
      case 'b_l':  
        paramVal = paramVal + 1 * this.style['paddingLeftRight'];
        break;  
    }

    return paramVal;
  }

  getBorderCol() {
    return (this.style['borderColor'] !== '#ffffff') ?  this.style['borderColor']  : 'red';
  }

}