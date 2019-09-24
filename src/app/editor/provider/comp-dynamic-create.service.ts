import { Injectable } from "@angular/core";
import { LineComponent } from "src/app/editor/components/comp-lib/basic/line/line.component";
import { TextComponent } from "src/app/editor/components/comp-lib/basic/text/text.component";
import { ImgComponent } from "src/app/editor/components/comp-lib/basic/img/img.component";
import { ChartComponent } from "src/app/editor/components/comp-lib/business/chart/chart.component";
import { InputComponent } from "src/app/editor/components/comp-lib/basic/input/input.component";
import { TextareaComponent } from "src/app/editor/components/comp-lib/basic/textarea/textarea.component";
import { ButtonComponent } from "src/app/editor/components/comp-lib/basic/button/button.component";
import { AuxiliaryComponent } from "src/app/editor/components/comp-lib/tool/auxiliary/auxiliary.component";
import { ListComponent } from "src/app/editor/components/comp-lib/business/list/list.component";
import { VideoComponent } from "src/app/editor/components/comp-lib/basic/video/video.component";
import { GaugeComponent } from "src/app/editor/components/comp-lib/business/gauge/gauge.component";
import { AreaComponent } from "src/app/editor/components/comp-lib/tool/area/area.component";
import { SettingObjComponent } from "src/app/editor/module/setting-object.component";
import { TreesComponent } from "../components/comp-lib/business/tree/tree.component";
import { SettingItem } from "../module/setting-item.module";


@Injectable({providedIn: 'root'})
export class CompDynamicCreateService {

  constructor() { }

  //组件映射
  createComponent(type, data?:any) {
    let tempInfo = {
      comp:null
    };
    switch(type) {
      case 'line':
      tempInfo = {
          comp: LineComponent,
        }
        break;
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
          comp : TreesComponent
        }  
        break;
      case 'list': 
        tempInfo = {
          comp : ListComponent
        }  
        break;
      case 'video':
        tempInfo = {
          comp: VideoComponent,
        }   
        break;
      case 'gauge':
        tempInfo = {
          comp: GaugeComponent
        }  
        break;
      case 'area': 
        tempInfo = {
          comp: AreaComponent
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
      let createComp = new SettingItem(compInfo['comp'], settingData);
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
