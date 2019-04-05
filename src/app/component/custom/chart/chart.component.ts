import { Component, EventEmitter, Input,Output } from '@angular/core';
import { SettingObjComponent } from '../../module/setting-object.component';
import { EChartOption } from 'echarts';
import { SettingObject } from '../../module/setting-object.module';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  implements SettingObjComponent  {
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();
  style: any;
  data: any;
  chartOption: EChartOption;

  constructor() { }

  expandUnit(param) {
    let paramVal = this.style[param] || 1;
    return paramVal + 'px'; ;
  }

  ngOnInit() {
    this.style = this.settingObj && this.settingObj['style'] || {};
    this.data = this.settingObj && this.settingObj['data'] || {};
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

  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }
}
