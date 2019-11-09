import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{
  
  constructor() {

  }


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
        componentList:[]
      },{ 
          id:2,
          parnentId:2,
          value: '详情',
          componentList:[]
        }]
    }
  ]


  getCurrentPageComp() {
    return this.currentPageComp;
  }

  getPages() {
    return this.pages;
  }

}
