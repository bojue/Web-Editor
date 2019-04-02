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
  },{
    name:'图表',
    type: 'chart',
    iconUrl: './../assets/icons/chart.svg'
  }]

  //后台测试数据
  testCreateComp = [{
    name:'文本',
    type:'text',
    compIndex: 1,
    data: {
      value: "文本",
    },
    style: {
      width:100,
      position: 'absolute',
      top:10,
      left:10,
      height:40,
      border: '',
      borderColor: '',
      borderWidth: 0,
      borderStyle: ''
    }
  },{
    compIndex: 2,
    name:'图片',
    type:'img',
    data: {
      value:'./../assets/imgs/es.jpeg',
    },
    style: {
      height:200,
      width: 300,
      position: 'absolute',
      top:10,
      left:10,
      border: '',
      borderColor: '',
      borderWidth: 0,
      borderStyle: ''
    }
  },{
    compIndex: 3,
    name:'图表',
    type:'chart',
    data: {

    },
    style: {
      height:220,
      width: 300,
      position: 'absolute',
      top:120,
      left:600,
      border: '',
      borderColor: '',
      borderWidth: 0,
      borderStyle: ''
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
