import { ListComponent } from './../../component/custom/list/list.component';
import { Injectable } from '@angular/core';
import { AuxiliaryComponent } from 'src/app/component/tool/auxiliary/auxiliary.component';
import { ButtonComponent } from 'src/app/component/basic/button/button.component';
import { TextareaComponent } from 'src/app/component/basic/textarea/textarea.component';
import { InputComponent } from 'src/app/component/basic/input/input.component';
import { ChartComponent } from 'src/app/component/custom/chart/chart.component';
import { ImgComponent } from 'src/app/component/basic/img/img.component';
import { TextComponent } from 'src/app/component/basic/text/text.component';
import { ComponentItem } from 'src/app/module/component-item';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { TreeComponent } from 'src/app/component/custom/tree/tree.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentServiceService {

  constructor() { }

  //组件映射
  createComponent(type, data?:any) {
    let tempInfo = {
      comp:null
    };
    switch(type) {
      case 'text':
        tempInfo = {
          comp: TextComponent,
        }
        break;
      case 'img':  
        tempInfo = {
          comp: ImgComponent,
        }
        break;
      case 'chart':
        tempInfo = {
          comp: ChartComponent,
        }  
        break;
      case 'input':
        tempInfo = {
          comp: InputComponent,
        }  
        break;
      case 'textarea':
        tempInfo = {
          comp: TextareaComponent,
        }  
        break;
      case 'button':
        tempInfo = {
          comp: ButtonComponent,
        }  
        break;
      case 'auxi':
        tempInfo = {
          comp : AuxiliaryComponent
        }
        break;
      case 'tree':
        tempInfo = {
          comp : TreeComponent
        }  
        break;
      case 'list': 
        tempInfo = {
          comp : ListComponent
        }  
        break;
      default:
        return;    
    }
    tempInfo['data'] = data;
    return tempInfo;
  }

  //组件映射列表
  getCompList(objList:any[]){
    let compList = [];
    objList.forEach(settingItem =>{
      let _type = settingItem && settingItem['type'];
      let compInfo = this.createComponent(_type)
      let settingData = settingItem || compInfo['data']
      let createComp = new ComponentItem(compInfo['comp'], settingData);
      compList.push(createComp)
    })
    return compList;
  }

  //拖拽边界处理
  getboundaryBool(changeX,changeY, style, direction) {
    let bool = false;
    switch (direction) {
      case 'l':
        bool = changeX + style['left'] < 0;
        break;
      case 't':
        bool = changeY + style['top'] < 0
        break;
    }
    return bool;
  }

  //选择组件后预先处理逻辑
  beforeSelectComp(activeCompSettingObject, activeCurrentComp) {
    activeCompSettingObject = null;
    if(activeCurrentComp && activeCurrentComp.length > 0) {
      let beforeActiveCompSettingObj = activeCurrentComp[0];
      beforeActiveCompSettingObj['active'] = false;
      let beforeActiveCompInstance = activeCurrentComp[1];
      return (<SettingObjComponent> beforeActiveCompInstance).settingObj = beforeActiveCompSettingObj;
    }
  }
}
