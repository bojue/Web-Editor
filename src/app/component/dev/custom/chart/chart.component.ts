import { Component } from "@angular/core";
import { CustomBasicComponent } from "src/app/component/basic/custom-basic/custom-basic.component";
import { CompEmitService } from "src/app/providers/comp-emit.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent extends CustomBasicComponent  {
  constructor(
    private eventService: CompEmitService,
  ) {
    super(eventService)
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
