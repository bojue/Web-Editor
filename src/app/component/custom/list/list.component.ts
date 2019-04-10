import { Component, OnInit } from '@angular/core';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { CustomBasicComponent } from '../custom-basic/custom-basic.component';
import { getLocaleTimeFormat } from '@angular/common';
import { Subscriber } from 'rxjs';
import { CompEmitService } from './../../../providers/comp-emit.service';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends CustomBasicComponent  implements OnInit, SettingObjComponent{
  lists :any[];
  eventEmitter:any;
  data: any;
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
      console.log(this.data)
      this.getData(event)
    })
  }

  ngOnDestroy() {
    this.eventEmitter.unsubscribe();
  }

  getData(event) {
    this.lists = [
      { name:'张三', age: 23 },
      { name:'李四', age: 23 },
      { name:'网易', age: 23 },
      { name:'哈哈', age: 23 }
    ];
    let data = event && event['data']
    let val = "当前 id" + data['id']

    _.map(this.lists, item => {
      item['name'] = item['name'] + val;
    })
  }
}
