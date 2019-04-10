import { Component, OnInit } from '@angular/core';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { CustomBasicComponent } from '../custom-basic/custom-basic.component';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss',]
})
export class TreeComponent extends CustomBasicComponent  implements SettingObjComponent  {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options:any;
  constructor() {
    super()
  }

  ngOnInit() {
    this.initBasicData();
    this.initData()
  }

  initData() {
    this.options = {};
  }


  onEvent(event) {
    let data = event && event['node'] && event['node']['data'];
    if(data) {
      console.log(data)
    }
  }


}