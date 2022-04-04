import { Injectable, OnInit } from '@angular/core';
import { BaseHttpService } from '../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseHttpService{
  
  constructor(
    private http: HttpClient
  ) {
    super(http, '')
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
      style: {
        background:'#ffffff',
        height:1000,
        width:1600
      },
      componentList:[]
    },{ 
        id:2,
        parnentId:2,
        value: 'TODO:项目打架',
        style: {
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
    return this.getAll;
  }

}
