import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService{
  
  constructor() {

  }

  componentsHeaders = [{ 
    name:'组件',
    state: 'default',
 
  }, {
    name: '设置',
    state: 'settings'
  }]

  componentModules = [{ 
    name:'基础',
    title:"基础组件,多为HTML元素组件",
    state: 'default',
    compList: [
      {
        name:'文本',
        type: 'text',
        iconUrl: './../assets/icons/text.svg'
      },{
        name:'单行输入',
        type: 'input',
        iconUrl: './../assets/icons/input.svg'
      },{
        name:'多行输入',
        type: 'textarea',
        iconUrl: './../assets/icons/textarea.svg'
      },{
        name:'按钮',
        type: 'button',
        iconUrl: './../assets/icons/mtbutton.svg'
      },{
        name:'图片',
        type: 'img',
        iconUrl: './../assets/icons/image.svg'
      },{
        name:'音频',
        type: 'audio',
        iconUrl: './../assets/icons/audio.svg'
      },{
        name:'视频',
        type: 'video',
        iconUrl: './../assets/icons/video.svg'
      },]
  }, {
    name: '业务',
    state: 'module',
    title:"高级组件,支持数据绑定和接口绑定,支持定制",
    compList: [
      {
        name:'折线',
        type: 'chart',
        iconUrl: './../assets/icons/zhexian.svg'
      },{
        name:'结构树',
        type: 'tree',
        iconUrl: './../assets/icons/tree.svg'
      },{
        name:'列表',
        type: 'list',
        iconUrl: './../assets/icons/list.svg'
      },{
        name:'设备数据',
        type:'equipment',
        iconUrl:'./../assets/icons/equipment-info.svg'
      },{
        name: '仪表盘',
        type:'gauge',
        iconUrl:'./../assets/icons/gauge.svg'
      },{
        name: '刻度盘',
        type:'thermomenter',
        iconUrl:'./../assets/icons/thermometer.svg'
      }]
  },
  {
    name: '模板',
    state: 'template',
    title:"复杂组件,由多个基础或者高级组件组成,支持数据绑定和接口绑定,支持定制",
    compList: [
      // {
      //   name:'Tabs',
      //   type: 'tabs',
      //   iconUrl: './../assets/icons/tabs.svg'
      // }, 
      {
        name:'房间',
        type: 'tabs',
        iconUrl: './../assets/icons/home.svg'
      }, {
        name:'空调',
        type: 'ariConditioning',
        iconUrl: './../assets/icons/ariConditioning.svg'
      }]
  }]


  //后台测试数据
  testCreateComp = [];

  auxiComp = {
    compIndex: 999,
    name:'辅助线',
    type:'auxi',
    data: {
      title: '辅助线'
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
  }

  areaComp = {
    compIndex: 999,
    name:'区域选中',
    type:'area',
    data: {
      title: '区域选中'
    },
    style: {
      height:0,
      width: 0,
      position: 'absolute',
      top:120,
      left:600,
      border: '1',
      borderColor: 'red',
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }

  pages =  [
    {
      name:'房间',
      defaultName:'页面',
      data:[],
      style:{}
    },
    {
      name:'UPS',
      defaultName:'页面',
      data:[],
      style:{}
    },
    {
      name:'空调',
      defaultName:'页面',
      data:[],
      style:{}
    },
    {
      name:'机柜',
      defaultName:'页面',
      data:[],
      style:{}
    },
    {
      name:'UPS2',
      defaultName:'页面',
      data:[],
      style:{}
    } ];

  getPages() {
    return this.pages;
  }  

  getAuxiComp() {
    return this.auxiComp;
  }

  getAreaComp() {
    return this.areaComp;
  }


  getTestCreateComp() {
    return this.testCreateComp;
  }

  getComponentHeaders() {
    return this.componentsHeaders;
  }

  getComponentModeules() {
    return this.componentModules;
  }
 
}
