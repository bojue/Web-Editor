import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{
  
  constructor() {

  }


  //当前页面组件列表
  currentPageComp = [];

  pages = {
    id:1,
    name:"页面列表",
    project:"012",
    children: [{ 
      id:1,
      parnentId:2,
      value: '列表' ,
      size: {
        background:'#ffffff',
        height:1000,
        width:1600
      },
      componentList:[]
    },{ 
        id:2,
        parnentId:2,
        value: '详情',
        size: {
          background:'#ffffff',
          height:1000,
          width:1600
        },
        componentList:[]
      }]
  }


  getCurrentPageComp() {
    return this.currentPageComp;
  }

  getPages() {
    return this.pages;
  }

}
