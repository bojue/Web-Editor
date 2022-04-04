import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';  
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp-page-list',
  templateUrl: './comp-page-list.component.html',
  styleUrls: ['./comp-page-list.component.scss']
})
export class CompPageListComp implements OnInit {
  @Input() pages: any;
  @Output() selCurrentPage = new EventEmitter<any>();
  @Output() delCurrentPage = new EventEmitter<any>();
  @Output() editorCurrentPage = new EventEmitter<any>();

  options = {};
  pageList:any[];
  pageId:string;

  constructor(
    private activeRoute:ActivatedRoute,

  ) { 

  }

  ngOnInit() {
  
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
  changeComponent(item: any) {
    this.initPageState(item);
    item['actived'] = true;
    this.selCurrentPage.emit(item);
  }

  deletePage(page: any, event: any) {
    this.delCurrentPage.emit(page);
    event.stopPropagation();
  }

  editorPage(page: any,event: any) {
    this.editorCurrentPage.emit(page);
    event.stopPropagation();
  }

}
