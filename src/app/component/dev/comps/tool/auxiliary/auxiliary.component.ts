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
  _PAGE_SIZE_X = 80;
  _PAGE_SIZE_Y = 80;
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
      _clientX = event['clientX'] - this._PAGE_SIZE_X;
      _clientY = event['clientY'] - this._PAGE_SIZE_Y;
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
        this.style['width'] = _width > 20 ? _width : 20;
        break;
      case 't':
        let _h =  this.startEvent['height'] + (this.startEvent['top'] - _clientY);
        this.style['top'] = _clientY ;
        this.style['height'] = _h > 20 ? _h : 20;
        break;  
      case 'b':
        let _height = _clientY - this.startEvent['top'];
        this.style['height'] = _height > 20 ? _height : 20;
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
      borerNum = border * 2 + 3;
    } else if(['l_l', 't_l', 'b_l', 't_t', 'r_t', 'l_t'].indexOf(direction) > -1) {
      borerNum = 3;
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

    if(this.style['padding'] ) {
      if(['l_t', 'r_t' ].indexOf(direction) > -1) {
        paramVal = paramVal + 1 * this.style['padding'];
      }else if(['b_t', 'r_l' ].indexOf(direction) > -1) {
        paramVal = paramVal + 2 * this.style['padding'];
      }

    }

    return paramVal;
  }

  getBorderCol() {
    return (this.style['borderColor'] !== '#ffffff') ?  this.style['borderColor']  : 'red';
  }

}