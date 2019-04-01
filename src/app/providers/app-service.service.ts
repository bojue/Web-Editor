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
  basicCompIconList = [{
      name:'文本',
      type: 'text',
      iconUrl: './../assets/icons/text.svg'
    },{
    name:'图片',
    type: 'img',
    iconUrl: './../assets/icons/image.svg'
  }]

  //后台测试数据
  testCreateComp = [{
    name:'文本',
    type:'text',
    data: {
      compIndex: 1,
      name:'文本',
      value: "文本"
    }
  },{
    name:'图片组件',
    type:'img',
    data: {
      compIndex: 2,
      name:'图片',
      height:100,
      width: 100,
      url:'./../assets/imgs/es.jpeg'
    }
  },{
    name:'图片组件',
    type:'img',
    data: {
      compIndex: 3,
      name:'图片',
      height:200,
      width: 300,
      url:'./../assets/imgs/es.jpeg'
    }
  }]


  getTestCreateComp() {
    return this.testCreateComp;
  }


  getBasicCompIconList() {
    return this.basicCompIconList;
  }
  getComponentHeaders() {
    return this.componentsHeaders;
  }

  getComponentModeules() {
    return this.componentModules;
  }
 
}
