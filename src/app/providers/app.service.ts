import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{
  
  constructor() {

  }

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
        name: '仪表盘',
        type:'gauge',
        iconUrl:'./../assets/icons/gauge.svg'
      }]
  }
]


  //当前页面组件列表
  currentPageComp = [];

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

  pages = [
    {
      id:1,
      value: '注册登录',
      children: [{ 
        id:1,
        parnentId:1,
        value: '登录', 
        componentList:[]
      }, { 
        id:2,
        parnentId:2,
        value: '注册',
        componentList:[] 
      }]
    },
    {
      id:2,
      value: '商品页面',
      children: [{ 
        id:1,
        parnentId:2,
        value: '列表' ,
        componentList:[]
      },{ 
          id:1,
          parnentId:2,
          value: '详情',
          componentList:[]
        }]
    }
  ]

  getAuxiComp() {
    return this.auxiComp;
  }

  getAreaComp() {
    return this.areaComp;
  }


  getCurrentPageComp() {
    return this.currentPageComp;
  }

  getPages() {
    return this.pages;
  }

  getComponentModeules() {
    return this.componentModules;
  }
}
