import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { NgxEchartsModule } from "ngx-echarts";
import { CompSettingBasicModule } from "../../comp-basic/comp-setting-basic.module";
import { CodeModule } from '../../../../core/code.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartGuageComponent } from './chart-guage/chart-guage.component';
import { ChartPolylineComponent } from './chart-polyline/chart-polyline.component';

const customComp = [
    ChartPieComponent,
    ChartGuageComponent,
    ChartPolylineComponent
]

@NgModule({
  declarations: [
      [...customComp]
  ],
  imports: [
    CodeModule,
    FormsModule,
    CommonModule,
    NgxEchartsModule,
    CompSettingBasicModule
  ],
  exports: [
    [...customComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...customComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompBusinessModule { }