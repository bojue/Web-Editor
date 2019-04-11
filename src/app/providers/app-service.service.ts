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
    state: 'default',
    compList: [
      {
        name:'文本',
        type: 'text',
        iconUrl: './../assets/icons/text.svg'
      },{
        name:'输入',
        type: 'input',
        iconUrl: './../assets/icons/input.svg'
      },{
        name:'文本输入',
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
      }]
  }, {
    name: '业务',
    state: 'module',
    compList: [
      {
        name:'饼图',
        type: 'chart',
        iconUrl: './../assets/icons/chart.svg'
      },{
        name:'结构树',
        type: 'tree',
        iconUrl: './../assets/icons/tree.svg'
      },{
        name:'列表',
        type: 'list',
        iconUrl: './../assets/icons/list.svg'
      }]
  },
  {
    name: '模板',
    state: 'template',
    compList: [
      {
        name:'默认模板(TODO)',
        type: 'template',
        iconUrl: './../assets/icons/template.svg'
      }]
  }]


  //后台测试数据
  testCreateComp = [{
    compIndex: 3,
    name:'列表',
    type:'list',
    data: {
        api_val:'http://10.169.43.4:8100/api/dutys',
        list_val:{
            list_tit_val:'列表',
            list_cols_number_val:1,
            list_cols_width:[],
            list_style_grid_bool:true,
            list_cols:[{
                tit:"标题",
                width:10,
                prefix:"",
                suffix:""
            }]
        }
    },
    style: {
      height:700,
      width: 500,
      position: 'absolute',
      top:10,
      left:400,
      border: '',
      borderColor: '',
      borderWidth: 0,
      borderStyle: ''
    }
  }];

  auxiComp = {
    compIndex: 1000,
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

  getAuxiComp() {
    return this.auxiComp;
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
