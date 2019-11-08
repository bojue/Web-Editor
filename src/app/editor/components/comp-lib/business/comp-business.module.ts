import { ChartComponent } from "./chart/chart.component";
import { ListComponent } from "./list/list.component";
import { GaugeComponent } from "./gauge/gauge.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { NgxEchartsModule } from "ngx-echarts";
import { CompSettingBasicModule } from "../../comp-basic/comp-setting-basic.module";
import { CodeModule } from '../../../../core/code.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const customComp = [
    ChartComponent,
    ListComponent,
    GaugeComponent,
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