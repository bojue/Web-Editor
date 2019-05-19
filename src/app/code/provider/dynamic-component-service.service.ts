import { Injectable } from "@angular/core";
import { LineComponent } from "src/app/component/dev/comps/comp/line/line.component";
import { TextComponent } from "src/app/component/dev/comps/comp/text/text.component";
import { ImgComponent } from "src/app/component/dev/comps/comp/img/img.component";
import { ChartComponent } from "src/app/component/dev/comps/custom/chart/chart.component";
import { InputComponent } from "src/app/component/dev/comps/comp/input/input.component";
import { TextareaComponent } from "src/app/component/dev/comps/comp/textarea/textarea.component";
import { ButtonComponent } from "src/app/component/dev/comps/comp/button/button.component";
import { AuxiliaryComponent } from "src/app/component/dev/comps/tool/auxiliary/auxiliary.component";
import { TreeComponent } from "angular-tree-component";
import { ListComponent } from "src/app/component/dev/comps/custom/list/list.component";
import { TabsTempComponent } from "src/app/component/dev/comps/template/tabs-temp/tabs-temp.component";
import { VideoComponent } from "src/app/component/dev/comps/comp/video/video.component";
import { AudioComponent } from "src/app/component/dev/comps/comp/audio/audio.component";
import { GaugeComponent } from "src/app/component/dev/comps/custom/gauge/gauge.component";
import { AreaComponent } from "src/app/component/dev/comps/tool/area/area.component";
import { ComponentItem } from "src/app/module/component-item";
import { SettingObjComponent } from "src/app/module/setting-object.component";


@Injectable({providedIn: 'root'})
export class DynamicComponentServiceService {

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
          comp : TreeComponent
        }  
        break;
      case 'list': 
        tempInfo = {
          comp : ListComponent
        }  
        break;
      case 'tabs':
        tempInfo = {
          comp: TabsTempComponent
        }  
        break;
      case 'video':
        tempInfo = {
          comp: VideoComponent,
        }   
        break;
      case 'audio':
        tempInfo = {
          comp: AudioComponent
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
