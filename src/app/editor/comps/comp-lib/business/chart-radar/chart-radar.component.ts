import { Component, OnInit } from '@angular/core';
import { CustomBasicComponent } from '../../../comp-basic/custom-basic/custom-basic.component';
import { EmitSubService } from 'src/app/core/emitSub/emit-sub.service';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.scss']
})
export class ChartRadarComponent extends CustomBasicComponent  {
  chartOption: any;
  constructor(
    private eventService: EmitSubService,
  ) {
    super(eventService)
  }

  ngOnInit() {
    this.initBasicData();
    this.initData();
  }

  initData() {
    this.chartOption =  {
      tooltip: {},
      legend: {
 
      },
      radar: {
          // shape: 'circle',
          name: {
              textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
             }
          },
          indicator: [
             { name: '销售', max: 6500},
             { name: '管理', max: 16000},
             { name: '信息技术', max: 30000},
             { name: '客服', max: 38000},
             { name: '研发', max: 52000},
             { name: '市场', max: 25000}
          ]
      },
      series: [{
          type: 'radar',
          // areaStyle: {normal: {}},
          data : [
              {
                  value : [4300, 10000, 28000, 35000, 50000, 19000],
              },
               {
                  value : [5000, 14000, 28000, 31000, 42000, 21000],
              }
          ]
      }]
  };
  }

}
