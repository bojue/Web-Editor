import { Component, OnInit } from '@angular/core';
import { NodeMenuItemAction, TreeModel, Ng2TreeSettings } from 'ng2-tree';

@Component({
  selector: 'app-comp-page',
  templateUrl: './comp-page.component.html',
  styleUrls: ['./comp-page.component.scss']
})
export class CompPageComponent implements OnInit {
  trees: TreeModel;
  treeSettings: Ng2TreeSettings = {
    rootIsVisible: false
  };
  options = {};

  TREE_SETTING_DEFAULT = {
    'static': false,
    'rightMenu': false,
    'leftMenu': false,
    rootIsVisible: true,
    menuItems: [
      { action: NodeMenuItemAction.Rename, name: '', cssClass: 'fa fa-pencil fa-fw' },
      { action: NodeMenuItemAction.Remove, name: '', cssClass: 'fa fa-trash-o fa-fw' }
    ],
    cssClasses: {
      expanded: 'fa fa-caret-down',
      collapsed: 'fa fa-caret-right',
      empty: 'fa fa-caret-right disabled',
      leaf: 'fa'
    },
    templates: {
      node: '<i class="far fa-folder-open"></i>',
      leaf: '<i class="far fa-file"></i>'
    }
  }


  constructor() { }

  ngOnInit() {
    this.trees = {
      value: "文件夹",
      id:0,
      settings: this.TREE_SETTING_DEFAULT,
      children: [
        {
          value: '登录',
          children: [{ value: '登录' }, { value: '注册' }]
        },
        {
          value: '商品',
          children: [{ value: '列表' }, { value: '详情' }]
        }
      ]
    };
  }

  selectNodeEvent(event) {
    console.log(event)
  }

}
