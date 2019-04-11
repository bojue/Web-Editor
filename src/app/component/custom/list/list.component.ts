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
    this.lists = [];
    this.eventEmitter = this.emitService.getEmitEvent().subscribe(event => {
      this.getData(event)
    })
  }

  ngOnDestroy() {
    this.eventEmitter.unsubscribe();
  }

  getData(event) {
    //mork数据
    this.lists = [
      { name:'张三', age: 23 },
      { name:'李四', age: 23 },
      { name:'网易', age: 23 },
      { name:'哈哈', age: 23 }
    ];
    let data = event && event['data'];
    _.map(this.lists, item => {
      item['id'] = data['id'];
      item['name'] = item['name'] + data['name'];
    })
  }

  getGrid() {
    let number = this.data['list_val']['list_cols_number_val'];
    console.log(number);
    return '105px 10px'
  }
}
