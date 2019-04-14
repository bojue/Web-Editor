import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { CompEmitService } from '../../../../providers/comp-emit.service';
import { CustomBasicComponent } from 'src/app/component/comp-basic/custom-basic/custom-basic.component';
import { SettingObjComponent } from 'src/app/module/setting-object.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss',]
})
export class TreeComponent extends CustomBasicComponent implements OnInit, SettingObjComponent  {

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
  eventEmitter:any;
  constructor(
    private emitService: CompEmitService,
  ) {
    super(emitService)
  }

  ngOnInit() {
    this.initBasicData();
    this.initData()
  }

  initData() {
    this.eventEmitter = this.emitService.getEmitEvent().subscribe(event => {
    })
  }

  ngOnDestroy() {
    this.eventEmitter.unsubscribe();
  }

  onEvent(event) {
    let data = event && event['node'] && event['node']['data'];
    if(data) {
       event['data'] = data;
       this.emitService.emitEvent(event)
    }
  }


}