import { Component, EventEmitter, Input,Output } from '@angular/core';
import { EChartOption } from 'echarts';
import { SettingObject } from 'src/app/module/setting-object.module';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { CustomBasicComponent } from '../custom-basic/custom-basic.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent extends CustomBasicComponent  implements SettingObjComponent  {
  constructor() {
    super()
  }

  ngOnInit() {
    this.initBasicData();
    this.initData();
  }

  initData() {
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }
  }


}
