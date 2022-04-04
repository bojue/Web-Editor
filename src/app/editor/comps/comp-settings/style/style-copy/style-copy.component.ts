import { Component, OnInit, DoCheck } from '@angular/core';
import { StyleBasicComponent } from '../../../comp-basic/style-basic/style-basic.component';
import * as _ from 'loadsh';
import { TempoToastrService } from '../../../../../core/provider/toaster/toastr.service';

@Component({
  selector: 'app-style-copy',
  templateUrl: './style-copy.component.html',
  styleUrls: ['./style-copy.component.scss']
})
export class StyleCopyComponent extends StyleBasicComponent implements OnInit , DoCheck{
  styleObj:any;
  compStyle:any;
  styleArr:any[];


  constructor(private toastr: TempoToastrService) {
    super()
  }

  override ngOnInit() {
    this.initParentData();
    this.showMoreBool = false;
    this.initDate();
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
    let _obj: any = {};
    let _res = '';
    for(let key in this.style) {
      _obj = this.getParamVal(key,_obj);
    }
    for(let key in _obj) {
      _res += `${key}:${_obj[key]};${this.WARP_CODE}` 
    }
    return _res;
    
  }

  getParamVal(key: string, _obj: any) {
    let val = this.style[key];
    let _val = val;
    if(['height','width','top','left'].indexOf(key) > -1) {
      let _val = val + 'px';
      _obj[key] = _val;
      this.styleArr.push(`${key}:${_val}`)
    }else { 
      switch(key) {
        case 'paddingTopBottom': 
          _val = val + 'px';
          _obj['padding-top'] = _val;
          _obj['padding-bottom'] = _val ;
          this.styleArr.push(`padding-top:${_val}`)
          this.styleArr.push(`padding-bottom:${_val}`);
          break;
        case 'paddingLeftRight':
          _val =  val + 'px';
          _obj['padding-right'] = _val;
          _obj['padding-left'] = _val;
          this.styleArr.push(`padding-right:${_val}`)
          this.styleArr.push(`padding-left:${_val}`)
          break; 
        case 'textAlign':
          _obj['text-align'] = val;
          this.styleArr.push(`text-align:${val}`)
          break;
        case 'borderColor':
          _obj['border-color'] = val;
          this.styleArr.push(`border-color:${val}`)
          break;
        case 'borderStyle':
          _obj['border-style'] = val;
          this.styleArr.push(`border-style:${val}`)
          break;
        case 'borderWidth':
          _val =  val + 'px';
          _obj['border-width'] = _val;
          this.styleArr.push(`border-width:${_val}`)
          break;  
        case 'zIndex':
          _obj['z-index'] = _val;
          this.styleArr.push(`z-index:${_val}`)
          break;    
      }
      
    }
    return _obj
  }


  copyStyle() {
    const el = document.createElement('textarea');
    el.value = this.styleObj;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.showCopySuccess();
  }

  showCopySuccess() {
    this.toastr.showToaster({
      state:this.toastr.STATE.SUCCESS,
      info:"拷贝成功"
    })
  }
}
