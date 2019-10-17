import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-page',
  templateUrl: './comp-page.component.html',
  styleUrls: ['./comp-page.component.scss']
})
export class CompPageComponent implements OnInit {
  @Input() treeNodes;
  @Output() selCurrentPage = new EventEmitter<any>()
  options = {};
  trees:any[];

  constructor() { 

  }

  ngOnInit() {
    this.trees = this.treeNodes;
  }

  //选择当前可编辑页面，传递页面组件列表当父类容器渲染
  selectNodeEvent(event) {
    let currenPage = event && event['node'] && event['node']['node'] || {};
    this.selCurrentPage.emit(currenPage);
  }

}
