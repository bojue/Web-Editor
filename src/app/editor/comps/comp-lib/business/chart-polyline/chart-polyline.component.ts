import { Component, OnInit } from '@angular/core';
import { CustomBasicComponent } from '../../../comp-basic/custom-basic/custom-basic.component';
import { EmitSubService } from 'src/app/core/emitSub/emit-sub.service';

@Component({
  selector: 'app-chart-polyline',
  templateUrl: './chart-polyline.component.html',
  styleUrls: ['./chart-polyline.component.scss']
})
export class ChartPolylineComponent extends CustomBasicComponent  {
  override chartOption: any;
  constructor(
    private eventService: EmitSubService,
  ) {
    super(eventService)
  }

  override ngOnInit() {
    this.initBasicData();
    this.initData();
  }

  override initData() {
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
