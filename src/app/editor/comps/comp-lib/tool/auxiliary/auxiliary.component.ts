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
  _clientX = 0;
  _clientY = 0;
  constructor() {
    super();
  }

  ngOnInit() {

    this.initData();
  }

  ngOnDestroy() {

  }

  compEvent(event, state?:string, eventEndBool?:boolean) {
    event.stopPropagation();
    this.setSettingParam(event, state, eventEndBool);
    if(eventEndBool) {
      this.startEvent = null;
    }
 
  }
  expandUnitCustom(param, other) {
    if(['width', 'height'].indexOf(param) === -1) return;
    let val = 0;
    if(other === 'paddingLeftRight') {
      val = this.style[param] +  this.style['paddingLeftRight'] * 2;
    }else {
      val = this.style[param] + this.style['paddingTopBottom'] * 2;
    }
    return  val + 'px';
  }



  setSettingParam(event, state?:string, eventEndBool?:boolean) {
    if(event['clientX'] === 0 || event['clientY'] === 0) return;
    if(event) {
      this._clientX = event['clientX'] - this.contentPageSize['left'];
      this._clientY = event['clientY'] - this.contentPageSize['top'];
    }
    switch (state) {
      case 's':
        this.startEvent = _.cloneDeep(this.style);
        break;
      case 'l':
        this.style['left'] = this._clientX ;
        this.style['width'] =  this.startEvent['width'] + (this.startEvent['left'] - this._clientX );
        break;
      case 'r':
        let _width = this._clientX  - this.startEvent['left'];
        this.style['width'] = _width - 2* this.style['paddingTopBottom'];
        break;
      case 't':
        this.style['top'] = this._clientY ;
        this.style['height'] =  this.startEvent['height'] + (this.startEvent['top'] - this._clientY);
        break;  
      case 'b':
        this.style['height'] = this._clientY - this.startEvent['top'] - 2* this.style['paddingTopBottom'];
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