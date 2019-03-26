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

  basicComponents = [{
      name:'文本',
      iconUrl: './../assets/imgs/text.svg'
    },
    {
    name:'图片',
    iconUrl: './../assets/imgs/image.svg'
  }]

  componentModules = [{ 
    name:'基础',
    state: 'default'
  }, {
    name: '模块',
    state: 'module'
  },
  {
    name: '模板',
    state: 'template'
  }]

  testCreateComp = [{
    name:'图片组件',
    type:'text',
    data: {
      'name':'图片',
      'url':'./../assets/imgs/chart.svg"'
    }
  },{
    name:'图片组件',
    type:'img',
    data: {
      'name':'图片',
      'url':'./../assets/imgs/chart.svg"'
    }
  },{
    name:'图片组件',
    type:'img',
    data: {
      'name':'图片',
      'url':'./../assets/imgs/chart.svg"'
    }
  },{
    name:'图片组件',
    type:'img',
    data: {
      'name':'图片',
      'url':'./../assets/imgs/chart.svg"'
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
