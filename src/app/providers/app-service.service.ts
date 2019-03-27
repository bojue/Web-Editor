import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService{
  
  constructor() {

  }

  componentsHeaders = [{ 
    name:'组件',
    state: 'default'
  }, {
    name: '设置',
    state: 'settings'
  }]



  componentModules = [{ 
    name:'基础',
    state: 'default'
  }, {
    name: '功能',
    state: 'module'
  }]

  //基础组件列表
  basicComponents = [{
      name:'文本',
      type: 'text',
      iconUrl: './../assets/imgs/text.svg'
    },
    {
    name:'图片',
    type: 'img',
    iconUrl: './../assets/imgs/image.svg'
  },{
    name:'矩形',
    type: 'rectangle',
    iconUrl: './../assets/imgs/rectangle.svg'
  },]

  //后台测试数据
  testCreateComp = [{
    name:'文本',
    type:'text',
    data: {
      'name':'文本'
    }
  },{
    name:'图片组件',
    type:'img',
    data: {
      'name':'图片',
      'url':'./../assets/imgs/chart.svg"'
    }
  }]

  getTestCreateComp() {
    return this.testCreateComp;
  }


  getBasicComponent() {
    return this.basicComponents;
  }
  getComponentHeaders() {
    return this.componentsHeaders;
  }

  getComponentModeules() {
    return this.componentModules;
  }
 
}
