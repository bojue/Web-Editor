import { CompEmitService } from '../../../../providers/comp-emit.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingObject } from './node_modules/src/app/module/setting-object.module';
import { EChartOption } from 'echarts';
import { SettingStyle } from './node_modules/src/app/module/setting-style.module';
import { SettingDate } from './node_modules/src/app/module/setting-data.module';
import { BasicComponent } from '../basic/basic.component';

@Component({
  selector: 'app-custom-basic',
  templateUrl: './custom-basic.component.html',
  styleUrls: ['./custom-basic.component.scss']
})
export class CustomBasicComponent extends BasicComponent implements OnInit {

  constructor(
    private compEmitService: CompEmitService
  ) { 
    super()
  }
  
  initBasicData() {
    this.style = this.settingObj['style']
    this.data =  this.settingObj['data']
  }

}
