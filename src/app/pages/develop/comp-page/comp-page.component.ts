import { Component, OnInit, Input } from '@angular/core';
import { NodeMenuItemAction, TreeModel, Ng2TreeSettings } from 'ng2-tree';

@Component({
  selector: 'app-comp-page',
  templateUrl: './comp-page.component.html',
  styleUrls: ['./comp-page.component.scss']
})
export class CompPageComponent implements OnInit {
  @Input() treeNodes;
  trees: TreeModel;
  treeSettings: Ng2TreeSettings = {
    rootIsVisible: true
  };
  options = {};

  TREE_SETTING_DEFAULT = {
    'static': false,
    'rightMenu': false,
    'leftMenu': false,
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


  constructor() { 

  }

  ngOnInit() {
    this.trees = {
      value: "页面列表",
      id:0,
      settings: this.TREE_SETTING_DEFAULT,
      children: this.treeNodes
    }
    console.log(this.treeNodes)
  }

  selectNodeEvent(event) {
    console.log(event)
  }

}
