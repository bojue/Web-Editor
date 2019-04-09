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
      }]
  },
  {
    name: '模板',
    state: 'template',
    compList: [
      {
        name:'默认模板',
        type: 'template',
        iconUrl: './../assets/icons/template.svg'
      }]
  }]


  //后台测试数据
  testCreateComp = [{
    name:'文本',
    type:'text',
    compIndex: 1,
    data: {
      text_val: "文本",
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
    }, 
    statue: {
      inputBool: false,
      cativeBool: false
    }
  },{
    compIndex: 2,
    name:'图片',
    type:'img',
    data: {
      img_url:'./../assets/imgs/es.jpeg',
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
    },
    statue: {
      inputBool: false,
      cativeBool: false
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
  },{
    compIndex: 2,
    name:'图片',
    type:'img',
    data: {
      img_url:'./../assets/imgs/es.jpeg',
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
    },
    statue: {
      inputBool: false,
      cativeBool: false
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
