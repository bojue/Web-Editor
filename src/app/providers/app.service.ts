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

  

  pages = [
    {
      id:2,
      value: '商品页面',
      children: [{ 
        id:1,
        parnentId:2,
        value: '列表' ,
        componentList:[{"compIndex":3,"name":"列表","type":"list","data":{"api_val":"http://10.169.43.4:8100/api/dutys","list_val":{"list_tit_val":"列表","list_cols_number_val":4,"list_cols_width":[],"list_style_grid_bool":true,"list_cols":[{"tit":"标题","width":10,"prefix":"","suffix":""}]}},"style":{"height":300,"width":180,"position":"absolute","top":128,"left":142,"border":"","borderColor":"","borderWidth":0,"borderStyle":""},"active":true},{"compIndex":3,"name":"结构树","type":"tree","data":{"api_val":"http://10.169.43.4:8100/api/dutys"},"style":{"height":300,"width":120,"position":"absolute","top":83,"left":17,"border":"","borderColor":"","borderWidth":0,"borderStyle":""},"active":false}]
      },{ 
          id:2,
          parnentId:2,
          value: '详情',
          componentList:[{"compIndex":2,"name":"图片","type":"img","data":{"img_url":"./../assets/imgs/es.jpeg"},"style":{"height":100,"width":100,"position":"absolute","top":76,"left":61,"border":"","borderColor":"","borderWidth":0,"borderStyle":"dotted"}}]
        }]
    }
  ]


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
