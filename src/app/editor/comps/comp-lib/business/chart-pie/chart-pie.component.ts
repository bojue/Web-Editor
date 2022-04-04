import { Component, OnInit } from '@angular/core';
import { EmitSubService } from 'src/app/core/emitSub/emit-sub.service';
import { CustomBasicComponent } from '../../../comp-basic/custom-basic/custom-basic.component';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent extends CustomBasicComponent implements OnInit {

  override chartOption:any;
  constructor(private emitService: EmitSubService) {
    super(emitService)
   }

  override ngOnInit(): void {
    this.initBasicData();
    this.initData();
  }

  override initData() {
    this.chartOption = {

      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告']
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    };
  }  
}
