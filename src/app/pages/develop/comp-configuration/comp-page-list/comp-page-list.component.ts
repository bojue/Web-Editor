import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';  

@Component({
  selector: 'app-comp-page-list',
  templateUrl: './comp-page-list.component.html',
  styleUrls: ['./comp-page-list.component.scss']
})
export class CompPageListComp implements OnInit {
  @Input() treeNodes;
  @Output() selCurrentPage = new EventEmitter<any>()
  options = {};
  pages:any[];

  constructor() { 

  }

  ngOnInit() {
    this.pages = this.treeNodes;
  }

  //初始化组态选择状态
  initPageState(currentPage){
    _.map(this.pages, pages => {
      if(!(pages && Array.isArray(pages['children']))) false; //代码健壮检查，一般忽略处理
      _.map(pages['children'], page => {
        page['actived'] = currentPage === page;
      })
    })
  }

  //选择当前可编辑页面，传递页面组件列表当父类容器渲染
  changeComponent(item) {
    this.initPageState(item);
    this.selCurrentPage.emit(item);
  }

}
