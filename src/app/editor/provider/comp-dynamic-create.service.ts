import { Injectable } from "@angular/core";
import { LineComponent } from "src/app/editor/comps/comp-lib/basic/line/line.component";
import { TextComponent } from "src/app/editor/comps/comp-lib/basic/text/text.component";
import { ImgComponent } from "src/app/editor/comps/comp-lib/basic/img/img.component";
import { InputComponent } from "src/app/editor/comps/comp-lib/basic/input/input.component";
import { TextareaComponent } from "src/app/editor/comps/comp-lib/basic/textarea/textarea.component";
import { ButtonComponent } from "src/app/editor/comps/comp-lib/basic/button/button.component";
import { AuxiliaryComponent } from "src/app/editor/comps/comp-lib/tool/auxiliary/auxiliary.component";
import { VideoComponent } from "src/app/editor/comps/comp-lib/basic/video/video.component";
import { AreaComponent } from "src/app/editor/comps/comp-lib/tool/area/area.component";
import { SettingObjComponent } from "src/app/editor/model/setting-object.interface";
import { SettingItem } from "../model/setting-item.model";
import { ChartGuageComponent } from "../comps/comp-lib/business/chart-guage/chart-guage.component";
import { ChartPolylineComponent } from "../comps/comp-lib/business/chart-polyline/chart-polyline.component";
import { ChartPieComponent } from '../comps/comp-lib/business/chart-pie/chart-pie.component';
import { ChartRadarComponent } from '../comps/comp-lib/business/chart-radar/chart-radar.component';


@Injectable({providedIn: 'root'})
export class CompDynamicCreateService {

  constructor() { }

  //组件映射
  createComponent(type, data?:any) {
    let tempInfo = {
      comp:null
    };
    let comps = {
      'text': TextComponent,
      'img': ImgComponent,
      'input': InputComponent,
      'textarea': TextareaComponent,
      'button': ButtonComponent,
      'video': VideoComponent,
      
      //业务

      //业务-Chart
      'chart_polyline': ChartPolylineComponent,
      'chart_gauge': ChartGuageComponent,
      'chart_pie': ChartPieComponent,
      "chart_radar": ChartRadarComponent,

      //工具
      'auxi': AuxiliaryComponent,
      'area': AreaComponent, 
    }
   
    try {
      tempInfo['comp'] = comps[type];
      tempInfo['data'] = data;
    } catch (error) {
      console.error(`请配置${type} 所对于的组态类型`)
    }
 
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
