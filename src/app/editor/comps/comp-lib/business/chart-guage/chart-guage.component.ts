import { Component, OnInit } from '@angular/core';
import { CustomBasicComponent } from '../../../comp-basic/custom-basic/custom-basic.component';
import { EmitSubService } from 'src/app/core/emitSub/emit-sub.service';
import { ChartGuageService } from './chart-guage.service';

@Component({
  selector: 'app-chart-guage',
  templateUrl: './chart-guage.component.html',
  styleUrls: ['./chart-guage.component.scss']
})
export class ChartGuageComponent extends CustomBasicComponent implements OnInit {
  override chartOption:any;
  constructor(
    private service:ChartGuageService,
    private emitService: EmitSubService) {
    super(emitService)
   }

  override ngOnInit(): void {
    this.initBasicData();
    this.initData();
  }

  override initData() {
    this.service.get({}).subscribe(res => {
   
    })
    this.chartOption = {
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
      },
      series: [
          {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter:'{value}%'},
              data: [{value: 50, name: '完成率'}]
          }
      ]
    }
  
  }

}
