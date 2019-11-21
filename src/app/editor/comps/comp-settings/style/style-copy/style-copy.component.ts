import { Component, OnInit, DoCheck } from '@angular/core';
import { StyleBasicComponent } from '../../../comp-basic/style-basic/style-basic.component';
import * as _ from 'loadsh';

@Component({
  selector: 'app-style-copy',
  templateUrl: './style-copy.component.html',
  styleUrls: ['./style-copy.component.scss']
})
export class StyleCopyComponent extends StyleBasicComponent implements OnInit , DoCheck{
  styleObj:any;
  compStyle:any;
  styleArr:any[];
  constructor() { 
    super()
  }

  ngOnInit() {
    this.initParentData();
    this.showMoreBool = false;
    this.initDate();
    console.log(this.style)
  }

  initDate() {
    this.compStyle = '';
    this.styleArr = [];
    this.styleObj = this.getStringObj();
  }

  ngDoCheck() {
    this.initDate();
  }

  getStringObj() {
    let _obj = {};
    for(let key in this.style) {
      _obj = this.getParamVal(key,_obj);
    }
    return JSON.stringify(_obj, null, "\t");
    
  }

  getParamVal(key, _obj) {
    let val = this.style[key];
    let _val = val;
    if(['height','width','borderWidth','top','left'].indexOf(key) > -1) {
      let _val = val + 'px;';
      this.styleArr.push(`${key}:${_val}`)
    }else { 
      switch(key) {
        case 'paddingTopBottom': 
          _val = val + 'px;';
          _obj['padding-top'] = _val;
          _obj['padding-bottom'] = _val ;
          this.styleArr.push(`padding-top:${_val}`)
          this.styleArr.push(`padding-bottom:${_val}`);
          break;
        case 'paddingLeftRight':
          _val =  val + 'px;';
          _obj['padding-rigth'] = _val;
          _obj['padding-left'] = _val;
          this.styleArr.push(`padding-rigth:${_val}`)
          this.styleArr.push(`padding-left:${_val}`)
          break; 
        case 'textAlign':
          _obj['text-align'] = val;
          this.styleArr.push(`text-align:${val};`)
          break;
        case 'borderColor':
          _obj['border-color'] = val;
          this.styleArr.push(`border-color:${val};`)
          break;
        case 'borderStyle':
          _obj['border-style'] = val;
          this.styleArr.push(`border-style:${val};`)
          break;
        case 'borderColor':
          _val =  val + 'px;';
          _obj['border-width'] = _val;
          this.styleArr.push(`border-width:${_val}`)
          break;  
        case 'zIndex':
          _obj['z-index'] = _val;
          this.styleArr.push(`border-width:${_val}`)
          break;    
        
      }
      
    }
    return _obj
  }


  copyStyle() {
    const el = document.createElement('textarea');
    // el.value = JSON.stringify(this.styleObj, null, "\t") || '无数据'
    // document.body.appendChild(el);
    // el.select();
    // document.execCommand('copy');
    // document.body.removeChild(el)

  }

}
