import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';  

@Component({
  selector: 'app-comp-page-list',
  templateUrl: './comp-page-list.component.html',
  styleUrls: ['./comp-page-list.component.scss']
})
export class CompPageListComp implements OnInit {
  @Input() pages;
  @Output() selCurrentPage = new EventEmitter<any>()
  options = {};
  pageList:any[];

  constructor() { 
    console.log(this.pages)
  }

  ngOnInit() {
    this.initPageState();
  }

  //初始化组态选择状态
  initPageState(currentPage ?: any){
    if(this.pages && Array.isArray(this.pages)) {
      _.map(this.pages, page => {
        page['actived'] = false;
      })
    }

  }

  //选择当前可编辑页面，传递页面组件列表当父类容器渲染
  changeComponent(item) {
    this.initPageState(item);
    item['actived'] = true;
    this.selCurrentPage.emit(item);
  }

}
